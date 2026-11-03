import profilePhoto from "@/assets/abhishek-profile.jpg";
import cyberSentinelShot from "@/assets/cybersentinel-ai.png";
import sentinelDeskShot from "@/assets/sentineldesk.png";
import techCorpShot from "@/assets/techcorp-identityhub.png";
import stegoShieldShot from "@/assets/stegoshield.png";
import offerGuardShot from "@/assets/offerguard.png";
import passwordStrengthShot from "@/assets/password-strength.png";
import phishShieldShot from "@/assets/phishshield.png";
import secureWebGuardShot from "@/assets/secureweb-guard.png";
import signalVaultShot from "@/assets/signalvault.png";
import passwordBreachShot from "@/assets/password-breach-checker.png";
import fraudXSentinelShot from "@/assets/fraudx-sentinel.png";
import ghostPermissionShot from "@/assets/ghostpermission.png";
import ethicalHackerCert from "@/assets/ethical-hacker-cert.png";
import iotSecurityCert from "@/assets/iot-security-cert.png";
import cscuCert from "@/assets/cscu-cert.png";
import cyberSecurityCert from "@/assets/cyber-security-cert.jpg";
import chfiCert from "@/assets/chfi-certificate.jpg";
import oracleCert from "@/assets/oracle-cert.jpg";
import cloudCert from "@/assets/cloud-computing-cert.jpg";
import advancedCloudCert from "@/assets/advanced-cloud-cert.png";
import linuxCert from "@/assets/linux-cert.png";
import hackDevengersCert from "@/assets/hack-devengers-cert.png";
/**
 * Single source of truth for the portfolio content.
 * Edit this file to update projects, certifications, labs, skills and links.
 */

