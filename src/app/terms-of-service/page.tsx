import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service governing the use of the SSPS website and the provision of oilfield services by Seven Star Petroleum Services LLC, incorporated and operating in the Sultanate of Oman.",
  alternates: { canonical: "https://ssps.om/terms-of-service" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "1 April 2026";
const CONTACT_EMAIL = "legal@ssps.om";
const COMPANY_FULL = "Seven Star Petroleum Services LLC";
const COMPANY_SHORT = "SSPS";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          By accessing or using the website located at{" "}
          <strong>ssps.om</strong> (the &#8220;<strong>Website</strong>&#8221;), or by
          engaging {COMPANY_FULL} (&#8220;{COMPANY_SHORT}&#8221;, &#8220;we&#8221;, &#8220;our&#8221;, or &#8220;us&#8221;) for
          any oilfield or related services, you (&#8220;<strong>User</strong>&#8221;,
          &#8220;Client&#8221;, &#8220;you&#8221;, or &#8220;your&#8221;) unconditionally agree to be bound by
          these Terms of Service (&#8220;<strong>Terms</strong>&#8221;) and all applicable
          laws and regulations.
        </p>
        <p>
          If you do not agree to these Terms in their entirety, you must
          immediately cease use of this Website and must not engage{" "}
          {COMPANY_SHORT} for services.
        </p>
        <p>
          These Terms apply to all visitors, clients, prospective clients,
          suppliers, contractors, and any other persons who access or use this
          Website or engage in any commercial dealings with {COMPANY_SHORT}.
          Commercial service agreements entered into separately with{" "}
          {COMPANY_SHORT} shall take precedence over these Terms to the extent
          of any conflict.
        </p>
      </>
    ),
  },
  {
    id: "company",
    title: "2. Company Description",
    content: (
      <>
        <p>
          {COMPANY_FULL} is a limited liability company duly incorporated and
          registered in the Sultanate of Oman. We operate as a full-spectrum
          oilfield services provider, delivering drilling services, rig
          component trading and supply, operations and maintenance, electrical
          and instrumentation engineering, and pipeline construction across the
          Sultanate of Oman.
        </p>
        <p>
          The Website is provided solely for informational and commercial
          engagement purposes. Nothing on the Website constitutes a binding
          offer, guarantee, or warranty of service availability, pricing, or
          performance unless confirmed in a signed written agreement.
        </p>
      </>
    ),
  },
  {
    id: "website-use",
    title: "3. Permitted & Prohibited Use of the Website",
    content: (
      <>
        <h4 className="mt-4 mb-3 text-[13px] font-semibold tracking-[0.15em] text-heading uppercase">
          3.1 — Permitted Use
        </h4>
        <p>
          You may access and use the Website solely for lawful purposes
          consistent with these Terms, including:
        </p>
        <ul>
          <li>Reviewing information about {COMPANY_SHORT} and our services.</li>
          <li>
            Submitting genuine business enquiries through our contact form.
          </li>
          <li>
            Downloading publicly available materials for your own internal
            reference.
          </li>
        </ul>

        <h4 className="mt-6 mb-3 text-[13px] font-semibold tracking-[0.15em] text-heading uppercase">
          3.2 — Prohibited Use
        </h4>
        <p>
          You must not use the Website for any purpose that is unlawful,
          harmful, or contrary to these Terms. Prohibited conduct includes,
          without limitation:
        </p>
        <ul>
          <li>
            Attempting to gain unauthorised access to any part of the Website,
            our servers, or our network infrastructure.
          </li>
          <li>
            Transmitting any malware, viruses, worms, Trojan horses, or any
            code designed to disrupt, damage, or limit the functionality of any
            software, hardware, or telecommunications equipment.
          </li>
          <li>
            Using the Website to harvest, collect, or compile data about other
            users without their consent.
          </li>
          <li>
            Systematically extracting data from the Website by automated means
            (scraping, crawling, or similar) without our prior written consent.
          </li>
          <li>
            Submitting false, misleading, or fraudulent information through any
            form or communication channel.
          </li>
          <li>
            Reproducing, duplicating, distributing, or commercially exploiting
            any content from the Website without our express written
            authorisation.
          </li>
          <li>
            Using the Website in any manner that could damage, disable,
            overburden, or impair our servers or networks, or interfere with
            any other party&#8217;s use and enjoyment of the Website.
          </li>
          <li>
            Impersonating {COMPANY_SHORT}, its employees, or any other person
            or entity.
          </li>
        </ul>
        <p>
          Violation of these prohibitions may result in immediate termination of
          access, civil liability, and/or referral to law enforcement
          authorities.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "4. Services & Commercial Engagements",
    content: (
      <>
        <p>
          All oilfield services provided by {COMPANY_SHORT} are governed by
          individual written agreements, purchase orders, or contracts entered
          into between {COMPANY_SHORT} and the Client (&#8220;<strong>Service
          Agreement</strong>&#8221;). Such Service Agreements shall include, but are
          not limited to, the following governing terms:
        </p>
        <ul>
          <li>
            <strong>Scope of Work:</strong> All service engagements must have a
            mutually agreed written scope of work defining deliverables,
            milestones, specifications, and acceptance criteria.
          </li>
          <li>
            <strong>Quotations & Pricing:</strong> All quotations issued by{" "}
            {COMPANY_SHORT} are valid for the period specified therein (typically
            30 calendar days from issue) and are subject to change without
            notice thereafter. Prices are exclusive of applicable taxes unless
            expressly stated.
          </li>
          <li>
            <strong>Payment Terms:</strong> Payment terms shall be as specified
            in the applicable Service Agreement. In the absence of specific
            terms, payment is due within 30 days of invoice date. Late payment
            shall accrue interest at the rate permissible under Omani commercial
            law.
          </li>
          <li>
            <strong>Variation Orders:</strong> Any change to the agreed scope of
            work must be documented in a written variation order signed by
            authorised representatives of both parties before {COMPANY_SHORT}{" "}
            is obligated to perform additional or modified work.
          </li>
          <li>
            <strong>Client Obligations:</strong> The Client shall provide all
            information, access, permits, and resources reasonably required for{" "}
            {COMPANY_SHORT} to perform the services safely and on schedule.
            Delays caused by the Client&#8217;s failure to meet these obligations shall
            not constitute a breach by {COMPANY_SHORT}.
          </li>
          <li>
            <strong>HSE Requirements:</strong> All operations shall be conducted
            in strict compliance with applicable HSE laws, regulations, and
            operator-specific HSE management systems. {COMPANY_SHORT} reserves
            the right to halt operations where an imminent safety risk is
            identified, without liability to the Client.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "5. Intellectual Property",
    content: (
      <>
        <p>
          All content on this Website — including but not limited to text,
          graphics, logos, images, video, audio, technical data, and software —
          is the exclusive property of {COMPANY_FULL} or its licensors and is
          protected by the intellectual property laws of the Sultanate of Oman
          and applicable international conventions.
        </p>
        <p>
          No content from this Website may be copied, reproduced, republished,
          uploaded, posted, publicly displayed, encoded, translated, transmitted,
          or distributed in any way to any other computer, server, website, or
          other medium for publication or distribution, or for any commercial
          enterprise, without the prior express written consent of{" "}
          {COMPANY_SHORT}.
        </p>
        <p>
          The {COMPANY_SHORT} name, logo, and all related names, logos, product
          and service names, designs, and slogans are trademarks of{" "}
          {COMPANY_FULL}. You must not use such marks without our prior written
          permission.
        </p>
        <p>
          Any technical reports, drawings, designs, or specifications prepared
          by {COMPANY_SHORT} in connection with a service engagement remain the
          intellectual property of {COMPANY_SHORT} unless expressly transferred
          in writing within a Service Agreement.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "6. Confidentiality",
    content: (
      <>
        <p>
          In the course of business dealings with {COMPANY_SHORT}, both parties
          may receive or have access to Confidential Information of the other.
          For the purposes of these Terms, &#8220;<strong>Confidential
          Information</strong>&#8221; means any non-public technical, commercial,
          operational, or financial information disclosed by one party to the
          other, whether orally, in writing, electronically, or by any other
          means.
        </p>
        <p>Each party agrees to:</p>
        <ul>
          <li>
            Hold all Confidential Information of the other party in strict
            confidence using at least the same degree of care used to protect
            its own confidential information, but no less than reasonable care.
          </li>
          <li>
            Not disclose Confidential Information to any third party without
            the prior written consent of the disclosing party, except to
            employees, subcontractors, or professional advisors who have a
            need to know and are bound by equivalent confidentiality
            obligations.
          </li>
          <li>
            Not use Confidential Information for any purpose other than to
            evaluate or perform the specific commercial engagement for which it
            was disclosed.
          </li>
        </ul>
        <p>
          Confidentiality obligations shall survive the termination of any
          commercial relationship for a period of{" "}
          <strong>five (5) years</strong>, unless a specific Service Agreement
          provides for a longer period.
        </p>
        <p>
          These obligations do not apply to information that: (a) is or becomes
          publicly known through no fault of the receiving party; (b) was
          independently developed by the receiving party without reference to
          the Confidential Information; or (c) must be disclosed by law or
          court order, provided the disclosing party is given prompt prior
          written notice.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    title: "7. Disclaimer of Warranties",
    content: (
      <>
        <p>
          The Website and all content therein are provided on an{" "}
          <strong>&#8220;as is&#8221; and &#8220;as available&#8221; basis</strong>, without any
          representation, warranty, or guarantee of any kind, express, implied,
          or statutory, including but not limited to warranties of
          merchantability, fitness for a particular purpose, accuracy,
          completeness, or non-infringement.
        </p>
        <p>
          {COMPANY_SHORT} does not warrant that:
        </p>
        <ul>
          <li>
            The Website will be available continuously, uninterrupted, or
            error-free.
          </li>
          <li>
            Any errors or defects in the Website will be corrected.
          </li>
          <li>
            The Website or its servers are free from viruses or other harmful
            components.
          </li>
          <li>
            Information published on the Website is complete, accurate,
            current, or reliable for any specific purpose.
          </li>
        </ul>
        <p>
          Content on the Website is provided for general informational purposes
          only and does not constitute professional, technical, legal, or
          financial advice. You should seek independent professional advice
          before acting on any information obtained from this Website.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "8. Limitation of Liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by the laws of the Sultanate of Oman:
        </p>
        <ul>
          <li>
            {COMPANY_SHORT} shall not be liable for any{" "}
            <strong>
              indirect, incidental, special, consequential, punitive, or
              exemplary damages
            </strong>{" "}
            — including loss of profits, loss of revenue, loss of data, loss of
            goodwill, business interruption, or cost of substitute services —
            arising from your use of or inability to use the Website, even if{" "}
            {COMPANY_SHORT} has been advised of the possibility of such damages.
          </li>
          <li>
            {COMPANY_SHORT}&#8217;s total aggregate liability to you for direct
            damages arising from your use of the Website shall not exceed{" "}
            <strong>OMR 500 (five hundred Omani Rials)</strong>.
          </li>
          <li>
            In respect of service engagements governed by a Service Agreement,
            liability shall be limited as expressly set out in that agreement.
            In the absence of any express cap, {COMPANY_SHORT}&#8217;s liability in
            respect of any single claim or series of related claims shall not
            exceed the fees paid by the Client for the specific services giving
            rise to the claim in the twelve (12) months preceding the incident.
          </li>
        </ul>
        <p>
          Nothing in these Terms excludes or limits our liability for: (a)
          death or personal injury caused by our negligence; (b) fraud or
          fraudulent misrepresentation; or (c) any liability that cannot be
          excluded or limited by applicable Omani law.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    title: "9. Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify, defend, and hold harmless {COMPANY_FULL}, its
          directors, officers, employees, agents, contractors, licensors, and
          successors from and against any and all claims, liabilities, damages,
          losses, costs, and expenses (including reasonable legal fees) arising
          out of or in connection with:
        </p>
        <ul>
          <li>Your use of the Website in violation of these Terms.</li>
          <li>
            Any information you submit through the Website that is false,
            misleading, or otherwise causes harm to {COMPANY_SHORT} or any
            third party.
          </li>
          <li>
            Your infringement of any third-party intellectual property rights.
          </li>
          <li>
            Your breach of any applicable law, regulation, or rule.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "force-majeure",
    title: "10. Force Majeure",
    content: (
      <p>
        {COMPANY_SHORT} shall not be liable for any failure or delay in
        performing its obligations — whether under these Terms or under any
        Service Agreement — where such failure or delay arises from causes
        beyond its reasonable control, including but not limited to: acts of
        God, war, armed conflict, terrorism, civil unrest, government sanctions,
        embargo, epidemic or pandemic, fire, flood, earthquake, severe weather,
        labour disputes, or failure of third-party infrastructure. Upon the
        occurrence of a force majeure event, {COMPANY_SHORT} shall notify the
        affected party as soon as reasonably practicable and shall use
        reasonable endeavours to mitigate the impact and resume performance as
        soon as the force majeure event ceases.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "11. Third-Party Links & Content",
    content: (
      <p>
        The Website may contain hyperlinks to third-party websites for
        convenience only. {COMPANY_SHORT} does not endorse, control, or accept
        responsibility for the content, privacy practices, or terms of use of
        any third-party website. The inclusion of any link does not imply
        endorsement by {COMPANY_SHORT}. You access third-party websites
        entirely at your own risk.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "12. Modifications to Terms & Website",
    content: (
      <>
        <p>
          {COMPANY_SHORT} reserves the right, at its sole discretion, to modify
          or replace these Terms at any time. The Effective Date at the top of
          this document will be updated upon any revision. It is your
          responsibility to review these Terms periodically.
        </p>
        <p>
          Your continued use of the Website after any change in these Terms will
          constitute your acceptance of such changes. If you do not agree to the
          revised Terms, you must discontinue your use of the Website.
        </p>
        <p>
          {COMPANY_SHORT} also reserves the right to modify, suspend, or
          discontinue the Website (or any part thereof) at any time, without
          notice and without liability to you.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "13. Privacy",
    content: (
      <p>
        Your use of the Website is also governed by our{" "}
        <Link href="/privacy-policy" className="text-accent hover:underline">
          Privacy Policy
        </Link>
        , which is incorporated into these Terms by this reference. By using
        the Website, you consent to the collection and use of your information
        as described in our Privacy Policy.
      </p>
    ),
  },
  {
    id: "waiver-severability",
    title: "14. Waiver & Severability",
    content: (
      <>
        <p>
          No waiver by {COMPANY_SHORT} of any breach of these Terms shall be
          considered a waiver of any subsequent breach of the same or any other
          provision. The failure of {COMPANY_SHORT} to exercise or enforce any
          right or provision of these Terms shall not constitute a waiver of
          such right or provision.
        </p>
        <p>
          If any provision of these Terms is held by a court of competent
          jurisdiction to be invalid, illegal, or unenforceable, that provision
          shall be modified to the minimum extent necessary to make it
          enforceable, and the remaining provisions shall continue in full force
          and effect.
        </p>
      </>
    ),
  },
  {
    id: "entire-agreement",
    title: "15. Entire Agreement",
    content: (
      <p>
        These Terms, together with our Privacy Policy and any separately
        executed Service Agreement, constitute the entire agreement between you
        and {COMPANY_SHORT} with respect to the Website and supersede all prior
        and contemporaneous understandings, agreements, representations, and
        warranties, both written and oral, regarding the Website.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "16. Governing Law & Dispute Resolution",
    content: (
      <>
        <p>
          These Terms and any dispute or claim arising out of or in connection
          with them or their subject matter or formation (including
          non-contractual disputes or claims) shall be governed by and construed
          in accordance with the laws of the{" "}
          <strong>Sultanate of Oman</strong>.
        </p>
        <p>
          The parties shall first attempt to resolve any dispute through good
          faith negotiation. In the event that a dispute cannot be resolved
          within <strong>30 days</strong> of written notice from one party to
          the other, the dispute shall be submitted to the exclusive jurisdiction
          of the competent courts of{" "}
          <strong>Muscat, Sultanate of Oman</strong>.
        </p>
        <p>
          Nothing in this clause prevents either party from seeking urgent
          injunctive or other interim relief from a court of competent
          jurisdiction.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "17. Contact Us",
    content: (
      <>
        <p>
          For any legal enquiries, notices, or questions regarding these Terms
          of Service, please contact:
        </p>
        <div className="my-4 border-l-2 border-accent pl-5 space-y-1 text-[14px]">
          <p><strong>{COMPANY_FULL}</strong></p>
          <p>Attention: Legal Department</p>
          <p>Muscat, Sultanate of Oman</p>
          <p>
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <p>
          Notices served by email are deemed received on the next business day
          following transmission, provided no delivery failure notification is
          received.
        </p>
      </>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <div className="bg-primary px-6 pb-16 pt-32 lg:pb-20 lg:pt-40">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-accent" />
              <span className="text-[10px] font-semibold tracking-[0.35em] text-accent uppercase">
                Legal Document
              </span>
            </div>
            <h1 className="text-4xl font-extralight tracking-tight text-white lg:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-[14px] text-white/40">
              Effective Date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Governing Law: Sultanate of Oman
            </p>
          </div>
        </div>

        {/* ── Notice bar ── */}
        <div className="border-b border-border bg-accent-subtle px-6 py-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-[13px] text-body">
              <strong>Please read these Terms carefully.</strong> By accessing this Website or engaging{" "}
              {COMPANY_FULL} for services, you agree to be legally bound by these Terms of Service and all
              applicable laws of the Sultanate of Oman.
            </p>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="px-6 py-16 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[220px_1fr] lg:items-start">

            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-1">
                <p className="mb-4 text-[10px] font-semibold tracking-[0.25em] text-muted uppercase">
                  Contents
                </p>
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block py-1.5 text-[12px] text-muted transition-colors duration-200 hover:text-accent"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </aside>

            {/* Body */}
            <article className="space-y-12">
              {sections.map((s) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-28 border-b border-border pb-12 last:border-0"
                >
                  <h2 className="mb-5 text-[1.1rem] font-semibold tracking-tight text-heading">
                    {s.title}
                  </h2>
                  <div className="space-y-4 text-[14px] leading-[1.85] text-body [&_a]:text-accent [&_a]:underline [&_li]:mb-3 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-heading [&_ul]:ml-4 [&_ul]:list-disc [&_ul]:space-y-1">
                    {s.content}
                  </div>
                </section>
              ))}

              {/* Back link */}
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-[12px] font-medium tracking-wide text-accent hover:underline"
                >
                  ← Return to homepage
                </Link>
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
