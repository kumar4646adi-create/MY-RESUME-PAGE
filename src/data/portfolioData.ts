export interface SkillItem {
  id: string;
  name: string;
  proficiency: number;
  description: string;
  iconName: string;
  tags: string[];
}

export interface SkillCategoryGroup {
  id: 'web-backend' | 'ai-innovation';
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeType: 'code' | 'demo' | 'prompts' | 'gallery';
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  actionLabel: string;
  actionType: 'github' | 'demo-js' | 'prompts-graph' | 'gallery';
  galleryItems?: {
    id: string;
    title: string;
    category: string;
    aspect: string;
    promptPreview: string;
    imageUrl: string;
  }[];
  highlights: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  yearBadge: string;
  degree: string;
  score?: string;
  institution: string;
  details: string;
  isCurrent?: boolean;
}

export interface AiExplorationItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  iconName: string;
  description: string;
  featured?: boolean;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Aditya Kumar',
    statusBadge: '🟢 Available for Internships & Junior Roles',
    roleHeadline: 'Full-Stack Web Developer & AI Solutions Enthusiast',
    subHeadline: "Building for the Web. Learning What's Next.",
    fresherTag: 'BCA Final Year | Aspiring Web Developer',
    roleTag: 'WEB DEVELOPER • BCA FINAL YEAR • LEARNING AI',
    bio: "Hi, I'm Aditya Kumar — a BCA Final Year student and aspiring web developer exploring responsive full-stack web architecture, ASP.NET, and AI-powered creative solutions.",
    aboutFull:
      "I'm a BCA Final Year student and aspiring web developer focused on building responsive, user-friendly web experiences. Alongside web development, I'm actively learning AI-powered image and video creation, prompt engineering, and structured AI research workflows to create software that stays ahead of technical curves.",
    aboutSubtext:
      'Rooted in core computer science fundamentals from Swami Vivekananda Government College, I combine clean front-end interfaces with systematic C# and database logic and persistent curiosity for emerging automation frameworks.',
    college: 'Swami Vivekananda Govt. College, Ghumarwin',
    batch: "BCA '24–Pres",
    email: 'kumar4646adi@gmail.com',
    github: 'https://github.com/kumar4646adi-create',
    githubHandle: '@kumar4646adi-create',
    linkedin: 'https://www.linkedin.com/in/aditya-kumar-32907b437/',
    linkedinHandle: 'aditya-kumar-32907b437',
    resumeUrl: '/resume.pdf',
    images: {
      portraitSquare:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB8mBW6MNsBvDXgc5yvGXUNPEyAA4twNUhIeQeaM4ITF_hC-5KvLt15OoZ6emTFl9VL91tztcE9xSU5JHw4WijCU3YFU42Ehmp1Rhs3WIZwg4Q45XNkRK7kzlWo6oMYhwejUXp4ZDfxsud_41Hzscvd-uDVAtGSaUKci_PzTu63wM-_h8I9ksrWmy_C84IQjUY3J1GJkrm8HVu3dq4tWJC8y0dzgT8--1mi1_L-0EQ3M3EXu-NOxO87wZtzLgXx5PrN0i0',
      portraitCircular:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBPXtyD7NQgkUbV_gzXejv9cvbjnUK-JnskNW-sp-zJnvGjANsXatMdy5xPCHisav-JJvNSOjm89UL3LWsSUAJxWbDsFnhSX1USBWNICIXGECNQlbnaZjlpPHNGsHMCP0187afGJDc9ZOSfeGIcgd_pY8XMwSWsmTb7xB27gqrlCI2xxDx6XK-uwgvYphhwRWcuEUpEPB5aY-cl1YcsUzzPXt3czo2av4ZgSMIjAv4c9lOJ4KvuzTVCjyCcXqBqyMARuVw',
      avatarHeader:
        'https://lh3.googleusercontent.com/aida/AEtjO1UJu9zXwtqY1Zjg5oK_C9Ks6gnxde_cYSuKKwSUH3rlIizC0RlJ8jaOeyWW4sP2C7M7iYs5CXmF_6hllBOz6Jhxrg-PWedvHZwZwVKRfzuliaH3YWsUbkJH-aspx1l1DKREym51hSM_amdR7tnvfPAZaB5h2l9AAqqqrXAHF7RiG9F7xshzdji9q698PtJZ48fsV5S1ygZ8UsZ_u-Ysb7ZMrGoGaZme5X90eVg45B29gGHizLmcpXeTMP_EAKyI69nnp0KvOfwbbw',
    },
  },

  // 2 Cleanly Categorized Skill Groups
  skillGroups: [
    {
      id: 'web-backend',
      title: 'Web & Backend',
      badge: 'Core Engineering',
      badgeColor: 'primary',
      description: 'Hands-on full-stack technologies for semantic UI, client responsiveness, server logic, and relational persistence.',
      skills: [
        {
          id: 'html5',
          name: 'HTML5',
          proficiency: 90,
          description: 'Semantic markup, accessibility compliance (ARIA), and fluid responsive layout scaffolding.',
          iconName: 'html',
          tags: ['Semantic HTML', 'SEO Friendly', 'DOM Structure', 'Accessibility'],
        },
        {
          id: 'css3',
          name: 'CSS3',
          proficiency: 88,
          description: 'Modern CSS Flexbox, Grid systems, responsive media queries, and Tailwind CSS utility styling.',
          iconName: 'css',
          tags: ['Flexbox', 'CSS Grid', 'Tailwind CSS', 'Responsive UI'],
        },
        {
          id: 'javascript',
          name: 'JavaScript',
          proficiency: 82,
          description: 'Modern ES6+ syntax, asynchronous programming, dynamic DOM operations, and event orchestration.',
          iconName: 'javascript',
          tags: ['ES6+', 'Async / Await', 'DOM Manipulation', 'Fetch APIs'],
        },
        {
          id: 'csharp',
          name: 'C#',
          proficiency: 75,
          description: 'Object-Oriented Programming (OOP), LINQ, strong typing, clean design patterns, and algorithmic foundations.',
          iconName: 'code',
          tags: ['OOP Architecture', 'LINQ', 'Data Structures', 'Robust Types'],
        },
        {
          id: 'aspnet',
          name: 'ASP.NET',
          proficiency: 74,
          description: 'MVC controller architecture, dependency injection, RESTful API endpoints, and server-side request pipelines.',
          iconName: 'data_object',
          tags: ['ASP.NET MVC', 'REST APIs', 'Routing', 'Middleware'],
        },
        {
          id: 'sql-mysql',
          name: 'SQL / MySQL',
          proficiency: 78,
          description: 'Relational database schema modeling, normalized tables, complex JOIN queries, and CRUD optimization.',
          iconName: 'database',
          tags: ['MySQL', 'Schema Normalization', 'JOIN Queries', 'Data Persistence'],
        },
      ],
    },
    {
      id: 'ai-innovation',
      title: 'AI & Innovation',
      badge: 'Applied Workflows',
      badgeColor: 'secondary',
      description: 'Generative pipelines, analytical prompt decomposition, temporal video synthesis, and technical AI research.',
      skills: [
        {
          id: 'generative-ai',
          name: 'Generative AI (Image & Video)',
          proficiency: 86,
          description: 'Latent diffusion model parameterization, camera motion vectors, high-fidelity image synthesis, and automated video workflows.',
          iconName: 'palette',
          tags: ['Latent Diffusion', 'Video Motion AI', 'Style Seeds', 'Visual Rendering'],
        },
        {
          id: 'prompt-eng',
          name: 'Prompt Engineering',
          proficiency: 89,
          description: 'System-prompt crafting, few-shot conditioning, deterministic constraints, chain-of-thought logic, and LLM output tuning.',
          iconName: 'tune',
          tags: ['Few-Shot Chains', 'Context Framing', 'Role Directives', 'Hallucination Reduction'],
        },
        {
          id: 'graph-prompts',
          name: 'Graph Prompt Generators',
          proficiency: 92,
          description: 'Bespoke structured prompt decomposition (Goal, Role, Audience, Parameters, Hierarchy) for reliable code and reasoning synthesis.',
          iconName: 'hub',
          tags: ['GRAPH Framework', 'Structured Prompts', 'Deterministic Logic', 'Workflow Tools'],
        },
        {
          id: 'ai-research',
          name: 'AI-Powered Research',
          proficiency: 84,
          description: 'Accelerated software engineering learning pipelines, ingesting technical documentation, and synthesizing CS theory.',
          iconName: 'psychology',
          tags: ['Knowledge Synthesis', 'Codebase Ingestion', 'Doc Analysis', 'Technical Learning'],
        },
      ],
    },
  ] as SkillCategoryGroup[],

  // Highlighted Academic Record
  education: [
    {
      id: 'bca',
      period: '2024 – Present (Final Year)',
      yearBadge: 'FINAL YEAR • IN PROGRESS',
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Swami Vivekananda Government College, Ghumarwin',
      details:
        'Core curriculum encompassing Web Technologies, Database Systems (RDBMS & SQL), Object-Oriented Software Development (C# / Java), and Software Engineering Architecture.',
      isCurrent: true,
    },
    {
      id: 'class-12',
      period: '2024',
      yearBadge: 'HIGH DISTINCTION',
      degree: 'Class 12 (+2)',
      score: '85.60%',
      institution: 'Secondary Board of School Education',
      details:
        'Completed senior secondary curriculum with strong academic distinction in mathematics, analytical problem solving, and computational thinking.',
    },
    {
      id: 'class-10',
      period: '2022',
      yearBadge: 'COMPLETED',
      degree: 'Class 10 (Matric)',
      score: '82.14%',
      institution: 'High School Board',
      details:
        'Rigorous foundational training across mathematics, physical sciences, and computer literacy with high honors.',
    },
  ] as EducationItem[],

  // 2x2 Grid: Featured Projects & AI Workflows
  featuredProjects: [
    {
      id: 'card-1-aspnet',
      title: 'ASP.NET & C# Web Application',
      subtitle: 'Full-Stack Web Architecture & Relational Persistence',
      badge: 'FULL-STACK BACKEND',
      badgeType: 'code',
      actionLabel: 'View Code',
      actionType: 'github',
      githubUrl: 'https://github.com/kumar4646adi-create',
      description:
        'A comprehensive web application showcasing clean MVC separation of concerns, ASP.NET backend controllers, asynchronous CRUD endpoints, and robust MySQL relational database schemas with input validation.',
      tags: ['C#', 'ASP.NET MVC', 'SQL / MySQL', 'REST APIs', 'Clean Architecture'],
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCrIFHH1t3ETjYldUuz0G5qdSQKkvlwGDpF_cz37C1A4uXRWT08d1TQA3vboeYQPbVXl2HtrKIBp5LhZah5IzzJ1zWI9ltdf-_nMN4jBz0xNRG-yjCDntd7QpfvqUVZHmiZWSR74dvShEfgLbY3Qy2YRMLqK3_nztMH2brLbeJnzVLkIDG9aZ49TcF07NDUQe7gcbKIjIx39Fuj-ipwDx0746yYQn9hztHGB0j3blfja7qIdmytIg3NVQ',
      highlights: [
        'Organized C# MVC project structure with controller-service boundaries',
        'Normalized relational database tables with foreign key constraints in MySQL',
        'Secure async database operations avoiding thread starvation',
        'Responsive Razor & Tailwind front-end components',
      ],
    },
    {
      id: 'card-2-js-tool',
      title: 'Interactive JavaScript Web Tool',
      subtitle: 'Dynamic DOM Logic & Real-Time Client Utility',
      badge: 'INTERACTIVE UTILITY',
      badgeType: 'demo',
      actionLabel: 'Live Demo',
      actionType: 'demo-js',
      githubUrl: 'https://github.com/kumar4646adi-create',
      description:
        'A high-performance client-side interactive tool featuring reactive DOM state management, real-time code snippet formatting, responsive flexbox layout calculations, and instant data persistence via localStorage.',
      tags: ['JavaScript (ES6+)', 'DOM API', 'Interactive UI', 'CSS Grid/Flexbox', 'Async JS'],
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBj5ayH3viNc8-_VU2bDtqQ0jps1p4NGHyYJ6ma2aj8Bh9IBwI3_yWeC4zZFjC8DM23tNQLhvk7U7RQ9xhjyVVcF6Zp1U6gQ5Bi11alIaLS6TwgfmImkkulps88NZFZzKphDdy9gsaVxHAWI6UurOkui72avj2koyAQIwlOgHNN6TxqYjZvmz_AI00wCUScFrqEl8ILeocUEJf1p0QwA-wNPMseHvhb3KBK0asHZ-kvPVyodO0bUxyRSA',
      highlights: [
        'Zero-dependency modern JavaScript using custom event dispatchers',
        'Instant live computation and interactive state rendering',
        'Accessible keyboard shortcuts and touch-friendly controls',
        'Cross-browser responsive styling tested across all modern viewports',
      ],
    },
    {
      id: 'card-3-prompt-generator',
      title: 'AI Prompt Generator & Workflow Showcase',
      subtitle: 'GRAPH Decomposition Framework for High-Efficiency Reasoning',
      badge: 'AI FRAMEWORK',
      badgeType: 'prompts',
      actionLabel: 'View Prompts',
      actionType: 'prompts-graph',
      githubUrl: 'https://github.com/kumar4646adi-create',
      description:
        'A structured prompt synthesis system implementing the GRAPH methodology (Goal, Role, Audience, Parameters, Hierarchy). Decomposes complex coding and analysis requests into deterministic prompt specifications for LLMs.',
      tags: ['Prompt Engineering', 'GRAPH Methodology', 'Few-Shot Synthesis', 'LLM Architecture'],
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBj5ayH3viNc8-_VU2bDtqQ0jps1p4NGHyYJ6ma2aj8Bh9IBwI3_yWeC4zZFjC8DM23tNQLhvk7U7RQ9xhjyVVcF6Zp1U6gQ5Bi11alIaLS6TwgfmImkkulps88NZFZzKphDdy9gsaVxHAWI6UurOkui72avj2koyAQIwlOgHNN6TxqYjZvmz_AI00wCUScFrqEl8ILeocUEJf1p0QwA-wNPMseHvhb3KBK0asHZ-kvPVyodO0bUxyRSA',
      highlights: [
        '5-phase decomposition eliminating ambiguous LLM outputs',
        'Proven reduction in syntax bugs when synthesizing backend C# and SQL',
        'Integrated interactive studio for live parameter crafting',
        'Instant clipboard export for prompt engineers and software teams',
      ],
    },
    {
      id: 'card-4-creative-ai',
      title: 'AI Visuals & Video Creation Showcase',
      subtitle: 'Generative Media Pipelines & Multimodal Synthesis Experiments',
      badge: 'CREATIVE WORKFLOW',
      badgeType: 'gallery',
      actionLabel: 'Explore Gallery',
      actionType: 'gallery',
      githubUrl: 'https://github.com/kumar4646adi-create',
      description:
        'An applied creative technology pipeline leveraging generative latent diffusion and temporal video synthesis. Explores cinematic lighting prompts, camera panning velocity, seed consistency, and multimedia web assets.',
      tags: ['Generative AI', 'AI Video Synthesis', 'Diffusion Models', 'Creative Tech'],
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBcRvqCIUHpADMgPsNHdaI0VLxX6QLVQoZLKGSlGaEcXoEBlV7Md4lAEI-BzdV7qC_rnzpyG2UdXqrSZV0m529vrHFk4440Dbd9lGGexYuyGDAUckgCC89CdKVeAnluceo_UyIWVMLitV7dKGyzpIbJaYjqnuJTLGompRaMHAR7aqxqKiUYFmvCVNG2uHX6dlq0fwrsCtbPzfxsU-kpOAc-SySB6ReuSPy71mNKh52gWpCkBlZSiqjFwg',
      galleryItems: [
        {
          id: 'gal-1',
          title: 'Cybernetic Neural Hologram',
          category: 'Generative Art',
          aspect: '16:9',
          promptPreview: 'Bioluminescent data lattice, deep violet volumetric glow, intricate glass circuit nodes, 8k cinematic octane render',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj5ayH3viNc8-_VU2bDtqQ0jps1p4NGHyYJ6ma2aj8Bh9IBwI3_yWeC4zZFjC8DM23tNQLhvk7U7RQ9xhjyVVcF6Zp1U6gQ5Bi11alIaLS6TwgfmImkkulps88NZFZzKphDdy9gsaVxHAWI6UurOkui72avj2koyAQIwlOgHNN6TxqYjZvmz_AI00wCUScFrqEl8ILeocUEJf1p0QwA-wNPMseHvhb3KBK0asHZ-kvPVyodO0bUxyRSA',
        },
        {
          id: 'gal-2',
          title: 'Fluid Neon Energy Motion',
          category: 'Video Synthesis',
          aspect: '16:9',
          promptPreview: 'Continuous camera pan through swirling luminous neon ribbons, liquid particle dynamics, dark sapphire contrast',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcRvqCIUHpADMgPsNHdaI0VLxX6QLVQoZLKGSlGaEcXoEBlV7Md4lAEI-BzdV7qC_rnzpyG2UdXqrSZV0m529vrHFk4440Dbd9lGGexYuyGDAUckgCC89CdKVeAnluceo_UyIWVMLitV7dKGyzpIbJaYjqnuJTLGompRaMHAR7aqxqKiUYFmvCVNG2uHX6dlq0fwrsCtbPzfxsU-kpOAc-SySB6ReuSPy71mNKh52gWpCkBlZSiqjFwg',
        },
        {
          id: 'gal-3',
          title: 'Modern Dark UI Architecture',
          category: 'Digital Product Design',
          aspect: '16:9',
          promptPreview: 'Clean dark mode developer interface, glassmorphism telemetry cards, indigo & cyan accents, crisp typography',
          imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrIFHH1t3ETjYldUuz0G5qdSQKkvlwGDpF_cz37C1A4uXRWT08d1TQA3vboeYQPbVXl2HtrKIBp5LhZah5IzzJ1zWI9ltdf-_nMN4jBz0xNRG-yjCDntd7QpfvqUVZHmiZWSR74dvShEfgLbY3Qy2YRMLqK3_nztMH2brLbeJnzVLkIDG9aZ49TcF07NDUQe7gcbKIjIx39Fuj-ipwDx0746yYQn9hztHGB0j3blfja7qIdmytIg3NVQ',
        },
      ],
      highlights: [
        'Prompt stylistic parameterization matrix for consistent visual aesthetics',
        'Camera velocity controls for video motion interpolation pipelines',
        'High dynamic range lighting configurations with dark background contrast',
        'Asset integration pipelines tailored for web portfolios and branding',
      ],
    },
  ] as ProjectShowcaseItem[],

  aiExplorations: [
    {
      id: 'graph-prompt',
      title: 'GRAPH Prompt Generator',
      tagline: 'Goal, Role, Audience, Parameters & Hierarchy compiler',
      category: 'Interactive Tool',
      iconName: 'psychology',
      description:
        'A systematic prompt engineering architecture that structures generative AI prompts using the GRAPH protocol for optimal LLM context clarity and output precision.',
      featured: true,
    },
    {
      id: 'genai-images',
      title: 'Generative AI Image Creation',
      tagline: 'Latent diffusion & prompt-driven visual generation',
      category: 'Computer Vision',
      iconName: 'palette',
      description:
        'Explorations in text-to-image synthesis, negative prompt weighting, lighting tokens, and artistic stylistic transfer for interface assets.',
    },
    {
      id: 'video-synthesis',
      title: 'AI Video Creation & Synthesis',
      tagline: 'Generative temporal motion & camera dynamics',
      category: 'Generative Media',
      iconName: 'videocam',
      description:
        'Experiments with generative video diffusion models, camera motion interpolation, keyframe consistency, and audio-reactive pacing.',
    },
    {
      id: 'prompt-eng',
      title: 'Prompt Engineering Frameworks',
      tagline: 'Few-shot formatting, chain-of-thought, system design',
      category: 'LLM Systems',
      iconName: 'terminal',
      description:
        'Methodologies for eliciting deterministic reasoning from foundation models through structured XML tags, chain-of-thought scaffolds, and boundary constraints.',
    },
    {
      id: 'ai-research',
      title: 'AI-Powered Research & Synthesis',
      tagline: 'Grounded retrieval & technical summarization',
      category: 'Information Retrieval',
      iconName: 'auto_awesome',
      description:
        'Leveraging AI agents for literature reviews, codebase documentation synthesis, architectural comparison matrices, and technology tracking.',
    },
  ] as AiExplorationItem[],
};

