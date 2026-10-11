import { TermsDocumentData, TocItem } from "../types/terms.types";

export const privacyData: TermsDocumentData = {
  metadata: {
    title: "Privacy Policy",
    subtitle:
      "This Privacy Policy outlines how Zuhal Content Studio collects, protects, uses, and handles your personal information and workspace data.",
    effectiveDate: "October 10, 2026",
    lastUpdated: "October 10, 2026",
    estimatedReadingTime: "7 min read",
    version: "1.0",
    companyName: "Zuhal Content Studio",
    legalEntity: "[Zuhal Content Studio Legal Entity / PT Zuhal Media Kreasi]",
    contactEmail: "privacy@zuhalcontentstudio.com",
    jurisdiction: "[Applicable Jurisdiction / Republic of Indonesia]",
  },
  sections: [
    {
      id: "privacy-overview",
      number: "1",
      title: "Introduction and Scope",
      summary:
        "Your privacy and the security of your creative work are fundamental to Zuhal Content Studio.",
      paragraphs: [
        "Zuhal Content Studio (\"we\", \"us\", or \"our\") respects your privacy and is committed to protecting your personal data and confidential research materials. This Privacy Policy explains our practices regarding the collection, use, disclosure, and protection of information when you access or use our content management platform and associated services.",
        "This policy applies to all visitors, registered users, creators, and team members who interact with the Platform. By using Zuhal Content Studio, you acknowledge that your information will be processed in accordance with this Privacy Policy.",
      ],
      callout: {
        type: "info",
        title: "Content Confidentiality Commitment",
        content:
          "We treat your research notes, creative briefs, drafts, and experiments as strictly private to your workspace. We do not sell your personal data or your content to third parties.",
      },
    },
    {
      id: "information-we-collect",
      number: "2",
      title: "Information We Collect",
      paragraphs: [
        "We collect information in three ways: information you provide directly, information collected automatically through platform usage, and information from third-party integrations.",
      ],
      subsections: [
        {
          id: "information-you-provide",
          number: "2.1",
          title: "Information You Provide Directly",
          paragraphs: [
            "When you register for an account, configure workspace settings, or create content, you may provide:",
          ],
          listItems: [
            "Account Identifiers: Email address, username, password hash, and profile display name.",
            "Workspace Content: Creative briefs, research notes, article drafts, project names, and experiment parameters.",
            "Communication Data: Feedback, support tickets, and correspondence with our team.",
          ],
        },
        {
          id: "automated-telemetry",
          number: "2.2",
          title: "Automatically Collected Technical Data",
          paragraphs: [
            "When you navigate the Platform, our servers automatically log technical metadata necessary to deliver and protect the service:",
          ],
          listItems: [
            "Device and browser characteristics, operating system, and language settings.",
            "IP address, approximate location, and network connection characteristics.",
            "Usage metrics, feature interaction timestamps, page loading times, and error traces.",
          ],
        },
        {
          id: "cookies-and-storage",
          number: "2.3",
          title: "Cookies and Local Storage",
          paragraphs: [
            "We use essential session cookies and local storage tokens to maintain your authentication state across requests and persist UI preferences (such as light/dark mode selection).",
          ],
        },
      ],
    },
    {
      id: "how-we-use-information",
      number: "3",
      title: "How We Use Your Information",
      paragraphs: [
        "We process your data only for legitimate, transparent operational purposes:",
      ],
      listItems: [
        "Providing the Service: Authenticating your identity, syncing research data across devices, and maintaining project workspaces.",
        "Platform Performance & Reliability: Monitoring system availability, diagnosing bugs, and optimizing page load speeds.",
        "Account Security: Detecting unauthorized logins, preventing fraudulent actions, and mitigating security incidents.",
        "Communication: Delivering essential transactional updates, security alerts, and administrative messages.",
        "Legal Compliance: Complying with statutory obligations and responding to verified legal demands.",
      ],
      callout: {
        type: "note",
        title: "No Artificial Intelligence Scraping of Private Work",
        content:
          "Your unpublished drafts, research files, and creative briefs are not used to train public generative AI foundation models without your explicit opt-in consent.",
      },
    },
    {
      id: "third-party-processors",
      number: "4",
      title: "Third-Party Service Providers and Sub-Processors",
      paragraphs: [
        "We partner with reputable infrastructure providers who process data strictly on our behalf under data protection agreements:",
      ],
      listItems: [
        "Supabase: Provides secure user authentication, cookie-based session verification, and managed database hosting.",
        "ImageKit: Handles media delivery, image optimization, and CDN delivery for uploaded graphic assets.",
        "Vercel Analytics: Collects privacy-friendly, cookieless telemetry regarding web vitals and overall platform responsiveness.",
      ],
      callout: {
        type: "info",
        title: "Sub-processor Vetting",
        content:
          "All sub-processors are required to implement robust technical security standards and process data solely to execute the services requested by Zuhal Content Studio.",
      },
    },
    {
      id: "data-security",
      number: "5",
      title: "Data Security and Safeguards",
      paragraphs: [
        "We implement industry-standard administrative, physical, and technical controls to protect your data:",
      ],
      listItems: [
        "Encryption in transit via modern TLS (Transport Layer Security) protocols.",
        "Encrypted database storage and secure credential hashing algorithms.",
        "Role-based access controls limiting internal system access to authorized personnel only.",
        "Periodic automated dependency vulnerability scans and security patches.",
      ],
      callout: {
        type: "warning",
        title: "Shared Security Responsibility",
        content:
          "While we maintain strict safeguards, no Internet transmission is 100% impenetrable. We encourage you to use complex passwords and keep your credentials confidential.",
      },
    },
    {
      id: "your-privacy-rights",
      number: "6",
      title: "Your Rights and Privacy Choices",
      paragraphs: [
        "Regardless of your location, we believe you should have full control over your personal and creative data. You have the right to:",
      ],
      listItems: [
        "Access and Portability: View and export your research content, briefs, and profile information.",
        "Correction & Rectification: Update or correct inaccurate personal details directly in your account settings.",
        "Deletion (Right to be Forgotten): Request permanent deletion of your account and all associated workspace data.",
        "Withdrawal of Consent: Revoke previously granted consent for non-essential communications or telemetry.",
      ],
      subsections: [
        {
          id: "exercising-rights",
          number: "6.1",
          title: "How to Exercise Your Rights",
          paragraphs: [
            "To submit a data access, export, or deletion request, email our compliance team at privacy@zuhalcontentstudio.com. We verify requester identity and respond within thirty (30) days.",
          ],
        },
      ],
    },
    {
      id: "data-retention",
      number: "7",
      title: "Data Retention",
      paragraphs: [
        "We retain your personal data and workspace content for as long as your account remains active or as required to fulfill the purposes set out in this policy.",
        "When an account is deleted by the user, we initiate permanent deletion or anonymization of your data within 30 days, except where longer retention is mandated by law (e.g., accounting or legal compliance records).",
      ],
    },
    {
      id: "international-transfers",
      number: "8",
      title: "International Data Transfers",
      paragraphs: [
        "Our cloud infrastructure and sub-processors may operate servers located in various jurisdictions. Where personal data is transferred across borders, we ensure adequate data protection safeguards, including standard contractual clauses and security compliance certifications.",
      ],
    },
    {
      id: "childrens-privacy",
      number: "9",
      title: "Children's Privacy",
      paragraphs: [
        "Zuhal Content Studio is designed for professional creators, researchers, and marketing teams. The Platform is not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors.",
        "If you become aware that a child has provided us with personal information without parental consent, please contact us immediately, and we will promptly delete such data.",
      ],
    },
    {
      id: "changes-to-policy",
      number: "10",
      title: "Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy periodically to reflect technological, operational, or legal developments. When updates occur, we will adjust the \"Last updated\" date at the top of this page.",
        "For significant updates that materially alter how we handle your data, we will provide prominent notice via in-app banner or direct email communication prior to the changes taking effect.",
      ],
    },
    {
      id: "privacy-contact",
      number: "11",
      title: "Contact and Data Inquiries",
      paragraphs: [
        "If you have questions, feedback, or data privacy requests, our team is ready to assist:",
      ],
      listItems: [
        "Platform: Zuhal Content Studio",
        "Data Protection Contact: privacy@zuhalcontentstudio.com",
        "Legal & Regulatory Team: legal@zuhalcontentstudio.com",
        "Entity: [Zuhal Content Studio Legal Entity / PT Zuhal Media Kreasi]",
        "Location: [Corporate Office Address Placeholder, Jakarta, Indonesia]",
      ],
    },
  ],
};
