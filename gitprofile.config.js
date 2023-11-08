// gitprofile.config.js

const config = {
  github: {
    username: 'sanketdisale871',
    sortBy: 'stars',
    limit: 1, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['DSA'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'sanket-disale-32b195231',
    Leetcode: 'https://leetcode.com/sanke_tdisale871/',
    GitHub: 'https://github.com/sanketdisale871',
    GFG: 'https://auth.geeksforgeeks.org/user/sanketdisale871',
    instagram: 'sanke_tdisale871',
    medium: 'sanketdisale871',
    email: 'sanketdisale871@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1l7knkCQx3s_h7cKsYgOzjuNupODUxkVN/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'Data Structures',
    'Algorithms',
    'Java',
    'HTML',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
    'Bootstrap',
    'ExpressJS',
    'Bash',
    'AWS'
  ],
  experiences: [
    {
      company: 'DesiQnA',
      position: 'SDE Intern',
      from: 'May 2023',
      to: 'Sept 2023',
      companyLink: 'https://www.desiqna.in/',
    },
    {
      company: 'GrowR',
      position: 'Web Intern',
      from: 'Nov 2022',
      to: 'Fev 2023',
      companyLink: 'https://teamgrowr.com/',
    },
  ],
   certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], 
  education: [
    {
      institution: 'Vishawakarma Institute of Technology',
      degree: 'B.Tech. (IT)',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'New English School',
      degree: 'HSC',
      from: '2019',
      to: '2021',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'CollegeShip: Scholarship Portal',
      description:
        'Enhanced government scholarship applicaion processing with OCR technology, reducing manual workloads and speeding up turnaround times.',
      imageUrl: 'https://drive.google.com/file/d/1TmgtAoIBEe_wtKxXoZgzSRRRi9RDPbFy/view?usp=sharing',
      link: 'https://github.com/siddhesh-desai/CollegeShip',
    },
    {
      title: 'Retail Connect: Recommender Systems',
      description:
        'Created a Recommender System using NLP and Information Retrieval to analyze customer behavior via item-based filtering.',
      imageUrl: 'https://drive.google.com/file/d/1TmgtAoIBEe_wtKxXoZgzSRRRi9RDPbFy/view?usp=sharing',
      link: 'https://github.com/sanketdisale871/RetailConnect',
    },
    {
      title: 'Operating System Development (MOS)',
      description:
        'Developed a multiprogramming operating system (MOS) from scratch, diving into the core concepts of OS development.',
      imageUrl: 'https://drive.google.com/file/d/1TmgtAoIBEe_wtKxXoZgzSRRRi9RDPbFy/view?usp=sharing',
      link: 'https://github.com/sanketdisale871/Operating-System-Development-Project',
    },
    {
      title: 'Automation Pipeline using Jenkins',
      description:
        'Implemented a robust deployment pipeline leveraging Jenkins plugins and AWS EC2, seamless testing, building, and deploying stages for efficient CICD.',
      imageUrl: 'https://drive.google.com/file/d/1TmgtAoIBEe_wtKxXoZgzSRRRi9RDPbFy/view?usp=sharing',
      link: 'https://github.com/sanketdisale871/Jenkins-CI-CD-pipeline',
    },
    {
      title: 'Work-Connect: Connecting workers to clients',
      description:
        'Created a client-centric platform for request posting, quote selection, and feedback.',
      imageUrl: 'https://drive.google.com/file/d/1TmgtAoIBEe_wtKxXoZgzSRRRi9RDPbFy/view?usp=sharing',
      link: 'https://github.com/siddhesh-desai/Worker-Connect',
    },
    {
      title: 'WATER QUALITY PREDICTION |',
      description:
        'Project aimed to address a critical issue affecting human health,',
      imageUrl: 'https://drive.google.com/file/d/1TmgtAoIBEe_wtKxXoZgzSRRRi9RDPbFy/view?usp=sharing',
      link: 'https://github.com/sanketdisale871/WaterQualityPrediction',
    }
  ],

  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/sanketdisale871"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
