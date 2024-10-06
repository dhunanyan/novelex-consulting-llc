import { Colors } from "@config";

export const Content = {
  index: [
    {
      type: "hero",
      title: "Novelex Consulting LLC",
      subtitle: "Connecting Worlds",
      imageURL: "/images/hero/home.jpg",
      isInverted: true,
    },
    {
      type: "summary",
      title: "About company",
      subtitle: "Elevating Communication, Connecting Worlds",
      description:
        "At Novelex, we're on a mission to empower connections. Our innovative solutions redefine global communication, fostering unity and understanding. Explore our story, values, and vision.",
      button: "Read more",
      imageURL: "/images/summary/home.png",
      redirectURL: "/who-we-are",
    },
    {
      type: "icon-cards",
      title: "Build your career at NovelEx",
      subtitle: "Careers",
      description:
        "Discover dynamic career opportunities at Novelex. Join us in redefining global communication through roles that blend language proficiency, technology innovation, and cross-cultural connections. Shape your career while contributing to a mission that transcends language barriers. Explore diverse pathways, from language careers to digital and tech roles, and become a part of a team that's changing how the world communicates.",
      button: "Learn more",
      redirectURL: "/careers",
      cards: [
        {
          title: "Language Career",
          description:
            "Transform your love for language into a profession at Novelex. Shape conversations, build bridges, and connect cultures. Join us as an interpreter, translator, or language consultant. Make language your career catalyst.",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/careers/find-a-job/language-jobs",
        },
        {
          title: "Digital & Tech Solutions",
          description:
            "Blend technology and communication with Novelex. Drive language innovation through AI tools and user interfaces. Join the team reshaping global communication. Choose a digital and tech career that transcends borders.",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/careers/find-a-job/digital-and-tech-jobs",
        },
        {
          title: "Where We Hire",
          description:
            "Novelex welcomes talent globally. From headquarters to remote corners, join us in redefining communication. Embrace diverse perspectives, bridge cultures, and connect the world through language. Your location doesn't limit your impact.",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/careers/where-we-hire",
        },
        {
          title: "Customer Experience",
          description:
            "Elevate your journey with Novelex. Our commitment to exceptional customer experiences goes beyond words. Discover how we prioritize your satisfaction and ensure seamless interactions at every step of your language journey.",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/careers/personal-and-professional-development",
        },
      ],
    },
    {
      type: "image-cards",
      title: "Who we are",
      description: "Opening up a world of opportunities",
      cards: [
        {
          title: "Purpose",
          imageURL: "/images/imageCards/keyboard.jpg",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/who-we-are/purpose-value-and-strategy/our-purpose",
        },
        {
          title: "Our partners",
          imageURL: "/images/imageCards/handshake.jpg",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/who-we-are/our-partners",
        },
        {
          title: "Values",
          imageURL: "/images/imageCards/coins.jpg",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/who-we-are/purpose-value-and-strategy/our-values",
        },
        {
          title: "Climate strategy",
          imageURL: "/images/imageCards/calculator.jpg",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/who-we-are/climate-strategy",
        },
        {
          title: "Strategy",
          imageURL: "/images/imageCards/laptop.jpg",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/who-we-are/purpose-value-and-strategy/our-strategy",
        },
        {
          title: "Global impact",
          imageURL: "/images/imageCards/paper.jpg",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/who-we-are/global-impact",
        },
      ],
    },
    {
      type: "icon-cards",
      title: "Services",
      subtitle: "Your trusted partner",
      description:
        "With a global network of linguists, we offer translation and interpretation services in a multitude of languages, ensuring that our clients can confidently communicate across borders.",
      button: "Learn more",
      redirectURL: "/services",
      order: 1,
      contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
      cards: [
        {
          title: "Multilingual Solutions",
          description:
            "With a global network of linguists, we offer translation and interpretation services in a multitude of languages, ensuring that our clients can confidently communicate across borders.",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/services/multilingual-solutions",
        },
        {
          title: "Digital & Tech Solutions",
          description:
            "Our digital solutions encompass AI-powered language tools, facilitating instant translation and enhancing multilingual customer experiences in the digital realm.",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/services/digital-and-tech-solutions",
        },
        {
          title: "Training Programme",
          description:
            "Novelex's training program equips aspiring linguists and language enthusiasts with the skills and knowledge needed to excel in the field of translation and interpretation.",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/services/training-programme",
        },
        {
          title: "Final Consultancy",
          description:
            "Novelex offers tailored language solutions that transcend borders, ensuring effective cross-cultural communication.",
          iconURL: "logo",
          button: "Learn more",
          redirectURL: "/services/final-consultancy",
        },
      ],
    },
  ],
  "who-we-are": {
    index: [
      {
        type: "hero",
        title: "Who we are",
        subtitle: "Bridging Cultures, Uniting Worlds",
        imageURL: "/images/hero/who-we-are.jpg",
      },
      {
        type: "blank",
        title: "Our People",
        description:
          "At Novelex, our strength lies in our diverse and passionate team. We believe that true innovation blossoms when people from various backgrounds and perspectives collaborate. Meet our talented team members, each contributing a unique viewpoint to our journey. Our team members come from all corners of the globe, representing a rich tapestry of cultures and expertise. They drive our success with unwavering commitment and enthusiasm. Explore their stories, experiences, and how they shape our vision. We're more than just colleagues; we're a close-knit community fostering a culture of collaboration and continuous learning. Get to know the dynamic individuals who power Novelex",
        button: "Read more",
        redirectURL: "/who-we-are/our-people",
      },
      {
        type: "tiles",
        title: "Purpose, Value, and Strategy",
        description:
          "Discover Our Essence: Delve into the core of Novelex. Explore our purpose, values, and strategic approach-fundamental elements that drive our mission and define our identity.",
        imageURL: "/images/tiles/purpose-value-and-strategy.jpg",
        tiles: [
          {
            title: "Our Purpose",
            description:
              "Discover our driving force. Our purpose is to break down language barriers and bring the world closer together. Explore how we're making communication seamless and inclusive.",
            button: "Read more",
            redirectURL: "/who-we-are/purpose-value-and-strategy/our-purpose",
          },
          {
            title: "Our Value",
            description:
              "Our values shape every decision we make. Dive into our commitment to innovation, quality, diversity, and sustainability. Learn how these values drive our mission.",
            button: "Read more",
            redirectURL: "/who-we-are/purpose-value-and-strategy/our-value",
          },
          {
            title: "Our Strategy",
            description:
              "Explore the roadmap behind our success. Our strategy is a blend of innovation and adaptability. Uncover how we navigate the ever-evolving landscape of global communication.",
            button: "Read more",
            redirectURL: "/who-we-are/purpose-value-and-strategy/our-strategy",
          },
        ],
      },
      {
        type: "blank",
        title: "Diversity and Inclusion",
        description:
          "Diversity is not a mere buzzword; it's a foundational pillar of our organizational ethos. At the heart of our culture lies a genuine celebration of differences. We go beyond mere rhetoric, actively promoting inclusivity and leveraging the kaleidoscope of perspectives within our diverse team.\n\nOur commitment to diversity isn't just about ticking boxes; it's a strategic imperative. We believe that by embracing a variety of backgrounds, experiences, and viewpoints, we can spark innovation that drives our company's success.",
        button: "Read more",
        redirectURL: "/who-we-are/diversity-and-inclusion",
      },
      {
        type: "icon-cards",
        title: "Shaping Tomorrow",
        subtitle: "Our Commitments",
        description:
          "Unlock the world's potential with Novelex. Explore our commitments, where diversity fuels innovation, sustainability drives progress, partnerships empower growth, and innovation reshapes global communication",
        button: "Learn more",
        redirectURL: "/services",
        cards: [
          {
            title: "Global Impact",
            description:
              "Unlock the world's potential, explore global stories. Our language solutions connect cultures, break barriers, and foster worldwide connections. Discover narratives illustrating our commitment to an interconnected planet.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL: "/who-we-are/global-impact",
          },
          {
            title: "Climate Strategy",
            description:
              "Our commitment to the world goes beyond language. Learn about our climate strategy, where we take steps to minimize our environmental footprint and contribute to a sustainable future.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL: "/who-we-are/climate-strategy",
          },
          {
            title: "Our Partners",
            description:
              "Collaboration is key to our success. We're proud to partner with organizations that share our values and vision. Explore our network of partners who help us reach new heights.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL: "/who-we-are/our-partners",
          },
          {
            title: "Life at Novelex",
            description:
              "Discover the essence of Novelex Consulting LLC. Our story is one of innovation, guided by a commitment to reshape global communication. Dive into our journey, values, and vision. Learn what drives us to break down language barriers and connect the world.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL: "/life-at-novelex",
          },
        ],
      },
    ],
    "purpose-value-and-strategy": {
      index: [
        {
          type: "hero",
          title: "Purpose, Value and Strategy",
          subtitle: "Empowering Progress, Enriching Connections",
          imageURL: "/images/hero/who-we-are.jpg",
        },
      ],
      "our-value": [
        {
          type: "hero",
          title: "Our Values",
          subtitle: "Elevating Excellence, Fostering Diversity",
          imageURL: "/images/hero/who-we-are.jpg",
        },
        {
          type: "icon-cards",
          title: "Values",
          subtitle: "Our Core Principles",
          description:
            "Our values are the pillars of our organization. They drive our decisions and actions every day. Explore our commitment to innovation, quality, diversity, and sustainability.",
          button: "Learn more",
          redirectURL: "/who-we-are/purpose-value-and-strategy/our-values",
          cards: [
            {
              title: "Innovation Excellence",
              description:
                "Learn how innovation is at the heart of everything we do.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/purpose-value-and-strategy/our-values",
            },
            {
              title: "Quality Assurance",
              description:
                "Explore our unwavering commitment to quality and accuracy.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/purpose-value-and-strategy/our-values",
            },
            {
              title: "Embracing Diversity",
              description:
                "Dive into our inclusive workplace and the strength of diverse perspectives.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/purpose-value-and-strategy/our-values",
            },
            {
              title: "Environmental Responsibility",
              description:
                "Discover our sustainability initiatives and commitment to the environment.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/purpose-value-and-strategy/our-values",
            },
          ],
        },
      ],
      "our-strategy": [
        {
          type: "hero",
          title: "Our Strategy",
          subtitle: "Shaping the Future with Purposeful Excellence",
          imageURL: "/images/hero/who-we-are.jpg",
        },
        {
          type: "icon-cards",
          title: "Strategy",
          subtitle: "Our Roadmap to Success",
          description:
            "Our strategy is a blend of innovation and adaptability. We navigate the ever-evolving landscape of global communication to bring you the best solutions.",
          button: "Learn more",
          redirectURL: "/who-we-are/purpose-value-and-strategy/our-strategy",
          cards: [
            {
              title: "Innovative Approach",
              description:
                "Explore our innovative strategies for staying ahead in the industry.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/purpose-value-and-strategy/our-strategy",
            },
            {
              title: "Adaptive Solutions",
              description:
                "Discover how we adapt to meet the unique needs of our clients.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/purpose-value-and-strategy/our-strategy",
            },
            {
              title: "Global Expansion",
              description:
                "Learn about our plans for expanding our reach and impact.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/purpose-value-and-strategy/our-strategy",
            },
            {
              title: "Technology Integration",
              description:
                "Dive into how we integrate cutting-edge technology into our language solutions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/purpose-value-and-strategy/our-strategy",
            },
          ],
        },
      ],
      "our-purpose": [
        {
          type: "hero",
          title: "Our Purpose",
          subtitle: "Connecting Worlds, Transforming Lives",
          imageURL: "/images/hero/who-we-are.jpg",
        },
        {
          type: "icon-cards",
          title: "Purpose",
          subtitle: "Our Guiding Light",
          description:
            "At Novelex Consulting LLC, our purpose is clear: To break down language barriers and foster global understanding. Discover how this guiding principle shapes our mission and defines our identity.",
          button: "Learn more",
          redirectURL: "/who-we-are/purpose-value-and-strategy/our-purpose",
          cards: [
            {
              title: "Empowering Communication",
              description:
                "Learn how we empower individuals and businesses to communicate across languages.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/purpose-value-and-strategy/our-purpose",
            },
            {
              title: "Connecting Cultures",
              description:
                "Explore how we bridge cultures and foster global connections.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/purpose-value-and-strategy/our-purpose",
            },
            {
              title: "Innovating Seamlessness",
              description:
                "Dive into our innovative solutions that make communication seamless.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/purpose-value-and-strategy/our-purpose",
            },
            {
              title: "Driving Change",
              description:
                "Discover how our purpose is driving positive change in the world.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/purpose-value-and-strategy/our-purpose",
            },
          ],
        },
      ],
    },
    "our-people": {
      index: [
        {
          type: "hero",
          title: "Our People",
          subtitle: "Diverse Minds, Unified Vision",
          imageURL: "/images/hero/our-people.jpg",
        },
      ],
      "collective-excellence": [
        {
          type: "hero",
          title: "Culture of Inclusivity",
          subtitle: "Where Every Voice Resonates",
          imageURL: "/images/hero/our-people.jpg",
        },
        {
          type: "icon-cards",
          title: "Celebrating Diversity",
          subtitle: "Empowering All Perspectives",
          description:
            "Our culture of inclusivity is the foundation of our success. We believe in the power of diverse perspectives and the strength that comes from embracing each individual. Learn how we foster an inclusive and empowering environment.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-people/culture-of-inclusivity",
          cards: [
            {
              title: "Embracing All Voices",
              description:
                "Learn how every voice contributes to our inclusive environment.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/culture-of-inclusivity",
            },
            {
              title: "Equality in Action",
              description:
                "Explore how we ensure equality and fairness in every aspect of our work.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/culture-of-inclusivity",
            },
            {
              title: "Diverse Perspectives",
              description:
                "See how we harness diverse perspectives to drive creativity and innovation.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/culture-of-inclusivity",
            },
            {
              title: "Inclusive Sustainability",
              description:
                "Discover our commitment to creating sustainable solutions for everyone.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/culture-of-inclusivity",
            },
          ],
        },
      ],
      "culture-of-inclusivity": [
        {
          type: "hero",
          title: "Culture of Inclusivity",
          subtitle: "Where Every Voice Resonates",
          imageURL: "/images/hero/our-people.jpg",
        },
        {
          type: "icon-cards",
          title: "Celebrating Diversity",
          subtitle: "Empowering All Perspectives",
          description:
            "Our culture of inclusivity is the foundation of our success. We believe in the power of diverse perspectives and the strength that comes from embracing each individual. Learn how we foster an inclusive and empowering environment.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-people/culture-of-inclusivity",
          cards: [
            {
              title: "Embracing All Voices",
              description:
                "Learn how every voice contributes to our inclusive environment.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/culture-of-inclusivity",
            },
            {
              title: "Equality in Action",
              description:
                "Explore how we ensure equality and fairness in every aspect of our work.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/culture-of-inclusivity",
            },
            {
              title: "Diverse Perspectives",
              description:
                "See how we harness diverse perspectives to drive creativity and innovation.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/culture-of-inclusivity",
            },
            {
              title: "Inclusive Sustainability",
              description:
                "Discover our commitment to creating sustainable solutions for everyone.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/culture-of-inclusivity",
            },
          ],
        },
      ],
      "professional-growth": [
        {
          type: "hero",
          title: "Professional Growth",
          subtitle:
            "Nurturing Ambitions, Empowering Journeys, Inspiring Heights",
          imageURL: "/images/hero/our-people.jpg",
        },
        {
          type: "icon-cards",
          title: "Growth Opportunities",
          subtitle: "Empowering Your Future",
          description:
            "Professional growth is at the heart of our mission. We are dedicated to nurturing your skills, supporting your career journey, and inspiring you to reach new heights. Learn more about how we cultivate personal and professional development.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-people/professional-growth",
          cards: [
            {
              title: "Continuous Learning",
              description:
                "Discover how we foster a culture of learning and development.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/professional-growth",
            },
            {
              title: "Career Pathways",
              description:
                "Explore the numerous opportunities for career advancement.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/professional-growth",
            },
            {
              title: "Mentorship Programs",
              description:
                "Learn how our mentorship programs help guide your professional growth.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/professional-growth",
            },
            {
              title: "Sustainable Growth",
              description:
                "See how our commitment to sustainability extends to long-term career growth.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/professional-growth",
            },
          ],
        },
      ],
      "well-being": [
        {
          type: "hero",
          title: "Well-being",
          subtitle: "Balanced Lives, Resilient Spirits",
          imageURL: "/images/hero/our-people.jpg",
        },
        {
          type: "icon-cards",
          title: "Wellness at the Core",
          subtitle: "Thriving in Every Aspect of Life",
          description:
            "We believe in nurturing the well-being of our people—both in and out of the workplace. Learn how we support physical, mental, and emotional wellness, empowering our team to lead balanced and fulfilling lives.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-people/well-being",
          cards: [
            {
              title: "Holistic Health",
              description:
                "Learn how we promote mental, emotional, and physical health for our team.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/well-being",
            },
            {
              title: "Work-Life Balance",
              description:
                "Explore our initiatives to help employees maintain a healthy work-life balance.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/well-being",
            },
            {
              title: "Supportive Community",
              description:
                "Discover how we foster a supportive and compassionate work environment.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/well-being",
            },
            {
              title: "Sustainable Wellness",
              description:
                "See how sustainability is integrated into our approach to employee well-being.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-people/well-being",
            },
          ],
        },
      ],
    },
    "our-partners": {
      index: [
        {
          type: "hero",
          title: "Our Partners",
          subtitle: "Commitment to Dynamic and Supportive Partnerships",
          imageURL: "/images/hero/our-partners.jpg",
        },
      ],
      "innovative-solutions": [
        {
          type: "hero",
          title: "Innovative Solutions",
          subtitle: "Empowering Transformation through Innovation",
          imageURL: "/images/hero/our-partners.jpg",
        },
        {
          type: "icon-cards",
          title: "Forward-Thinking Solutions",
          subtitle: "Innovating for a Better Tomorrow",
          description:
            "We push boundaries and think outside the box to develop solutions that redefine industries. Our innovative strategies drive growth, efficiency, and lasting impact.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-partners/innovative-solutions",
          cards: [
            {
              title: "AI and Automation",
              description:
                "Explore how artificial intelligence and automation shape our cutting-edge solutions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/innovative-solutions",
            },
            {
              title: "Data-Driven Insights",
              description:
                "Discover how we leverage big data to create actionable business insights.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/innovative-solutions",
            },
            {
              title: "Sustainability Initiatives",
              description:
                "Learn about our sustainable innovations for a greener future.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/innovative-solutions",
            },
            {
              title: "Customer-Centric Design",
              description:
                "See how we build solutions focused on enhancing customer experience.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/innovative-solutions",
            },
          ],
        },
      ],
      "mutual-growth-endeavors": [
        {
          type: "hero",
          title: "Mutual Growth Endeavors",
          subtitle: "Growing Together for Lasting Success",
          imageURL: "/images/hero/our-partners.jpg",
        },
        {
          type: "icon-cards",
          title: "Collaborative Growth",
          subtitle: "Partnerships that Empower Progress",
          description:
            "We believe that true success is achieved when we grow together. Our mutual growth endeavors foster relationships that drive innovation, success, and shared achievements.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-partners/mutual-growth-endeavors",
          cards: [
            {
              title: "Co-Innovation Partnerships",
              description:
                "Collaborating with partners to co-create groundbreaking solutions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/mutual-growth-endeavors",
            },
            {
              title: "Joint Ventures",
              description:
                "Explore how we form strategic joint ventures to expand our impact.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/mutual-growth-endeavors",
            },
            {
              title: "Shared Investment Strategies",
              description:
                "Learn about our investment approach focused on shared success.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/mutual-growth-endeavors",
            },
            {
              title: "Global Expansion Initiatives",
              description:
                "See how we work with partners to expand into new markets.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/mutual-growth-endeavors",
            },
          ],
        },
      ],
      "shared-vision-and-values": [
        {
          type: "hero",
          title: "Shared Vision and Values",
          subtitle: "Aligned for Purpose-Driven Success",
          imageURL: "/images/hero/our-partners.jpg",
        },
        {
          type: "icon-cards",
          title: "Vision and Values",
          subtitle: "A Unified Path to a Better Future",
          description:
            "Our shared vision and values are at the core of everything we do. Together, we strive to create a future where success is measured not just by profits but by the positive impact we have on the world.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-partners/shared-vision-and-values",
          cards: [
            {
              title: "Purpose-Driven Goals",
              description:
                "Discover our commitment to creating meaningful, purpose-driven outcomes.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/shared-vision-and-values",
            },
            {
              title: "Ethical Leadership",
              description:
                "Explore our leadership principles based on integrity and ethics.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/shared-vision-and-values",
            },
            {
              title: "Sustainability Commitment",
              description:
                "Learn how our values guide us towards sustainable, long-term success.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/shared-vision-and-values",
            },
            {
              title: "Community Impact",
              description:
                "See how our shared vision drives positive change in our communities.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/shared-vision-and-values",
            },
          ],
        },
      ],
      "strategic-collaborations": [
        {
          type: "hero",
          title: "Strategic Collaborations",
          subtitle: "Building Strategic Partnerships for Success",
          imageURL: "/images/hero/our-partners.jpg",
        },
        {
          type: "icon-cards",
          title: "Collaborative Synergy",
          subtitle: "Together, We Achieve More",
          description:
            "Strategic collaborations are key to unlocking new opportunities. By working together, we leverage our combined strengths to innovate, grow, and lead in our industries.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-partners/strategic-collaborations",
          cards: [
            {
              title: "Industry Partnerships",
              description:
                "Explore our strategic partnerships with leading industry players.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/strategic-collaborations",
            },
            {
              title: "Innovative Joint Efforts",
              description:
                "Learn how joint efforts lead to breakthrough innovations.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/strategic-collaborations",
            },
            {
              title: "Global Collaborations",
              description:
                "See how our global collaborations drive success in multiple markets.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/strategic-collaborations",
            },
            {
              title: "Long-Term Alliances",
              description:
                "Discover the power of long-term alliances in creating lasting impact.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/our-partners/strategic-collaborations",
            },
          ],
        },
      ],
    },
    "global-impact": {
      index: [
        {
          type: "hero",
          title: "Global Impact",
          subtitle: "Beyond Boundaries, Forging Global Footprints",
          imageURL: "/images/hero/global-impact.jpg",
        },
      ],
      "environmental-responsibility": [
        {
          type: "hero",
          title: "Environmental Responsibility",
          subtitle: "Our Commitment to a Sustainable Future",
          imageURL: "/images/hero/global-impact.jpg",
        },
        {
          type: "icon-cards",
          title: "Sustainable Practices for a Greener Tomorrow",
          subtitle: "Innovative Approaches to Environmental Challenges",
          description:
            "We believe in fostering sustainable practices that benefit both the planet and society. Through responsible resource management and innovative solutions, we strive to make a positive impact.",
          button: "Learn more",
          redirectURL: "/who-we-are/global-impact/environmental-responsibility",
          cards: [
            {
              title: "Renewable Energy Initiatives",
              description:
                "Investing in solar, wind, and other renewable energy sources to reduce our carbon footprint.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/global-impact/environmental-responsibility",
            },
            {
              title: "Waste Reduction Strategies",
              description:
                "Implementing waste management programs to minimize landfill contributions and promote recycling.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/global-impact/environmental-responsibility",
            },
            {
              title: "Sustainable Sourcing",
              description:
                "Working with suppliers who prioritize sustainability and ethical practices in their operations.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/global-impact/environmental-responsibility",
            },
            {
              title: "Conservation Efforts",
              description:
                "Supporting initiatives aimed at protecting wildlife and preserving natural habitats.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/global-impact/environmental-responsibility",
            },
          ],
        },
      ],
      "global-collaborations": [
        {
          type: "hero",
          title: "Global Collaborations",
          subtitle: "Working Together Across Borders",
          imageURL: "/images/hero/global-impact.jpg",
        },
        {
          type: "icon-cards",
          title: "Connecting Communities Worldwide",
          subtitle: "Empowering Change Through Partnerships",
          description:
            "Our global collaborations focus on uniting diverse talents and resources to tackle pressing challenges. Together, we aim to create innovative solutions that have a lasting impact.",
          button: "Learn more",
          redirectURL: "/who-we-are/global-impact/global-collaborations",
          cards: [
            {
              title: "International Partnerships",
              description:
                "Building relationships with organizations around the world to share knowledge and expertise.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/global-impact/global-collaborations",
            },
            {
              title: "Cross-Cultural Initiatives",
              description:
                "Promoting cultural exchange programs that enhance understanding and cooperation among nations.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/global-impact/global-collaborations",
            },
            {
              title: "Global Health Initiatives",
              description:
                "Collaborating with international agencies to improve health outcomes in underserved communities.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/global-impact/global-collaborations",
            },
            {
              title: "Disaster Relief Efforts",
              description:
                "Partnering with global organizations to provide timely support in times of crisis.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/global-impact/global-collaborations",
            },
          ],
        },
      ],
      "leveraging-diversity": [
        {
          type: "hero",
          title: "Leveraging Diversity",
          subtitle: "Strength in Our Differences",
          imageURL: "/images/hero/global-impact.jpg",
        },
        {
          type: "icon-cards",
          title: "Harnessing Diverse Perspectives",
          subtitle: "Inclusion as a Catalyst for Innovation",
          description:
            "We recognize that diversity fuels creativity and innovation. By embracing varied perspectives, we cultivate an inclusive environment where everyone can thrive.",
          button: "Learn more",
          redirectURL: "/who-we-are/global-impact/leveraging-diversity",
          cards: [
            {
              title: "Diversity Training Programs",
              description:
                "Offering training to promote awareness and understanding of diverse backgrounds and experiences.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/global-impact/leveraging-diversity",
            },
            {
              title: "Inclusive Hiring Practices",
              description:
                "Implementing strategies to ensure equitable hiring and retention of diverse talent.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/global-impact/leveraging-diversity",
            },
            {
              title: "Cultural Celebrations",
              description:
                "Hosting events that celebrate cultural diversity within our organization.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/global-impact/leveraging-diversity",
            },
            {
              title: "Mentorship Programs",
              description:
                "Providing mentorship opportunities to empower underrepresented groups in the workforce.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/global-impact/leveraging-diversity",
            },
          ],
        },
      ],
      "social-responsibility": [
        {
          type: "hero",
          title: "Social Responsibility",
          subtitle: "Making a Difference in Our Communities",
          imageURL: "/images/hero/global-impact.jpg",
        },
        {
          type: "icon-cards",
          title: "Commitment to Community Engagement",
          subtitle: "Empowering People and Building Futures",
          description:
            "We believe in the power of social responsibility. By investing in our communities and fostering positive change, we strive to create a better tomorrow for all.",
          button: "Learn more",
          redirectURL: "/who-we-are/global-impact/social-responsibility",
          cards: [
            {
              title: "Community Development Projects",
              description:
                "Supporting initiatives that uplift and empower local communities.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/global-impact/social-responsibility",
            },
            {
              title: "Volunteer Programs",
              description:
                "Encouraging our employees to engage in volunteer opportunities that make a positive impact.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/global-impact/social-responsibility",
            },
            {
              title: "Educational Outreach",
              description:
                "Providing resources and support for education initiatives in underserved areas.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/global-impact/social-responsibility",
            },
            {
              title: "Advocacy for Social Issues",
              description:
                "Championing causes that promote social justice and equity.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/global-impact/social-responsibility",
            },
          ],
        },
      ],
    },
    "diversity-and-inclusion": {
      index: [
        {
          type: "hero",
          title: "Diversity and Inclusion",
          subtitle: "Foundational pillar of our organizational",
          imageURL: "/images/hero/diversity-and-inclusion.jpg",
        },
      ],
      "embracing-differences": [
        {
          type: "hero",
          title: "Embracing Differences",
          subtitle: "Celebrating diversity to build a more inclusive future",
          imageURL: "/images/hero/diversity-and-inclusion.jpg",
        },
        {
          type: "icon-cards",
          title: "Our Commitment to Diversity",
          subtitle: "Fostering a culture of belonging",
          description:
            "We believe that by embracing our differences, we become stronger together. Our diversity initiatives create an environment where everyone is valued.",
          button: "Learn more",
          redirectURL:
            "/who-we-are/diversity-and-inclusion/embracing-differences",
          cards: [
            {
              title: "Building Inclusive Teams",
              description:
                "Our focus is on creating diverse teams that reflect our global community.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/embracing-differences",
            },
            {
              title: "Valuing Every Perspective",
              description:
                "We respect and value the unique contributions of every individual.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/embracing-differences",
            },
            {
              title: "Supporting Equity",
              description:
                "We are committed to ensuring equitable opportunities for everyone.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/embracing-differences",
            },
            {
              title: "Championing Diversity",
              description:
                "We actively work to increase diversity at all levels of our organization.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/embracing-differences",
            },
          ],
        },
      ],
      empowerment: [
        {
          type: "hero",
          title: "Empowerment",
          subtitle: "Enabling individuals to reach their full potential",
          imageURL: "/images/hero/diversity-and-inclusion.jpg",
        },
        {
          type: "icon-cards",
          title: "Empowering Through Opportunity",
          subtitle: "Creating pathways for growth",
          description:
            "We believe in empowering our employees by providing them with the tools, resources, and opportunities they need to succeed.",
          button: "Learn more",
          redirectURL: "/who-we-are/diversity-and-inclusion/empowerment",
          cards: [
            {
              title: "Leadership Development",
              description:
                "Offering programs that foster leadership skills at all levels.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/diversity-and-inclusion/empowerment",
            },
            {
              title: "Mentorship Programs",
              description:
                "Connecting employees with mentors who guide their personal and professional growth.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/diversity-and-inclusion/empowerment",
            },
            {
              title: "Career Growth",
              description:
                "We provide opportunities for continuous learning and career advancement.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/diversity-and-inclusion/empowerment",
            },
            {
              title: "Empowering Communities",
              description:
                "We extend our empowerment initiatives to the communities we serve.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/diversity-and-inclusion/empowerment",
            },
          ],
        },
      ],
      "equal-opportunities": [
        {
          type: "hero",
          title: "Equal Opportunities",
          subtitle: "Ensuring fairness and equality for all",
          imageURL: "/images/hero/diversity-and-inclusion.jpg",
        },
        {
          type: "icon-cards",
          title: "Advancing Equality",
          subtitle: "Promoting fairness at every level",
          description:
            "Our commitment to equal opportunities means creating an environment where everyone has a chance to thrive, regardless of background.",
          button: "Learn more",
          redirectURL:
            "/who-we-are/diversity-and-inclusion/equal-opportunities",
          cards: [
            {
              title: "Fair Hiring Practices",
              description:
                "We ensure that our hiring processes are fair and inclusive.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/equal-opportunities",
            },
            {
              title: "Diverse Workforce",
              description:
                "We focus on building a workforce that reflects the diversity of our global community.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/equal-opportunities",
            },
            {
              title: "Inclusive Benefits",
              description:
                "Offering benefits that meet the diverse needs of our employees.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/equal-opportunities",
            },
            {
              title: "Advocating for Equity",
              description:
                "We are committed to removing barriers and creating equal opportunities for all.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/equal-opportunities",
            },
          ],
        },
      ],
      "global-perspective": [
        {
          type: "hero",
          title: "Global Perspective",
          subtitle: "Incorporating diverse global views",
          imageURL: "/images/hero/diversity-and-inclusion.jpg",
        },
        {
          type: "icon-cards",
          title: "A Worldview on Inclusion",
          subtitle: "Connecting across borders",
          description:
            "Our global perspective on diversity helps us foster inclusion in every region we operate.",
          button: "Learn more",
          redirectURL: "/who-we-are/diversity-and-inclusion/global-perspective",
          cards: [
            {
              title: "Cross-Cultural Collaboration",
              description:
                "We encourage collaboration across different cultures and regions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/global-perspective",
            },
            {
              title: "Global Leadership",
              description:
                "We promote leaders who bring a global perspective to their work.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/global-perspective",
            },
            {
              title: "Cultural Awareness",
              description:
                "We offer training programs that increase cultural competence across teams.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/global-perspective",
            },
            {
              title: "Global Impact",
              description:
                "Our initiatives create lasting global impact by promoting inclusivity worldwide.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/global-perspective",
            },
          ],
        },
      ],
      "inclusive-culture": [
        {
          type: "hero",
          title: "Inclusive Culture",
          subtitle: "Creating a culture where everyone feels valued",
          imageURL: "/images/hero/diversity-and-inclusion.jpg",
        },
        {
          type: "icon-cards",
          title: "Building Inclusivity",
          subtitle: "Ensuring everyone has a voice",
          description:
            "We strive to create an inclusive culture where every individual is heard and appreciated for their unique contributions.",
          button: "Learn more",
          redirectURL: "/who-we-are/diversity-and-inclusion/inclusive-culture",
          cards: [
            {
              title: "Inclusive Leadership",
              description:
                "Our leaders are committed to creating an inclusive environment for all.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/inclusive-culture",
            },
            {
              title: "Belonging Initiatives",
              description:
                "We foster a sense of belonging through various initiatives and programs.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/inclusive-culture",
            },
            {
              title: "Employee Resource Groups",
              description:
                "Our employee resource groups provide support and community for underrepresented groups.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/inclusive-culture",
            },
            {
              title: "Inclusive Policies",
              description:
                "Our policies reflect our commitment to fairness and inclusivity.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/diversity-and-inclusion/inclusive-culture",
            },
          ],
        },
      ],
    },
    "climate-strategy": {
      index: [
        {
          type: "hero",
          title: "Climate Strategy",
          subtitle: "Driving Change for a Sustainable Future",
          imageURL: "/images/hero/climate-strategy.jpg",
        },
      ],
      "carbon-footprint-reduction": [
        {
          type: "hero",
          title: "Carbon Footprint Reduction",
          subtitle: "Taking Action to Minimize Environmental Impact",
          imageURL: "/images/hero/climate-strategy.jpg",
        },
        {
          type: "icon-cards",
          title: "Our Commitment to Carbon Reduction",
          subtitle: "Steps Toward a Greener Tomorrow",
          description:
            "We are focused on reducing our carbon footprint by investing in renewable energy, improving energy efficiency, and promoting sustainable practices across all operations.",
          button: "Learn more",
          redirectURL:
            "/who-we-are/climate-strategy/carbon-footprint-reduction",
          cards: [
            {
              title: "Renewable Energy",
              description:
                "Transitioning to renewable energy sources like wind and solar to reduce emissions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/climate-strategy/carbon-footprint-reduction",
            },
            {
              title: "Energy Efficiency",
              description:
                "Implementing energy-efficient systems in our facilities to lower consumption.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/climate-strategy/carbon-footprint-reduction",
            },
            {
              title: "Sustainable Transportation",
              description:
                "Encouraging the use of electric vehicles and eco-friendly logistics.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/climate-strategy/carbon-footprint-reduction",
            },
            {
              title: "Waste Management",
              description:
                "Reducing waste through recycling programs and responsible disposal.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/climate-strategy/carbon-footprint-reduction",
            },
          ],
        },
      ],
      "contributions-to-sustainability": [
        {
          type: "hero",
          title: "Contributions to Sustainability",
          subtitle: "Innovating for a Sustainable Future",
          imageURL: "/images/hero/climate-strategy.jpg",
        },
        {
          type: "icon-cards",
          title: "Our Sustainability Efforts",
          subtitle: "Working Towards Long-Term Environmental Solutions",
          description:
            "From conservation initiatives to circular economy models, we contribute to global sustainability efforts that protect our planet and future generations.",
          button: "Learn more",
          redirectURL:
            "/who-we-are/climate-strategy/contributions-to-sustainability",
          cards: [
            {
              title: "Water Conservation",
              description:
                "Promoting water efficiency in operations and reducing consumption.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/climate-strategy/contributions-to-sustainability",
            },
            {
              title: "Biodiversity Protection",
              description:
                "Supporting ecosystems and preserving biodiversity in areas where we operate.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/climate-strategy/contributions-to-sustainability",
            },
            {
              title: "Circular Economy",
              description:
                "Innovating products and processes to reuse materials and minimize waste.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/climate-strategy/contributions-to-sustainability",
            },
            {
              title: "Sustainable Packaging",
              description:
                "Developing packaging solutions that reduce environmental impact.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/climate-strategy/contributions-to-sustainability",
            },
          ],
        },
      ],
      "eco-friendly-practices": [
        {
          type: "hero",
          title: "Eco-Friendly Practices",
          subtitle: "Embedding Sustainability Into Our Daily Operations",
          imageURL: "/images/hero/climate-strategy.jpg",
        },
        {
          type: "icon-cards",
          title: "Sustainable Practices for a Greener Future",
          subtitle: "Innovating for Long-Term Environmental Solutions",
          description:
            "We integrate eco-friendly practices into all aspects of our operations, from green building initiatives to sustainable sourcing and procurement.",
          button: "Learn more",
          redirectURL: "/who-we-are/climate-strategy/eco-friendly-practices",
          cards: [
            {
              title: "Green Buildings",
              description:
                "Constructing eco-friendly buildings with LEED certifications and energy-saving technologies.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/climate-strategy/eco-friendly-practices",
            },
            {
              title: "Sustainable Sourcing",
              description:
                "Prioritizing suppliers with sustainable practices and eco-friendly materials.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/climate-strategy/eco-friendly-practices",
            },
            {
              title: "Energy Management",
              description:
                "Utilizing smart energy management systems to reduce power consumption.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/climate-strategy/eco-friendly-practices",
            },
            {
              title: "Water Management",
              description:
                "Innovating water-saving techniques to reduce our water footprint.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/who-we-are/climate-strategy/eco-friendly-practices",
            },
          ],
        },
      ],
      "green-initiatives": [
        {
          type: "hero",
          title: "Green Initiatives",
          subtitle: "Creating Positive Environmental Change",
          imageURL: "/images/hero/climate-strategy.jpg",
        },
        {
          type: "icon-cards",
          title: "Leading the Way in Environmental Responsibility",
          subtitle: "Our Green Initiatives Across the Globe",
          description:
            "We are committed to leading positive environmental change through innovative green initiatives, such as reforestation, renewable energy projects, and reducing our environmental footprint.",
          button: "Learn more",
          redirectURL: "/who-we-are/climate-strategy/green-initiatives",
          cards: [
            {
              title: "Reforestation Projects",
              description:
                "Partnering with global organizations to reforest and restore ecosystems.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/climate-strategy/green-initiatives",
            },
            {
              title: "Clean Energy Investments",
              description:
                "Investing in clean energy projects to power our operations and communities.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/climate-strategy/green-initiatives",
            },
            {
              title: "Reducing Plastics",
              description:
                "Minimizing single-use plastics in our operations and promoting alternatives.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/climate-strategy/green-initiatives",
            },
            {
              title: "Sustainable Agriculture",
              description:
                "Supporting sustainable farming practices that reduce environmental impact.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/who-we-are/climate-strategy/green-initiatives",
            },
          ],
        },
      ],
    },
  },
  services: {
    index: [
      {
        type: "hero",
        title: "Comprehensive Language and Consultancy Services",
        subtitle: "Bridging Cultures, Uniting Worlds",
        imageURL: "/images/hero/services.jpg",
        isInverted: true,
      },
      {
        type: "blank",
        title: "Training Programme",
        description:
          "Our Training Programme equips individuals and teams with essential skills in multilingual communication and cultural competence, fostering effective global collaboration.",
        button: "Read more",
        redirectURL: "/services/training-programme",
      },
      {
        type: "tiles",
        title: "Multilingual Solutions",
        description:
          "Tailored language services to meet your unique business needs and enhance cross-cultural communication.",
        imageURL: "/images/tiles/multilingual-solutions.jpg",
        tiles: [
          {
            title: "Document Translation",
            description:
              "Accurate translation services for legal, technical, and marketing documents, ensuring your message is conveyed clearly across languages.",
            button: "Read more",
            redirectURL:
              "/services/multilingual-solutions/document-translation",
          },
          {
            title: "Industry Specific Language Solutions",
            description:
              "Specialized language solutions designed for various industries, including healthcare, finance, and technology, to meet specific communication needs.",
            button: "Read more",
            redirectURL:
              "/services/multilingual-solutions/industry-specific-language-solutions",
          },
          {
            title: "Interpretation",
            description:
              "Professional interpretation services for conferences, meetings, and events, enabling seamless communication in real time.",
            button: "Read more",
            redirectURL: "/services/multilingual-solutions/interpretation",
          },
          {
            title: "Mobile Interpretation",
            description:
              "On-demand interpretation services available via mobile devices, providing flexible solutions for dynamic communication needs.",
            button: "Read more",
            redirectURL:
              "/services/multilingual-solutions/mobile-interpretation",
          },
        ],
      },
      {
        type: "blank",
        title: "Legal Consultancy",
        description:
          "Expert legal consultancy services to navigate complex regulatory environments and ensure compliance across jurisdictions.",
        button: "Read more",
        redirectURL: "/services/legal-consultancy",
      },
      {
        type: "icon-cards",
        title: "Final Consultancy Services",
        subtitle: "Expert Guidance for Financial Success",
        description:
          "Our final consultancy services provide comprehensive financial solutions tailored to your unique business challenges.",
        button: "Learn more",
        redirectURL: "/services/final-consultancy",
        cards: [
          {
            title: "Comprehensive Financial Advisory Services",
            description:
              "We offer expert financial advisory services that help you make informed decisions and optimize your financial strategies.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL:
              "/services/final-consultancy/comprehensive-financial-advisory-services",
          },
          {
            title: "Financial Planning and Risk Management",
            description:
              "Our services include financial planning and risk management strategies designed to protect your assets and grow your wealth.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL:
              "/services/final-consultancy/financial-planning-and-risk-management",
          },
          {
            title: "Performance Analysis and Informed Decision Making",
            description:
              "We conduct thorough performance analysis to guide your decision-making processes, ensuring sustainable growth and success.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL:
              "/services/final-consultancy/performance-analysis-and-informed-decision-making",
          },
          {
            title: "Specialised Expertise in Financial Regulations",
            description:
              "Leverage our specialized expertise to navigate complex financial regulations and ensure compliance in all your operations.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL:
              "/final-consultancy/specialised-expertise-in-financial-regulations",
          },
        ],
      },
      {
        type: "blank",
        title: "Digital and Tech Solutions",
        description:
          "Innovative digital and technology solutions to streamline your business processes and enhance operational efficiency.",
        button: "Read more",
        redirectURL: "/services/digital-and-tech-solutions",
      },
    ],
    "digital-and-tech-solutions": {
      index: [
        {
          type: "hero",
          title: "Digital & Tech Solutions",
          subtitle: "Innovative technologies shaping the future of businesses.",
          imageURL: "/images/hero/digital-and-tech-solutions.jpg",
        },
      ],
      "cybersecurity-solutions": [
        {
          type: "hero",
          title: "Cybersecurity Solutions",
          subtitle:
            "Protect your business with cutting-edge cybersecurity measures.",
          imageURL: "/images/hero/digital-and-tech-solutions.jpg",
        },
        {
          type: "icon-cards",
          title: "Our Cybersecurity Services",
          subtitle:
            "Safeguard your digital assets with comprehensive protection.",
          description:
            "We provide tailored cybersecurity solutions to defend against threats and ensure your business stays secure in an increasingly digital world.",
          button: "Learn more",
          redirectURL:
            "/services/digital-and-tech-solutions/cybersecurity-solutions",
          cards: [
            {
              title: "Threat Detection",
              description:
                "Identify and respond to potential cyber threats before they cause harm.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/cybersecurity-solutions",
            },
            {
              title: "Data Encryption",
              description:
                "Ensure your sensitive information is secure with advanced encryption methods.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/cybersecurity-solutions",
            },
            {
              title: "Network Security",
              description:
                "Protect your network infrastructure from unauthorized access and attacks.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/cybersecurity-solutions",
            },
            {
              title: "Incident Response",
              description:
                "React swiftly to cyber incidents with our professional response teams.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/cybersecurity-solutions",
            },
          ],
        },
      ],
      "data-analytics-and-business-intelligence": [
        {
          type: "hero",
          title: "Data Analytics & Business Intelligence",
          subtitle:
            "Leverage data-driven insights to fuel growth and innovation.",
          imageURL: "/images/hero/digital-and-tech-solutions.jpg",
        },
        {
          type: "icon-cards",
          title: "Transform Data into Actionable Insights",
          subtitle: "Empower your business with cutting-edge analytics tools.",
          description:
            "Our data analytics solutions help you turn raw data into valuable business intelligence for strategic decision-making.",
          button: "Learn more",
          redirectURL:
            "/services/digital-and-tech-solutions/data-analytics-and-business-intelligence",
          cards: [
            {
              title: "Predictive Analytics",
              description:
                "Predict future trends and outcomes using advanced algorithms.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/data-analytics-and-business-intelligence",
            },
            {
              title: "Data Visualization",
              description:
                "Present complex data in clear and actionable visual formats.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/data-analytics-and-business-intelligence",
            },
            {
              title: "Business Intelligence Tools",
              description:
                "Make informed decisions with real-time business intelligence reports.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/data-analytics-and-business-intelligence",
            },
            {
              title: "Data Integration",
              description:
                "Consolidate data from multiple sources for seamless analysis.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/data-analytics-and-business-intelligence",
            },
          ],
        },
      ],
      "emerging-technologies-integration": [
        {
          type: "hero",
          title: "Emerging Technologies Integration",
          subtitle:
            "Stay ahead of the curve with the latest in tech innovation.",
          imageURL: "/images/hero/digital-and-tech-solutions.jpg",
        },
        {
          type: "icon-cards",
          title: "Integrating Tomorrow's Technologies",
          subtitle:
            "Harness the power of cutting-edge technology for your business.",
          description:
            "From AI to blockchain, we help businesses integrate the latest technologies to stay competitive in a rapidly evolving landscape.",
          button: "Learn more",
          redirectURL:
            "/services/digital-and-tech-solutions/emerging-technologies-integration",
          cards: [
            {
              title: "Artificial Intelligence",
              description:
                "Automate and optimize business processes using AI solutions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/emerging-technologies-integration",
            },
            {
              title: "Blockchain",
              description:
                "Implement secure and transparent blockchain-based systems.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/emerging-technologies-integration",
            },
            {
              title: "IoT Solutions",
              description:
                "Connect devices and systems with the Internet of Things for enhanced operations.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/emerging-technologies-integration",
            },
            {
              title: "Machine Learning",
              description:
                "Empower your business with predictive and adaptive machine learning models.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/emerging-technologies-integration",
            },
          ],
        },
      ],
      "software-development": [
        {
          type: "hero",
          title: "Software Development",
          subtitle:
            "Customized software solutions to meet your unique business needs.",
          imageURL: "/images/hero/digital-and-tech-solutions.jpg",
        },
        {
          type: "icon-cards",
          title: "Bespoke Software Solutions",
          subtitle:
            "Build powerful, scalable, and efficient software applications.",
          description:
            "Our software development services focus on creating tailored solutions that solve your business challenges and drive growth.",
          button: "Learn more",
          redirectURL:
            "/services/digital-and-tech-solutions/software-development",
          cards: [
            {
              title: "Custom Applications",
              description:
                "Develop software applications specifically designed for your business processes.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/software-development",
            },
            {
              title: "Mobile App Development",
              description:
                "Create high-performance mobile apps to engage your customers.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/software-development",
            },
            {
              title: "Web Development",
              description: "Design and build responsive and dynamic websites.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/software-development",
            },
            {
              title: "API Integration",
              description:
                "Seamlessly integrate third-party services with your software using custom APIs.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/digital-and-tech-solutions/software-development",
            },
          ],
        },
      ],
    },
    "final-consultancy": {
      index: [
        {
          type: "hero",
          title: "Final Consultancy",
          subtitle: "Expert Financial Solutions for Your Business",
          imageURL: "/images/hero/final-consultancy.jpg",
        },
      ],
      "comprehensive-financial-advisory-services": [
        {
          type: "hero",
          title: "Comprehensive Financial Advisory Services",
          subtitle:
            "Tailored strategies to optimize financial health and growth.",
          imageURL: "/images/hero/final-consultancy.jpg",
        },
        {
          type: "icon-cards",
          title: "Financial Advisory Expertise",
          subtitle: "Expert Guidance for Financial Success",
          description:
            "Our advisory services provide comprehensive financial insights and strategies to help you make informed decisions and drive sustainable growth.",
          button: "Learn more",
          redirectURL:
            "/services/final-consultancy/comprehensive-financial-advisory-services",
          cards: [
            {
              title: "Wealth Management",
              description:
                "Optimize your assets with our personalized wealth management solutions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/comprehensive-financial-advisory-services",
            },
            {
              title: "Investment Strategies",
              description:
                "Diversify and grow your portfolio with tailored investment strategies.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/comprehensive-financial-advisory-services",
            },
            {
              title: "Tax Optimization",
              description:
                "Minimize your tax liabilities with our strategic planning solutions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/comprehensive-financial-advisory-services",
            },
            {
              title: "Estate Planning",
              description:
                "Ensure your legacy with effective estate planning services.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/comprehensive-financial-advisory-services",
            },
          ],
        },
      ],
      "financial-planning-and-risk-management": [
        {
          type: "hero",
          title: "Financial Planning & Risk Management",
          subtitle:
            "Secure your future with comprehensive risk management solutions.",
          imageURL: "/images/hero/final-consultancy.jpg",
        },
        {
          type: "icon-cards",
          title: "Plan for Financial Security",
          subtitle: "Protect Your Assets and Minimize Risks",
          description:
            "Our financial planning services provide you with a roadmap for future success, while risk management ensures that your assets are safeguarded.",
          button: "Learn more",
          redirectURL:
            "/services/final-consultancy/financial-planning-and-risk-management",
          cards: [
            {
              title: "Retirement Planning",
              description:
                "Plan your retirement with confidence and secure your financial future.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/financial-planning-and-risk-management",
            },
            {
              title: "Risk Assessment",
              description:
                "Evaluate potential risks and develop strategies to mitigate them.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/financial-planning-and-risk-management",
            },
            {
              title: "Insurance Solutions",
              description:
                "Protect your business and personal assets with customized insurance plans.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/financial-planning-and-risk-management",
            },
            {
              title: "Contingency Planning",
              description:
                "Prepare for the unexpected with thorough contingency planning.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/financial-planning-and-risk-management",
            },
          ],
        },
      ],
      "performance-analysis-and-informed-decision-making": [
        {
          type: "hero",
          title: "Performance Analysis & Informed Decision Making",
          subtitle: "Data-driven insights for strategic business decisions.",
          imageURL: "/images/hero/final-consultancy.jpg",
        },
        {
          type: "icon-cards",
          title: "Make Data-Driven Decisions",
          subtitle: "Enhance Performance with Strategic Insights",
          description:
            "We help businesses leverage financial data for performance analysis, ensuring that you can make informed decisions to drive long-term success.",
          button: "Learn more",
          redirectURL:
            "/services/final-consultancy/performance-analysis-and-informed-decision-making",
          cards: [
            {
              title: "Financial Reporting",
              description:
                "Get detailed financial reports to track your business performance.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/performance-analysis-and-informed-decision-making",
            },
            {
              title: "KPI Tracking",
              description:
                "Monitor your key performance indicators for continued business growth.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/performance-analysis-and-informed-decision-making",
            },
            {
              title: "Cost-Benefit Analysis",
              description:
                "Analyze the costs and benefits of projects for better investment decisions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/performance-analysis-and-informed-decision-making",
            },
            {
              title: "Scenario Planning",
              description:
                "Evaluate different business scenarios to prepare for the future.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/performance-analysis-and-informed-decision-making",
            },
          ],
        },
      ],
      "specialised-expertise-in-financial-regulations": [
        {
          type: "hero",
          title: "Specialized Expertise in Financial Regulations",
          subtitle: "Stay compliant with ever-evolving financial regulations.",
          imageURL: "/images/hero/final-consultancy.jpg",
        },
        {
          type: "icon-cards",
          title: "Navigate Complex Regulations",
          subtitle: "Compliance Solutions for Financial Success",
          description:
            "Our regulatory expertise ensures your business stays compliant with the latest financial laws and regulations, avoiding costly penalties and ensuring smooth operations.",
          button: "Learn more",
          redirectURL:
            "/services/final-consultancy/specialised-expertise-in-financial-regulations",
          cards: [
            {
              title: "Compliance Audits",
              description:
                "Ensure regulatory compliance with comprehensive audits.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/specialised-expertise-in-financial-regulations",
            },
            {
              title: "Regulatory Reporting",
              description:
                "Stay on top of regulatory requirements with accurate reporting.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/specialised-expertise-in-financial-regulations",
            },
            {
              title: "Risk and Compliance Management",
              description:
                "Manage regulatory risks with effective compliance strategies.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/specialised-expertise-in-financial-regulations",
            },
            {
              title: "Legal and Regulatory Updates",
              description:
                "Stay informed with the latest updates in financial regulations.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/final-consultancy/specialised-expertise-in-financial-regulations",
            },
          ],
        },
      ],
    },
    "legal-consultancy": {
      index: [
        {
          type: "hero",
          title: "Legal Consultancy",
          subtitle: "MISSING_CONTENT",
          imageURL: "/images/hero/multilingual-solutions.jpg",
        },
      ],
      "document-translation": [
        {
          type: "hero",
          title: "MISSING_CONTENT",
          subtitle: "MISSING_CONTENT",
          imageURL: "/images/hero/multilingual-solutions.jpg",
        },
        {
          type: "icon-cards",
          title: "MISSING_CONTENT",
          subtitle: "MISSING_CONTENT",
          description: "MISSING_CONTENT",
          button: "Learn more",
          redirectURL: "/services/multilingual-solutions/document-translation",
          cards: [
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/document-translation",
            },
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/document-translation",
            },
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/document-translation",
            },
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/document-translation",
            },
          ],
        },
      ],
      "industry-specific-language-solutions": [
        {
          type: "hero",
          title: "MISSING_CONTENT",
          subtitle: "MISSING_CONTENT",
          imageURL: "/images/hero/multilingual-solutions.jpg",
        },
        {
          type: "icon-cards",
          title: "MISSING_CONTENT",
          subtitle: "MISSING_CONTENT",
          description: "MISSING_CONTENT",
          button: "Learn more",
          redirectURL:
            "/services/multilingual-solutions/industry-specific-language-solutions",
          cards: [
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/industry-specific-language-solutions",
            },
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/industry-specific-language-solutions",
            },
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/industry-specific-language-solutions",
            },
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/industry-specific-language-solutions",
            },
          ],
        },
      ],
      interpretation: [
        {
          type: "hero",
          title: "MISSING_CONTENT",
          subtitle: "MISSING_CONTENT",
          imageURL: "/images/hero/multilingual-solutions.jpg",
        },
        {
          type: "icon-cards",
          title: "MISSING_CONTENT",
          subtitle: "MISSING_CONTENT",
          description: "MISSING_CONTENT",
          button: "Learn more",
          redirectURL: "/services/multilingual-solutions/interpretation",
          cards: [
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/services/multilingual-solutions/interpretation",
            },
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/services/multilingual-solutions/interpretation",
            },
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/services/multilingual-solutions/interpretation",
            },
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/services/multilingual-solutions/interpretation",
            },
          ],
        },
      ],
      "mobile-interpretation": [
        {
          type: "hero",
          title: "MISSING_CONTENT",
          subtitle: "MISSING_CONTENT",
          imageURL: "/images/hero/multilingual-solutions.jpg",
        },
        {
          type: "icon-cards",
          title: "MISSING_CONTENT",
          subtitle: "MISSING_CONTENT",
          description: "MISSING_CONTENT",
          button: "Learn more",
          redirectURL: "/services/multilingual-solutions/mobile-interpretation",
          cards: [
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/mobile-interpretation",
            },
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/mobile-interpretation",
            },
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/mobile-interpretation",
            },
            {
              title: "MISSING_CONTENT",
              description: "MISSING_CONTENT",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/mobile-interpretation",
            },
          ],
        },
      ],
    },
    "multilingual-solutions": {
      index: [
        {
          type: "hero",
          title: "Multilingual Solutions",
          subtitle: "Bridging Language Barriers for Global Communication",
          imageURL: "/images/hero/multilingual-solutions.jpg",
        },
      ],
      "document-translation": [
        {
          type: "hero",
          title: "Document Translation Services",
          subtitle: "Precision and Accuracy for Your Written Content",
          imageURL: "/images/hero/multilingual-solutions.jpg",
        },
        {
          type: "icon-cards",
          title: "Comprehensive Document Translation",
          subtitle: "Your Trusted Partner in Multilingual Document Solutions",
          description:
            "Our document translation services ensure your message is conveyed accurately across different languages and cultures. We specialize in various fields, including legal, medical, and technical documents.",
          button: "Learn more",
          redirectURL: "/services/multilingual-solutions/document-translation",
          cards: [
            {
              title: "Legal Document Translation",
              description:
                "Accurate translations for contracts, agreements, and other legal documents.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/document-translation",
            },
            {
              title: "Medical Document Translation",
              description:
                "Expert translation of medical records, patient information, and pharmaceutical documentation.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/document-translation",
            },
            {
              title: "Technical Document Translation",
              description:
                "Precision in translating user manuals, product specifications, and engineering documents.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/document-translation",
            },
            {
              title: "Certified Document Translation",
              description:
                "Official translations for legal and governmental purposes, ensuring compliance with regulations.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/document-translation",
            },
          ],
        },
      ],
      "industry-specific-language-solutions": [
        {
          type: "hero",
          title: "Industry-Specific Language Solutions",
          subtitle: "Tailored Translation and Interpretation for Every Sector",
          imageURL: "/images/hero/multilingual-solutions.jpg",
        },
        {
          type: "icon-cards",
          title: "Specialized Language Services",
          subtitle: "We Speak Your Industry's Language",
          description:
            "Our team understands the nuances and terminologies of various industries, providing tailored solutions for effective communication.",
          button: "Learn more",
          redirectURL:
            "/services/multilingual-solutions/industry-specific-language-solutions",
          cards: [
            {
              title: "Legal Translation",
              description:
                "Expertise in translating legal documents with a focus on accuracy and compliance.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/industry-specific-language-solutions",
            },
            {
              title: "Medical Translation",
              description:
                "High-quality translation of medical texts, ensuring patient safety and regulatory compliance.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/industry-specific-language-solutions",
            },
            {
              title: "Technical Translation",
              description:
                "In-depth understanding of technical jargon and concepts for accurate translations.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/industry-specific-language-solutions",
            },
            {
              title: "Financial Translation",
              description:
                "Precise translation of financial documents, reports, and statements.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/industry-specific-language-solutions",
            },
          ],
        },
      ],
      interpretation: [
        {
          type: "hero",
          title: "Professional Interpretation Services",
          subtitle: "Real-Time Language Solutions for Effective Communication",
          imageURL: "/images/hero/multilingual-solutions.jpg",
        },
        {
          type: "icon-cards",
          title: "Expert Interpretation Solutions",
          subtitle: "Bringing Clarity to Your Conversations",
          description:
            "We offer professional interpretation services to help you communicate effectively in real-time during meetings, conferences, and events.",
          button: "Learn more",
          redirectURL: "/services/multilingual-solutions/interpretation",
          cards: [
            {
              title: "Simultaneous Interpretation",
              description:
                "Real-time interpretation for large events, ensuring seamless communication.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/services/multilingual-solutions/interpretation",
            },
            {
              title: "Consecutive Interpretation",
              description:
                "Effective interpretation for smaller meetings and discussions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/services/multilingual-solutions/interpretation",
            },
            {
              title: "Over-the-Phone Interpretation",
              description:
                "Convenient and immediate interpretation services for urgent situations.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/services/multilingual-solutions/interpretation",
            },
            {
              title: "Video Remote Interpretation",
              description:
                "Visual interpretation services that connect you with interpreters via video calls.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/services/multilingual-solutions/interpretation",
            },
          ],
        },
      ],
      "mobile-interpretation": [
        {
          type: "hero",
          title: "Mobile Interpretation Solutions",
          subtitle: "On-Demand Interpretation at Your Fingertips",
          imageURL: "/images/hero/multilingual-solutions.jpg",
        },
        {
          type: "icon-cards",
          title: "Convenient Mobile Interpretation",
          subtitle: "Interpretation Services Wherever You Are",
          description:
            "Our mobile interpretation services ensure you have access to professional interpreters anytime, anywhere, through our app.",
          button: "Learn more",
          redirectURL: "/services/multilingual-solutions/mobile-interpretation",
          cards: [
            {
              title: "Instant Access",
              description:
                "Get connected with interpreters in real-time through our mobile app.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/mobile-interpretation",
            },
            {
              title: "Multilingual Support",
              description:
                "Access a wide range of languages at your convenience.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/mobile-interpretation",
            },
            {
              title: "24/7 Availability",
              description:
                "Our interpreters are available around the clock for your needs.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/mobile-interpretation",
            },
            {
              title: "User-Friendly Interface",
              description:
                "Seamless navigation and easy access to all features within the app.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/multilingual-solutions/mobile-interpretation",
            },
          ],
        },
      ],
    },
    "training-programme": {
      index: [
        {
          type: "hero",
          title: "Training Programme",
          subtitle: "Empowering Skills for Success",
          imageURL: "/images/hero/training-programme.jpg",
        },
      ],
      "experienced-instructors": [
        {
          type: "hero",
          title: "Learn from the Best",
          subtitle: "Expert Trainers with Real-World Experience",
          imageURL: "/images/hero/training-programme.jpg",
        },
        {
          type: "icon-cards",
          title: "Our Instructors",
          subtitle: "Qualified Professionals",
          description:
            "Our instructors bring a wealth of knowledge and experience to the classroom.",
          button: "Learn more",
          redirectURL: "/services/training-programme/experienced-instructors",
          cards: [
            {
              title: "Industry Experts",
              description:
                "Instructors with hands-on industry experience to provide practical insights.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/training-programme/experienced-instructors",
            },
            {
              title: "Certified Trainers",
              description:
                "All instructors are certified and qualified in their respective fields.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/training-programme/experienced-instructors",
            },
            {
              title: "Personalized Approach",
              description:
                "Tailored training sessions to meet the unique needs of each student.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/training-programme/experienced-instructors",
            },
            {
              title: "Ongoing Support",
              description:
                "Our instructors provide ongoing support even after the training is completed.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/training-programme/experienced-instructors",
            },
          ],
        },
      ],
      "personalized-learning": [
        {
          type: "hero",
          title: "Tailored Learning Experiences",
          subtitle: "Customized Training for Everyone",
          imageURL: "/images/hero/training-programme.jpg",
        },
        {
          type: "icon-cards",
          title: "Why Choose Personalized Learning?",
          subtitle: "Your Learning, Your Way",
          description:
            "Our programs are designed to cater to individual learning styles and paces.",
          button: "Learn more",
          redirectURL: "/services/training-programme/personalized-learning",
          cards: [
            {
              title: "Flexible Scheduling",
              description: "Choose the schedule that fits your life.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/services/training-programme/personalized-learning",
            },
            {
              title: "Customized Content",
              description:
                "Training materials tailored to your specific needs and goals.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/services/training-programme/personalized-learning",
            },
            {
              title: "Individual Attention",
              description:
                "Small class sizes ensure personalized feedback and support.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/services/training-programme/personalized-learning",
            },
            {
              title: "Goal-Oriented Training",
              description:
                "Focus on achieving your specific learning objectives.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/services/training-programme/personalized-learning",
            },
          ],
        },
      ],
      "stay-ahead-of-the-curve": [
        {
          type: "hero",
          title: "Stay Ahead of Industry Trends",
          subtitle: "Continuous Learning for Future Success",
          imageURL: "/images/hero/training-programme.jpg",
        },
        {
          type: "icon-cards",
          title: "Stay Updated",
          subtitle: "Keep Up with the Changing Landscape",
          description:
            "Our training programs focus on the latest trends and skills in the industry.",
          button: "Learn more",
          redirectURL: "/services/training-programme/stay-ahead-of-the-curve",
          cards: [
            {
              title: "Latest Techniques",
              description:
                "Learn the most current methods and technologies in your field.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/training-programme/stay-ahead-of-the-curve",
            },
            {
              title: "Adaptability Training",
              description:
                "Training to help you adapt to evolving industry standards.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/training-programme/stay-ahead-of-the-curve",
            },
            {
              title: "Networking Opportunities",
              description:
                "Connect with industry leaders and peers during our programs.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/training-programme/stay-ahead-of-the-curve",
            },
            {
              title: "Access to Resources",
              description:
                "Gain access to exclusive training materials and resources.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/training-programme/stay-ahead-of-the-curve",
            },
          ],
        },
      ],
      "wide-ranging-expertise": [
        {
          type: "hero",
          title: "Diverse Training Programs",
          subtitle: "Explore a Variety of Fields",
          imageURL: "/images/hero/training-programme.jpg",
        },
        {
          type: "icon-cards",
          title: "Our Expertise",
          subtitle: "Training in Multiple Disciplines",
          description:
            "We offer a wide range of training programs to suit diverse needs.",
          button: "Learn more",
          redirectURL: "/services/training-programme/wide-ranging-expertise",
          cards: [
            {
              title: "Technical Skills",
              description: "Courses in programming, IT, and engineering.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/training-programme/wide-ranging-expertise",
            },
            {
              title: "Soft Skills",
              description:
                "Training in communication, leadership, and teamwork.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/training-programme/wide-ranging-expertise",
            },
            {
              title: "Business Development",
              description:
                "Workshops on sales, marketing, and entrepreneurship.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/training-programme/wide-ranging-expertise",
            },
            {
              title: "Creative Arts",
              description:
                "Courses in design, writing, and multimedia production.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/services/training-programme/wide-ranging-expertise",
            },
          ],
        },
      ],
    },
  },
  "life-at-novelex": {
    index: [
      {
        type: "hero",
        title: "A Journey of Vibrant Experiences",
        subtitle: "A Journey of Vibrant Experiences",
        imageURL: "/images/hero/life-at-novelex.jpg",
      },
      {
        type: "blank",
        title: "Community Engagement",
        description:
          "At Novelex, we believe in giving back to the community. Our community engagement initiatives focus on meaningful interactions and partnerships that create a positive impact.",
        button: "Read more",
        redirectURL: "/life-at-novelex/community-engagement",
      },
      {
        type: "tiles",
        title: "Events and Highlights",
        description:
          "Explore the vibrant events and highlights that shape our culture at Novelex. From celebrations to significant milestones, discover how we come together as a community.",
        imageURL: "/images/tiles/events-and-highlights.jpg",
        tiles: [
          {
            title: "Celebration With Our Community",
            description:
              "Join us in our celebrations that honor our achievements and the people who make it possible.",
            button: "Read more",
            redirectURL:
              "/life-at-novelex/events-and-highlights/celebration-with-our-community",
          },
          {
            title: "Continuous Strides and Milestones",
            description:
              "Learn about the continuous strides we make towards our goals and the milestones we celebrate as a team.",
            button: "Read more",
            redirectURL:
              "/life-at-novelex/events-and-highlights/continuous-strides-and-milestones",
          },
          {
            title: "Insights- Into Significant Achievements",
            description:
              "Gain insights into our significant achievements and the innovative projects that drive our success.",
            button: "Read more",
            redirectURL:
              "/life-at-novelex/events-and-highlights/insights-into-significant-achievements",
          },
          {
            title: "Showcasing Innovations and Developments",
            description:
              "Discover how we showcase our innovations and developments that set us apart in the industry.",
            button: "Read more",
            redirectURL:
              "/life-at-novelex/events-and-highlights/showcasing-innovations-and-developments",
          },
        ],
      },
      {
        type: "blank",
        title: "Experiencing Novelex",
        description:
          "Experience the vibrant culture and dynamic work environment at Novelex. Discover what makes our workplace unique and how we foster growth and collaboration.",
        button: "Read more",
        redirectURL: "/life-at-novelex/experiencing-novelex",
      },
      {
        type: "icon-cards",
        title: "Team and Culture Insights",
        subtitle: "Discover Our Unique Workplace Culture",
        description:
          "Explore the values, stories, and collaborative spirit that define our team at Novelex.",
        button: "Learn more",
        redirectURL: "/life-at-novelex/team-and-culture-insights",
        cards: [
          {
            title: "Collaborative Spirit in Action",
            description:
              "Witness our collaborative spirit in action, where teamwork and creativity come together to achieve remarkable results.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL:
              "/life-at-novelex/team-and-culture-insights/collaborative-spirit-in-action",
          },
          {
            title: "Culture of Inclusivity and Empowerment",
            description:
              "At Novelex, we foster a culture of inclusivity and empowerment, ensuring that every voice is heard and valued.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL:
              "/life-at-novelex/team-and-culture-insights/culture-of-inclusivity-and-empowerment",
          },
          {
            title: "Personal Stories and Experiences",
            description:
              "Explore personal stories and experiences from our team members that highlight our shared values and commitment to growth.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL:
              "/life-at-novelex/team-and-culture-insights/personal-stories-and-experiences",
          },
          {
            title: "Values and Principles at The Core",
            description:
              "Discover the values and principles that lie at the core of Novelex, guiding our actions and decisions every day.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL:
              "/team-and-culture-insights/values-and-principles-at-the-core",
          },
        ],
      },
      {
        type: "blank",
        title: "Wellness and Benefits",
        description:
          "Our commitment to employee wellness includes a range of benefits and programs designed to support your physical and mental health.",
        button: "Read more",
        redirectURL: "/life-at-novelex/wellness-and-benefits",
      },
    ],
    "community-engagement": {
      index: [
        {
          type: "hero",
          title: "Community Engagement",
          subtitle: "Building Stronger Communities Together",
          imageURL: "/images/hero/community-engagement.jpg",
        },
      ],
      "educational-initiatives-and-skill-building-programs": [
        {
          type: "hero",
          title: "Empowering Through Education",
          subtitle: "Developing Skills for a Brighter Future",
          imageURL: "/images/hero/community-engagement.jpg",
        },
        {
          type: "icon-cards",
          title: "Educational Programs",
          subtitle: "Nurturing Growth and Development",
          description:
            "Our educational initiatives focus on equipping individuals with the skills they need to thrive in today's world.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/community-engagement/educational-initiatives-and-skill-building-programs",
          cards: [
            {
              title: "Workshops and Training",
              description: "Hands-on workshops to enhance professional skills.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/educational-initiatives-and-skill-building-programs",
            },
            {
              title: "Mentorship Programs",
              description:
                "Connecting professionals with those seeking guidance.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/educational-initiatives-and-skill-building-programs",
            },
            {
              title: "Scholarship Opportunities",
              description: "Financial support for deserving students.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/educational-initiatives-and-skill-building-programs",
            },
            {
              title: "Online Learning Resources",
              description:
                "Access to a variety of online courses and materials.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/educational-initiatives-and-skill-building-programs",
            },
          ],
        },
      ],
      "employee-volunteerism-and-outreach-programs": [
        {
          type: "hero",
          title: "Making a Difference Together",
          subtitle: "Engaging Employees in Community Service",
          imageURL: "/images/hero/community-engagement.jpg",
        },
        {
          type: "icon-cards",
          title: "Volunteer Programs",
          subtitle: "Join Us in Making an Impact",
          description:
            "Our volunteer programs encourage employees to engage with the community and contribute to meaningful projects.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/community-engagement/employee-volunteerism-and-outreach-programs",
          cards: [
            {
              title: "Community Clean-Up Days",
              description:
                "Join us for monthly clean-up events in local parks.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/employee-volunteerism-and-outreach-programs",
            },
            {
              title: "Food Drives",
              description:
                "Help us collect and distribute food to those in need.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/employee-volunteerism-and-outreach-programs",
            },
            {
              title: "Mentorship Programs",
              description: "Engage with youth through mentoring and support.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/employee-volunteerism-and-outreach-programs",
            },
            {
              title: "Charity Runs and Events",
              description:
                "Participate in runs and events to raise funds for local charities.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/employee-volunteerism-and-outreach-programs",
            },
          ],
        },
      ],
      "environmental-sustainability-projects": [
        {
          type: "hero",
          title: "Commitment to the Planet",
          subtitle: "Sustainable Practices for a Greener Future",
          imageURL: "/images/hero/community-engagement.jpg",
        },
        {
          type: "icon-cards",
          title: "Sustainability Initiatives",
          subtitle: "Protecting Our Environment",
          description:
            "Our sustainability projects focus on minimizing our ecological footprint and promoting environmental stewardship.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/community-engagement/environmental-sustainability-projects",
          cards: [
            {
              title: "Recycling Programs",
              description:
                "Implementing effective recycling initiatives in our offices.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/environmental-sustainability-projects",
            },
            {
              title: "Energy Conservation",
              description:
                "Reducing energy consumption through efficient practices.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/environmental-sustainability-projects",
            },
            {
              title: "Tree Planting Campaigns",
              description: "Join us in planting trees in our local community.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/environmental-sustainability-projects",
            },
            {
              title: "Water Conservation Efforts",
              description: "Initiatives to promote responsible water use.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/environmental-sustainability-projects",
            },
          ],
        },
      ],
      "strategic-partnerships-for-social-impact": [
        {
          type: "hero",
          title: "Collaborating for Change",
          subtitle: "Strategic Partnerships for Greater Impact",
          imageURL: "/images/hero/community-engagement.jpg",
        },
        {
          type: "icon-cards",
          title: "Social Impact Partnerships",
          subtitle: "Working Together for Community Growth",
          description:
            "We collaborate with local organizations to enhance our community impact through strategic partnerships.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/community-engagement/strategic-partnerships-for-social-impact",
          cards: [
            {
              title: "Local Nonprofits",
              description:
                "Partnering with nonprofits to address community needs.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/strategic-partnerships-for-social-impact",
            },
            {
              title: "Educational Institutions",
              description:
                "Collaborating with schools for educational initiatives.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/strategic-partnerships-for-social-impact",
            },
            {
              title: "Government Agencies",
              description:
                "Working with local government for community betterment.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/strategic-partnerships-for-social-impact",
            },
            {
              title: "Corporate Collaborations",
              description:
                "Teaming up with other businesses for joint initiatives.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/community-engagement/strategic-partnerships-for-social-impact",
            },
          ],
        },
      ],
    },
    "events-and-highlights": {
      index: [
        {
          type: "hero",
          title: "Events and Highlights",
          subtitle: "Celebrating our milestones and achievements together.",
          imageURL: "/images/hero/events-and-highlights.jpg",
          isInverted: true,
        },
      ],
      "celebration-with-our-community": [
        {
          type: "hero",
          title: "Celebrating Together",
          subtitle: "Join us as we celebrate our vibrant community.",
          imageURL: "/images/hero/events-and-highlights.jpg",
        },
        {
          type: "icon-cards",
          title: "Community Events",
          subtitle: "Embracing connections and friendships.",
          description:
            "Our community events bring everyone together for fun and connection.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/events-and-highlights/celebration-with-our-community",
          cards: [
            {
              title: "Annual Community Picnic",
              description: "A day of fun, food, and friendship in the park.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/celebration-with-our-community",
            },
            {
              title: "Festive Holiday Celebration",
              description: "Join us for our annual holiday festivities!",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/celebration-with-our-community",
            },
            {
              title: "Community Volunteer Day",
              description: "Give back to the community with us.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/celebration-with-our-community",
            },
            {
              title: "Local Art Showcase",
              description: "Support local artists at our community art fair.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/celebration-with-our-community",
            },
          ],
        },
      ],
      "continuous-strides-and-milestones": [
        {
          type: "hero",
          title: "Milestones Achieved",
          subtitle: "Recognizing our growth and achievements.",
          imageURL: "/images/hero/events-and-highlights.jpg",
        },
        {
          type: "icon-cards",
          title: "Our Progress",
          subtitle: "Celebrating our journey and accomplishments.",
          description:
            "We have reached significant milestones that showcase our dedication.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/events-and-highlights/continuous-strides-and-milestones",
          cards: [
            {
              title: "100th Project Completed",
              description:
                "A celebration of our project management excellence.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/continuous-strides-and-milestones",
            },
            {
              title: "5 Years of Community Service",
              description: "A tribute to our commitment to service.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/continuous-strides-and-milestones",
            },
            {
              title: "Partnership with Local Schools",
              description: "Fostering education through collaboration.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/continuous-strides-and-milestones",
            },
            {
              title: "Sustainability Goals Met",
              description: "Achievements in environmental initiatives.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/continuous-strides-and-milestones",
            },
          ],
        },
      ],
      "insights-into-significant-achievements": [
        {
          type: "hero",
          title: "Significant Achievements",
          subtitle: "Highlighting our impactful moments.",
          imageURL: "/images/hero/events-and-highlights.jpg",
        },
        {
          type: "icon-cards",
          title: "Achievements Overview",
          subtitle: "Discover our proudest moments.",
          description: "We celebrate the milestones that shape our story.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/events-and-highlights/insights-into-significant-achievements",
          cards: [
            {
              title: "Award for Community Impact",
              description: "Recognizing our efforts in community development.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/insights-into-significant-achievements",
            },
            {
              title: "Innovation in Service Delivery",
              description: "How we improved service quality for our clients.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/insights-into-significant-achievements",
            },
            {
              title: "Partnerships that Matter",
              description: "Building relationships for a better future.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/insights-into-significant-achievements",
            },
            {
              title: "Recognition for Sustainability Practices",
              description: "Honoring our commitment to the environment.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/insights-into-significant-achievements",
            },
          ],
        },
      ],
      "showcasing-innovations-and-developments": [
        {
          type: "hero",
          title: "Innovations and Developments",
          subtitle: "Showcasing our latest advancements.",
          imageURL: "/images/hero/events-and-highlights.jpg",
        },
        {
          type: "icon-cards",
          title: "Our Innovations",
          subtitle: "Leading the way with creativity and technology.",
          description:
            "Discover how we're pushing the boundaries of innovation.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/events-and-highlights/showcasing-innovations-and-developments",
          cards: [
            {
              title: "Launch of New Services",
              description: "Expanding our offerings for the community.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/showcasing-innovations-and-developments",
            },
            {
              title: "Technological Upgrades",
              description: "Improving our systems for better efficiency.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/showcasing-innovations-and-developments",
            },
            {
              title: "New Partnerships for Growth",
              description:
                "Collaborating with industry leaders for greater impact.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/showcasing-innovations-and-developments",
            },
            {
              title: "Research and Development Initiatives",
              description: "Investing in future solutions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/events-and-highlights/showcasing-innovations-and-developments",
            },
          ],
        },
      ],
    },
    "experiencing-novelex": {
      index: [
        {
          type: "hero",
          title: "Experiencing Novelex",
          subtitle:
            "Discover the vibrant culture and dynamic environment that makes Novelex a great place to work.",
          imageURL: "/images/hero/experiencing-novelex.jpg",
        },
      ],
      "creativity-and-openness": [
        {
          type: "hero",
          title: "Creativity and Openness",
          subtitle: "Fostering innovation through collaboration.",
          imageURL: "/images/hero/experiencing-novelex.jpg",
        },
        {
          type: "icon-cards",
          title: "A Culture of Innovation",
          subtitle: "Where ideas flourish.",
          description:
            "At Novelex, we encourage our employees to share their ideas and be part of the creative process. Our open environment fosters collaboration and innovation.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/experiencing-novelex/creativity-and-openness",
          cards: [
            {
              title: "Collaborative Spaces",
              description: "Our open offices are designed for teamwork.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/creativity-and-openness",
            },
            {
              title: "Innovation Labs",
              description: "Spaces dedicated to brainstorming and development.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/creativity-and-openness",
            },
            {
              title: "Idea Showcases",
              description: "Employees present their innovative projects.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/creativity-and-openness",
            },
            {
              title: "Feedback Sessions",
              description:
                "Regular meetings to discuss ideas and improvements.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/creativity-and-openness",
            },
          ],
        },
      ],
      "energy-and-enthusiasm-for-success": [
        {
          type: "hero",
          title: "Energy and Enthusiasm for Success",
          subtitle: "Driving success through passion.",
          imageURL: "/images/hero/experiencing-novelex.jpg",
        },
        {
          type: "icon-cards",
          title: "Empowered Team Members",
          subtitle: "Fueling our success.",
          description:
            "Our team is driven by a shared enthusiasm for success. We believe in empowering our employees to achieve their goals.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/experiencing-novelex/energy-and-enthusiasm-for-success",
          cards: [
            {
              title: "Passionate Teams",
              description:
                "Our employees bring energy and enthusiasm to every project.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/energy-and-enthusiasm-for-success",
            },
            {
              title: "Celebrating Wins",
              description: "Recognizing our achievements together.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/energy-and-enthusiasm-for-success",
            },
            {
              title: "Dynamic Projects",
              description: "Engaging tasks that inspire creativity.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/energy-and-enthusiasm-for-success",
            },
            {
              title: "Team Challenges",
              description: "Friendly competitions that boost morale.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/energy-and-enthusiasm-for-success",
            },
          ],
        },
      ],
      "sense-of-purpose-in-everything-we-do": [
        {
          type: "hero",
          title: "Sense of Purpose in Everything We Do",
          subtitle: "Making a difference through our work.",
          imageURL: "/images/hero/experiencing-novelex.jpg",
        },
        {
          type: "icon-cards",
          title: "Driven by Our Values",
          subtitle: "Creating a positive impact.",
          description:
            "At Novelex, our work is guided by a sense of purpose that inspires us to make a difference. We are committed to our community and the environment.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/experiencing-novelex/sense-of-purpose-in-everything-we-do",
          cards: [
            {
              title: "Community Engagement",
              description: "Involving ourselves in local initiatives.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/sense-of-purpose-in-everything-we-do",
            },
            {
              title: "Sustainability Practices",
              description: "Striving for eco-friendly operations.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/sense-of-purpose-in-everything-we-do",
            },
            {
              title: "Employee Volunteering",
              description:
                "Encouraging staff participation in community service.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/sense-of-purpose-in-everything-we-do",
            },
            {
              title: "Social Responsibility",
              description: "Committed to ethical practices.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/sense-of-purpose-in-everything-we-do",
            },
          ],
        },
      ],
      "vibrant-and-diverse-culture": [
        {
          type: "hero",
          title: "Vibrant and Diverse Culture",
          subtitle: "Celebrating our differences.",
          imageURL: "/images/hero/experiencing-novelex.jpg",
        },
        {
          type: "icon-cards",
          title: "Inclusive Environment",
          subtitle: "Valuing diversity.",
          description:
            "Our culture embraces diversity and inclusion, recognizing that different perspectives enhance creativity and innovation.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/experiencing-novelex/vibrant-and-diverse-culture",
          cards: [
            {
              title: "Cultural Celebrations",
              description: "Recognizing and honoring various cultures.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/vibrant-and-diverse-culture",
            },
            {
              title: "Diverse Teams",
              description: "Bringing together unique backgrounds.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/vibrant-and-diverse-culture",
            },
            {
              title: "Inclusive Policies",
              description: "Policies that support all employees.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/vibrant-and-diverse-culture",
            },
            {
              title: "Community Building",
              description: "Creating a sense of belonging for everyone.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/experiencing-novelex/vibrant-and-diverse-culture",
            },
          ],
        },
      ],
    },
    "team-and-culture-insights": {
      index: [
        {
          type: "hero",
          title: "Team and Culture Insights",
          subtitle: "Discover how our values shape a thriving workplace.",
          imageURL: "/images/hero/team-and-culture-insights.jpg",
        },
      ],
      "collaborative-spirit-in-action": [
        {
          type: "hero",
          title: "Collaboration at Its Best",
          subtitle: "Unleashing the power of teamwork for greater results.",
          imageURL: "/images/hero/team-and-culture-insights.jpg",
        },
        {
          type: "icon-cards",
          title: "Working Together",
          subtitle: "Fostering collaboration in every project.",
          description:
            "Our collaborative spirit drives innovation and success. Discover how our teams work together to achieve extraordinary outcomes.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/team-and-culture-insights/collaborative-spirit-in-action",
          cards: [
            {
              title: "Cross-Functional Teams",
              description:
                "Our diverse teams bring unique perspectives to every project.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/collaborative-spirit-in-action",
            },
            {
              title: "Innovative Problem Solving",
              description:
                "Together, we tackle challenges and find creative solutions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/collaborative-spirit-in-action",
            },
            {
              title: "Open Communication",
              description:
                "We believe in transparent dialogue to enhance teamwork.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/collaborative-spirit-in-action",
            },
            {
              title: "Shared Success",
              description: "Celebrating achievements as a unified team.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/collaborative-spirit-in-action",
            },
          ],
        },
      ],
      "culture-of-inclusivity-and-empowerment": [
        {
          type: "hero",
          title: "Empowering Every Voice",
          subtitle: "Creating a culture of inclusivity.",
          imageURL: "/images/hero/team-and-culture-insights.jpg",
        },
        {
          type: "icon-cards",
          title: "Embracing Diversity",
          subtitle: "Cultivating an inclusive environment for all.",
          description:
            "We champion diversity and inclusivity, empowering every individual to contribute their best.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/team-and-culture-insights/culture-of-inclusivity-and-empowerment",
          cards: [
            {
              title: "Inclusive Leadership",
              description:
                "Leaders who prioritize inclusivity in decision-making.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/culture-of-inclusivity-and-empowerment",
            },
            {
              title: "Diverse Perspectives",
              description: "Valuing different backgrounds and experiences.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/culture-of-inclusivity-and-empowerment",
            },
            {
              title: "Empowerment Programs",
              description:
                "Initiatives designed to uplift and support all employees.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/culture-of-inclusivity-and-empowerment",
            },
            {
              title: "Community Engagement",
              description:
                "Connecting with diverse communities outside our organization.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/culture-of-inclusivity-and-empowerment",
            },
          ],
        },
      ],
      "personal-stories-and-experiences": [
        {
          type: "hero",
          title: "Voices of Our Team",
          subtitle: "Personal stories that inspire and connect.",
          imageURL: "/images/hero/team-and-culture-insights.jpg",
        },
        {
          type: "icon-cards",
          title: "Sharing Experiences",
          subtitle: "Every story matters.",
          description:
            "Learn from the personal experiences of our team members and how their journeys shape our culture.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/team-and-culture-insights/personal-stories-and-experiences",
          cards: [
            {
              title: "Employee Spotlights",
              description: "Highlighting unique stories from our diverse team.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/personal-stories-and-experiences",
            },
            {
              title: "Lessons Learned",
              description:
                "Insights gained from personal and professional experiences.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/personal-stories-and-experiences",
            },
            {
              title: "Cultural Celebrations",
              description: "Embracing our diverse traditions and backgrounds.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/personal-stories-and-experiences",
            },
            {
              title: "Impactful Initiatives",
              description: "How individual stories lead to collective growth.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/personal-stories-and-experiences",
            },
          ],
        },
      ],
      "values-and-principles-at-the-core": [
        {
          type: "hero",
          title: "Our Core Values",
          subtitle: "Guiding principles that shape our actions.",
          imageURL: "/images/hero/team-and-culture-insights.jpg",
        },
        {
          type: "icon-cards",
          title: "Living Our Values",
          subtitle: "Principles that drive us forward.",
          description:
            "Our values are the foundation of everything we do. Explore how they inform our decisions and interactions.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/team-and-culture-insights/values-and-principles-at-the-core",
          cards: [
            {
              title: "Integrity",
              description: "Acting with honesty and transparency in all we do.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/values-and-principles-at-the-core",
            },
            {
              title: "Respect",
              description: "Valuing every individual and their contributions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/values-and-principles-at-the-core",
            },
            {
              title: "Innovation",
              description:
                "Encouraging creativity and new ideas for continuous improvement.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/values-and-principles-at-the-core",
            },
            {
              title: "Collaboration",
              description: "Working together to achieve common goals.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/team-and-culture-insights/values-and-principles-at-the-core",
            },
          ],
        },
      ],
    },
    "wellness-and-benefits": {
      index: [
        {
          type: "hero",
          title: "Wellness and Benefits",
          subtitle: "Prioritizing Your Health and Well-Being",
          imageURL: "/images/hero/wellness-and-benefits.jpg",
        },
      ],
      "comprehensive-health-and-wellness-programs": [
        {
          type: "hero",
          title: "Comprehensive Health and Wellness Programs",
          subtitle: "Holistic Support for Your Well-Being",
          imageURL: "/images/hero/wellness-and-benefits.jpg",
        },
        {
          type: "icon-cards",
          title: "Our Wellness Initiatives",
          subtitle: "Investing in Your Health",
          description:
            "Explore a range of health and wellness programs designed to support your overall well-being.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/wellness-and-benefits/comprehensive-health-and-wellness-programs",
          cards: [
            {
              title: "Nutrition Counseling",
              description:
                "Get personalized nutrition plans to meet your health goals.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/comprehensive-health-and-wellness-programs",
            },
            {
              title: "Fitness Programs",
              description:
                "Participate in group classes or one-on-one training sessions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/comprehensive-health-and-wellness-programs",
            },
            {
              title: "Mental Health Support",
              description:
                "Access counseling and therapy services for mental well-being.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/comprehensive-health-and-wellness-programs",
            },
            {
              title: "Wellness Workshops",
              description:
                "Attend workshops on stress management, mindfulness, and more.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/comprehensive-health-and-wellness-programs",
            },
          ],
        },
      ],
      "customized-benefits-packages": [
        {
          type: "hero",
          title: "Customized Benefits Packages",
          subtitle: "Tailored Solutions for Your Needs",
          imageURL: "/images/hero/wellness-and-benefits.jpg",
        },
        {
          type: "icon-cards",
          title: "Personalized Benefits",
          subtitle: "Flexible Options for Every Lifestyle",
          description:
            "Choose from a variety of benefits packages designed to fit your personal and professional lifestyle.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/wellness-and-benefits/customized-benefits-packages",
          cards: [
            {
              title: "Health Insurance Plans",
              description:
                "Explore a range of health insurance options tailored to your needs.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/customized-benefits-packages",
            },
            {
              title: "Retirement Savings Plans",
              description:
                "Plan for your future with our comprehensive retirement options.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/customized-benefits-packages",
            },
            {
              title: "Paid Time Off",
              description:
                "Enjoy a generous paid time off policy to recharge and relax.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/customized-benefits-packages",
            },
            {
              title: "Employee Discounts",
              description:
                "Access exclusive discounts on a variety of services and products.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/customized-benefits-packages",
            },
          ],
        },
      ],
      "professional-development-opportunities": [
        {
          type: "hero",
          title: "Professional Development Opportunities",
          subtitle: "Invest in Your Career Growth",
          imageURL: "/images/hero/wellness-and-benefits.jpg",
        },
        {
          type: "icon-cards",
          title: "Grow with Us",
          subtitle: "Enhance Your Skills and Knowledge",
          description:
            "Our commitment to your professional growth is reflected in the training and development programs we offer.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/wellness-and-benefits/professional-development-opportunities",
          cards: [
            {
              title: "Workshops and Seminars",
              description:
                "Participate in hands-on workshops to sharpen your skills.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/professional-development-opportunities",
            },
            {
              title: "Mentorship Programs",
              description:
                "Receive guidance from experienced professionals in your field.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/professional-development-opportunities",
            },
            {
              title: "Online Courses",
              description:
                "Access a wide range of online courses to learn at your own pace.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/professional-development-opportunities",
            },
            {
              title: "Certification Programs",
              description:
                "Get certified in your area of expertise to advance your career.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/professional-development-opportunities",
            },
          ],
        },
      ],
      "work-life-balance": [
        {
          type: "hero",
          title: "Work-Life Balance",
          subtitle: "Achieve Harmony in Your Life",
          imageURL: "/images/hero/wellness-and-benefits.jpg",
        },
        {
          type: "icon-cards",
          title: "Balanced Lifestyle",
          subtitle: "Support for Your Well-Being",
          description:
            "We prioritize work-life balance to ensure you can thrive both personally and professionally.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/wellness-and-benefits/work-life-balance",
          cards: [
            {
              title: "Flexible Work Hours",
              description:
                "Enjoy flexible scheduling options that fit your lifestyle.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/work-life-balance",
            },
            {
              title: "Remote Work Options",
              description:
                "Take advantage of our remote work policy for better flexibility.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/work-life-balance",
            },
            {
              title: "Family-Friendly Policies",
              description:
                "Policies that support families and promote a healthy work-life balance.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/work-life-balance",
            },
            {
              title: "Wellness Days",
              description:
                "Take dedicated wellness days to focus on your mental health.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/life-at-novelex/wellness-and-benefits/work-life-balance",
            },
          ],
        },
      ],
    },
  },
  careers: {
    index: [
      {
        type: "hero",
        title: "Careers",
        subtitle: "Build Your Career At Novelex",
        imageURL: "/images/hero/careers.jpg",
      },
      {
        type: "blank",
        title: "Explore Career Opportunities",
        description:
          "Join our diverse team and explore a wide range of career opportunities that align with your skills and aspirations. We are committed to fostering a collaborative and innovative work environment.",
        button: "Read more",
        redirectURL: "/careers/explore-career-opportunities",
      },
      {
        type: "tiles",
        title: "Find a Job",
        description:
          "Discover job openings across various sectors and find the perfect role that matches your expertise and interests.",
        imageURL: "/images/tiles/find-a-job.jpg",
        tiles: [
          {
            title: "Digital and Tech Jobs",
            description:
              "Explore exciting opportunities in the digital and technology sectors, where innovation meets creativity.",
            button: "Read more",
            redirectURL: "/careers/find-a-job/digital-and-tech-jobs",
          },
          {
            title: "Finance Jobs",
            description:
              "Join our finance team and contribute to strategic decision-making and financial growth.",
            button: "Read more",
            redirectURL: "/careers/find-a-job/finance-jobs",
          },
          {
            title: "Language Jobs",
            description:
              "Utilize your linguistic skills in roles that promote effective communication across cultures.",
            button: "Read more",
            redirectURL: "/careers/find-a-job/language-jobs",
          },
          {
            title: "Legal Jobs",
            description:
              "Be part of our legal team, offering insights and support in navigating complex legal landscapes.",
            button: "Read more",
            redirectURL: "/careers/find-a-job/legal-jobs",
          },
          {
            title: "Trainer Jobs",
            description:
              "Help others develop their skills and knowledge as part of our training and development team.",
            button: "Read more",
            redirectURL: "/careers/find-a-job/trainer-jobs",
          },
        ],
      },
      {
        type: "blank",
        title: "Join Our Team",
        description:
          "We are looking for talented individuals who are passionate about making a difference. Join us in creating solutions that matter.",
        button: "Read more",
        redirectURL: "/careers/join-our-team",
      },
      {
        type: "icon-cards",
        title: "Personal and Professional Growth",
        subtitle: "Investing in Your Future",
        description:
          "We believe in continuous development and offer a variety of programs to enhance your skills and career trajectory.",
        button: "Learn more",
        redirectURL: "/careers/personal-and-professional-development",
        cards: [
          {
            title: "Coaching",
            description:
              "Our coaching programs are designed to help you identify your goals and develop strategies to achieve them.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL:
              "/careers/personal-and-professional-development/coaching",
          },
          {
            title: "Investing in Your Growth",
            description:
              "We are committed to investing in your professional growth through training, workshops, and resources.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL:
              "/careers/personal-and-professional-development/investing-in-your-growth",
          },
          {
            title: "Mentoring",
            description:
              "Our mentoring programs connect you with experienced professionals who can guide you on your career journey.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL:
              "/careers/personal-and-professional-development/mentoring",
          },
          {
            title: "Talent Management",
            description:
              "We focus on recognizing and nurturing talent within our organization to build a strong future.",
            iconURL: "logo",
            button: "Learn more",
            redirectURL:
              "/personal-and-professional-development/talent-management",
          },
        ],
      },
      {
        type: "blank",
        title: "Where We Hire",
        description:
          "Discover the locations where we are hiring and learn more about our diverse teams across the globe.",
        button: "Read more",
        redirectURL: "/careers/where-we-hire",
      },
    ],
    "become-a-trainer": {
      index: [
        {
          type: "hero",
          title: "Become a Trainer",
          subtitle:
            "Join us in empowering others to reach their full potential.",
          imageURL: "/images/hero/become-a-trainer.jpg",
        },
      ],
      "contribute-to-professional-development-programs": [
        {
          type: "hero",
          title: "Contribute to Professional Development Programs",
          subtitle: "Share your expertise and help others grow.",
          imageURL: "/images/hero/become-a-trainer.jpg",
        },
        {
          type: "icon-cards",
          title: "Engage with Future Leaders",
          subtitle: "Your knowledge can shape careers.",
          description:
            "By contributing to our professional development programs, you can play a vital role in mentoring and developing the next generation of professionals.",
          button: "Learn more",
          redirectURL:
            "/careers/become-a-trainer/contribute-to-professional-development-programs",
          cards: [
            {
              title: "Mentorship Opportunities",
              description:
                "Provide guidance and support to individuals looking to enhance their skills.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/become-a-trainer/contribute-to-professional-development-programs",
            },
            {
              title: "Workshop Facilitation",
              description:
                "Lead engaging workshops that empower participants to develop new competencies.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/become-a-trainer/contribute-to-professional-development-programs",
            },
            {
              title: "Guest Speaking",
              description:
                "Share your experiences and insights as a guest speaker at our events.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/become-a-trainer/contribute-to-professional-development-programs",
            },
            {
              title: "Curriculum Development",
              description:
                "Contribute to the creation of training materials and programs tailored to industry needs.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/become-a-trainer/contribute-to-professional-development-programs",
            },
          ],
        },
      ],
      "grow-your-career-by-empowering-others": [
        {
          type: "hero",
          title: "Grow Your Career by Empowering Others",
          subtitle:
            "Elevate your professional journey while making a difference.",
          imageURL: "/images/hero/become-a-trainer.jpg",
        },
        {
          type: "icon-cards",
          title: "Empower Through Education",
          subtitle: "Foster growth in others while advancing your career.",
          description:
            "As a trainer, you will not only enhance your own skills but also create impactful learning experiences for others.",
          button: "Learn more",
          redirectURL:
            "/careers/become-a-trainer/grow-your-career-by-empowering-others",
          cards: [
            {
              title: "Professional Growth",
              description:
                "Develop your leadership and communication skills as you guide others.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/become-a-trainer/grow-your-career-by-empowering-others",
            },
            {
              title: "Networking Opportunities",
              description:
                "Connect with like-minded professionals and expand your network.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/become-a-trainer/grow-your-career-by-empowering-others",
            },
            {
              title: "Skill Development",
              description:
                "Gain new skills and experiences that can enhance your career trajectory.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/become-a-trainer/grow-your-career-by-empowering-others",
            },
            {
              title: "Recognition and Impact",
              description:
                "Earn recognition for your contributions while making a lasting impact on others’ careers.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/become-a-trainer/grow-your-career-by-empowering-others",
            },
          ],
        },
      ],
      "shape-the-learning-experience": [
        {
          type: "hero",
          title: "Shape the Learning Experience",
          subtitle: "Design impactful training sessions that foster growth.",
          imageURL: "/images/hero/become-a-trainer.jpg",
        },
        {
          type: "icon-cards",
          title: "Craft Engaging Content",
          subtitle: "Create memorable learning experiences.",
          description:
            "As a trainer, you will have the opportunity to develop and deliver training programs that resonate with learners.",
          button: "Learn more",
          redirectURL:
            "/careers/become-a-trainer/shape-the-learning-experience",
          cards: [
            {
              title: "Curriculum Design",
              description:
                "Design engaging training materials tailored to learner needs.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/become-a-trainer/shape-the-learning-experience",
            },
            {
              title: "Interactive Learning",
              description:
                "Utilize innovative teaching methods to engage participants actively.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/become-a-trainer/shape-the-learning-experience",
            },
            {
              title: "Feedback and Improvement",
              description:
                "Gather feedback to continually enhance training effectiveness.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/become-a-trainer/shape-the-learning-experience",
            },
            {
              title: "Assessing Learning Outcomes",
              description:
                "Evaluate and measure the success of training programs.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/become-a-trainer/shape-the-learning-experience",
            },
          ],
        },
      ],
      "share-your-expertise": [
        {
          type: "hero",
          title: "Share Your Expertise",
          subtitle: "Be a part of our vibrant learning community.",
          imageURL: "/images/hero/become-a-trainer.jpg",
        },
        {
          type: "icon-cards",
          title: "Connect and Inspire",
          subtitle: "Make a lasting impact on learners.",
          description:
            "Share your knowledge and experiences with others in our community.",
          button: "Learn more",
          redirectURL: "/careers/become-a-trainer/share-your-expertise",
          cards: [
            {
              title: "Knowledge Sharing",
              description: "Share insights and best practices with learners.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/become-a-trainer/share-your-expertise",
            },
            {
              title: "Community Engagement",
              description:
                "Join a network of professionals dedicated to continuous learning.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/become-a-trainer/share-your-expertise",
            },
            {
              title: "Personal Growth",
              description: "Enhance your own understanding by teaching others.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/become-a-trainer/share-your-expertise",
            },
            {
              title: "Inspiring Future Generations",
              description:
                "Help shape the careers of those following in your footsteps.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/become-a-trainer/share-your-expertise",
            },
          ],
        },
      ],
    },
    "explore-career-opportunities": {
      index: [
        {
          type: "hero",
          title: "Explore Career Opportunities",
          subtitle:
            "Discover a world of possibilities and take the next step in your career journey.",
          imageURL: "/images/hero/explore-career-opportunities.jpg",
        },
      ],
      "collaborate-and-soar": [
        {
          type: "hero",
          title: "Collaborate and Soar",
          subtitle: "Teamwork makes the dream work!",
          imageURL: "/images/hero/explore-career-opportunities.jpg",
        },
        {
          type: "icon-cards",
          title: "Join a Team of Innovators",
          subtitle: "Work with passionate people.",
          description:
            "Join our dynamic team where collaboration and innovation are at the heart of everything we do. Together, we can achieve great things!",
          button: "Learn more",
          redirectURL:
            "/careers/explore-career-opportunities/collaborate-and-soar",
          cards: [
            {
              title: "Team Projects",
              description:
                "Engage in collaborative projects that challenge your creativity.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/collaborate-and-soar",
            },
            {
              title: "Diverse Teams",
              description:
                "Work with a diverse group of professionals from various backgrounds.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/collaborate-and-soar",
            },
            {
              title: "Skill Sharing",
              description:
                "Share skills and learn from others in a supportive environment.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/collaborate-and-soar",
            },
            {
              title: "Networking Opportunities",
              description:
                "Expand your professional network through collaboration.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/collaborate-and-soar",
            },
          ],
        },
      ],
      "craft-your-career-story": [
        {
          type: "hero",
          title: "Craft Your Career Story",
          subtitle: "Your journey starts here.",
          imageURL: "/images/hero/explore-career-opportunities.jpg",
        },
        {
          type: "icon-cards",
          title: "Build Your Unique Path",
          subtitle: "Shape your future by following your passion.",
          description:
            "Every career is a story waiting to be written. With us, you can shape your narrative and achieve your professional goals.",
          button: "Learn more",
          redirectURL:
            "/careers/explore-career-opportunities/craft-your-career-story",
          cards: [
            {
              title: "Personal Development",
              description: "Focus on your personal and professional growth.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/craft-your-career-story",
            },
            {
              title: "Mentorship Programs",
              description: "Receive guidance from experienced professionals.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/craft-your-career-story",
            },
            {
              title: "Skill Development",
              description:
                "Enhance your skills through various learning opportunities.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/craft-your-career-story",
            },
            {
              title: "Career Workshops",
              description:
                "Participate in workshops that equip you for the future.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/craft-your-career-story",
            },
          ],
        },
      ],
      "discover-your-niche": [
        {
          type: "hero",
          title: "Discover Your Niche",
          subtitle: "Find where you truly belong.",
          imageURL: "/images/hero/explore-career-opportunities.jpg",
        },
        {
          type: "icon-cards",
          title: "Uncover Your Passion",
          subtitle: "Explore various career paths.",
          description:
            "The right niche can lead to a fulfilling career. Let us help you discover where your interests meet your skills.",
          button: "Learn more",
          redirectURL:
            "/careers/explore-career-opportunities/discover-your-niche",
          cards: [
            {
              title: "Career Assessments",
              description: "Utilize assessments to identify your strengths.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/discover-your-niche",
            },
            {
              title: "Industry Insights",
              description:
                "Gain insights into various industries to find your fit.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/discover-your-niche",
            },
            {
              title: "Networking Events",
              description:
                "Connect with professionals in your area of interest.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/discover-your-niche",
            },
            {
              title: "Internship Opportunities",
              description: "Explore internships to gain hands-on experience.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/discover-your-niche",
            },
          ],
        },
      ],
      "innovate-thrive-succeed": [
        {
          type: "hero",
          title: "Innovate, Thrive, Succeed",
          subtitle: "Empower your future.",
          imageURL: "/images/hero/explore-career-opportunities.jpg",
        },
        {
          type: "icon-cards",
          title: "Drive Change in Your Career",
          subtitle: "Become a leader in innovation.",
          description:
            "Harness your creativity and skills to innovate and thrive in your career. Our supportive environment fosters success.",
          button: "Learn more",
          redirectURL:
            "/careers/explore-career-opportunities/innovate-thrive-succeed",
          cards: [
            {
              title: "Creative Solutions",
              description: "Learn how to think outside the box.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/innovate-thrive-succeed",
            },
            {
              title: "Leadership Development",
              description: "Develop your leadership skills with our programs.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/innovate-thrive-succeed",
            },
            {
              title: "Sustainable Practices",
              description: "Explore sustainable practices in your field.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/innovate-thrive-succeed",
            },
            {
              title: "Success Stories",
              description:
                "Get inspired by success stories from our team members.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/explore-career-opportunities/innovate-thrive-succeed",
            },
          ],
        },
      ],
    },
    "find-a-job": {
      index: [
        {
          type: "hero",
          title: "Find a Job",
          subtitle:
            "Discover exciting career opportunities tailored to your skills and passions.",
          imageURL: "/images/hero/find-a-job.jpg",
        },
      ],
      "digital-and-tech-jobs": [
        {
          type: "hero",
          title: "Digital and Tech Jobs",
          subtitle:
            "Embrace the future with dynamic roles in technology and innovation.",
          imageURL: "/images/hero/find-a-job.jpg",
        },
        {
          type: "icon-cards",
          title: "Join the Digital Revolution",
          subtitle: "Explore various roles in the tech industry.",
          description:
            "From software development to data analysis, find the right job that matches your tech skills and aspirations.",
          button: "Learn more",
          redirectURL: "/careers/find-a-job/digital-and-tech-jobs",
          cards: [
            {
              title: "Software Engineer",
              description:
                "Develop software solutions that drive business success.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/digital-and-tech-jobs",
            },
            {
              title: "Data Analyst",
              description: "Transform data into actionable insights.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/digital-and-tech-jobs",
            },
            {
              title: "UX/UI Designer",
              description:
                "Create user-friendly designs for digital platforms.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/digital-and-tech-jobs",
            },
            {
              title: "Cybersecurity Specialist",
              description: "Protect organizations from digital threats.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/digital-and-tech-jobs",
            },
          ],
        },
      ],
      "finance-jobs": [
        {
          type: "hero",
          title: "Finance Jobs",
          subtitle:
            "Shape the financial future with strategic insights and analysis.",
          imageURL: "/images/hero/find-a-job.jpg",
        },
        {
          type: "icon-cards",
          title: "Build Your Career in Finance",
          subtitle: "Explore diverse roles in the financial sector.",
          description:
            "Whether you’re interested in investment banking, accounting, or financial planning, find your path in finance.",
          button: "Learn more",
          redirectURL: "/careers/find-a-job/finance-jobs",
          cards: [
            {
              title: "Financial Analyst",
              description:
                "Analyze financial data to guide investment decisions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/finance-jobs",
            },
            {
              title: "Accountant",
              description: "Manage financial records and ensure compliance.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/finance-jobs",
            },
            {
              title: "Investment Banker",
              description: "Advise clients on capital raising and mergers.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/finance-jobs",
            },
            {
              title: "Financial Planner",
              description:
                "Help clients plan their financial futures effectively.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/finance-jobs",
            },
          ],
        },
      ],
      "language-jobs": [
        {
          type: "hero",
          title: "Language Jobs",
          subtitle:
            "Utilize your language skills in diverse and rewarding roles.",
          imageURL: "/images/hero/find-a-job.jpg",
        },
        {
          type: "icon-cards",
          title: "Unlock Opportunities with Language Proficiency",
          subtitle: "Explore roles that value your language skills.",
          description:
            "From translation to teaching, discover a variety of careers that leverage your multilingual abilities.",
          button: "Learn more",
          redirectURL: "/careers/find-a-job/language-jobs",
          cards: [
            {
              title: "Translator",
              description:
                "Convert written material from one language to another.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/language-jobs",
            },
            {
              title: "Language Teacher",
              description: "Teach language skills to students of all ages.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/language-jobs",
            },
            {
              title: "Interpreter",
              description: "Provide real-time translation services.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/language-jobs",
            },
            {
              title: "Localization Specialist",
              description: "Adapt content for specific cultures and regions.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/language-jobs",
            },
          ],
        },
      ],
      "legal-jobs": [
        {
          type: "hero",
          title: "Legal Jobs",
          subtitle:
            "Navigate the complexities of law with a fulfilling career.",
          imageURL: "/images/hero/find-a-job.jpg",
        },
        {
          type: "icon-cards",
          title: "Pursue a Career in Law",
          subtitle: "Explore diverse roles in the legal field.",
          description:
            "Whether you’re looking to become a lawyer, paralegal, or legal advisor, find your niche in the legal profession.",
          button: "Learn more",
          redirectURL: "/careers/find-a-job/legal-jobs",
          cards: [
            {
              title: "Attorney",
              description:
                "Represent clients in legal matters and advocate for their rights.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/legal-jobs",
            },
            {
              title: "Paralegal",
              description:
                "Assist lawyers in preparing cases and legal documentation.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/legal-jobs",
            },
            {
              title: "Legal Consultant",
              description: "Provide expert advice on legal matters.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/legal-jobs",
            },
            {
              title: "Compliance Officer",
              description:
                "Ensure organizational adherence to laws and regulations.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/legal-jobs",
            },
          ],
        },
      ],
      "trainer-jobs": [
        {
          type: "hero",
          title: "Trainer Jobs",
          subtitle: "Share your knowledge and skills with others.",
          imageURL: "/images/hero/find-a-job.jpg",
        },
        {
          type: "icon-cards",
          title: "Become a Trainer",
          subtitle: "Explore various roles in training and development.",
          description:
            "Whether you’re focused on corporate training, fitness, or education, find a rewarding role that helps others grow.",
          button: "Learn more",
          redirectURL: "/careers/find-a-job/trainer-jobs",
          cards: [
            {
              title: "Corporate Trainer",
              description:
                "Design and deliver training programs for employees.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/trainer-jobs",
            },
            {
              title: "Fitness Trainer",
              description:
                "Guide individuals towards their health and fitness goals.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/trainer-jobs",
            },
            {
              title: "Academic Trainer",
              description:
                "Provide educational support and training to students.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/trainer-jobs",
            },
            {
              title: "Technical Trainer",
              description:
                "Teach technical skills and knowledge to professionals.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/find-a-job/trainer-jobs",
            },
          ],
        },
      ],
    },
    "join-our-team": {
      index: [
        {
          type: "hero",
          title: "Join Our Team",
          subtitle:
            "Be part of a community where your skills make a difference.",
          imageURL: "/images/hero/join-our-team.jpg",
        },
      ],
      "embrace-team-synergy-and-collaboration": [
        {
          type: "hero",
          title: "Embrace Team Synergy",
          subtitle: "Collaboration is at the heart of our success.",
          imageURL: "/images/hero/join-our-team.jpg",
        },
        {
          type: "icon-cards",
          title: "Together We Achieve More",
          subtitle: "Foster a culture of teamwork and innovation.",
          description:
            "Join us in creating an environment where collaboration leads to remarkable outcomes.",
          button: "Learn more",
          redirectURL:
            "/careers/join-our-team/embrace-team-synergy-and-collaboration",
          cards: [
            {
              title: "Team Workshops",
              description:
                "Engage in workshops that enhance collaboration skills.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/join-our-team/embrace-team-synergy-and-collaboration",
            },
            {
              title: "Cross-Functional Projects",
              description:
                "Work on diverse projects across different departments.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/join-our-team/embrace-team-synergy-and-collaboration",
            },
            {
              title: "Mentorship Programs",
              description:
                "Benefit from mentorship opportunities to grow your skills.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/join-our-team/embrace-team-synergy-and-collaboration",
            },
            {
              title: "Celebrating Success",
              description:
                "Join us in celebrating team achievements and milestones.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/join-our-team/embrace-team-synergy-and-collaboration",
            },
          ],
        },
      ],
      "forge-connections-in-a-supportive-work-community": [
        {
          type: "hero",
          title: "Forge Connections",
          subtitle: "Join a community that supports and inspires you.",
          imageURL: "/images/hero/join-our-team.jpg",
        },
        {
          type: "icon-cards",
          title: "Build Lasting Relationships",
          subtitle: "Connect with colleagues who share your passion.",
          description:
            "Become part of a work environment that values connections and support.",
          button: "Learn more",
          redirectURL:
            "/careers/join-our-team/forge-connections-in-a-supportive-work-community",
          cards: [
            {
              title: "Social Events",
              description:
                "Participate in team-building and networking events.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/join-our-team/forge-connections-in-a-supportive-work-community",
            },
            {
              title: "Support Groups",
              description:
                "Join support groups for shared experiences and growth.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/join-our-team/forge-connections-in-a-supportive-work-community",
            },
            {
              title: "Volunteer Opportunities",
              description: "Engage in community service with your colleagues.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/join-our-team/forge-connections-in-a-supportive-work-community",
            },
            {
              title: "Feedback Sessions",
              description:
                "Contribute to a culture of open communication and feedback.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/join-our-team/forge-connections-in-a-supportive-work-community",
            },
          ],
        },
      ],
      "join-a-global-team": [
        {
          type: "hero",
          title: "Join a Global Team",
          subtitle: "Collaborate with diverse talents from around the world.",
          imageURL: "/images/hero/join-our-team.jpg",
        },
        {
          type: "icon-cards",
          title: "Embrace Diversity",
          subtitle: "Work in an inclusive and multicultural environment.",
          description:
            "Join us to work alongside professionals from various backgrounds and cultures.",
          button: "Learn more",
          redirectURL: "/careers/join-our-team/join-a-global-team",
          cards: [
            {
              title: "International Collaboration",
              description:
                "Work on projects with teams across different countries.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/join-our-team/join-a-global-team",
            },
            {
              title: "Cultural Exchange Programs",
              description:
                "Experience different cultures through exchange initiatives.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/join-our-team/join-a-global-team",
            },
            {
              title: "Global Networking",
              description: "Build a global network of professional contacts.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/join-our-team/join-a-global-team",
            },
            {
              title: "Remote Work Flexibility",
              description:
                "Enjoy flexible working arrangements from anywhere in the world.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/join-our-team/join-a-global-team",
            },
          ],
        },
      ],
      "team-growth-is-personal-growth": [
        {
          type: "hero",
          title: "Team Growth is Personal Growth",
          subtitle:
            "Develop your skills while contributing to the team's success.",
          imageURL: "/images/hero/join-our-team.jpg",
        },
        {
          type: "icon-cards",
          title: "Invest in Your Future",
          subtitle: "Grow both personally and professionally within our team.",
          description:
            "Join us to access opportunities for continuous learning and development.",
          button: "Learn more",
          redirectURL: "/careers/join-our-team/team-growth-is-personal-growth",
          cards: [
            {
              title: "Professional Development Workshops",
              description: "Attend workshops designed to enhance your skills.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/join-our-team/team-growth-is-personal-growth",
            },
            {
              title: "Career Advancement Opportunities",
              description:
                "Take advantage of programs aimed at promoting internal talent.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/join-our-team/team-growth-is-personal-growth",
            },
            {
              title: "Skill Development Resources",
              description: "Access resources to help you develop new skills.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/join-our-team/team-growth-is-personal-growth",
            },
            {
              title: "Regular Performance Reviews",
              description:
                "Receive constructive feedback to support your growth.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/join-our-team/team-growth-is-personal-growth",
            },
          ],
        },
      ],
    },
    "personal-and-professional-development": {
      index: [
        {
          type: "hero",
          title: "Personal and Professional Development",
          subtitle:
            "Unlock your potential through continuous learning and growth.",
          imageURL: "/images/hero/personal-and-professional-development.jpg",
        },
      ],
      coaching: [
        {
          type: "hero",
          title: "Empower Your Journey with Coaching",
          subtitle: "One-on-one guidance to help you achieve your goals.",
          imageURL: "/images/hero/personal-and-professional-development.jpg",
        },
        {
          type: "icon-cards",
          title: "Personalized Coaching Sessions",
          subtitle: "Tailored approaches for individual growth.",
          description:
            "Our coaching services are designed to help you identify your strengths and areas for improvement. Work with experienced coaches to set actionable goals and develop the skills you need to succeed.",
          button: "Learn more",
          redirectURL:
            "/careers/personal-and-professional-development/coaching",
          cards: [
            {
              title: "Goal Setting",
              description: "Learn how to set realistic and achievable goals.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/coaching",
            },
            {
              title: "Skill Development",
              description: "Enhance your skills with targeted coaching.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/coaching",
            },
            {
              title: "Feedback and Growth",
              description: "Receive constructive feedback to foster growth.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/coaching",
            },
            {
              title: "Career Advancement",
              description: "Strategies to help you advance in your career.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/coaching",
            },
          ],
        },
      ],
      "investing-in-your-growth": [
        {
          type: "hero",
          title: "Invest in Your Growth",
          subtitle:
            "Take the initiative for your personal and professional development.",
          imageURL: "/images/hero/personal-and-professional-development.jpg",
        },
        {
          type: "icon-cards",
          title: "Commit to Lifelong Learning",
          subtitle: "Empower yourself with knowledge and skills.",
          description:
            "We believe in investing in our team members through various learning opportunities, including workshops, courses, and seminars.",
          button: "Learn more",
          redirectURL:
            "/careers/personal-and-professional-development/investing-in-your-growth",
          cards: [
            {
              title: "Workshops",
              description:
                "Participate in hands-on workshops to build new skills.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/investing-in-your-growth",
            },
            {
              title: "Online Courses",
              description:
                "Access a wide range of online courses to learn at your own pace.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/investing-in-your-growth",
            },
            {
              title: "Seminars",
              description: "Join expert-led seminars on various topics.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/investing-in-your-growth",
            },
            {
              title: "Mentorship Programs",
              description:
                "Engage in mentorship programs for personal development.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/investing-in-your-growth",
            },
          ],
        },
      ],
      mentoring: [
        {
          type: "hero",
          title: "Mentoring for Success",
          subtitle: "Learn from experienced professionals.",
          imageURL: "/images/hero/personal-and-professional-development.jpg",
        },
        {
          type: "icon-cards",
          title: "Guidance from Experienced Mentors",
          subtitle: "Connect with mentors who can guide your career.",
          description:
            "Our mentoring program pairs you with seasoned professionals to help you navigate your career path and develop essential skills.",
          button: "Learn more",
          redirectURL:
            "/careers/personal-and-professional-development/mentoring",
          cards: [
            {
              title: "Pairing with Mentors",
              description:
                "Get matched with mentors in your field of interest.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/mentoring",
            },
            {
              title: "Networking Opportunities",
              description:
                "Expand your professional network through mentorship.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/mentoring",
            },
            {
              title: "Skill Enhancement",
              description:
                "Learn new skills and gain valuable insights from your mentor.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/mentoring",
            },
            {
              title: "Career Guidance",
              description:
                "Receive guidance on career advancement and opportunities.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/mentoring",
            },
          ],
        },
      ],
      "talent-management": [
        {
          type: "hero",
          title: "Talent Management Strategies",
          subtitle: "Harnessing talent for organizational success.",
          imageURL: "/images/hero/personal-and-professional-development.jpg",
        },
        {
          type: "icon-cards",
          title: "Maximizing Employee Potential",
          subtitle: "Strategies to engage and retain talent.",
          description:
            "Our talent management program focuses on identifying high-potential employees and providing them with the resources they need to thrive.",
          button: "Learn more",
          redirectURL:
            "/careers/personal-and-professional-development/talent-management",
          cards: [
            {
              title: "Performance Evaluations",
              description: "Regular assessments to guide employee development.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/talent-management",
            },
            {
              title: "Succession Planning",
              description:
                "Prepare for the future by identifying and nurturing future leaders.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/talent-management",
            },
            {
              title: "Career Pathing",
              description: "Assist employees in mapping their career paths.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/talent-management",
            },
            {
              title: "Engagement Strategies",
              description:
                "Implement strategies to enhance employee engagement and satisfaction.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL:
                "/careers/personal-and-professional-development/talent-management",
            },
          ],
        },
      ],
    },
    "where-we-hire": {
      index: [
        {
          type: "hero",
          title: "Where We Hire",
          subtitle:
            "Explore our global presence and find opportunities near you.",
          imageURL: "/images/hero/where-we-hire.jpg",
        },
      ],
      "explore-novelex-worldwide": [
        {
          type: "hero",
          title: "Explore Novelex Worldwide",
          subtitle:
            "Discover our locations and job opportunities across the globe.",
          imageURL: "/images/hero/where-we-hire.jpg",
        },
        {
          type: "icon-cards",
          title: "Global Opportunities Await",
          subtitle: "Join us in various countries around the world.",
          description:
            "Novelex has a wide range of locations offering diverse career opportunities. Explore our offices and see where you could fit in.",
          button: "Learn more",
          redirectURL: "/careers/where-we-hire/explore-novelex-worldwide",
          cards: [
            {
              title: "North America",
              description:
                "Find opportunities in major cities across the USA and Canada.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/explore-novelex-worldwide",
            },
            {
              title: "Europe",
              description: "Explore careers in our vibrant European offices.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/explore-novelex-worldwide",
            },
            {
              title: "Asia",
              description:
                "Join our teams in fast-growing markets across Asia.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/explore-novelex-worldwide",
            },
            {
              title: "Latin America",
              description:
                "Be part of our expanding presence in Latin America.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/explore-novelex-worldwide",
            },
          ],
        },
      ],
      "global-collaboration-center": [
        {
          type: "hero",
          title: "Global Collaboration Center",
          subtitle: "Where teams unite to innovate and create.",
          imageURL: "/images/hero/where-we-hire.jpg",
        },
        {
          type: "icon-cards",
          title: "Join Our Collaborative Culture",
          subtitle: "Work together across borders and time zones.",
          description:
            "Our Global Collaboration Center fosters teamwork and innovation. Work with talented individuals from diverse backgrounds and cultures.",
          button: "Learn more",
          redirectURL: "/careers/where-we-hire/global-collaboration-center",
          cards: [
            {
              title: "Team Projects",
              description:
                "Collaborate on exciting projects with teams worldwide.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/global-collaboration-center",
            },
            {
              title: "Cultural Exchange",
              description:
                "Experience a rich cultural environment through collaboration.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/global-collaboration-center",
            },
            {
              title: "Networking Opportunities",
              description:
                "Expand your professional network on a global scale.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/global-collaboration-center",
            },
            {
              title: "Innovation Hubs",
              description:
                "Join us in creating the next big thing in technology.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/global-collaboration-center",
            },
          ],
        },
      ],
      "global-reach-local-impact": [
        {
          type: "hero",
          title: "Global Reach, Local Impact",
          subtitle: "Making a difference in communities around the world.",
          imageURL: "/images/hero/where-we-hire.jpg",
        },
        {
          type: "icon-cards",
          title: "Empowering Communities",
          subtitle: "Our commitment to local development and support.",
          description:
            "Novelex is dedicated to making a positive impact in the communities we serve, fostering sustainable growth and development.",
          button: "Learn more",
          redirectURL: "/careers/where-we-hire/global-reach-local-impact",
          cards: [
            {
              title: "Community Engagement",
              description:
                "Get involved in initiatives that support local communities.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/global-reach-local-impact",
            },
            {
              title: "Sustainability Efforts",
              description:
                "Join us in our commitment to sustainability and environmental responsibility.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/global-reach-local-impact",
            },
            {
              title: "Corporate Social Responsibility",
              description:
                "Be part of a company that values giving back to society.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/global-reach-local-impact",
            },
            {
              title: "Local Partnerships",
              description:
                "Collaborate with local organizations to drive change.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/global-reach-local-impact",
            },
          ],
        },
      ],
      "regional-career-hubs": [
        {
          type: "hero",
          title: "Regional Career Hubs",
          subtitle: "Find your place in our regional offices.",
          imageURL: "/images/hero/where-we-hire.jpg",
        },
        {
          type: "icon-cards",
          title: "Connecting Talent with Opportunity",
          subtitle: "Explore our regional hubs for career growth.",
          description:
            "Our regional career hubs are designed to connect talented individuals with exciting job opportunities in their area.",
          button: "Learn more",
          redirectURL: "/careers/where-we-hire/regional-career-hubs",
          cards: [
            {
              title: "North America Hub",
              description: "Join our vibrant North American team.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/regional-career-hubs",
            },
            {
              title: "European Hub",
              description: "Find opportunities in our European offices.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/regional-career-hubs",
            },
            {
              title: "Asian Hub",
              description:
                "Explore job openings in our Asian regional centers.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/regional-career-hubs",
            },
            {
              title: "Latin American Hub",
              description: "Join our growing team in Latin America.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "/careers/where-we-hire/regional-career-hubs",
            },
          ],
        },
      ],
    },
  },
};
