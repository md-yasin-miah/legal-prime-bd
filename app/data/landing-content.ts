export const siteConfig = {
  name: "Chancery & Tax Partners Dhaka",
  tagline: "Supreme Court & NBR Chambers",
  phone: "+8801794899610",
  phoneDisplay: "+880 1794-899610",
  email: "advahmedhasib@gmail.com",
  whatsapp: "https://wa.me/8801794899610",
  address: {
    line1: "Level 5, Chancery Tower, Pallabi, Mirpur 12 / Mirpur DOHS",
    line2: "Adjacent to Metro Rail Pillars 194-195, Dhaka 1216, Bangladesh",
  },
  hours: "Sun – Thu: 9:00 AM – 8:00 PM (BST)",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#practice-areas", label: "Practice Areas" },
  { href: "#insights", label: "Insights" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroContent = {
  badge:
    "Advocates of Supreme Court of Bangladesh & Income Tax Practitioners (ITP) Registered",
  title: "Premier Tax & Legal Consultancy in Bangladesh",
  subtitle:
    "Chancery & Tax Partners Dhaka counsels multinational conglomerates, institutional lenders, and high-net-worth families through sophisticated corporate disputes, National Board of Revenue (NBR) appellate tribunals, and cross-border commercial transactions.",
  metrics: [
    {
      label: "REGULATORY VENUE",
      title: "Supreme Court",
      subtitle: "High Court & Appellate Division",
    },
    {
      label: "FISCAL PRACTICE",
      title: "NBR Tribunal",
      subtitle: "Customs, VAT & Income Tax",
    },
    {
      label: "CORPORATE SEAT",
      title: "Dhaka Capital",
      subtitle: "Mirpur DOHS Chambers",
    },
  ],
  prestigeBadge: {
    label: "CHAMBERS BENCHMARK",
    title: "Over 20 Years",
    subtitle: "of statutory fidelity and chancery trial excellence.",
  },
} as const;

export const aboutPillars = [
  {
    icon: "receipt_long",
    title: "Tax Advisory",
    description:
      "Strategic counsel across Direct & Indirect Taxation, cross-border Transfer Pricing, and representation before the Commissioner of Taxes (Appeals) and NBR Appellate Tribunal.",
    items: [
      "Income Tax Act 2023 Statutory Optimization",
      "VAT Audits & High Court Writs",
      "Customs Valuation & Port Release Claims",
    ],
  },
  {
    icon: "corporate_fare",
    title: "Business Law",
    description:
      "Foreign Direct Investment (FDI) clearance, Joint Venture structuring, BIDA approvals, and exhaustive commercial drafting across oil, energy, banking, and garment exports.",
    items: [
      "Bangladesh Investment Development Authority (BIDA)",
      "Cross-border Technology Transfer Contracts",
      "Regulatory Licensing (ERC, IRC & Fire)",
    ],
  },
  {
    icon: "domain_verification",
    title: "Company Advisory",
    description:
      "Full-spectrum Registrar of Joint Stock Companies (RJSC) statutory management, corporate amalgamation, restructuring, share transfer petitions, and compliance audit.",
    items: [
      "RJSC Statutory Filing & Board Minutes",
      "Mergers, Acquisitions & Due Diligence",
      "Company Law Dispute Defense under Section 43",
    ],
  },
] as const;

export const stats = [
  {
    value: "500+",
    label: "CONSULTANTS & ADVOCATES",
    description:
      "Network of seasoned barristers and accredited tax litigators nationwide.",
  },
  {
    value: "95%",
    label: "CASE & APPEAL SUCCESS",
    description:
      "Before NBR Appellate Commissions and the Supreme Court benches.",
  },
  {
    value: "20+",
    label: "YEARS IN PRACTICE",
    description:
      "Continuous stewardship of legal integrity since chambers inception in 2004.",
  },
  {
    value: "৳450M+",
    label: "LIABILITIES OPTIMIZED",
    description: "Statutory fiscal tax relief secured for corporate clientele.",
  },
] as const;

export const practiceAreas = [
  {
    department: "DEPARTMENT I",
    icon: "account_balance",
    title: "Taxation & Fiscal Law",
    description:
      "Exhaustive statutory tax structuring under the Income Tax Act 2023. Handling corporate assessment files, withholding tax compliance, e-TIN management, and NBR Appellate Tribunal defense.",
    accordionTitle: "VIEW STATUTORY REMITS & TRIBUNAL SERVICES",
    details: [
      {
        title: "Income Tax Assessment:",
        text: "Full representation from Deputy Commissioner of Taxes (DCT) to Commissioner (Appeals).",
      },
      {
        title: "Tribunal Filings:",
        text: "Formal appellate drafting for Custom, Excise and VAT Appellate Tribunal (CEVAT).",
      },
    ],
    footerNote: "NBR & Taxes Zone 1–15 Dhaka",
  },
  {
    department: "DEPARTMENT II",
    icon: "business_center",
    title: "Corporate & Business Law",
    description:
      "Incorporation of private/public limited entities with RJSC, drafting Memorandum & Articles of Association, cross-border equity structures, and BIDA liaison for foreign entities.",
    accordionTitle: "VIEW REGULATORY COMPLIANCE REMITS",
    details: [
      {
        title: "RJSC Incorporation:",
        text: "Expedited clearance of Name Clearance, Digital MOA/AOA, and Form XII issuance.",
      },
      {
        title: "Regulatory Franchising:",
        text: "BIDA Work Permits, Central Bank (Bangladesh Bank) 18B compliance.",
      },
    ],
    footerNote: "Companies Act 1994 Protocols",
  },
  {
    department: "DEPARTMENT III",
    icon: "gavel",
    title: "Litigation & Chancery Writs",
    description:
      "Representation before the High Court Division under Article 102 (Writ Jurisdiction), Money Loan Court Act (Artha Rin Adalat), Negotiable Instruments (NI Act Section 138), and arbitration.",
    accordionTitle: "VIEW COURT VENUES & PROCEDURES",
    details: [
      {
        title: "Constitutional Writs:",
        text: "Mandamus, Certiorari & Prohibition challenging illegal executive or tax notices.",
      },
      {
        title: "Banking Recovery:",
        text: "Representation for borrowers and financial institutions in Artha Rin Adalat Ain.",
      },
    ],
    footerNote: "Supreme Court Bar Enrolled",
  },
  {
    department: "DEPARTMENT IV",
    icon: "diversity_1",
    title: "Family & Matrimonial Law",
    description:
      "Discreet resolution of high-net-worth succession disputes, probate of wills, Nikahnama settlements, child guardianship under the Guardians and Wards Act, and foreign divorce enforceability.",
    accordionTitle: "VIEW SETTLEMENT & SUCCESSION PROTOCOLS",
    details: [
      {
        title: "Succession Certificates:",
        text: "Expedited probate issuance from District Courts in property division.",
      },
      {
        title: "Cross-Border Custody:",
        text: "Hague convention liaison and guardianship rights litigation.",
      },
    ],
    footerNote: "Family Court Act 2023 Compliant",
  },
] as const;

export const counsel = [
  {
    icon: "person",
    name: "Barrister Tariqul Islam",
    role: "SENIOR MANAGING PARTNER",
    bio: "Barrister-at-Law (Lincoln's Inn, London). Advocate, Supreme Court of Bangladesh. 22+ years in constitutional writs and cross-border commercial arbitration.",
    affiliation: "Affiliation: Supreme Court Bar Association (SCBA)",
  },
  {
    icon: "account_balance_wallet",
    name: "Al-Amin Chowdhury, FCA, ITP",
    role: "HEAD OF FISCAL & TAX DIVISION",
    bio: "Fellow Chartered Accountant and Income Tax Practitioner. Former Consultant to NBR working group on Bangladesh Income Tax Act reforms.",
    affiliation: "Affiliation: Dhaka Taxes Bar Association (DTBA)",
  },
  {
    icon: "policy",
    name: "Advocate Nusrat Jahan",
    role: "PARTNER - CORPORATE & CHANCERY",
    bio: "LL.M (Corporate Law), University of Dhaka. Specialist in Artha Rin Adalat banking litigation and family estate partition suits.",
    affiliation: "Affiliation: Dhaka Bar Association & SCBA",
  },
] as const;

export const articles = [
  {
    category: "FISCAL GAZETTE",
    title: "Key Highlights of Bangladesh Finance Act 2024-25",
    excerpt:
      "Analysis of new corporate tax slab adjustments, minimum tax implications for export sectors, and digital service withholding.",
    cta: "READ STATUTORY ANALYSIS",
  },
  {
    category: "CORPORATE COMPLIANCE",
    title: "Navigating RJSC Annual Compliance & Share Transfers",
    excerpt:
      "Step-by-step guidance on digital Form IX, Form XII submissions, and non-resident foreign share transfer approvals.",
    cta: "READ REGULATORY BRIEF",
  },
  {
    category: "CHANCERY JURISPRUDENCE",
    title: "Corporate Dispute Resolution in Chancery Court",
    excerpt:
      "Examining judicial remedies for minority oppression under Section 233 of the Companies Act 1994 in Dhaka.",
    cta: "READ BENCH SUMMARY",
  },
] as const;

export const faqs = [
  {
    question:
      "What are the mandatory compliance obligations for e-TIN under the Income Tax Act 2023?",
    answer:
      "Under the Income Tax Act 2023, obtaining and filing proof of return submission (PSR) is mandatory for over 43 specified services in Bangladesh, including trade licenses, car ownership, utility connections, and board directorships. Chancery & Tax Partners assists in managing audits, advance tax payments, and preparing standard verification dossiers for NBR inspection.",
  },
  {
    question:
      "What is the standard timeline for private limited company incorporation with RJSC?",
    answer:
      "Standard incorporation typically requires 5 to 10 working days. This covers RJSC name clearance, drafting and notarization of the Memorandum and Articles of Association (MOA/AOA), government registration fees, and securing the Certificate of Incorporation alongside digital Form XII. For entities with foreign ownership, encashment certificates via inward remittance bank channels are managed concurrently.",
  },
  {
    question:
      "How are commercial disputes initiated in the Supreme Court High Court Division?",
    answer:
      "Commercial disputes enter the High Court Division either via Company Petitions under the Companies Act 1994 (e.g. for deadlock resolution or minority protection), Writ Petitions under Article 102 challenging arbitrary state actions, or First Appeals from Subordinate Courts. Our senior advocates conduct detailed merit reviews prior to motion submission.",
  },
  {
    question:
      "What is the fee and retainer structure for ongoing legal and tax advisory?",
    answer:
      "We provide both monthly corporate retainer agreements for ongoing contract reviews, RJSC secretarial, and routine tax filing, as well as milestone-based or stage-based fee schedules for formal litigation before the District Courts, Taxes Appellate Tribunal, and High Court Division.",
  },
] as const;

export const practiceOptions = [
  "Taxation & NBR Appeal Representation",
  "Corporate Law & RJSC Incorporation",
  "Supreme Court Writ & Litigation",
  "Banking / Artha Rin Adalat Dispute",
  "Family, Succession & Probate",
] as const;

export const footerPracticeLinks = [
  { href: "#practice-areas", label: "Tax Advisory" },
  { href: "#practice-areas", label: "Corporate Law" },
  { href: "#practice-areas", label: "Litigation & Chancery" },
  { href: "#practice-areas", label: "Matrimonial Law" },
] as const;

export const footerComplianceLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Regulatory Disclaimers" },
  { href: "#", label: "Bar Council Codes" },
  { href: "#", label: "Client Confidentiality" },
] as const;
