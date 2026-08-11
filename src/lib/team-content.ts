export type TeamMember = {
  name: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
  advisoryFocus: string;
  investorFocus: string;
  linkedIn?: string;
};

export const hacocoTeam: TeamMember[] = [
  {
    name: "Narinder K Sood",
    role: "Director",
    image: {
      src: "/images/team/narinder-k-sood.jpg",
      alt: "Narinder K Sood, Director at Hacoco",
    },
    advisoryFocus:
      "Oversees governance, commercial review and counterparty acceptance. He holds final review responsibility for commodity mandates progressed by the desk.",
    investorFocus:
      "Provides senior oversight on governance, commercial review and the standards applied before a private mandate is progressed.",
  },
  {
    name: "Abhiroop Bhattacharjee",
    role: "Director",
    image: {
      src: "/images/team/abhiroop-bhattacharjee.jpg",
      alt: "Abhiroop Bhattacharjee, Director at Hacoco",
    },
    advisoryFocus:
      "Leads transaction structuring and process design, including documentation sequence, inspection provisions and alignment between commercial procedure and payment instruments.",
    investorFocus:
      "Brings transaction-structuring discipline to mandate review, documentation sequence and the practical steps required to move from interest to execution.",
  },
  {
    name: "Shivam Sood",
    role: "Director",
    image: {
      src: "/images/team/shivam-sood.jpg",
      alt: "Shivam Sood, Director at Hacoco",
    },
    advisoryFocus:
      "Leads origination and counterparty development, with responsibility for requirement qualification, buyer and seller sourcing, and commercial relationships across trade routes.",
    investorFocus:
      "Leads client relationships, property origination and mandate qualification across Hacoco's private real estate acquisition network.",
    linkedIn: "https://www.linkedin.com/in/shivamso/",
  },
];
