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
          type: "blank",
          title: "Our Values",
          description:
            "Our Values: Integrity, Innovation, Collaboration - these aren't just words on a wall - they are the very essence of Novelex. We hold ourselves to the highest ethical standards, constantly seek fresh ideas and innovative solutions, and foster an environment where collaboration is not just encouraged but cherished.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Values",
          subtitle: "Our Core Principles",
          description:
            "Our values are the pillars of our organization. They drive our decisions and actions every day. Explore our commitment to innovation, quality, diversity, and sustainability.",
          button: "Learn more",
          redirectURL: "/who-we-are/purpose-value-and-strategy/our-values",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Our Strategy",
          description:
            "Our Strategy: Our strategic vision is a roadmap that guides us towards our goals. We envision a future where our clients can confidently navigate the complexities of a globalised world. We achieve this by offering comprehensive language, digital, and tech solutions, always striving to exceed expectations and set industry standards.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Strategy",
          subtitle: "Our Roadmap to Success",
          description:
            "Our strategy is a blend of innovation and adaptability. We navigate the ever-evolving landscape of global communication to bring you the best solutions.",
          button: "Learn more",
          redirectURL: "/who-we-are/purpose-value-and-strategy/our-strategy",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Our Purpose",
          description:
            "Our Purpose: At the heart of Novelex lies a clear and compelling purpose - to bridge communication gaps. In an era where global collaboration is paramount, our mission is to facilitate effective communication across linguistic and technological divides. We believe that when communication flows seamlessly, opportunities flourish, and businesses thrive.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Purpose",
          subtitle: "Our Guiding Light",
          description:
            "At Novelex Consulting LLC, our purpose is clear: To break down language barriers and foster global understanding. Discover how this guiding principle shapes our mission and defines our identity.",
          button: "Learn more",
          redirectURL: "/who-we-are/purpose-value-and-strategy/our-purpose",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Culture of Inclusivity and Empowerment",
          description:
            "Novelex is more than just a workplace - it's a culture that values diversity and empowers individuals to thrive. You will find a detailed exploration of how inclusivity and empowerment are woven into the fabric of our organisation. Learn about the initiatives, policies, and practices that contribute to creating an environment where every team member feels valued, heard, and empowered to contribute their best.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Celebrating Diversity",
          subtitle: "Empowering All Perspectives",
          description:
            "Our culture of inclusivity is the foundation of our success. We believe in the power of diverse perspectives and the strength that comes from embracing each individual. Learn how we foster an inclusive and empowering environment.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-people/culture-of-inclusivity",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Culture of Inclusivity and Empowerment",
          description:
            "Novelex is more than just a workplace - it's a culture that values diversity and empowers individuals to thrive. You will find a detailed exploration of how inclusivity and empowerment are woven into the fabric of our organisation. Learn about the initiatives, policies, and practices that contribute to creating an environment where every team member feels valued, heard, and empowered to contribute their best.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Celebrating Diversity",
          subtitle: "Empowering All Perspectives",
          description:
            "Our culture of inclusivity is the foundation of our success. We believe in the power of diverse perspectives and the strength that comes from embracing each individual. Learn how we foster an inclusive and empowering environment.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-people/culture-of-inclusivity",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Professional Growth",
          description:
            "Our commitment to our people extends to their professional growth and development. We provide a platform for continuous learning, offering opportunities for skill enhancement and career advancement. From mentorship programs to personalised development plans, we invest in our team members, ensuring they stay at the forefront of industry trends and are equipped for long-term success.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Growth Opportunities",
          subtitle: "Empowering Your Future",
          description:
            "Professional growth is at the heart of our mission. We are dedicated to nurturing your skills, supporting your career journey, and inspiring you to reach new heights. Learn more about how we cultivate personal and professional development.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-people/professional-growth",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Well-being",
          description:
            "Beyond professional growth, we prioritise the well-being of our people. A healthy and happy team is at the core of our success. We offer comprehensive wellness programs, recognising the importance of work-life balance, mental health, and physical well-being. Our commitment to caring for the holistic needs of our team members extends to benefits packages that support a healthy and fulfilling lifestyle.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Wellness at the Core",
          subtitle: "Thriving in Every Aspect of Life",
          description:
            "We believe in nurturing the well-being of our people—both in and out of the workplace. Learn how we support physical, mental, and emotional wellness, empowering our team to lead balanced and fulfilling lives.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-people/well-being",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Innovative Solutions",
          description:
            "Collaboration with our partners is not just about combining resources but also about generating innovative solutions. By fostering an environment of open communication and idea exchange, we tap into the collective intelligence of our network. This collaborative approach enables us to address complex challenges creatively, deliver high-quality services, and stay adaptable in a dynamic business landscape.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Forward-Thinking Solutions",
          subtitle: "Innovating for a Better Tomorrow",
          description:
            "We push boundaries and think outside the box to develop solutions that redefine industries. Our innovative strategies drive growth, efficiency, and lasting impact.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-partners/innovative-solutions",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Mutual Growth Endeavors",
          description:
            "Our partnerships go beyond transactional relationships - they are opportunities for mutual growth. We actively seek partners who are invested in fostering long-term success and innovation. Whether it's joint ventures, research collaborations, or shared projects, we believe that by growing together, we can create lasting impact and stay at the forefront of industry advancements.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Collaborative Growth",
          subtitle: "Partnerships that Empower Progress",
          description:
            "We believe that true success is achieved when we grow together. Our mutual growth endeavors foster relationships that drive innovation, success, and shared achievements.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-partners/mutual-growth-endeavors",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Shared Vision and Values",
          description:
            "Central to our partnerships is a shared vision and a set of core values. We seek partners whose vision aligns with ours, ensuring a cohesive approach to problem-solving and goal achievement. Shared values, such as integrity, collaboration, and a commitment to excellence, form the foundation of our partnerships, fostering trust and synergy in our collaborative endeavors.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Vision and Values",
          subtitle: "A Unified Path to a Better Future",
          description:
            "Our shared vision and values are at the core of everything we do. Together, we strive to create a future where success is measured not just by profits but by the positive impact we have on the world.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-partners/shared-vision-and-values",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Strategic Collaborations",
          description:
            "Novelex Consulting values strategic collaborations with partners who share our commitment to excellence and integrity. These partnerships are carefully chosen to align with our business objectives and enhance the value we deliver to our clients. Through strategic collaborations, we leverage the collective expertise of our partners to achieve mutual success and amplify our impact in the industry.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Collaborative Synergy",
          subtitle: "Together, We Achieve More",
          description:
            "Strategic collaborations are key to unlocking new opportunities. By working together, we leverage our combined strengths to innovate, grow, and lead in our industries.",
          button: "Learn more",
          redirectURL: "/who-we-are/our-partners/strategic-collaborations",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Environmental Sustainability Projects",
          description:
            "Explore Novelex's role in environmental sustainability projects as part of our community engagement strategy. This includes initiatives to promote environmental awareness, conservation, and sustainable practices. Learn about our efforts to contribute to a healthier planet by participating in tree-planting campaigns, waste reduction projects, and other environmentally conscious activities. This section demonstrates our commitment to creating a positive impact not only in social spheres but also in environmental sustainability.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Sustainable Practices for a Greener Tomorrow",
          subtitle: "Innovative Approaches to Environmental Challenges",
          description:
            "We believe in fostering sustainable practices that benefit both the planet and society. Through responsible resource management and innovative solutions, we strive to make a positive impact.",
          button: "Learn more",
          redirectURL: "/who-we-are/global-impact/environmental-responsibility",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Global Perspective",
          description:
            "In a globalised world, embracing diversity is not just a moral imperative - it's a strategic advantage. Our diverse team helps us better understand and serve a wide range of clients from diverse backgrounds and regions.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Connecting Communities Worldwide",
          subtitle: "Empowering Change Through Partnerships",
          description:
            "Our global collaborations focus on uniting diverse talents and resources to tackle pressing challenges. Together, we aim to create innovative solutions that have a lasting impact.",
          button: "Learn more",
          redirectURL: "/who-we-are/global-impact/global-collaborations",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Leveraging Diversity",
          description:
            "Our diverse workforce is a strategic asset that fuels our global impact. We believe in harnessing the power of different perspectives, cultures, and experiences. By fostering a multicultural environment, we bring unique insights to every project, ensuring solutions that are not only effective but culturally sensitive.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Harnessing Diverse Perspectives",
          subtitle: "Inclusion as a Catalyst for Innovation",
          description:
            "We recognize that diversity fuels creativity and innovation. By embracing varied perspectives, we cultivate an inclusive environment where everyone can thrive.",
          button: "Learn more",
          redirectURL: "/who-we-are/global-impact/leveraging-diversity",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Social Responsibility",
          description:
            "Novelex Consulting is deeply committed to social responsibility. We actively engage in initiatives that address pressing global challenges, ranging from education and healthcare to poverty alleviation. Our goal is to contribute meaningfully to the communities where we operate, creating a positive and lasting impact.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Commitment to Community Engagement",
          subtitle: "Empowering People and Building Futures",
          description:
            "We believe in the power of social responsibility. By investing in our communities and fostering positive change, we strive to create a better tomorrow for all.",
          button: "Learn more",
          redirectURL: "/who-we-are/global-impact/social-responsibility",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Emerging Technologies Integration",
          description:
            "Uncover Novelex's proficiency in integrating emerging technologies. This section emphasises our capability to stay at the forefront of technological advancements, including artificial intelligence, machine learning, blockchain, and more. Our team actively explores and incorporates innovative technologies to enhance the digital capabilities of our clients. Whether it's automating processes, improving efficiency, or exploring new frontiers, we integrate emerging technologies strategically to drive digital transformation and stay ahead in the digital landscape.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Energy and Enthusiasm for Success",
          description:
            "From the moment you join Novelex, you'll feel the energy and enthusiasm that fuel our drive for success. It's not just a job - it's an opportunity to be part of something bigger. The energy is contagious, stemming from the collective passion and dedication of our team members. This enthusiasm transforms the workplace into a dynamic hub where success is not just a goal but a shared journey. It's an environment that transcends boundaries, bringing people together through the powerful forces of language, technology, and human connection.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Empowering Through Opportunity",
          subtitle: "Creating pathways for growth",
          description:
            "We believe in empowering our employees by providing them with the tools, resources, and opportunities they need to succeed.",
          button: "Learn more",
          redirectURL: "/who-we-are/diversity-and-inclusion/empowerment",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Experienced Instructors",
          description:
            "Our instructors are seasoned experts in their respective fields, bringing real-world knowledge and insights to the training room. You'll learn from the best, gaining practical skills that can be applied immediately in your professional life.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Global Reach, Local Impact",
          description:
            "Novelex ensures a seamless journey for those pursuing global careers, offering opportunities that await your expertise. This section provides insights into our global presence and the localised impact you can make. Whether you're interested in regional hubs or global projects, our process ensures a smooth entry, connecting you to the diverse opportunities that contribute to our global success story.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "A Worldview on Inclusion",
          subtitle: "Connecting across borders",
          description:
            "Our global perspective on diversity helps us foster inclusion in every region we operate.",
          button: "Learn more",
          redirectURL: "/who-we-are/diversity-and-inclusion/global-perspective",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Inclusive Sustainability",
          description:
            "Recognising that every team member plays a role in environmental stewardship, we encourage individual contributions to sustainability. This involves promoting awareness about eco-friendly practices, such as reducing paper usage, minimising energy consumption, and adopting sustainable commuting options. By fostering a culture of environmental consciousness, we empower each person to make a positive impact.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Building Inclusivity",
          subtitle: "Ensuring everyone has a voice",
          description:
            "We strive to create an inclusive culture where every individual is heard and appreciated for their unique contributions.",
          button: "Learn more",
          redirectURL: "/who-we-are/diversity-and-inclusion/inclusive-culture",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Lower Carbon Footprint",
          description:
            "Understanding the importance of addressing climate change, we implement strategies to reduce our carbon footprint. This includes the use of renewable energy sources, energy-efficient technologies, and regular assessments to identify areas for improvement. By adopting carbon footprint reduction strategies, we strive to be a leader in sustainable business practices and contribute to a low-carbon future.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Craft Your Career Story",
          description:
            "At Novelex, your career isn't just a job - it's a personalised story of growth and achievement. This section highlights our commitment to crafting personalised growth paths for each team member. Explore opportunities for professional development, skill enhancement, and career progression tailored to your unique strengths and goals. Craft your career story at Novelex with personalised growth paths that reflect your individual journey.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Educational Initiatives and Skill-Building Programs",
          description:
            "Dive into Novelex's commitment to education and skill-building through community engagement. This section outlines our initiatives to support educational programs, scholarships, and skill-building workshops. By investing in education, we aim to empower individuals and communities, providing them with the tools and resources needed for long-term success. Learn about our collaborative efforts to enhance educational opportunities and foster a culture of continuous learning.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Sustainable Practices for a Greener Future",
          subtitle: "Innovating for Long-Term Environmental Solutions",
          description:
            "We integrate eco-friendly practices into all aspects of our operations, from green building initiatives to sustainable sourcing and procurement.",
          button: "Learn more",
          redirectURL: "/who-we-are/climate-strategy/eco-friendly-practices",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Grow Your Career by Empowering Others",
          description:
            "Novelex recognises the dual benefit of becoming a trainer - not only do you contribute to the development of others, but you also grow in your own career. This section showcases trainer development pathways, where you can enhance your skills as an effective educator and mentor. Explore opportunities to grow as a leader within the training domain, contributing to the success of both your peers and your own career journey. Becoming a trainer at Novelex is a pathway to mutual growth and success.",
          button: "Back to Who we are",
          redirectURL: "/who-we-are",
        },
        {
          type: "icon-cards",
          title: "Leading the Way in Environmental Responsibility",
          subtitle: "Our Green Initiatives Across the Globe",
          description:
            "We are committed to leading positive environmental change through innovative green initiatives, such as reforestation, renewable energy projects, and reducing our environmental footprint.",
          button: "Learn more",
          redirectURL: "/who-we-are/climate-strategy/green-initiatives",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Data Analytics and Business Intelligence",
          description:
            "Explore Novelex's capabilities in data analytics and business intelligence. This section highlights how we leverage advanced analytics tools and technologies to derive meaningful insights from data. Our data experts work to transform raw data into actionable information, empowering businesses to make informed decisions. Whether it's predictive analytics, data visualisation, or business intelligence dashboards, our solutions are designed to enhance data-driven decision-making and drive business success.",
          button: "Back to Services",
          redirectURL: "/services",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Digital and Tech Jobs",
          description:
            "Digital and Tech Jobs at Novelex: Pioneering Innovation, Shaping the Future. In the realm of Digital and Tech Jobs at Novelex, we invite individuals to be part of a dynamic and innovative landscape where technology is not just a tool but a catalyst for transformation. Here, your expertise is the driving force behind groundbreaking solutions that shape the future of our interconnected world. At Novelex, your expertise contributes to a culture of continuous innovation and progress. It's a space where technology is not just a tool but a canvas for creativity and problem-solving. Join us in shaping the future through digital excellence, where your skills become the driving force behind Novelex's technological evolution.",
          button: "Back to Services",
          redirectURL: "/services",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Employee Volunteerism and Outreach Programs",
          description:
            "Discover the ways in which Novelex encourages and supports employee volunteerism and outreach programs. Our team members actively participate in initiatives that contribute to the well-being of communities. From volunteering time and skills to organising community events, this section showcases the hands-on involvement of our employees in making a meaningful impact at the grassroots level. It's a testament to our belief in giving back to the communities that support us.",
          button: "Back to Services",
          redirectURL: "/services",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Software Development",
          description:
            "Dive into Novelex's expertise in customised software development. This section showcases our proficiency in crafting tailored digital solutions to meet the unique needs of our clients. Our team of skilled developers works collaboratively to understand client requirements and deliver software solutions that are not only technologically advanced but also aligned with the specific goals and challenges of the business. From user-friendly interfaces to robust backend systems, our customised software development ensures a seamless digital experience.",
          button: "Back to Services",
          redirectURL: "/services",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Comprehensive Financial Advisory Services",
          description:
            "Novelex's Financial Consultancy offers a comprehensive suite of financial advisory services, ensuring a holistic approach to managing your business's financial health. Our seasoned financial consultants bring extensive expertise in financial planning, risk management, and investment strategies. This includes specialised services such as accounting, where we provide meticulous bookkeeping, financial statement analysis, and compliance assessments, ensuring your financial records are accurate and aligned with industry standards. Additionally, our tax advisory services go beyond routine compliance, offering strategic tax planning, optimisation of tax efficiency, and proactive guidance to navigate the complexities of ever-changing tax regulations. This comprehensive approach ensures that our clients receive tailored financial guidance across various facets of their financial landscape.",
          button: "Back to Services",
          redirectURL: "/services",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Forge Connections in a Supportive Work Community",
          description:
            "Joining Novelex is not just about a job - it's about becoming part of a supportive work community. In this section, we emphasise the importance of forging connections with colleagues who are not just coworkers but collaborators. Experience a workplace where mutual support, encouragement, and camaraderie are integral to our collective success. Build lasting professional relationships that go beyond the ordinary.",
          button: "Back to Services",
          redirectURL: "/services",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Performance Analysis and Informed Decision-Making",
          description:
            "Our Financial Consultancy is dedicated to empowering clients with the insights needed for informed decision-making. This includes thorough performance analysis, development of financial models, and identification of key metrics for success. By staying ahead of financial trends and leveraging our expertise, we empower our clients with the financial insights required to drive their business forward confidently and strategically.",
          button: "Back to Services",
          redirectURL: "/services",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Specialised Expertise in Financial Regulations",
          description:
            "What sets our Financial Consultancy apart is our specialised expertise in navigating the dynamic landscape of financial regulations. Our consultants are well-versed in interpreting complex financial regulations, staying abreast of industry standards, and providing insights that reflect the ever-evolving financial landscape. This ensures that our clients receive accurate advice aligned with the latest regulatory requirements, contributing to the sound financial governance of their business.",
          button: "Back to Services",
          redirectURL: "/services",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          title: "Expert Legal Consultancy",
          subtitle: "Comprehensive Solutions Tailored to Your Legal Needs",
          imageURL: "/images/hero/legal-consultancy.jpg",
        },
      ],
      "comprehensive-legal-advisory": [
        {
          type: "hero",
          title: "Comprehensive Legal Advisory",
          subtitle: "Providing Expertise Across a Range of Legal Domains",
          imageURL: "/images/hero/legal-consultancy.jpg",
        },
        {
          type: "blank",
          title: "Expert Legal Guidance",
          description:
            "We offer comprehensive legal advisory services, ensuring that your business is equipped with the best solutions to navigate complex legal landscapes.",
          button: "Back to Services",
          redirectURL: "/services",
        },
        {
          type: "icon-cards",
          title: "Our Legal Expertise",
          subtitle: "Tailored Legal Support for Every Challenge",
          description:
            "Explore our broad range of legal services, designed to meet the needs of businesses in diverse industries.",
          button: "Back to Services",
          redirectURL: "/services",
          forceHideButton: true,
          contentBackgroundColor: "Colors.PRIMARY_BLACK_COLOR",
          cards: [
            {
              title: "Corporate Legal Services",
              description:
                "Navigate the complexities of corporate law with our expert advisory on transactions, governance, and compliance.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
            {
              title: "Contract Drafting & Negotiation",
              description:
                "Ensure your contracts are legally sound and aligned with your business goals with our drafting and negotiation services.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
            {
              title: "Intellectual Property Law",
              description:
                "Safeguard your innovations with our specialized intellectual property advisory and protection strategies.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
            {
              title: "Regulatory Compliance",
              description:
                "Stay ahead of evolving regulations with our tailored compliance strategies for your industry.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
          ],
        },
      ],
      "dispute-resolution-and-litigation-support": [
        {
          type: "hero",
          title: "Dispute Resolution & Litigation Support",
          subtitle: "Resolving Conflicts Efficiently and Effectively",
          imageURL: "/images/hero/legal-consultancy.jpg",
        },
        {
          type: "blank",
          title: "Conflict Management",
          description:
            "Our dispute resolution and litigation services help you resolve conflicts quickly, ensuring minimal disruption to your business operations.",
          button: "Back to Services",
          redirectURL: "/services",
        },
        {
          type: "icon-cards",
          title: "Litigation and Resolution Expertise",
          subtitle: "Experienced Representation in All Dispute Matters",
          description:
            "We provide legal support for resolving disputes both in and out of court, ensuring your interests are protected.",
          button: "Back to Services",
          redirectURL: "/services",
          forceHideButton: true,
          contentBackgroundColor: "Colors.PRIMARY_BLACK_COLOR",
          cards: [
            {
              title: "Commercial Litigation",
              description:
                "Expert representation in commercial disputes, helping you secure the best possible outcome.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
            {
              title: "Mediation & Arbitration",
              description:
                "Cost-effective alternative dispute resolution strategies, including mediation and arbitration services.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
            {
              title: "Employment Disputes",
              description:
                "Comprehensive legal support for resolving employee-related conflicts and workplace disputes.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
            {
              title: "Debt Recovery",
              description:
                "Efficient and effective legal strategies to recover outstanding debts, ensuring minimal business disruption.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
          ],
        },
      ],
      "proactive-compliance-strategies": [
        {
          type: "hero",
          title: "Proactive Compliance Strategies",
          subtitle: "Staying Ahead of Regulatory Changes",
          imageURL: "/images/hero/legal-consultancy.jpg",
        },
        {
          type: "blank",
          title: "Preventative Legal Strategies",
          description:
            "Our proactive compliance strategies ensure that your business is always in line with the latest regulations, minimizing risks and avoiding potential legal challenges.",
          button: "Back to Services",
          redirectURL: "/services",
        },
        {
          type: "icon-cards",
          title: "Compliance Services",
          subtitle: "Custom Solutions for Your Business",
          description:
            "We offer a range of compliance services, ensuring that your operations meet the necessary legal and regulatory standards.",
          button: "Back to Services",
          redirectURL: "/services",
          forceHideButton: true,
          contentBackgroundColor: "Colors.PRIMARY_BLACK_COLOR",
          cards: [
            {
              title: "Regulatory Audits",
              description:
                "Our team conducts in-depth audits to ensure your business complies with current regulations.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
            {
              title: "Risk Management",
              description:
                "Identify potential risks and develop effective strategies to mitigate them.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
            {
              title: "Policy Development",
              description:
                "Develop internal policies that align with industry regulations and legal frameworks.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
            {
              title: "Ongoing Compliance Support",
              description:
                "Receive continuous support to ensure long-term compliance as regulations evolve.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
          ],
        },
      ],
      "specialised-expertise-in-multinational-regulations": [
        {
          type: "hero",
          title: "Specialised Expertise in Multinational Regulations",
          subtitle: "Navigating Global Legal Landscapes",
          imageURL: "/images/hero/legal-consultancy.jpg",
        },
        {
          type: "blank",
          title: "Global Legal Expertise",
          description:
            "Our specialized expertise in multinational regulations ensures that your business can confidently navigate the complexities of global legal frameworks.",
          button: "Back to Services",
          redirectURL: "/services",
        },
        {
          type: "icon-cards",
          title: "Multinational Compliance Services",
          subtitle: "Global Legal Solutions Tailored to Your Business",
          description:
            "We offer a suite of legal services to help businesses comply with regulations across borders.",
          button: "Back to Services",
          redirectURL: "/services",
          forceHideButton: true,
          contentBackgroundColor: "Colors.PRIMARY_BLACK_COLOR",
          cards: [
            {
              title: "Cross-Border Compliance",
              description:
                "Ensure compliance with international laws and regulations, avoiding costly legal challenges.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
            {
              title: "International Trade Law",
              description:
                "Expert guidance on international trade regulations, tariffs, and export controls.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
            {
              title: "Data Protection Regulations",
              description:
                "Ensure your business complies with international data protection laws such as GDPR.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
            },
            {
              title: "Customs & Tariff Management",
              description:
                "Navigate the complexities of customs and tariffs in multinational operations.",
              iconURL: "logo",
              button: "Learn more",
              redirectURL: "",
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
          type: "blank",
          title: "Eco-Friendly Practices",
          description:
            "Novelex Consulting is committed to minimising its environmental footprint through the implementation of eco-friendly office practices. This includes energy-efficient lighting, recycling programs, and reduction of single-use plastics. By adopting sustainable office practices, we aim to create a workspace that aligns with our values of environmental responsibility.",
          button: "Back to Services",
          redirectURL: "/services",
        },
        {
          type: "icon-cards",
          title: "Comprehensive Document Translation",
          subtitle: "Your Trusted Partner in Multilingual Document Solutions",
          description:
            "Our document translation services ensure your message is conveyed accurately across different languages and cultures. We specialize in various fields, including legal, medical, and technical documents.",
          button: "Learn more",
          redirectURL: "/services/multilingual-solutions/document-translation",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Industry-Specific Language Solutions",
          description:
            "Discover Novelex's tailored language solutions designed for specific industries. This section emphasises our ability to provide industry-specific linguistic support, ensuring that translations and interpretations align with the specialised terminology and nuances of particular sectors. Whether it's healthcare, legal, technical, or any other industry, our language experts are equipped with the knowledge and expertise to deliver accurate and contextually relevant solutions.",
          button: "Back to Services",
          redirectURL: "/services",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Interpretation",
          description:
            "Real-time language support for effective communication. Seize the moment with Novelex Interpretation services. In the fast-paced world of global business, real-time communication is paramount. Our interpreters bridge language gaps, ensuring that your meetings, negotiations, and conferences run smoothly. With exceptional linguistic skills and cultural awareness, our interpreters enable you to communicate effectively, no matter the language spoken.",
          button: "Back to Services",
          redirectURL: "/services",
        },
        {
          type: "icon-cards",
          title: "Expert Interpretation Solutions",
          subtitle: "Bringing Clarity to Your Conversations",
          description:
            "We offer professional interpretation services to help you communicate effectively in real-time during meetings, conferences, and events.",
          button: "Learn more",
          redirectURL: "/services/multilingual-solutions/interpretation",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Mobile Interpretation",
          description:
            "Seamless interpretation services at your fingertips. In today's mobile world, access to interpretation services should be as simple as tapping a screen. Novelex's Mobile Interpretation brings real-time language support to your smartphone or tablet. Our user-friendly app connects you with professional interpreters instantly, allowing you to engage in multilingual conversations, no matter where you are. Seamlessly break language barriers and communicate with confidence, all from the palm of your hand.",
          button: "Back to Services",
          redirectURL: "/services",
        },
        {
          type: "icon-cards",
          title: "Convenient Mobile Interpretation",
          subtitle: "Interpretation Services Wherever You Are",
          description:
            "Our mobile interpretation services ensure you have access to professional interpreters anytime, anywhere, through our app.",
          button: "Learn more",
          redirectURL: "/services/multilingual-solutions/mobile-interpretation",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Explore Novelex Worldwide",
          description:
            "Open the door to global opportunities with Novelex, where diverse locations shape your career journey. This section showcases our global footprint, urging you to explore an array of possibilities beyond borders. Whether your career vision involves contributing to global projects or focusing on specific regional hubs, Novelex provides a rich tapestry of opportunities where success is shared across the globe.",
          button: "Back to Services",
          redirectURL: "/services",
        },
        {
          type: "icon-cards",
          title: "Our Instructors",
          subtitle: "Qualified Professionals",
          description:
            "Our instructors bring a wealth of knowledge and experience to the classroom.",
          button: "Learn more",
          redirectURL: "/services/training-programme/experienced-instructors",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Personalized Learning",
          description:
            "We understand that each individual and organisation has unique learning requirements. That's why our training programs are highly customisable, allowing you to tailor your learning journey to align with your specific goals and aspirations.",
          button: "Back to Services",
          redirectURL: "/services",
        },
        {
          type: "icon-cards",
          title: "Why Choose Personalized Learning?",
          subtitle: "Your Learning, Your Way",
          description:
            "Our programs are designed to cater to individual learning styles and paces.",
          button: "Learn more",
          redirectURL: "/services/training-programme/personalized-learning",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Stay Ahead of the Curve",
          description:
            "In today's fast-paced world, staying ahead of the curve is essential. Our training programs provide you with the tools and knowledge needed to adapt to changing trends and emerging technologies.",
          button: "Back to Services",
          redirectURL: "/services",
        },
        {
          type: "icon-cards",
          title: "Stay Updated",
          subtitle: "Keep Up with the Changing Landscape",
          description:
            "Our training programs focus on the latest trends and skills in the industry.",
          button: "Learn more",
          redirectURL: "/services/training-programme/stay-ahead-of-the-curve",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Wide-Ranging Expertise",
          description:
            "Our training programs encompass a diverse range of topics tailored to meet the diverse needs of modern professionals. Whether you're looking to enhance your project management capabilities, hone your soft skills, or acquire new expertise, we have you covered.",
          button: "Back to Services",
          redirectURL: "/services",
        },
        {
          type: "icon-cards",
          title: "Our Expertise",
          subtitle: "Training in Multiple Disciplines",
          description:
            "We offer a wide range of training programs to suit diverse needs.",
          button: "Learn more",
          redirectURL: "/services/training-programme/wide-ranging-expertise",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Embrace Team Synergy and Collaboration",
          description:
            "At Novelex, we believe in the power of teamwork. Joining our team means embracing a culture of synergy and collaboration. This section highlights our commitment to creating an environment where every team member's contribution is valued, fostering a sense of unity that enhances creativity and productivity. Discover the strength that comes from working together towards shared goals.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Empowerment",
          description:
            "We actively seek out and amplify voices that may have been historically underrepresented. We believe that diversity is not just about numbers - it's about empowering all voices to contribute to our collective success.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Equal Opportunities",
          description:
            "We take deliberate steps to ensure that diversity and inclusion are not just words on paper but principles in action. Our commitment extends to fair hiring practices, equal opportunities for growth, and ongoing education and awareness programs.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Strategic Partnerships for Social Impact",
          description:
            "Novelex's commitment to community engagement extends through strategic partnerships for social impact. In this section, explore how we collaborate with non-profit organisations, community groups, and local initiatives to address societal challenges. These partnerships go beyond financial contributions - they involve active participation and the application of our expertise to make a tangible and positive difference in the communities where we operate.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Celebration with Our Community",
          description:
            "Beyond being a record of our achievements, this section is an invitation to join us in celebration. It's not just about us - it's about sharing our journey with you - our valued partners, clients, and supporters. As you explore this section, you become part of the collective celebration of our continuous progress. It's a testament to the collaborative spirit that defines Novelex, where success is shared, and achievements are celebrated together. Join us in recognising the positive impact we're making in the world.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Key Steps And Milestones",
          description:
            "Novelex is a dynamic entity that is always in motion, making continuous strides and achieving noteworthy milestones. The Events and Highlights section serves as a chronicle of our journey of success. It's a space where you can witness the ongoing progress, celebrate achievements, and stay informed about the significant milestones we consistently attain. From groundbreaking projects to setting new standards, this section keeps you abreast of our continuous pursuit of excellence.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Insights into Achievements",
          description:
            "This section provides a curated insight into our significant achievements, offering a closer look at the moments that define our success story. Whether it's the launch of a groundbreaking project, industry recognition, or notable contributions to the community, we invite you to celebrate these achievements with us. By delving into the details, you'll gain a comprehensive understanding of the impact Novelex is making across various domains.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
        },
        {
          type: "icon-cards",
          title: "Achievements Overview",
          subtitle: "Discover our proudest moments.",
          description: "We celebrate the milestones that shape our story.",
          button: "Learn more",
          redirectURL:
            "/life-at-novelex/events-and-highlights/insights-into-significant-achievements",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Showcasing Solutions",
          description:
            "Stay informed about our latest developments and innovations through the Events and Highlights section. We understand the importance of staying at the forefront of industry trends and technological advancements. This section not only highlights our past achievements but also showcases the innovative solutions and developments that characterise Novelex. It's a window into our commitment to pushing boundaries and staying ahead in a rapidly evolving landscape.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Culture of Inclusivity",
          description:
            "Inclusivity is not just a buzzword - it's embedded in the fabric of our organisational culture. We celebrate the richness of our diverse team, recognising that each individual brings something valuable to the table. This commitment goes beyond rhetoric to create a workplace where everyone feels heard, valued, and empowered to contribute. We believe that a culture of inclusivity fuels creativity and fosters a sense of belonging among our team.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Environmental Responsibility",
          description:
            "Recognising the importance of environmental sustainability, we integrate eco-friendly practices into our operations. From minimising our carbon footprint to implementing green office initiatives, we strive to be stewards of the environment. Our commitment extends to promoting sustainability practices among our partners and clients.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Sense of Purpose in All We Do",
          description:
            "Within the Novelex experience, there's a pervasive sense of purpose that guides everything we do. This purpose is rooted in our commitment to connect, communicate, and make a lasting impact on the world. Beyond just performing tasks, there is a collective dedication among our team members to contribute to something meaningful. It's an environment where individuals find purpose in their work, creating a collective sense of mission that transcends the ordinary.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Vibrant and Diverse Culture",
          description:
            "Stepping into the world of Novelex means immersing yourself in a vibrant and diverse culture. Our workplace is not merely a destination - it's an experience characterised by the unique blend of languages, innovation, and collaboration. This vibrant culture is a direct reflection of the diversity within our team, with members hailing from various walks of life, bringing their distinct perspectives and talents to create an environment that is dynamic and rich in cultural nuances.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Collaborative Spirit in Action",
          description:
            "Uncover the collaborative spirit that defines Novelex's unique culture. It goes beyond words to showcase the collaborative spirit in action. Through anecdotes, projects, and collaborative initiatives, you'll see how our culture fosters an environment where ideas flourish and teamwork thrives. This collaborative ethos is a key component of what sets Novelex apart, contributing to our collective success and the positive impact we make.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Customized Benefits Packages",
          description:
            "Learn about the customised benefits packages designed to support the diverse needs of our team members. This section outlines the range of benefits offered, including health insurance, retirement plans, flexible work arrangements, and more. Our goal is to create a supportive work environment where employees feel valued and cared for, allowing them to focus on their roles with peace of mind regarding their overall well-being.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Personal Stories and Experiences",
          description:
            "Gain a unique perspective by exploring the personal stories and experiences of our team members. Here you will find a treasure trove of narratives that offer a firsthand look at the driving force behind Novelex's success - our exceptional people. Through these stories, you'll witness the diverse backgrounds, skills, and journeys that contribute to the richness of our culture. It's an opportunity to connect with the human side of our organisation and understand the individual experiences that collectively shape Novelex.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Values and Principles at the Core",
          description:
            "Delve into the heart of Novelex by exploring our team and culture insights, where you'll encounter the foundational values and principles that drive every decision and action within our organisation. It will provide an in-depth understanding of the bedrock upon which Novelex's success is built. Our commitment to fostering a culture of inclusivity, collaboration, and respect is highlighted, showcasing the core values that guide our daily operations and interactions.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Comprehensive Health and Wellness Programs",
          description:
            "Explore Novelex's commitment to employee well-being through comprehensive health and wellness programs. In this section, discover the range of initiatives aimed at promoting physical, mental, and emotional well-being among our team members. From fitness programs and health screenings to mental health resources and wellness workshops, we prioritise a holistic approach to ensure our employees thrive in both their personal and professional lives.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Cybersecurity Solutions",
          description:
            "Learn about Novelex's commitment to cybersecurity solutions. This section outlines how we address the evolving challenges of digital security. Our cybersecurity experts employ cutting-edge technologies and best practices to safeguard digital assets, sensitive information, and critical systems. From threat detection and prevention to risk management, our solutions are tailored to fortify the digital infrastructure of our clients, ensuring a secure and resilient digital presence.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Professional Development Opportunities",
          description:
            "Uncover how Novelex goes beyond traditional benefits by providing professional development and training opportunities. We believe that investing in the growth and skill enhancement of our employees is integral to their overall well-being. This section highlights initiatives such as ongoing training programs, skill-building workshops, and opportunities for career advancement, ensuring that our team members stay ahead in their professional journey.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Work-Life Balance",
          description:
            "Delve into the work-life balance initiatives implemented at Novelex to support the overall well-being of our employees. This includes flexible work arrangements, family-friendly policies, and initiatives that promote a healthy integration of work and personal life. By fostering a positive work-life balance, we aim to enhance job satisfaction, reduce stress, and contribute to the overall happiness and fulfillment of our team members.",
          button: "Back to Life at Novelex",
          redirectURL: "/life-at-novelex",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Contribute to Professional Development Programs",
          description:
            "Joining Novelex as a trainer means contributing to professional development programs. This section emphasises the role of trainers in shaping the skills and competencies of fellow team members. Explore the opportunity to design and deliver training programs that foster continuous learning, skill enhancement, and career growth. Contribute to the development of a dynamic and skilled workforce within the Novelex community.",
          button: "Back to Careers",
          redirectURL: "/careers",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Inclusive Culture",
          description:
            "Inclusion is more than a buzzword for us - it's a daily practice. We actively foster an inclusive culture where every team member feels valued, heard, and empowered to contribute their best. We understand that true inclusivity goes beyond numbers - it's about creating a sense of belonging.",
          button: "Back to Careers",
          redirectURL: "/careers",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Shape the Learning Experience",
          description:
            "Becoming a trainer at Novelex means shaping the learning experience for your peers. This section highlights the importance of trainers in tailoring training approaches to meet the diverse needs of the team. Whether it's designing language courses, tech workshops, legal training, or financial education, trainers play a pivotal role in creating engaging and impactful learning experiences that contribute to the professional growth of the entire team.",
          button: "Back to Careers",
          redirectURL: "/careers",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Share Your Expertise",
          description:
            "As a Novelex trainer, you have the opportunity to share your expertise in your domain of excellence. This section encourages individuals who are experts in languages, technology, legal matters, or finance to step into the role of a trainer. Whether you excel in linguistic nuances, tech innovations, legal complexities, or financial strategies, becoming a trainer allows you to impart your knowledge and experience to the next generation of professionals.",
          button: "Back to Careers",
          redirectURL: "/careers",
        },
        {
          type: "icon-cards",
          title: "Connect and Inspire",
          subtitle: "Make a lasting impact on learners.",
          description:
            "Share your knowledge and experiences with others in our community.",
          button: "Learn more",
          redirectURL: "/careers/become-a-trainer/share-your-expertise",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Collaborate and Soar",
          description:
            "Join Novelex's collaborative and inclusive team culture, where your contributions matter. This section focuses on career opportunities within our vibrant and inclusive team. Explore roles that align with your skills and thrive in a culture that values diversity and teamwork. Your career at Novelex is a collaborative journey where every team member plays a crucial role, contributing to our shared success.",
          button: "Back to Careers",
          redirectURL: "/careers",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Creativity and Openness",
          description:
            "At Novelex, you'll encounter an atmosphere of creativity and openness that sets us apart. We foster an environment where ideas flow freely, encouraging every team member to contribute their unique insights. The culture we cultivate values open communication, allowing every voice to be heard. This commitment to creativity and openness is a catalyst for innovation, ensuring that our workplace is not ordinary but a space where new ideas are embraced and thrive.",
          button: "Back to Careers",
          redirectURL: "/careers",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Dispute Resolution and Litigation Support",
          description:
            "Learn about Novelex's capabilities in dispute resolution and litigation support. This section outlines how our legal consultancy extends to managing legal conflicts effectively. From alternative dispute resolution mechanisms to providing support in litigation processes, our legal experts work to protect the interests of our clients. We aim to find practical and efficient solutions, mitigating legal risks and ensuring that our clients are well-prepared in legal disputes.",
          button: "Back to Careers",
          redirectURL: "/careers",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Innovate, Thrive, Succeed",
          description:
            "Ignite your career in a dynamic and innovative environment at Novelex. This section emphasises our commitment to providing opportunities that challenge and inspire. Explore roles that blend innovation and dynamism, pushing you to excel and contribute to cutting-edge projects. Your journey at Novelex isn't just a job - it's a dynamic career that embraces innovation and encourages continuous growth.",
          button: "Back to Careers",
          redirectURL: "/careers",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Discover Your Niche",
          description:
            "Explore a world of exciting possibilities at Novelex with diverse career roles spanning languages, technology, law, and finance. Whether you're passionate about languages, technology innovations, legal complexities, or financial strategies, Novelex offers a spectrum of roles tailored to your expertise and interests. Discover your niche and thrive in a career that aligns with your aspirations.",
          button: "Back to Careers",
          redirectURL: "/careers",
        },
        {
          type: "icon-cards",
          title: "Join the Digital Revolution",
          subtitle: "Explore various roles in the tech industry.",
          description:
            "From software development to data analysis, find the right job that matches your tech skills and aspirations.",
          button: "Learn more",
          redirectURL: "/careers/find-a-job/digital-and-tech-jobs",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Financial Planning and Risk Management",
          description:
            "Beyond routine financial management, Novelex's Financial Consultancy emphasises proactive financial planning and risk management. Our experts work closely with clients to develop strategies for optimal resource allocation, identify opportunities for growth, and address specific financial concerns. This proactive approach ensures that businesses are well-prepared to navigate uncertainties, optimise financial processes, and foster long-term financial sustainability.",
          button: "Back to Careers",
          redirectURL: "/careers",
        },
        {
          type: "icon-cards",
          title: "Build Your Career in Finance",
          subtitle: "Explore diverse roles in the financial sector.",
          description:
            "Whether you’re interested in investment banking, accounting, or financial planning, find your path in finance.",
          button: "Learn more",
          redirectURL: "/careers/find-a-job/finance-jobs",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Language Jobs",
          description:
            "Language Jobs at Novelex: Bridging Worlds through Expertise. In the vibrant landscape of Language Jobs at Novelex, we extend an invitation to individuals who appreciate the transformative power of language. Here, language is not merely a tool - it's the bridge that connects cultures, facilitates understanding, and shapes impactful communication.",
          button: "Back to Careers",
          redirectURL: "/careers",
        },
        {
          type: "icon-cards",
          title: "Unlock Opportunities with Language Proficiency",
          subtitle: "Explore roles that value your language skills.",
          description:
            "From translation to teaching, discover a variety of careers that leverage your multilingual abilities.",
          button: "Learn more",
          redirectURL: "/careers/find-a-job/language-jobs",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Legal Jobs",
          description:
            "Legal Jobs at Novelex: Navigating the Intersection of Law and Innovation. Embark on a dynamic journey within the Legal Jobs at Novelex, where the traditional realm of law meets the innovation and global perspective of a consulting powerhouse. Here, legal professionals play a crucial role in shaping the legal landscape of an organisation that thrives on diversity, technology, and a commitment to excellence. at Novelex, legal professionals are not just practitioners - they are integral contributors to the company's commitment to excellence, innovation, and global impact. Join us in navigating the intersection of law and innovation, where legal expertise becomes a catalyst for the success and ethical operation of a consulting company that operates on a global stage.",
          button: "Back to Careers",
          redirectURL: "/careers",
        },
        {
          type: "icon-cards",
          title: "Pursue a Career in Law",
          subtitle: "Explore diverse roles in the legal field.",
          description:
            "Whether you’re looking to become a lawyer, paralegal, or legal advisor, find your niche in the legal profession.",
          button: "Learn more",
          redirectURL: "/careers/find-a-job/legal-jobs",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Trainer Jobs",
          description:
            "Trainer Jobs at Novelex: Inspiring Growth, Empowering Expertise. In the realm of Trainer Jobs at Novelex, we extend an invitation to individuals who are not just experts in their domains but passionate about sharing their knowledge. Here, the role of a trainer goes beyond imparting information. it's about inspiring growth, fostering collaboration, and empowering expertise within a dynamic and diverse community. At Novelex, your role is not just about sharing knowledge - it's about fostering a culture of continuous learning, collaboration, and empowerment. Join us in inspiring growth and shaping the learning landscape within a community that values the exchange of expertise and the collective pursuit of excellence.",
          button: "Back to Careers",
          redirectURL: "/careers",
        },
        {
          type: "icon-cards",
          title: "Become a Trainer",
          subtitle: "Explore various roles in training and development.",
          description:
            "Whether you’re focused on corporate training, fitness, or education, find a rewarding role that helps others grow.",
          button: "Learn more",
          redirectURL: "/careers/find-a-job/trainer-jobs",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Embracing Differences",
          description:
            "We believe that diversity is a wellspring of creativity and innovation. By embracing differences in ethnicity, gender, age, abilities, and experiences, we create an environment where fresh ideas flourish, and varied viewpoints enrich our solutions.",
          button: "Back to Careers",
          redirectURL: "/careers",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Global Collaboration Center",
          description:
            "Immerse yourself in the global dialogue at Novelex, where collaboration transcends borders. This section underscores our commitment to cross-continental collaboration, inviting individuals to contribute to projects that span continents. Whether your base is in North America, Europe, Asia, or elsewhere, Novelex provides a platform for professionals to engage in a global dialogue and make a significant impact on international projects.",
          button: "Back to Careers",
          redirectURL: "/careers",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Join a Global Team",
          description:
            "Novelex is a global team, bringing together diverse perspectives and talents. This section provides insights into our global presence, emphasising the strength that comes from a team with varied experiences and backgrounds. Join us in embracing the richness of diversity as we work together towards shared goals. Learn, collaborate, and contribute to a team that transcends boundaries and thrives on the collective strength of its members.",
          button: "Back to Careers",
          redirectURL: "/careers",
        },
        {
          type: "icon-cards",
          title: "Embrace Diversity",
          subtitle: "Work in an inclusive and multicultural environment.",
          description:
            "Join us to work alongside professionals from various backgrounds and cultures.",
          button: "Learn more",
          redirectURL: "/careers/join-our-team/join-a-global-team",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Team Growth is Personal Growth",
          description:
            "Our belief in team growth extends to personal growth. Explore opportunities for professional development in a collaborative setting. This section underscores our commitment to investing in the growth journey of each team member. Whether through mentorship programs, skill-building initiatives, or career advancement pathways, discover how your individual growth contributes to the collective success of the team.",
          button: "Back to Careers",
          redirectURL: "/careers",
        },
        {
          type: "icon-cards",
          title: "Invest in Your Future",
          subtitle: "Grow both personally and professionally within our team.",
          description:
            "Join us to access opportunities for continuous learning and development.",
          button: "Learn more",
          redirectURL: "/careers/join-our-team/team-growth-is-personal-growth",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Coaching",
          description:
            "Coaching at Novelex: Nurturing Excellence, Unleashing Potential. At Novelex, our coaching program is a dynamic and personalised initiative designed to foster individual and collective excellence. Rooted in the belief that every team member possesses untapped potential, our coaching approach provides guidance, support, and strategic insights for both personal and professional development.",
          button: "Back to Careers",
          redirectURL: "/careers",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Investing in Your Growth",
          description:
            "Invest in Your Growth - Novelex Supports Your Journey Toward Excellence. Your growth is our priority. At Novelex, we offer a range of professional development programs designed to nurture your skills and capabilities. Whether you're looking to enhance your expertise in languages, technology, leadership, or other areas, our programs are tailored to support your journey toward excellence. We believe that investing in your development not only benefits you but also strengthens our collective success. Join us on the path to continuous growth and achievement.",
          button: "Back to Careers",
          redirectURL: "/careers",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Mentoring",
          description:
            "Mentoring at Novelex: Guiding Journeys, Cultivating Excellence. Mentoring at Novelex is a robust and collaborative initiative designed to guide individuals on their professional journeys, cultivate excellence, and foster a culture of knowledge transfer and continuous learning. Rooted in the belief that the collective wisdom of experienced individuals can elevate the entire team, our mentoring program is a testament to our commitment to the growth and success of each team member.",
          button: "Back to Careers",
          redirectURL: "/careers",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Talent Management",
          description:
            "Talent Management at Novelex: Nurturing Potential, Driving Excellence. Talent Management at Novelex is a comprehensive and strategic approach to identifying, developing, and maximising the potential of our diverse workforce. Rooted in the belief that our greatest asset is our people, the Talent Management program is designed to align individual talents with organisational goals, fostering a culture of continuous growth, innovation, and excellence.",
          button: "Back to Careers",
          redirectURL: "/careers",
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
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Finance Jobs",
          description:
            "Finance Jobs at Novelex: Shaping Financial Excellence in a Global Context. Step into the realm of Finance Jobs at Novelex, where financial professionals are not just number crunchers but strategic architects shaping the fiscal success of a global consulting company. Here, finance is more than transactions - it's about orchestrating financial strategies that drive growth, innovation, and sustained success. at Novelex, finance professionals play a vital role in steering the financial trajectory of a global consulting company. Join us in the dynamic intersection of finance and consulting, where your financial expertise becomes a catalyst for the sustained success and strategic growth of Novelex on the global stage.",
          button: "Back to Careers",
          redirectURL: "/careers",
        },
        {
          type: "icon-cards",
          title: "Global Opportunities Await",
          subtitle: "Join us in various countries around the world.",
          description:
            "Novelex has a wide range of locations offering diverse career opportunities. Explore our offices and see where you could fit in.",
          button: "Learn more",
          redirectURL: "/careers/where-we-hire/explore-novelex-worldwide",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Global Collaborations",
          description:
            "Novelex Consulting believes in the power of collaboration. We actively seek and foster partnerships with organisations, nonprofits, and businesses that share our commitment to positive global impact. Through collaborative efforts, we aim to amplify our reach, share expertise, and collectively contribute to a better world.",
          button: "Back to Careers",
          redirectURL: "/careers",
        },
        {
          type: "icon-cards",
          title: "Join Our Collaborative Culture",
          subtitle: "Work together across borders and time zones.",
          description:
            "Our Global Collaboration Center fosters teamwork and innovation. Work with talented individuals from diverse backgrounds and cultures.",
          button: "Learn more",
          redirectURL: "/careers/where-we-hire/global-collaboration-center",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Green Initiatives",
          description:
            "Novelex Consulting is actively engaged in advocating for and supporting green initiatives. This involves participating in local and global environmental campaigns, supporting tree-planting projects, and collaborating with organisations committed to sustainability. By advocating for green initiatives, we extend our commitment beyond internal practices to contribute to broader environmental causes.",
          button: "Back to Careers",
          redirectURL: "/careers",
        },
        {
          type: "icon-cards",
          title: "Empowering Communities",
          subtitle: "Our commitment to local development and support.",
          description:
            "Novelex is dedicated to making a positive impact in the communities we serve, fostering sustainable growth and development.",
          button: "Learn more",
          redirectURL: "/careers/where-we-hire/global-reach-local-impact",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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
          type: "blank",
          title: "Regional Career Hubs",
          description:
            "Navigate your career within Novelex's regional hubs, each presenting a unique landscape for growth. This section offers insights into the distinctive opportunities and challenges within each hub. Delve into how your skills can make a meaningful impact in these specific regions, shaping your career in alignment with regional dynamics and global aspirations.",
          button: "Back to Careers",
          redirectURL: "/careers",
        },
        {
          type: "icon-cards",
          title: "Connecting Talent with Opportunity",
          subtitle: "Explore our regional hubs for career growth.",
          description:
            "Our regional career hubs are designed to connect talented individuals with exciting job opportunities in their area.",
          button: "Learn more",
          redirectURL: "/careers/where-we-hire/regional-career-hubs",
          forceHideButton: true,
          contentBackgroundColor: Colors.PRIMARY_BLACK_COLOR,
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

export const GeneralContent = {
  type: "tiles",
  title: "Elevating Communication, Connecting Worlds",
  description:
    "The purpose is rooted in our commitment to connect, communicate, and make a lasting impact on the world",
  imageURL: "/images/tiles/general.jpg",
  tiles: [
    {
      title: "Who we are",
      description:
        "Together, we transcend boundaries and create a future of limitless communication and growth.",
      button: "Read more",
      redirectURL: "/who-we-are",
    },
    {
      title: "Life at Novelex",
      description:
        "Vibrant tapestry woven from innovation, collaboration, and a shared dedication to bridging boundaries.",
      button: "Read more",
      redirectURL: "/life-at-novelex",
    },
    {
      title: "Careers",
      description:
        "Elevating Solutions, Empowering Success. Dive into the heart of Novelex's Services, where our commitment is not just to deliver solutions but to elevate the way businesses, individuals, and organizations connect, communicate, and thrive.",
      button: "Read more",
      redirectURL: "/careers",
    },
    {
      title: "Services",
      description:
        "Your Gateway to a Dynamic and Inclusive Professional JourneyEmbark on a transformative professional journey with Careers at Novelex,",
      button: "Read more",
      redirectURL: "/services",
    },
  ],
};
