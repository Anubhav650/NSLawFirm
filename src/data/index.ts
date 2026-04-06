import type { PracticeArea, Partner, Office } from "../types";

export const practiceAreas: PracticeArea[] = [
  {
    id: 1,
    title: "Dispute Resolution & Litigation",
    category: "dispute",
    icon: "⚖️",
    description:
      "We provide comprehensive dispute resolution and litigation services across all courts, tribunals, and forums in India — from District Courts to the Supreme Court — combining strategic advocacy with deep procedural expertise.",
  },
  {
    id: 2,
    title: "Intellectual Property",
    category: "dispute",
    icon: "💡",
    description:
      "We have time and again maintained our standards for protection of Intellectual Property Rights. The firm caters to services like registration of IP rights involving Trademarks, Copyrights, Patents and Designs. The firm also does drafting of confidentiality agreements, Non-Disclosure Agreements, Acquisition of IP rights, and Defending title of an IP before courts.",
  },
  {
    id: 3,
    title: "Goods and Service Tax",
    category: "dispute",
    icon: "📋",
    description:
      "We provide comprehensive advisory and litigation services in matters relating to Goods and Services Tax (GST). We represent our clients before various authorities and forums, including the GST Appellate Authority, the Goods and Services Tax Appellate Tribunal (GSTAT), and the Hon'ble High Courts. Our services include strategic advisory, handling disputes, drafting replies and appeals, and representing clients in complex GST litigation matters.",
  },
  {
    id: 4,
    title: "Consumer & Insurance",
    category: "dispute",
    icon: "🛡️",
    description:
      "The firm has successfully represented a wide range of clients before Consumer Forums, including the District Commissions, State Commissions, and the NCDRC. Our experience spans matters involving deficiency of service, unfair trade practices, insurance claim disputes, misrepresentation, and delayed or wrongful repudiation of claims. We assist clients at every stage of consumer litigation, from drafting complaints and responses to arguing complex legal and factual issues and pursuing appeals, with a strong emphasis on timely, cost-effective, and outcome-driven resolution.",
  },
  {
    id: 5,
    title: "Corporate & Commercial",
    category: "dispute",
    icon: "🏢",
    description:
      "We have extensive experience in handling corporate and commercial litigation including suit for recovery of monies, Insolvency matters, Debt Recovery matters, Mismanagement and Oppression matters, Taxation matters, Service Matters representing its clientele before various forums and tribunals including District Courts, High Court, NCLT, NCLAT, ITAT, DRT.",
  },
  {
    id: 6,
    title: "Property & Real Estate",
    category: "dispute",
    icon: "🏠",
    description:
      "Our team has expertise in handling complex real estate litigations and large scale transactions involving residential and commercial projects. The firm also renders services relating to Registrations, Change of Land Use, Compliances of Regulatory Laws, Property Tax, Due Diligence and preparation of extensive construction contracts, joint venture agreements and other related agreements.",
  },
  {
    id: 7,
    title: "Family & Matrimonial",
    category: "dispute",
    icon: "👨‍👩‍👧",
    description:
      "Our team has keenly taken on representing individual clients along with corporates and thus, established a successful practice in Matrimonial laws. The firm has been regularly engaged in matrimonial matters including Divorce, Maintenance, Custody, Guardianship, Judicial Separation and Restitution of Conjugal Rights.",
  },
  {
    id: 8,
    title: "Property Matters",
    category: "dispute",
    icon: "📜",
    description:
      "We have an established and successful practice in the field of private property laws, advising and representing clients across a broad spectrum of property-related disputes. The firm has extensive experience in handling traditional civil suits, including matters involving partition of joint properties, declarations of title and rights, permanent and temporary injunctions, and cancellation of deeds and documents. We regularly act for individuals, families, developers, and institutions, providing comprehensive strategic legal solutions.",
  },
  {
    id: 9,
    title: "Criminal Litigation",
    category: "dispute",
    icon: "⚔️",
    description:
      "Our team has broad experience in handling and representing its clients in criminal litigation involving offences under Indian Penal Code, Economic Offences, Money Laundering, Corruption, Dishonour of Cheques, Private Complaints, Non-registration of FIR by Police, Banking Frauds, Narcotics, Bails, Quashing of FIR and Appeals.",
  },
  {
    id: 10,
    title: "Labour Disputes",
    category: "dispute",
    icon: "👷",
    description:
      "We have a full-fledged practice before the labour courts and labour commissioners of Delhi/NCR for disputes under the various acts including but not limited to Employee Compensation Act, Industrial Disputes Act, Payment of Gratuity Act, Shop and Establishment Act, etc.",
  },
  {
    id: 11,
    title: "Banking & Finance",
    category: "dispute",
    icon: "🏦",
    description:
      "We offer a comprehensive service portfolio to the Financial Institutions like lenders, borrowers, advisers and other intermediaries. The firm has represented several clients before various Tribunals and Forums including DRT, DRAT and High Court. We have also represented numerous clients in commercial/civil arbitration proceedings before various arbitral tribunals comprising of Retired Judges, Technical experts, Senior Advocates.",
  },
  {
    id: 12,
    title: "Arbitration",
    category: "dispute",
    icon: "🤝",
    description:
      "We have represented numerous clients in commercial/civil arbitration proceedings before various arbitral tribunals comprising of Retired Judges, Technical experts, Senior Advocates, ensuring effective representation and strategic outcomes in alternative dispute resolution.",
  },
  {
    id: 13,
    title: "Regulatory & Compliance",
    category: "corporate",
    icon: "📊",
    description:
      "Our team provides end-to-end compliance solutions across a wide range of regulatory frameworks, including labour laws, environmental laws, and securities laws. Our services include compliance audits, preparation and filing of returns, liaison with regulatory authorities, and advisory support on inspections, notices, and enforcement actions, helping clients maintain operational continuity and regulatory certainty.",
  },
  {
    id: 14,
    title: "Licenses & Registrations",
    category: "corporate",
    icon: "📄",
    description:
      "We have been constantly engaged in making life of its clients easy by providing hassle free licenses and registrations including but not limited to Stamping, Deed Registration(s), Export-Import Licence(s), FSSAI License(s), MSME Registrations, and advisory for the licensing regime in various emerging businesses.",
  },
  {
    id: 15,
    title: "Conveyancing & Vetting",
    category: "corporate",
    icon: "✍️",
    description:
      "We have always been keen to provide solution-centric advisory and keep our client secured from all unforeseeable contingencies. The firm has dedicated team members who specialize in commercial contracting, agreements and vetting of various transactional documents.",
  },
  {
    id: 16,
    title: "Due Diligence",
    category: "corporate",
    icon: "🔍",
    description:
      "We offer a comprehensive diligence to all its clients including Title Search Report, Secretarial Due Diligence, Legal Due Diligence and so on.",
  },
  {
    id: 17,
    title: "Start-up Solutions",
    category: "corporate",
    icon: "🚀",
    description:
      "We offer a comprehensive solution to Start-ups right from incorporation till preparation of all transactional documents and obtaining the necessary approvals/licenses and registrations. The firm is committed to guide and provide mentorship to the Start-ups, regarding its supply chain, investor proposals throughout its journey of establishing itself as a brand in today's competitive market regime.",
  },
  {
    id: 18,
    title: "Taxation",
    category: "corporate",
    icon: "💰",
    description:
      "We provide solution-oriented advisory services on direct and indirect taxation matters, tailored to the specific needs of our clients. The firm also represents clients in tax litigation before Assessment Officers, appellate authorities, and the Income Tax Appellate Tribunal (ITAT). Our practice covers tax planning, assessments, reassessments, appeals, and dispute resolution, with a strong focus on compliance, strategic representation, and achieving efficient outcomes while minimising tax exposure and litigation risk.",
  },
  {
    id: 19,
    title: "Transaction Advisory",
    category: "corporate",
    icon: "📈",
    description:
      "We provide transactional advisory to our clients ranging from seed funding, mergers and acquisitions, capital management, right from start of the transaction to its completion. We have our team of highly experienced professionals specialising in the domain, to achieve the desired results for our clients.",
  },
];

