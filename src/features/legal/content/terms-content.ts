import { TermsDocumentData, TocItem } from "../types/terms.types";

export const termsData: TermsDocumentData = {
  metadata: {
    title: "Terms and Conditions",
    subtitle:
      "Please read these terms carefully before accessing or using the Zuhal Content Studio workspace and services.",
    effectiveDate: "October 10, 2026",
    lastUpdated: "October 10, 2026",
    estimatedReadingTime: "9 min read",
    version: "2.4",
    companyName: "Zuhal Content Studio",
    legalEntity: "[Zuhal Content Studio Legal Entity / PT Zuhal Media Kreasi]",
    contactEmail: "legal@zuhalcontentstudio.com",
    jurisdiction: "[Applicable Jurisdiction / Republic of Indonesia]",
  },
  sections: [
    {
      id: "acceptance-of-terms",
      number: "1",
      title: "Introduction and Acceptance of Terms",
      summary:
        "By accessing or using Zuhal Content Studio, you enter into a binding agreement with us under these terms.",
      paragraphs: [
        "Welcome to Zuhal Content Studio (the \"Platform\", \"Service\", \"we\", \"us\", or \"our\"). Zuhal Content Studio provides a modern content operating system designed to facilitate research, creative brief generation, content ideation, editorial workflows, experimentation tracking, and performance measurement.",
        "These Terms and Conditions (\"Terms\") govern your access to and use of our web application, software, APIs, content, and related services. By registering for an account, accessing our site, or utilizing any feature of the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.",
        "If you are accepting these Terms on behalf of an organization, company, or other legal entity, you represent and warrant that you have full legal authority to bind that entity to these Terms. If you do not agree with any provision of these Terms, you must immediately discontinue your use of the Platform.",
      ],
      callout: {
        type: "note",
        title: "Agreement Notice",
        content:
          "Your access to the Platform constitutes an enforceable legal contract. Please retain a copy of these Terms for your records.",
      },
    },
    {
      id: "eligibility-and-registration",
      number: "2",
      title: "Eligibility and Account Registration",
      paragraphs: [
        "To access most features of Zuhal Content Studio, you must register for an authorized user account. By creating an account, you affirm that:",
      ],
      listItems: [
        "You are at least 18 years of age (or have reached the age of majority in your jurisdiction) and possess legal capacity to enter into binding agreements.",
        "All registration information you provide is accurate, current, complete, and truthful.",
        "You will maintain and promptly update your account details to keep them accurate and current.",
        "Your use of the Platform does not violate any applicable local, national, or international law or regulation.",
      ],
      subsections: [
        {
          id: "corporate-accounts",
          number: "2.1",
          title: "Corporate & Team Workspaces",
          paragraphs: [
            "When an account is created under an enterprise or team domain, the organization owns the workspace and retains administrative rights over member invitations, content access controls, and data retention policies.",
          ],
        },
      ],
    },
    {
      id: "account-security",
      number: "3",
      title: "Account Security and Responsibilities",
      paragraphs: [
        "You are solely responsible for maintaining the confidentiality of your login credentials, including passwords, multi-factor authentication tokens, and API keys associated with your account.",
        "You agree to notify Zuhal Content Studio immediately at our designated contact address upon discovering any unauthorized access, security breach, or compromised credentials. We cannot and will not be liable for any loss, damage, or unauthorized alteration of content resulting from your failure to maintain credential security.",
      ],
      listItems: [
        "Do not share your personal account credentials with unauthorized third parties.",
        "Use strong, unique passwords that adhere to modern security practices.",
        "Ensure you log out from public or shared workstations at the end of each session.",
      ],
    },
    {
      id: "acceptable-use",
      number: "4",
      title: "Acceptable Use Policy",
      paragraphs: [
        "Zuhal Content Studio is built to foster thoughtful research, strategic content creation, and collaborative experimentation. You agree to use the Platform exclusively for lawful and constructive purposes in accordance with this Acceptable Use Policy.",
        "You agree that you will NOT engage in any of the following prohibited activities:",
      ],
      listItems: [
        "Violating, infringing, or misappropriating the intellectual property, privacy, or proprietary rights of any third party.",
        "Uploading, storing, transmitting, or generating defamatory, fraudulent, harassing, malicious, obscene, or unlawful material.",
        "Attempting to probe, scan, or test the vulnerability of the Platform, infrastructure, or networks without prior written authorization.",
        "Reverse engineering, decompiling, disassembling, or extracting the source code of any aspect of the Platform.",
        "Interfering with, disrupting, or placing unreasonable loads on our servers, networks, or infrastructure through automated scrapers, denial-of-service attempts, or automated bot scripts.",
        "Using the Platform to train competing machine learning models or replicate core workflows without explicit written license.",
      ],
      callout: {
        type: "warning",
        title: "Enforcement and Violations",
        content:
          "Failure to comply with this Acceptable Use Policy may result in immediate suspension, account termination, and potential legal remedies.",
      },
    },
    {
      id: "user-content-and-ip",
      number: "5",
      title: "User Content and Intellectual Property",
      summary:
        "You retain complete ownership of the original content and research assets you bring into the Platform.",
      paragraphs: [
        "In the course of using the Platform, you may upload, input, create, or store research notes, creative briefs, article drafts, media assets, experiment logs, and audience definitions (\"User Content\").",
        "As between you and Zuhal Content Studio, you retain all right, title, and interest, including all copyright and intellectual property rights, in and to your User Content. We claim no ownership over your original ideas, manuscripts, or research.",
      ],
      subsections: [
        {
          id: "license-to-operate",
          number: "5.1",
          title: "Limited License to Operate the Service",
          paragraphs: [
            "Solely to the extent necessary to provide, host, process, back up, and maintain the Platform on your behalf, you grant Zuhal Content Studio a non-exclusive, worldwide, royalty-free license to store, process, display, and transmit your User Content within the bounds of your workspace permissions.",
            "This license does not grant us rights to sell, publicize, or use your proprietary content for marketing without your prior express consent.",
          ],
        },
        {
          id: "content-warranties",
          number: "5.2",
          title: "Representations and Warranties Regarding User Content",
          paragraphs: [
            "You represent and warrant that you own or have obtained all necessary licenses, permissions, and rights to upload and process your User Content on the Platform, and that such content does not violate any third-party rights or applicable laws.",
          ],
        },
      ],
    },
    {
      id: "platform-ownership",
      number: "6",
      title: "Ownership of the Platform",
      paragraphs: [
        "Zuhal Content Studio, including its visual interfaces, design language, layouts, source code, algorithms, documentation, icons, brand marks, and software components, is the proprietary property of Zuhal Content Studio and its licensors, protected by copyright, trademark, and other applicable intellectual property laws.",
        "Except for the limited revocable access rights granted in these Terms, no right, title, or interest in the Platform or its underlying technology is transferred to you.",
      ],
    },
    {
      id: "third-party-services",
      number: "7",
      title: "Third-Party Services and Integrations",
      paragraphs: [
        "The Platform may integrate with or link to third-party services, such as authentication providers (e.g., Supabase), media delivery networks (e.g., ImageKit), analytics platforms, or external AI processing interfaces.",
        "Your use of any third-party service is subject to the respective terms and privacy policies of those providers. Zuhal Content Studio is not responsible for the availability, security, accuracy, or content practices of external third-party services.",
      ],
      listItems: [
        "Third-party integrations are provided 'as-is' and may be modified or retired without liability.",
        "Any data transmitted to external services through your configured integrations is subject to those third parties' privacy practices.",
      ],
    },
    {
      id: "service-availability",
      number: "8",
      title: "Service Availability and Modifications",
      paragraphs: [
        "We strive to maintain continuous, high-availability service for all workspace operations. However, we do not guarantee that the Service will operate without interruption, delays, or errors.",
        "We reserve the right to modify, improve, update, or temporarily suspend features of the Platform for routine maintenance, security enhancements, or architectural upgrades. When feasible, we will provide advance notice for significant scheduled downtime.",
      ],
    },
    {
      id: "subscriptions-and-fees",
      number: "9",
      title: "Subscriptions, Fees, and Payment Terms",
      summary:
        "Details governing subscription tiers, billing cycles, and fee structures where paid tiers are activated.",
      paragraphs: [
        "Certain features, storage tiers, or team capacities of Zuhal Content Studio may be offered on a paid subscription basis. Current pricing and plan tiers are published within the workspace settings or plan overview page.",
        "If you enroll in a paid tier, you agree to provide valid payment details and authorize recurring charges according to your selected billing schedule (monthly or annual).",
      ],
      listItems: [
        "Fees are non-refundable except where required by mandatory consumer protection law.",
        "Taxes: All stated fees exclude applicable sales, value-added, or withholding taxes unless explicitly indicated otherwise.",
        "Price Changes: We will provide at least 30 days' advance notice before implementing any subscription price adjustments for active recurring plans.",
      ],
      callout: {
        type: "info",
        title: "Beta & Free Tiers",
        content:
          "Free tier and early-access beta workspace accounts are provided subject to platform quotas and may be adjusted at our reasonable discretion.",
      },
    },
    {
      id: "suspension-and-termination",
      number: "10",
      title: "Suspension and Termination",
      paragraphs: [
        "You may terminate your account and discontinue use of the Platform at any time through your workspace settings or by contacting our support team.",
        "We reserve the right to suspend or terminate your account, with or without prior notice, in the event that:",
      ],
      listItems: [
        "You breach or violate any provision of these Terms or the Acceptable Use Policy.",
        "Required subscription payments remain delinquent following appropriate grace periods.",
        "We are required to do so to comply with legal process, court orders, or regulatory mandates.",
        "Continued provision of service poses a security risk to other users or our infrastructure.",
      ],
      subsections: [
        {
          id: "effect-of-termination",
          number: "10.1",
          title: "Effect of Termination & Data Export",
          paragraphs: [
            "Upon termination, your right to access the workspace ceases immediately. We provide standard data export features allowing you to download research assets and briefs prior to account closure, subject to our standard data retention schedules.",
          ],
        },
      ],
    },
    {
      id: "disclaimers",
      number: "11",
      title: "Disclaimers and Warranties",
      paragraphs: [
        "TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, ZUHAL CONTENT STUDIO AND ALL ASSOCIATED SERVICES ARE PROVIDED ON AN \"AS IS\" AND \"AS AVAILABLE\" BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.",
        "WE EXPRESSLY DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM HARMFUL COMPONENTS.",
      ],
      callout: {
        type: "note",
        title: "Creative & Analytics Disclaimers",
        content:
          "Content optimization suggestions, experiment baselines, and creative briefs generated within the Platform are informational tools. You remain responsible for evaluating and verifying all editorial and strategic decisions.",
      },
    },
    {
      id: "limitation-of-liability",
      number: "12",
      title: "Limitation of Liability",
      paragraphs: [
        "TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ZUHAL CONTENT STUDIO, ITS DIRECTORS, EMPLOYEES, AFFILIATES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES.",
        "THIS INCLUDES, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, DATA, USE, GOODWILL, WORK STOPPAGE, OR BUSINESS INTERRUPTION ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR INABILITY TO ACCESS THE PLATFORM.",
        "IN ALL CIRCUMSTANCES, OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING UNDER OR RELATING TO THESE TERMS SHALL NOT EXCEED THE GREATER OF: (A) THE TOTAL AMOUNT PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED US DOLLARS (USD $100.00).",
      ],
    },
    {
      id: "indemnification",
      number: "13",
      title: "Indemnification",
      paragraphs: [
        "You agree to defend, indemnify, and hold harmless Zuhal Content Studio, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and reasonable legal expenses arising out of or in any way connected with:",
      ],
      listItems: [
        "Your access to or use of the Platform.",
        "Your User Content and any claims that it infringes third-party intellectual property or privacy rights.",
        "Your violation of these Terms or any applicable statutory or regulatory requirements.",
      ],
    },
    {
      id: "privacy-and-data",
      number: "14",
      title: "Privacy and Personal Data",
      paragraphs: [
        "Our handling of personal information, workspace metadata, and user accounts is governed by our Privacy Policy. By using the Platform, you acknowledge that you have reviewed our Privacy Policy and consent to our collection, processing, and storage practices as outlined therein.",
        "We implement industry-standard technical and organizational security measures to protect your workspace data against unauthorized disclosure, loss, or alteration.",
      ],
    },
    {
      id: "changes-to-terms",
      number: "15",
      title: "Changes to These Terms",
      paragraphs: [
        "We may update or revise these Terms from time to time to reflect operational changes, product enhancements, or legal requirements. When updates are published, we will revise the 'Last updated' date at the top of this page.",
        "For material modifications that adversely impact your rights or obligations, we will provide reasonable advance notice via in-app notification, email, or a conspicuous announcement on the Platform. Your continued use of the Platform following the effective date of revised Terms constitutes acceptance of the changes.",
      ],
    },
    {
      id: "governing-law",
      number: "16",
      title: "Governing Law and Dispute Resolution",
      paragraphs: [
        "These Terms and any dispute or controversy arising out of or related to your use of the Platform shall be governed by and construed in accordance with the laws of [Applicable Jurisdiction / Republic of Indonesia], without regard to conflict of law principles.",
        "Any legal action, suit, or proceeding arising under these Terms shall be instituted exclusively in the competent courts located within [Applicable Jurisdiction / Jakarta, Indonesia], and each party irrevocably submits to the jurisdiction and venue of such courts.",
      ],
    },
    {
      id: "contact-information",
      number: "17",
      title: "Contact Information and Legal Inquiries",
      paragraphs: [
        "If you have questions, comments, or legal inquiries regarding these Terms and Conditions, please contact our legal and compliance team:",
      ],
      listItems: [
        "Platform Name: Zuhal Content Studio",
        "Legal Entity: [Zuhal Content Studio Legal Entity / PT Zuhal Media Kreasi]",
        "Email: legal@zuhalcontentstudio.com",
        "Support Desk: support@zuhalcontentstudio.com",
        "Physical Address: [Corporate Office Address Placeholder, Jakarta, Indonesia]",
      ],
    },
  ],
};

/**
 * Derives a flattened Table of Contents list directly from the document source of truth.
 * Guarantees that the TOC and document content never drift out of sync.
 */
export function getTableOfContents(document: TermsDocumentData): TocItem[] {
  const items: TocItem[] = [];

  for (const section of document.sections) {
    items.push({
      id: section.id,
      number: section.number,
      title: section.title,
      level: 1,
    });

    if (section.subsections && section.subsections.length > 0) {
      for (const sub of section.subsections) {
        items.push({
          id: sub.id,
          number: sub.number,
          title: sub.title,
          level: 2,
        });
      }
    }
  }

  return items;
}
