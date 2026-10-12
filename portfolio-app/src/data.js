import placeholderImage from "./assets/projects/placeholder.png";
import cediCubeImage from "./assets/projects/cedicube.png";

export const PROFILE = {
  name: "Ayitey Ernest",
  navMark: "E. AYITEY",
  role: "SOFTWARE DEVELOPER",
  location: "Accra, Ghana",
  email: "ernestayitey@yahoo.com",
  phone: "+233 (0) 20 860 2830",
};

export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Works" },
  { id: "toolkit", label: "Toolkit" },
  { id: "blogs", label: "Blogs" },
  { id: "service", label: "Service" },
  { id: "contact", label: "Contact" },
];

export const SERVICE_STRIP = [
  {
    code: "01",
    title: "Web applications",
    body: "Interactive, responsive front ends built with React, backed by APIs that hold up under real traffic.",
  },
  {
    code: "02",
    title: "Backend & APIs",
    body: "Server-side systems built with Ruby on Rails and Python, from data models to business logic.",
  },
  {
    code: "03",
    title: "Databases",
    body: "Schema design, queries, and performance tuning with PostgreSQL and MySQL.",
  },
];

export const TOOLKIT = [
  {
    group: "Frontend",
    items: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    group: "Backend",
    items: ["Ruby on Rails", "Python", "REST APIs"],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
];

export const PROJECTS = [
  {
    id: "01",
    name: "FlowStock",
    tag: "Inventory management platform",
    desc: "Gives people easy access to products, sales&customer management,Purchase order and reports in one app.",
    image: placeholderImage,
    link: "https://flowstock.yottanettech.com/users/sign_in",
  },
  {
    id: "02",
    name: "Fareway",
    tag: "Ride-hailing app",
    desc: "Safe, faster, and reliable transportation, rebuilt for reliability at peak load.",
    image: placeholderImage,
    link: "#",
  },
  {
    id: "03",
    name: "Arclight Studio",
    tag: "Company website",
    desc: "A responsive marketing site for a software consultancy.",
    image: placeholderImage,
    link: "#",
  },
  {
    id: "04",
    name: "Yarysa EMR",
    tag: "Blockchain-backed records",
    desc: "An electronic medical record system serving multiple hospitals across three regions.",
    image: placeholderImage,
    link: "https://yarysa.com/",
  },
  {
    id: "05",
    name: "Second Chance",
    tag: "NGO website",
    desc: "Empowering locals with education and assets through community programs.",
    image: placeholderImage,
    link: "#",
  },
  {
    id: "06",
    name: "CediCube",
    tag: "Financial App (Loan Platform)",
    desc: "A financial platform for loans and payments.",
    image: cediCubeImage,
    link: "https://app.cedicube.com/users/sign_in",
  },
  {
    id: "07",
    name: "Sumame Direct",
    tag: "E-commerce platform",
    desc: "Order groceries, food items, and prepared meals with same-day delivery windows.",
    image: placeholderImage,
    link: "https://sumame-direct.com/",
  },
  {
    id: "08",
    name: "Rise Youth Network",
    tag: "NGO website",
    desc: "A site for a youth organization focused on mentorship and opportunity.",
    image: placeholderImage,
    link: "#",
  },
];

export const BLOG_CATEGORIES = [
  { title: "Engineering", desc: "Notes on building systems that hold up under real use.", link: "#" },
  { title: "Career", desc: "What moving from junior to senior engineer actually looks like.", link: "#" },
  { title: "Open source", desc: "Tools and libraries I maintain or contribute to.", link: "#" },
];

export const SERVICES = [
  "Mobile app development",
  "API development",
  "DevOps",
  "Web development",
];

export const ABOUT = {
  paragraphs: [
    "I'm a software developer working across the stack — React on the front end, Ruby on Rails and Python on the back end, and PostgreSQL or MySQL underneath, depending on what the job calls for.",
    "I like knowing how data moves through a system end to end, from the database schema to the interface someone actually clicks on. That means clear specs, honest timelines, and code the next person can read without asking me first.",
  ],
  spec: [
    { label: "Based in", value: "Accra, Ghana" },
    { label: "Focus", value: "Web apps, APIs, databases" },
    { label: "Stack", value: "React, Rails, Python, wordpress" },
    { label: "Response time", value: "Within 1 business day" },
    { label: "Status", value: "Open to new work" },
  ],
};

export const SOCIALS = [
  { label: "Email", href: `mailto:${PROFILE.email}`, icon: "Mail" },
  { label: "GitHub", href: "#", icon: "Github" },
  { label: "LinkedIn", href: "#", icon: "Linkedin" },
  { label: "Twitter", href: "#", icon: "Twitter" },
];