export const partners: Partner[] = [
  {
    name: "Nikhil Mandhotra",
    title: "Founding Partner",
    education: "LL.B. (IPR Hons.), ICFAI University, Dehradun",
    bio: [
      "Nikhil Mandhotra is a founding partner of the firm and a law graduate with a specialisation in Intellectual Property Rights (IPR Hons.) from ICFAI University, Dehradun. He has handled various matters involving diverse legal issues before forums such as Supreme Court, High Courts, National Consumer Disputes Redressal Commission, National Company Law Tribunal, Trademark Registry, Labour Courts, GST Tribunals and several other tribunals and forums.",
      "He has also been involved in providing advisories to several corporate clients on diverse legal matters including real estate, consumer disputes, trademark matters, and project finance. He has also advised start-ups on various legal issues, such as product/service policies, legal compliances, permits, and other issues related to investment and acquisition.",
    ],
    specializations: [
      "Property Laws",
      "Consumer & Insurance Law",
      "Commercial Arbitrations",
      "Intellectual Property Laws",
      "Corporate Law",
      "Banking Law",
      "Labour Law",
      "Goods & Service Tax",
      "Real Estate",
    ],
    courts: [
      "Supreme Court of India",
      "High Courts",
      "NCDRC",
      "NCLT",
      "Trademark Registry",
      "Labour Courts",
      "GST Tribunals",
    ],
  },
  {
    name: "Sujeet Kumar",
    title: "Partner",
    education: "LL.B. (IPR Hons.)",
    bio: [
      "Sujeet Kumar is a partner at the Firm and a key member of its Litigation and Dispute Resolution practice. He is entrusted with handling several high-stake and strategically important matters of the Firm.",
      "He regularly appears before the Hon'ble Delhi High Court, as well as various trial courts, commissions, and tribunals across India. He holds a law degree with a specialisation in Intellectual Property Rights (IPR Hons.) and is regarded within the Firm as a dependable and capable resource with strong legal acumen.",
    ],
    specializations: [
      "Criminal Laws",
      "Commercial Arbitrations",
      "Intellectual Property Laws",
      "Corporate Law",
      "Banking Law",
      "Labour Law",
      "Goods & Service Tax",
      "Real Estate",
    ],
    courts: [
      "Delhi High Court",
      "Trial Courts",
      "Commissions",
      "Tribunals across India",
    ],
  },
];

export const offices: Office[] = [
  {
    city: "New Delhi",
    address: [
      "G-26, Vardhman Sunrise Plaza",
      "Vasundhara Enclave",
      "New Delhi – 110096",
    ],
  },
  {
    city: "Himachal Pradesh",
    address: [
      "Naulakha, PO Kanaid",
      "Tehsil Sundernagar",
      "District Mandi, Himachal Pradesh – 175019",
    ],
  },
  {
    city: "Dehradun",
    address: ["Shop No. 113, 114", "Thakurpur Road", "Premnagar, Dehradun"],
  },
];
