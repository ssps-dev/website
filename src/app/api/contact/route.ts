function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, product, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return json({ error: "Name, email and message are required." }, 400);
    }

    const NOTION_API_KEY = process.env.NOTION_API_KEY;
    const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

    if (!NOTION_API_KEY || !NOTION_DATABASE_ID) {
      console.error("Missing Notion environment variables");
      return json({ error: "Server configuration error." }, 500);
    }

    const notionHeaders = {
      Authorization: `Bearer ${NOTION_API_KEY}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    };

    const buildPayload = (includeExtras: boolean) => ({
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [{ text: { content: name } }],
        },
        ...(includeExtras && {
          "Submitted At": {
            date: { start: new Date().toISOString() },
          },
          Status: {
            select: { name: "Open" },
          },
        }),
      },
      children: [
        {
          object: "block",
          type: "heading_3",
          heading_3: {
            rich_text: [{ text: { content: "Contact Details" } }],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "Email: " }, annotations: { bold: true } },
              { text: { content: email } },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "Company: " }, annotations: { bold: true } },
              { text: { content: company || "—" } },
            ],
          },
        },
        {
          object: "block",
          type: "bulleted_list_item",
          bulleted_list_item: {
            rich_text: [
              { text: { content: "Product Interest: " }, annotations: { bold: true } },
              { text: { content: product || "—" } },
            ],
          },
        },
        {
          object: "block",
          type: "divider",
          divider: {},
        },
        {
          object: "block",
          type: "heading_3",
          heading_3: {
            rich_text: [{ text: { content: "Message" } }],
          },
        },
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [{ text: { content: message } }],
          },
        },
      ],
    });

    // Try with Status + Submitted At; fall back without them if columns don't exist yet
    let res = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: notionHeaders,
      body: JSON.stringify(buildPayload(true)),
    });

    if (!res.ok) {
      const err = (await res.json()) as { code?: string };
      if (err.code === "validation_error") {
        // Columns not yet added to the DB — retry without extras
        res = await fetch("https://api.notion.com/v1/pages", {
          method: "POST",
          headers: notionHeaders,
          body: JSON.stringify(buildPayload(false)),
        });
      }
      if (!res.ok) {
        const finalErr = await res.json();
        console.error("Notion API error:", JSON.stringify(finalErr));
        return json({ error: "Failed to save inquiry.", detail: finalErr }, 500);
      }
    }

    return json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Contact form error:", message);
    return json({ error: "Something went wrong.", detail: message }, 500);
  }
}