export const profile = {
  name: "Abhishek Yadav",
  initials: "AY",
  title: "Aspiring SOC Analyst | IAM & Blue Team Security Enthusiast",
  tagline: "Building Skills. Detecting Threats. Securing Identities.",
  subtitle: "MCA Student | Aspiring SOC Analyst | IAM & Blue Team Enthusiast",
  heroDescription:
    "Exploring cybersecurity through practical projects, defensive security labs, log analysis, and identity security.",
  intro: [
    "I am currently pursuing my Master of Computer Applications (MCA) at MIET College, Meerut. My primary interest lies in Cybersecurity, particularly SOC Operations, Identity and Access Management, and Blue Team Security.",
    "I enjoy learning through hands-on cybersecurity labs and building practical projects that demonstrate security monitoring, log analysis, access management, and threat detection concepts.",
    "I am continuously developing my technical skills and looking for entry-level opportunities where I can contribute, learn, and grow in the cybersecurity industry.",
  ],
  /** Replace with your own photo: drop a file in src/assets and import it here. */
  photoUrl: profilePhoto,
  /** Put your PDF in public/ (e.g. /resume.pdf) and set the path here. */
  resumeUrl: "/resume.pdf",
  /** Add your email address here to enable the contact form and email link. */
  email: "abhisheksinghyadav0004@gmail.com" as string | null,
  linkedin: "https://linkedin.com/in/abhishek-yadav-619852381",
  github: "https://github.com/abhisheksinghyadav0004-ux",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

export const aboutCards = [
  { label: "Education", value: "MCA Student", detail: "MIET College, Meerut" },
  { label: "Previous Education", value: "BCA Graduate", detail: "IIMT Group of Colleges, 2024" },
  { label: "Focus", value: "SOC / IAM / Blue Team", detail: "Defensive security operations" },
  { label: "Learning", value: "TryHackMe & Practical Labs", detail: "Hands-on skill building" },
  { label: "Career Goal", value: "Entry-Level Cybersecurity Role", detail: "Open to internships" },
];

export const focusAreas = [
  "SOC Operations",
  "Identity and Access Management (IAM)",
  "Blue Team Security",
  "Security Monitoring",
  "Log Analysis",
  "Threat Detection",
  "Incident Response",
  "Digital Forensics",
];

export const skillGroups = [
  {
    title: "SOC and Blue Team",
    icon: "shield",
    skills: [
      "Security Monitoring Fundamentals",
      "Log Analysis",
      "Threat Detection Fundamentals",
      "Incident Response Fundamentals",
      "Digital Forensics Fundamentals",
      "MITRE ATT&CK Fundamentals",
      "Authentication Log Analysis",
      "Security Event Investigation",
    ],
  },
  {
    title: "Identity and Access Management",
    icon: "key",
    skills: [
      "Identity Lifecycle Concepts",
      "Role-Based Access Control (RBAC)",
      "Multi-Factor Authentication (MFA)",
      "Access Requests and Approvals",
      "Privileged Access Management (PAM)",
      "Access Reviews",
      "Audit Logs",
    ],
  },
  {
    title: "Security Tools and Technologies",
    icon: "terminal",
    skills: [
      "Linux",
      "Python",
      "Flask",
      "Wireshark Fundamentals",
      "Git and GitHub",
      "HTML",
      "CSS",
      "JavaScript",
      "Chart.js",
      "Scapy",
    ],
  },
];

export type Project = {
  name: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  github: string | null;
  demo: string | null;
  /** Add a screenshot import here later. */
  image: string | null;
  status: "detailed" | "details-pending";
};

export const projects: Project[] = [
  {
    name: "CyberSentinel AI",
    category: "Blue Team / SOC Security Dashboard",
    description:
      "A cybersecurity monitoring dashboard designed to analyze network activity, identify suspicious indicators, visualize security alerts, and support investigation workflows.",
    features: [
      "Network packet metadata analysis",
      "CSV network log analysis",
      "IOC watchlist",
      "MITRE ATT&CK mappings",
      "Risk-based security alerts",
      "Alert investigation workflow",
      "Security event timeline",
      "JSON investigation reports",
    ],
    tech: ["Python", "Flask", "JavaScript", "HTML", "CSS", "Chart.js", "Scapy"],
    github: "https://github.com/abhisheksinghyadav0004-ux/CyberSentinel-AI",
    demo: null,
    image: cyberSentinelShot,
    status: "detailed",
  },
  {
    name: "SentinelDesk – SOC Log Analyzer",
    category: "SOC Operations / Log Analysis",
    description:
      "A log analysis tool designed to identify suspicious authentication activity and selected security events.",
    features: [
      "Log file upload and analysis",
      "Repeated login failure detection",
      "Suspicious IP monitoring",
      "Selected Windows Event ID detection",
      "Risk scoring and severity classification",
      "Investigation status tracking",
      "JSON report generation",
    ],
    tech: [],
    github: "https://github.com/abhisheksinghyadav0004-ux/SentinelDesk-SOC-Log-Analyzer",
    demo: null,
    image: sentinelDeskShot,
    status: "detailed",
  },
  {
    name: "TechCorp IdentityHub",
    category: "Identity and Access Management",
    description:
      "An IAM and Identity Governance dashboard concept designed to demonstrate access management workflows and security monitoring.",
    features: [
      "Role-Based Access Control",
      "Access requests and approvals",
      "Privileged Access Monitoring",
      "MFA session monitoring",
      "Security alerts",
      "Audit logs and reports",
    ],
    tech: [],
    github: "https://github.com/abhisheksinghyadav0004-ux/TechCorp-IdentityHub",
    demo: null,
    image: techCorpShot,
    status: "detailed",
  },
  {
    name: "StegoShield",
    category: "Cybersecurity / Digital Forensics",
    description:
      "A secure image steganography web application featuring image encoding, decoding, encryption, and basic forensic analysis.",
    features: [
      "RGB Least Significant Bit steganography",
      "Optional encryption",
      "Image decoding",
      "LSB bit-plane visualization",
      "Entropy and bit-balance analysis",
      "Basic forensic indicators",
    ],
    tech: ["Python", "Flask", "JavaScript", "HTML", "CSS", "NumPy", "Pillow", "Cryptography"],
    github: "https://github.com/abhisheksinghyadav0004-ux/StegoShield",
    demo: null,
    image: stegoShieldShot,
    status: "detailed",
  },
  {
    name: "OfferGuard",
    category: "Cybersecurity / Security Awareness",
    description:
      "A web-based job-offer risk analyzer that helps candidates identify common scam patterns before they share money, documents, banking details, or personal information.",
    features: [
      "Job offer and recruiter detail analysis",
      "Rule-based risk score (0-100) with clear reasons",
      "Upfront payment and deposit detection",
      "Pressure and urgency tactic flagging",
      "Personal email address identification",
      "Sensitive data request checks (Aadhaar, PAN, OTP, bank details)",
      "Suspicious and shortened link detection",
      "Unrealistic earnings detection",
      "Signal-by-signal explanation with recommended action",
      "Downloadable text safety report",
    ],
    tech: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "Lucide Icons"],
    github: "https://github.com/abhisheksinghyadav0004-ux/OfferGuard",
    demo: null,
    image: offerGuardShot,
    status: "detailed",
  },
  {
    name: "Password Strength Web",
    category: "Cybersecurity / Security Awareness",
    description:
      "A responsive password strength checker that analyzes a password in real time, shows visual strength feedback and live validation rules, and encourages safer password habits.",
    features: [
      "Real-time password strength analysis",
      "Dynamic strength indicator (Weak / Medium / Strong)",
      "Visual strength progress bar",
      "Live validation rules — length, uppercase, lowercase, number, special character",
      "Show / hide password toggle",
      "Smooth animations and hover effects",
      "Fully responsive design",
    ],
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/abhisheksinghyadav0004-ux/password_strength_checker",
    demo: null,
    image: passwordStrengthShot,
    status: "detailed",
  },
  {
    name: "Password Breach Checker",
    category: "Cybersecurity / Security Awareness",
    description:
      "A password security tool that checks whether a password has appeared in known data breaches, analyzes password strength, and helps users create safer passwords.",
    features: [
      "Password breach check against the Have I Been Pwned Pwned Passwords API",
      "SHA-1 hashing via the Web Crypto API so the plain password is never sent",
      "Password strength analyzer — length, uppercase, numbers and special characters",
      "Secure password generator with letters, numbers and symbols",
      "One-click copy for generated or entered passwords",
      "Show / hide password visibility toggle",
      "Cyber-themed glassmorphism interface with animated background",
      "Matrix-style animated digital rain background",
      "Password strength shown as a percentage gauge",
      "Security tips panel with safe password practices",
      "Responsive layout for different screen sizes",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Web Crypto API", "Have I Been Pwned API"],
    github: "https://github.com/abhisheksinghyadav0004-ux/Password-Breach-Checker",
    demo: null,
    image: passwordBreachShot,
    status: "detailed",
  },
  {
    name: "PhishShield AI",
    category: "Cybersecurity / Security Awareness",
    description:
      "A defensive phishing URL and email risk detector that analyzes a website link or message text using rule-based logic and returns a structured risk report.",
    features: [
      "Phishing URL analysis and email / message text analysis",
      "Suspicious keyword and urgent language detection",
      "Unsafe URL pattern checks — IP-based URLs, HTTP/HTTPS, long URLs, special characters",
      "Credential harvesting and OTP request pattern detection",
      "Risk score out of 100 with risk level classification",
      "Final status: Safe, Suspicious or Dangerous",
      "Verdict, confidence level and recommended action",
      "Risk breakdown and domain insight panels",
      "Safety recommendations, trust tips and safe action steps",
      "Copy, download and clear report options",
      "Analysis history",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js"],
    github: "https://github.com/abhisheksinghyadav0004-ux/PhishShield-AI",
    demo: null,
    image: phishShieldShot,
    status: "detailed",
  },
  {
    name: "SecureWeb Guard",
    category: "Cybersecurity / Web Security",
    description:
      "A defensive web security scanner that reviews a website's basic security posture — HTTPS use, security headers and cookie flags — and returns a score, risk level, grade and fix recommendations.",
    features: [
      "Website URL security scanning",
      "HTTPS usage check",
      "Security header analysis — CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy",
      "Cookie security flag detection",
      "Security score out of 100 with risk level and security grade",
      "Severity tags for each finding",
      "Response information viewer",
      "Fix recommendations for missing or weak settings",
      "Copy, download and clear report options",
      "Scan history",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js"],
    github: "https://github.com/abhisheksinghyadav0004-ux/SecureWeb-Guard",
    demo: null,
    image: secureWebGuardShot,
    status: "detailed",
  },
  {
    name: "SignalVault CTI",
    category: "Cybersecurity / Cyber Threat Intelligence",
    description:
      "A local-first cyber threat intelligence workspace for ingesting, normalizing, scoring, and investigating Indicators of Compromise (IOCs), combining evidence collection and analyst workflow in one place.",
    features: [
      "Real intelligence ingestion — import CVEs from the official CISA KEV JSON feed or submit an observed IOC manually",
      "IOC normalization for IP addresses, domains, URLs, file hashes and CVE identifiers",
      "Evidence-aware risk scoring with an explainable score and High / Medium / Low classification",
      "Deduplication and sightings — repeated submissions update the existing record and preserve source provenance",
      "Investigation workflow with analyst notes, confidence levels and Open / Monitoring / Escalated / Closed dispositions",
      "MITRE ATT&CK context — maps supported IOC tags to technique coverage",
      "Dashboard with risk and source coverage plus JSON investigation snapshot export",
      "Local-first architecture — FastAPI API, SQLite persistence and a React command-center interface",
    ],
    tech: [
      "React 19",
      "Vite",
      "Recharts",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "CISA KEV Feed",
    ],
    github: "https://github.com/abhisheksinghyadav0004-ux/SignalVault-CTI",
    demo: null,
    image: signalVaultShot,
    status: "detailed",
  },
  {
    name: "GhostPermission",
    category: "AI Agent Security / Payment Authorization",
    description:
      "An AI-agent payment authorization gateway built for the PayPal AI Hackathon. It validates purchase intents against a server-owned catalogue and deterministic policies before any PayPal Sandbox order can be created.",
    features: [
      "Server-owned merchant allowlist, product catalogue, pricing, quantity caps and spending limits",
      "Deterministic authorization that ignores browser-supplied amount, currency, approval and payment-status fields",
      "Sequence-aware policy engine that blocks unsafe combinations of individually permitted agent actions",
      "Human approval gate for high-risk payment decisions with server-configured approval tokens",
      "Replay resistance through idempotent request IDs and persisted transaction lifecycle states",
      "SHA-256 hash-chained audit logging for policy, workflow, incident, approval and payment events",
      "PayPal Sandbox order creation, verification and capture validation after server authorization only",
      "Honest missing-configuration handling with no fabricated payment success",
    ],
    tech: ["Node.js", "Express", "JavaScript", "PayPal Sandbox API", "SHA-256", "Local Storage"],
    github:
      "https://github.com/abhisheksinghyadav0004-ux/GhostPermission-AI-Agent-Payment-Security-Gateway",
    demo: null,
    image: ghostPermissionShot,
    status: "detailed",
  },
  {
    name: "FraudX Sentinel",
    category: "Cybersecurity / Fraud Detection & Response",
    description:
      "A local-first cyber fraud intelligence, detection and response platform that turns analyst-verified telemetry into evidence-backed alerts, incidents, threat entities, Digital DNA relationships, audit logs and investigation reports.",
    features: [
      "Manual event intake from the Command Center with JSON and CSV batch import",
      "Rule-based fraud detection — high booking velocity, high-value transfer to a new beneficiary, repeated failed logins, phishing-style URL events and MFA failure patterns",
      "Detection rules that can be enabled or disabled from the Detection Rules section",
      "Evidence-backed alert queue with risk score, severity labels, status workflow and acknowledge / contain actions",
      "Automatic incident creation from confirmed alerts, with case ownership, SLA due-time tracking and analyst notes",
      "Evidence register with SHA-256 validation and structured JSON incident report download",
      "Digital DNA relationship graph — source IP, device identifier, target resource, incident and relationship confidence score",
      "Local threat intelligence indicators stored from submitted evidence",
      "Access control with first-run administrator setup, secure local login and 12-hour session tokens",
      "Audit trail covering sign-ins, event intake, batch imports, alert and incident updates and evidence registration",
      "Local-first storage with SQLite — no pre-seeded fake investigation records",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "SQLite",
      "Pydantic",
      "Docker",
      "GitHub Actions",
    ],
    github: "https://github.com/abhisheksinghyadav0004-ux/-FraudX-Sentinel",
    demo: null,
    image: fraudXSentinelShot,
    status: "detailed",
  },
];

export const certificationCategories = [
  "All",
  "Cybersecurity",
  "Ethical Hacking",
  "Digital Forensics",
  "Cloud Computing",
  "Artificial Intelligence",
  "Linux",
  "Hackathon",
] as const;

export type Certification = {
  title: string;
  issuer: string;
  category: string;
  filters: string[];
  /** Add an imported image here later. */
  image: string | null;
  issueDate: string | null;
  credentialId: string | null;
  verifyUrl: string | null;
};

export const certifications: Certification[] = [
  {
    title: "Ethical Hacking Certificate",
    issuer: "Cisco Networking Academy",
    category: "Ethical Hacking",
    filters: ["Ethical Hacking", "Cybersecurity"],
    image: ethicalHackerCert,
    issueDate: "Jul 15, 2026",
    credentialId: null,
    verifyUrl: null,
  },
  {
    title: "IoT Security: Directing Network Traffic",
    issuer: "IEEE",
    category: "IoT Security / Cybersecurity",
    filters: ["Cybersecurity"],
    image: iotSecurityCert,
    issueDate: "20 January 2026",
    credentialId: null,
    verifyUrl: null,
  },
  {
    title: "Certified Secure Computer User (CSCU)",
    issuer: "EC-Council",
    category: "Cybersecurity",
    filters: ["Cybersecurity"],
    image: cscuCert,
    issueDate: "15 May 2024",
    credentialId: "ECC1294835706",
    verifyUrl: null,
  },
  {
    title: "Cyber Security Training",
    issuer: "E & ICT Academy, IIT Kanpur",
    category: "Cybersecurity Training",
    filters: ["Cybersecurity"],
    image: cyberSecurityCert,
    issueDate: "15 Sep 2023",
    credentialId: null,
    verifyUrl: null,
  },
  {
    title: "Computer Hacking Forensic Investigator (CHFI)",
    issuer: "E & ICT Academy, IIT Kanpur",
    category: "Digital Forensics",
    filters: ["Digital Forensics", "Cybersecurity"],
    image: chfiCert,
    issueDate: "23 Sep 2024",
    credentialId: null,
    verifyUrl: null,
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    category: "Cloud Computing / Artificial Intelligence",
    filters: ["Cloud Computing", "Artificial Intelligence"],
    image: oracleCert,
    issueDate: "09 Jan 2026",
    credentialId: null,
    verifyUrl: null,
  },
  {
    title: "Cloud Computing Training",
    issuer: "E & ICT Academy, IIT Kanpur",
    category: "Cloud Computing",
    filters: ["Cloud Computing"],
    image: cloudCert,
    issueDate: "30 Apr 2022",
    credentialId: "56120-500777-2c5b2174bfa74eb7",
    verifyUrl: null,
  },
  {
    title: "Advanced Cloud Computing Training",
    issuer: "E & ICT Academy, IIT Kanpur",
    category: "Advanced Cloud Computing",
    filters: ["Cloud Computing"],
    image: advancedCloudCert,
    issueDate: "06 Mar 2023",
    credentialId: null,
    verifyUrl: null,
  },
  {
    title: "Linux Training",
    issuer: "E & ICT Academy, IIT Kanpur",
    category: "Linux / Technical Training",
    filters: ["Linux"],
    image: linuxCert,
    issueDate: "02 Dec 2022",
    credentialId: "5911-19054",
    verifyUrl: null,
  },
  {
    title: "Hack Devengers 2.0 — Certificate of Appreciation",
    issuer: "Devengers",
    category: "Hackathon / Community",
    filters: ["Hackathon"],
    image: hackDevengersCert,
    issueDate: "19 Sep 2026",
    credentialId: null,
    verifyUrl: null,
  },
];

export type JobSimulation = {
  title: string;
  organization: string;
  platform: string;
  category: string;
  certificateUrl: string | null;
};

export const jobSimulations: JobSimulation[] = [
  {
    title: "Cyber Job Simulation",
    organization: "Deloitte Australia",
    platform: "Forage",
    category: "Cybersecurity Job Simulation",
    certificateUrl: null,
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    organization: "TCS",
    platform: "Forage",
    category: "Cybersecurity Job Simulation",
    certificateUrl: null,
  },
];

export type Room = {
  name: string;
  completedOn: string | null;
  url: string | null;
  summary: string | null;
};

export const tryHackMeRooms: Room[] = [
  { name: "Intro to Digital Forensics", completedOn: null, url: null, summary: null },
  { name: "Pyramid of Pain", completedOn: null, url: null, summary: null },
  { name: "DFIR: An Introduction", completedOn: null, url: null, summary: null },
  { name: "Cyber Kill Chain", completedOn: null, url: null, summary: null },
  { name: "Jr Security Analyst Intro", completedOn: null, url: null, summary: null },
  { name: "Defensive Security Intro", completedOn: null, url: null, summary: null },
  { name: "Intro to Digital Forensics", completedOn: null, url: null, summary: null },
  { name: "SOC Fundamentals", completedOn: null, url: null, summary: null },
];

export const learningTimeline: { topic: string; state: "completed" | "ongoing" }[] = [
  { topic: "Security event investigation", state: "completed" },
  { topic: "Authentication log analysis", state: "completed" },
  { topic: "Suspicious IP investigation", state: "completed" },
  { topic: "Digital forensic fundamentals", state: "completed" },
  { topic: "IAM access control concepts", state: "completed" },
  { topic: "Network traffic analysis", state: "completed" },
  { topic: "Blue Team security labs", state: "completed" },
];

export const learningPlatforms: { name: string; url: string }[] = [
  { name: "TryHackMe", url: "https://tryhackme.com" },
  { name: "LetsDefend", url: "https://letsdefend.io" },
  { name: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security" },
  { name: "Blue Team Labs Online", url: "https://blueteamlabs.online" },
  { name: "Hack The Box", url: "https://www.hackthebox.com" },
  { name: "OverTheWire", url: "https://overthewire.org" },
  { name: "picoCTF", url: "https://picoctf.org" },
  { name: "Hacker101", url: "https://www.hacker101.com" },
  { name: "CyberDefenders", url: "https://cyberdefenders.org" },
];
