export const DropdownData: {
  [key: string]: {
    title: string;
    description: string;
    goToLink: string;
    navList: { id: string; text: string; href: string }[];
    mainContent: {
      imagePath: string;
      imageAlt: string;
      subtitle: string;
      motto: string;
    };
  };
} = {
  "who-we-are": {
    title: "Who we are",
    description:
      "We are Novelex Consulting, a dynamic language solutions provider driven by the mission to bridge global communication gaps.",
    goToLink: "Go to this section",
    navList: [
      {
        id: "purpose-value-and-strategy",
        text: "Purpose, value and strategy",
        href: "/who-we-are/purpose-value-and-strategy",
      },
      {
        id: "our-people",
        text: "Our people",
        href: "/who-we-are/our-people",
      },
      {
        id: "global-impact",
        text: "Global impact",
        href: "/who-we-are/global-impact",
      },
      {
        id: "diversity-and-inclusion",
        text: "Diversity and Inclusion",
        href: "/who-we-are/diversity-and-inclusion",
      },
      {
        id: "climate-strategy",
        text: "Climate strategy",
        href: "/who-we-are/climate-strategy",
      },
      {
        id: "our-partners",
        text: "Our partners",
        href: "/who-we-are/our-partners",
      },
    ],
    mainContent: {
      imagePath: "/images/header/who-we-are.jpg",
      imageAlt: "Who we are",
      subtitle: "Crafting Connections Beyond Words",
      motto: "Bridging Cultures, Uniting Worlds",
    },
  },
  "life-at-novelex": {
    title: "Life at Novelex",
    description:
      "Experience a vibrant work culture at Novelex, where innovation, diversity, and growth intersect.",
    goToLink: "Go to this section",
    navList: [
      {
        id: "experiencing-novelex",
        text: "Experiencing Novelex",
        href: "/life-at-novelex/experiencing-novelex",
      },
      {
        id: "events-and-highlights",
        text: "Events and Highlights",
        href: "/life-at-novelex/events-and-highlights",
      },
      {
        id: "team-and-culture-insights",
        text: "Team and Culture Insights",
        href: "/life-at-novelex/team-and-culture-insights",
      },
      {
        id: "community-engagement",
        text: "Community Engagement",
        href: "/life-at-novelex/community-engagement",
      },
      {
        id: "wellness-and-benefits",
        text: "Wellness and Benefits",
        href: "/life-at-novelex/wellness-and-benefits",
      },
    ],
    mainContent: {
      imagePath: "/images/header/life-at-novelex.jpg",
      imageAlt: "Life at Novelex",
      subtitle: "Thriving in a Culture of Diversity",
      motto: "Where Passion Meets Purpose",
    },
  },
  services: {
    title: "Services",
    description:
      "Novelex offers tailored language solutions that transcend borders, ensuring effective cross-cultural communication.",
    goToLink: "Go to this section",
    navList: [
      {
        id: "multilingual-solutions",
        text: "Multilingual Solutions",
        href: "/services/multilingual-solutions",
      },
      {
        id: "legal-consultancy",
        text: "Legal Consultancy",
        href: "/services/legal-consultancy",
      },
      {
        id: "final-consultancy",
        text: "Final Consultancy",
        href: "/services/final-consultancy",
      },
      {
        id: "digital-and-tech-solutions",
        text: "Digital and Tech Solutions",
        href: "/services/digital-and-tech-solutions",
      },
      {
        id: "training-programme",
        text: "Training programme",
        href: "/services/training-programme",
      },
    ],
    mainContent: {
      imagePath: "/images/header/services.jpg",
      imageAlt: "Services",
      subtitle: "Enabling Multilingual Excellence",
      motto: "Empowering Communication Across Borders",
    },
  },
  careers: {
    title: "Careers",
    description:
      "Join Novelex to shape the future of communication and connect the world through languages and technology.",
    goToLink: "Go to this section",
    navList: [
      {
        id: "join-our-team",
        text: "Join Our Team",
        href: "/careers/join-our-team",
      },
      {
        id: "explore-career-opportunities",
        text: "Explore Career Opportunities",
        href: "/careers/explore-career-opportunities",
      },
      {
        id: "become-a-trainer",
        text: "Become a Trainer",
        href: "/careers/become-a-trainer",
      },
      {
        id: "where-we-hire",
        text: "Where We Hire",
        href: "/careers/where-we-hire",
      },
      {
        id: "find-a-job",
        text: "Find a Job",
        href: "/careers/find-a-job",
      },
      {
        id: "personal-and-professional-development",
        text: "Personal and Professional Development",
        href: "/careers/personal-and-professional-development",
      },
    ],
    mainContent: {
      imagePath: "/images/header/careers.jpg",
      imageAlt: "Careers",
      subtitle: "Join Our Global Team of Innovators",
      motto: "Your Path to Impactful Communication",
    },
  },
};
