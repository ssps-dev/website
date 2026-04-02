import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Seven Star Petroleum Services LLC (SSPS) — how we collect, use, store, and protect your personal data in compliance with the Sultanate of Oman's Personal Data Protection Law (Royal Decree No. 6/2022).",
  alternates: { canonical: "https://ssps.om/privacy-policy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "1 April 2026";
const CONTACT_EMAIL = "privacy@ssps.om";
const COMPANY_FULL = "Seven Star Petroleum Services LLC";
const COMPANY_SHORT = "SSPS";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "overview",
    title: "1. Overview & Scope",
    content: (
      <>
        <p>
          {COMPANY_FULL} (&quot;{COMPANY_SHORT}&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a limited
          liability company registered and operating in the Sultanate of Oman.
          We are the Data Controller in respect of personal data collected
          through this website (<strong>ssps.om</strong>) and through our
          business enquiry and service operations.
        </p>
        <p>
          This Privacy Policy explains what personal data we collect, why we
          collect it, how we use and protect it, how long we retain it, and what
          rights you have under the{" "}
          <strong>
            Sultanate of Oman Personal Data Protection Law (PDPL), Royal Decree
            No. 6/2022
          </strong>{" "}
          and its implementing regulations.
        </p>
        <p>
          This Policy applies to all visitors, prospective clients, existing
          clients, suppliers, contractors, job applicants, and other individuals
          (&quot;<strong>Data Subjects</strong>&quot;) whose personal data we process in
          connection with our website and business activities.
        </p>
        <p>
          By accessing our website or submitting information to us, you
          acknowledge that you have read and understood this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "data-controller",
    title: "2. Data Controller Identity",
    content: (
      <>
        <p>The Data Controller responsible for your personal data is:</p>
        <div className="my-4 border-l-2 border-accent pl-5 space-y-1 text-[14px]">
          <p><strong>{COMPANY_FULL}</strong></p>
          <p>Muscat, Sultanate of Oman</p>
          <p>
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <p>
          For all privacy-related enquiries, data subject access requests, or
          complaints, please contact our designated Privacy Officer at the email
          address above.
        </p>
      </>
    ),
  },
  {
    id: "data-collected",
    title: "3. Personal Data We Collect",
    content: (
      <>
        <p>
          We collect personal data in the following categories, limited to what
          is necessary for the stated purpose:
        </p>

        <h4 className="mt-6 mb-3 text-[13px] font-semibold tracking-[0.15em] text-heading uppercase">
          3.1 — Data You Provide Directly
        </h4>
        <ul>
          <li>
            <strong>Contact Form Submissions:</strong> Full name, company name,
            email address, telephone number, and the content of your enquiry or
            project description.
          </li>
          <li>
            <strong>Business Communications:</strong> Email correspondence,
            meeting notes, and contractual documentation shared during
            pre-contractual and contractual dealings.
          </li>
          <li>
            <strong>Supplier & Vendor Registration:</strong> Company details,
            authorised representative identity, tax identification numbers,
            banking information, and compliance certifications where required.
          </li>
          <li>
            <strong>Employment Applications:</strong> Curriculum vitae, academic
            and professional qualifications, work history, reference contact
            details, and identity documents submitted when applying for
            positions with SSPS.
          </li>
        </ul>

        <h4 className="mt-6 mb-3 text-[13px] font-semibold tracking-[0.15em] text-heading uppercase">
          3.2 — Data Collected Automatically
        </h4>
        <ul>
          <li>
            <strong>Technical Data:</strong> IP address, browser type and
            version, operating system, device type, referring URL, and pages
            visited on our website.
          </li>
          <li>
            <strong>Usage Data:</strong> Time and date of visits, duration of
            page views, clickstream data, and aggregate behavioural analytics.
          </li>
          <li>
            <strong>Cookies & Similar Technologies:</strong> See Section 9
            (Cookie Policy) for full details.
          </li>
        </ul>

        <h4 className="mt-6 mb-3 text-[13px] font-semibold tracking-[0.15em] text-heading uppercase">
          3.3 — Sensitive Personal Data
        </h4>
        <p>
          We do not intentionally collect sensitive personal data (including
          health data, biometric data, or racial/ethnic origin) through this
          website. If such data is required in a specific operational or
          employment context, it will only be processed with your explicit
          written consent or as required by law, and will be subject to
          heightened protection measures.
        </p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "4. Legal Basis for Processing",
    content: (
      <>
        <p>
          Under the Oman PDPL, we must have a lawful basis for processing your
          personal data. We rely on the following bases:
        </p>
        <ul>
          <li>
            <strong>Consent (Article 12 PDPL):</strong> Where you have
            voluntarily submitted information via our contact form or newsletter
            subscription, and where non-essential cookies require your
            agreement.
          </li>
          <li>
            <strong>Contractual Necessity (Article 12 PDPL):</strong> Where
            processing is necessary to enter into or perform a contract with
            you, including pre-contractual steps taken at your request (e.g.,
            evaluating a service proposal or tender response).
          </li>
          <li>
            <strong>Legal Obligation (Article 12 PDPL):</strong> Where we are
            required to process your data to comply with Omani law, including
            tax, anti-money laundering, HSE reporting, or regulatory
            requirements.
          </li>
          <li>
            <strong>Legitimate Interests (Article 12 PDPL):</strong> Where
            processing is necessary for our legitimate business interests,
            provided these are not overridden by your rights and freedoms —
            including security monitoring, fraud prevention, and improving our
            website.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "purpose",
    title: "5. How We Use Your Personal Data",
    content: (
      <>
        <p>We use your personal data strictly for the following purposes:</p>
        <ul>
          <li>
            <strong>Responding to Enquiries:</strong> To process and respond to
            service enquiries, requests for proposals, or project discussions
            submitted through our website or via direct communication.
          </li>
          <li>
            <strong>Service Delivery & Contract Performance:</strong> To manage
            ongoing commercial relationships, issue quotations, coordinate
            operations, and fulfil contractual obligations.
          </li>
          <li>
            <strong>Vendor & Supplier Management:</strong> To onboard, evaluate,
            and manage our supply chain, including compliance and due diligence
            checks.
          </li>
          <li>
            <strong>Recruitment:</strong> To evaluate job applications, arrange
            interviews, and maintain talent pools for future openings (only with
            your consent).
          </li>
          <li>
            <strong>Website Operation & Security:</strong> To maintain the
            functionality and security of our website, detect and prevent
            fraudulent or unauthorised activity, and perform analytics to
            improve user experience.
          </li>
          <li>
            <strong>Legal & Regulatory Compliance:</strong> To meet our
            obligations under Omani law, including tax filings, HSE reporting,
            and responses to lawful authority requests.
          </li>
          <li>
            <strong>Business Communications:</strong> To send relevant service
            updates, safety advisories, or company announcements where you have
            opted in or have an existing relationship with us.
          </li>
        </ul>
        <p>
          We will not use your personal data for automated decision-making or
          profiling that produces legal or similarly significant effects without
          your explicit consent.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "6. Disclosure & Third-Party Sharing",
    content: (
      <>
        <p>
          We do not sell, rent, or trade your personal data. We may disclose
          personal data only in the following limited circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> Third-party vendors who provide
            IT infrastructure, website hosting, email services, analytics, or
            CRM systems on our behalf, bound by data processing agreements
            consistent with PDPL requirements.
          </li>
          <li>
            <strong>Professional Advisors:</strong> Legal, financial, insurance,
            and audit professionals engaged in the ordinary course of business,
            who are bound by professional confidentiality obligations.
          </li>
          <li>
            <strong>Regulatory & Government Authorities:</strong> Where required
            by applicable Omani law or by lawful order of a competent authority,
            court, or government body (e.g., Ministry of Energy and Minerals,
            Royal Oman Police, Oman Tax Authority).
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger,
            acquisition, joint venture, restructuring, or sale of assets
            involving {COMPANY_SHORT}, subject to the receiving party maintaining
            equivalent data protection standards.
          </li>
          <li>
            <strong>Group Entities:</strong> Where applicable, to affiliated
            entities within the {COMPANY_SHORT} group, strictly for the purposes
            described in this Policy.
          </li>
        </ul>
        <p>
          Any international transfer of personal data outside Oman will only
          occur where adequate safeguards are in place as required by the Oman
          PDPL and its implementing regulations.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "7. Data Retention",
    content: (
      <>
        <p>
          We retain personal data only for as long as necessary to fulfil the
          purpose for which it was collected, or as required by applicable law:
        </p>
        <ul>
          <li>
            <strong>Enquiry / Contact Form Data:</strong> Retained for up to{" "}
            <strong>2 years</strong> from the date of initial contact, unless a
            commercial relationship develops, in which case the contractual
            retention period applies.
          </li>
          <li>
            <strong>Contractual & Commercial Records:</strong> Retained for a
            minimum of <strong>10 years</strong> from contract termination, in
            accordance with Omani commercial and tax law.
          </li>
          <li>
            <strong>HSE & Operational Records:</strong> Retained per the
            requirements of applicable Omani HSE regulations and operator
            contracts, typically <strong>10–15 years</strong>.
          </li>
          <li>
            <strong>Recruitment Data:</strong> Retained for{" "}
            <strong>12 months</strong> after a recruitment process concludes for
            unsuccessful applicants, unless consent is given for longer
            retention in a talent pool.
          </li>
          <li>
            <strong>Website Technical Logs:</strong> Retained for up to{" "}
            <strong>12 months</strong> for security and troubleshooting
            purposes.
          </li>
          <li>
            <strong>Cookie Data:</strong> As specified in Section 9 below.
          </li>
        </ul>
        <p>
          Upon expiry of applicable retention periods, personal data is securely
          deleted or anonymised so it can no longer be associated with an
          identifiable individual.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "8. Your Rights Under the Oman PDPL",
    content: (
      <>
        <p>
          Subject to applicable law and certain limited exemptions, you have the
          following rights regarding your personal data:
        </p>
        <ul>
          <li>
            <strong>Right of Access:</strong> To obtain confirmation of whether
            we process your personal data and to receive a copy of that data.
          </li>
          <li>
            <strong>Right to Rectification:</strong> To have inaccurate or
            incomplete personal data corrected without undue delay.
          </li>
          <li>
            <strong>Right to Erasure:</strong> To request deletion of your
            personal data where it is no longer necessary, where consent has
            been withdrawn, or where processing is unlawful — subject to
            overriding legal retention obligations.
          </li>
          <li>
            <strong>Right to Restriction:</strong> To request that we limit the
            processing of your data in certain circumstances, such as while
            accuracy is contested.
          </li>
          <li>
            <strong>Right to Object:</strong> To object to processing based on
            legitimate interests, including direct marketing. Where you object to
            direct marketing, we will cease such processing immediately.
          </li>
          <li>
            <strong>Right to Withdraw Consent:</strong> Where processing is
            based on your consent, you may withdraw it at any time without
            affecting the lawfulness of processing prior to withdrawal.
          </li>
          <li>
            <strong>Right to Lodge a Complaint:</strong> You have the right to
            lodge a complaint with the competent supervisory authority in Oman as
            designated under the PDPL.
          </li>
        </ul>
        <p>
          To exercise any of these rights, submit a written request to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
            {CONTACT_EMAIL}
          </a>
          . We will respond within <strong>30 calendar days</strong> of receipt.
          We may request proof of identity before processing your request. We
          will not charge a fee for reasonable requests but reserve the right to
          charge a reasonable administrative fee for manifestly unfounded or
          excessive requests.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "9. Cookie Policy",
    content: (
      <>
        <p>
          Our website uses cookies and similar tracking technologies to operate
          correctly, analyse usage, and improve your experience.
        </p>

        <h4 className="mt-6 mb-3 text-[13px] font-semibold tracking-[0.15em] text-heading uppercase">
          9.1 — What Are Cookies?
        </h4>
        <p>
          Cookies are small text files placed on your device by websites you
          visit. They are widely used to make websites work efficiently and to
          provide information to website operators.
        </p>

        <h4 className="mt-6 mb-3 text-[13px] font-semibold tracking-[0.15em] text-heading uppercase">
          9.2 — Categories of Cookies We Use
        </h4>
        <ul>
          <li>
            <strong>Strictly Necessary Cookies:</strong> Essential for the
            website to function. These cannot be disabled. They do not store any
            personally identifiable information beyond session identifiers.
          </li>
          <li>
            <strong>Performance & Analytics Cookies:</strong> Used to understand
            how visitors interact with our website (e.g., pages visited,
            traffic sources). Data is aggregated and anonymised. These require
            your consent.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Enable enhanced functionality
            and personalisation such as remembering your preferences. These
            require your consent.
          </li>
        </ul>
        <p>
          We do not use advertising or tracking cookies for third-party
          remarketing purposes.
        </p>

        <h4 className="mt-6 mb-3 text-[13px] font-semibold tracking-[0.15em] text-heading uppercase">
          9.3 — Managing Cookies
        </h4>
        <p>
          You can control and/or delete cookies through your browser settings.
          For instructions, visit{" "}
          <a
            href="https://www.aboutcookies.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            aboutcookies.org
          </a>
          . Disabling strictly necessary cookies may impair website
          functionality.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "10. Security Measures",
    content: (
      <>
        <p>
          We implement appropriate technical and organisational measures to
          protect personal data against unauthorised access, disclosure,
          alteration, accidental loss, or destruction. These measures include:
        </p>
        <ul>
          <li>
            Encrypted data transmission using TLS (Transport Layer Security)
            for all data exchanged between your browser and our website.
          </li>
          <li>
            Access control systems ensuring that personal data is accessible
            only to authorised personnel with a business need to know.
          </li>
          <li>
            Regular internal reviews of data handling practices, access logs,
            and security configurations.
          </li>
          <li>
            Physical and logical security controls for IT infrastructure holding
            personal data.
          </li>
          <li>
            Contractual obligations imposed on all third-party processors to
            maintain appropriate security standards.
          </li>
        </ul>
        <p>
          Notwithstanding these measures, no method of Internet transmission or
          electronic storage is entirely secure. If you become aware of any
          potential vulnerability or have a security concern, please contact us
          immediately at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <p>
          In the event of a personal data breach that is likely to result in a
          risk to your rights and freedoms, we will notify you and the competent
          supervisory authority without undue delay, as required by the Oman
          PDPL.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    title: "11. Third-Party Links",
    content: (
      <p>
        Our website may contain links to third-party websites or services. This
        Privacy Policy applies solely to{" "}
        <strong>ssps.om</strong> and does not cover the privacy practices of any
        third-party site. We encourage you to review the privacy policies of any
        external websites you visit. We are not responsible for the content or
        privacy practices of such websites.
      </p>
    ),
  },
  {
    id: "children",
    title: "12. Children's Privacy",
    content: (
      <p>
        Our website and services are directed exclusively at businesses and
        professionals in the energy sector. We do not knowingly collect personal
        data from individuals under the age of 18. If we become aware that
        personal data of a minor has been collected without appropriate consent,
        we will take immediate steps to delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "13. Changes to This Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices, technology, legal requirements, or other factors.
          The &quot;Effective Date&quot; at the top of this page indicates when the current
          version was last revised.
        </p>
        <p>
          For material changes, we will take reasonable steps to notify you,
          which may include posting a prominent notice on our website prior to
          the change taking effect. Your continued use of our website after the
          effective date of any revision constitutes your acceptance of the
          updated Policy.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "14. Governing Law & Jurisdiction",
    content: (
      <p>
        This Privacy Policy is governed by and construed in accordance with the
        laws of the <strong>Sultanate of Oman</strong>, including the Personal
        Data Protection Law (Royal Decree No. 6/2022) and all implementing
        regulations. Any dispute arising from or relating to this Policy shall
        be subject to the exclusive jurisdiction of the competent courts of
        Muscat, Sultanate of Oman.
      </p>
    ),
  },
  {
    id: "contact",
    title: "15. Contact Us",
    content: (
      <>
        <p>
          For any questions, concerns, or requests relating to this Privacy
          Policy or the processing of your personal data, please contact our
          Privacy Officer:
        </p>
        <div className="my-4 border-l-2 border-accent pl-5 space-y-1 text-[14px]">
          <p><strong>{COMPANY_FULL}</strong></p>
          <p>Attention: Privacy Officer</p>
          <p>Muscat, Sultanate of Oman</p>
          <p>
            Email:{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <p>
          We are committed to resolving privacy concerns promptly and in good
          faith.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              <strong>Important:</strong> This Privacy Policy is a legally binding document. Please read it carefully. It describes how {COMPANY_FULL} collects and processes personal data in accordance with the Oman Personal Data Protection Law (Royal Decree No. 6/2022).
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
