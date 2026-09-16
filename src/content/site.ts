// Central content data for the site.
// Edit this file to update copy, add ventures, projects, etc. without touching layout code.
// Ground-truth facts sourced from Sulav-Background.md; dates/titles must stay accurate.

export const person = {
  name: "Sulav Timalsina",
  location: "Bhaktapur, Nepal",
  tagline: "Founder, operator, and applied AI researcher",
  positioning:
    "I run a manufacturing business, build AI systems for problems that don't usually get one, and lead ventures end to end, from the factory floor to the pitch deck to the codebase.",
  email: "sulavtimalsina11@gmail.com",
  linkedin: "https://www.linkedin.com/in/sulav-timalsina-857423219",
  resumeHref: "/resume.pdf",
};

export type Venture = {
  name: string;
  role: string;
  period: string;
  status: "active" | "paused" | "concluded";
  summary: string;
  tags: string[];
};

export const ventures: Venture[] = [
  {
    name: "SAS Industries",
    role: "Owner & Operator",
    period: "This fiscal year — present",
    status: "active",
    summary:
      "Family-run interlock (paver block) manufacturing company in Bhaktapur. Took over the business this fiscal year after running its operations for seven months as Operations Manager. Now responsible for production planning, vendor and supplier relationships, client relationships, and financials.",
    tags: ["Manufacturing", "Operations", "P&L Ownership"],
  },
  {
    name: "CQ Tech",
    role: "Founder",
    period: "Dec 2025 — Jun 2026",
    status: "concluded",
    summary:
      "Built the Pasale App to help consumer goods companies run sampled market research in Nepal's traditional retail sector at a fraction of the usual cost. Validated demand directly with consumer goods companies before building. Won Startup Summit 2025 pitching the concept to investors and industry judges.",
    tags: ["Retail Tech", "Market Research", "Flutter", "FastAPI"],
  },
  {
    name: "KanoonAI",
    role: "Co-founder & Business Lead",
    period: "Oct 2025 — Feb 2026 (paused)",
    status: "paused",
    summary:
      "An AI legal chatbot for everyday Nepali users, plus a research assistant for lawyers. Built go-to-market from scratch: defined the ideal customer profile, ran outreach to law firms, delivered product walkthroughs, and onboarded lawyers onto the beta for structured feedback, a notoriously sceptical profession to sell into. Reached the Grand Finale of ICT Award Rising Star 2025 and was featured on national television.",
    tags: ["LegalTech", "Go-to-Market", "AI Product"],
  },
];

export const research = {
  intro:
    "My final-year research project, and the clearest example of how I like to work: pick a problem nobody's incentivized to solve, and build the whole stack yourself.",
  headline: "Lost Voices: an AI voice for a language with no digital footprint",
  body:
    "Sunuwar has roughly 79,000 speakers and, until this project, no existing digital resources. I lead a three-person team building the first AI voice synthesis system for the language from scratch: corpus construction, a custom preprocessing pipeline, word embeddings, a custom tokeniser, training a small BERT transformer from scratch, and fine-tuning Meta's MMS text-to-speech model.",
  award: "Best Project Built With ElevenLabs — JunctionX Kathmandu, FinnoFest 2026",
  image: "/images/lost-voices-trophy.jpg",
};

export const appliedAI = {
  headline: "AI & Automation Intern, MNA Ventures",
  period: "Client deployment at Sarbottam Steel Ltd. — concluded August 5, 2026",
  body:
    "Went from no prior ERP exposure to building business reports in SAP Business One (Query Generator, Crystal Reports) and writing SQLScript stored procedures in SAP HANA. In the final month, independently researched and built a prototype Natural Language Database Assistant: a locally-hosted LLM (Qwen3 8B via Ollama) behind a FastAPI backend that turns plain-English questions into validated, read-only SQL against the real SAP HANA schema, using a hand-curated semantic layer and a sqlglot-based validation and allowlist layer for security. Chose a local-LLM architecture specifically to keep sensitive financial data in-house. Demonstrated the working prototype to organizational stakeholders; production deployment is pending IT approval.",
};

export type LeadershipItem = {
  name: string;
  role: string;
  period: string;
  summary: string;
  image?: string;
};

export const leadership: LeadershipItem[] = [
  {
    name: "Rotaract Club of Patan Heritage",
    role: "President",
    period: "From July 2026",
    summary:
      "Leading Maitri E-Shikshya, a digital-literacy project training 200 women in Harisiddhi, Lalitpur on smartphone use, online safety, mobile banking, and digital inclusion, in partnership with Smart Health Global. About 1,000 indirect beneficiaries expected.",
    image: "/images/rotaract-award.jpg",
  },
  {
    name: "U.S. Embassy Youth Council (USYC) Nepal",
    role: "Selected Member, 2026 Cohort",
    period: "Announced August 2026",
    summary:
      "One of 55 young Nepali leaders selected nationally for USYC Nepal, a U.S. Embassy-run leadership and civic engagement program.",
    image: "/images/usyc-stage.jpg",
  },
];

export type Recognition = {
  title: string;
  event: string;
  year: string;
};

export const recognition: Recognition[] = [
  { title: "Winner", event: "Startup Summit 2025", year: "2025" },
  { title: "Grand Finalist", event: "ICT Award Rising Star 2025", year: "2025" },
  { title: "Winner", event: "Asian Hack 2025", year: "2025" },
  { title: "Winner", event: "CodeSprint Hackathon 2025", year: "2025" },
  { title: "National Finalist", event: "Hult Prize Nepal 2025", year: "2025" },
  { title: "Runner Up", event: "Karmalaya-X by CARRD", year: "2025" },
  {
    title: "Best Project (ElevenLabs)",
    event: "JunctionX Kathmandu, FinnoFest 2026 — Lost Voices",
    year: "2026",
  },
];

export const gallery = {
  podium: "/images/podium-speech.jpg",
  radio: "/images/radio-interview.jpg",
};
