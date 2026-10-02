export interface Job {
  company: string;
  role: string;
  period: string;
  items: string[];
}

export interface Project {
  num: string;
  name: string;
  url: string;
  delay: number;
}

const TESTED = 'Tested and deployed scalable, highly available, and modular software products.';
const COLLAB = 'Collaborated with product management to design, build, and test systems.';
const MODIFIED =
  'Modified existing software to correct errors, adapt to new requirements, and improve performance.';

export const STACK = [
  'Angular', 'Ionic', 'Laravel', 'PHP', 'JavaScript', 'ASP.NET',
  'MySQL', 'Swift', 'iOS', 'Azure AD', 'HTML5', 'CSS3',
];

export const JOBS: Job[] = [
  {
    company: 'GET Philippines Inc',
    role: 'Software Developer · Makati City',
    period: 'Sep 2025 — Present',
    items: [
      'Front-end and back-end development of the Unified ID System for Persons with Disabilities for the National Council on Disability Affairs.',
      'Front-end and back-end development of the Unified ID System for Solo Parents for the Protective Services Bureau of the Department of Social Welfare and Development.',
    ],
  },
  {
    company: 'SLMP Digital Inc.',
    role: 'Front End Developer',
    period: '2023 — Present',
    items: [
      'Developed web applications using Angular, Laravel, and other coding modalities.',
      'Converted mock-up designs into applications.',
      TESTED,
      COLLAB,
    ],
  },
  {
    company: 'Airo Jade Solution',
    role: 'Senior Developer',
    period: '2021 — 2023',
    items: [
      'Developed web and mobile applications using Angular, Ionic, Laravel, and other coding modalities.',
      'Converted mock-up designs into applications.',
      TESTED,
      COLLAB,
    ],
  },
  {
    company: 'Accenture',
    role: 'Application Developer',
    period: '2019 — 2021',
    items: [
      'Converted AngularJS applications to the latest Angular framework for the content management system.',
      'Implemented Azure AD for authentication.',
      MODIFIED,
      TESTED,
    ],
  },
  {
    company: 'PhilGPS Corporation',
    role: 'Full Stack Software Developer',
    period: '2016 — 2018',
    items: [
      'Developed applications using front-end technologies including HTML5, JavaScript, jQuery, CSS3, AngularJS, Angular 4, and other coding modalities.',
      'Developed iOS applications using Xcode, Swift 4, and native iOS programming.',
      COLLAB,
      MODIFIED,
      'Contributed to creating internal system applications.',
      'Applied problem-solving skills in troubleshooting software problems.',
      TESTED,
    ],
  },
  {
    company: 'MedAsia Philippines',
    role: 'Contractual Developer',
    period: '2015',
    items: [
      'Converted AngularJS applications to the latest Angular framework for the content management system.',
      'Implemented Azure AD for authentication.',
      MODIFIED,
      TESTED,
    ],
  },
];

export const PROJECTS: Project[] = [
  { num: '01', name: 'Laluma', url: 'https://laluma.netlify.app/', delay: 0 },
  { num: '02', name: 'Sweet Amore', url: 'https://sweet-amore.netlify.app/', delay: 120 },
  { num: '03', name: 'Supahkid', url: 'https://supahkid.netlify.app/', delay: 240 },
  { num: '04', name: 'ICT Creations', url: 'https://ict-creation.netlify.app/', delay: 360 },
  { num: '05', name: 'Tap Street', url: 'https://tapstreet.netlify.app/', delay: 480 },
  { num: '06', name: "Surreal's Cadeau", url: 'https://surreals-cadeau.netlify.app/', delay: 600 },
];
