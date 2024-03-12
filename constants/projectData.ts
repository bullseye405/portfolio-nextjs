const UIImage1 = '/images/ui-project-1.jpg';
const WebImage2 = '/images/web-project-2.jpg';
const MobileImage2 = '/images/mobile-project-2.jpg';
const MobileImage1 = '/images/mobile-project-1.jpg';
const WebImage1 = '/images/web-project-1.jpg';
const UIImage2 = '/images/ui-project-2.jpg';

export interface IProject {
  id: number;
  title: string;
  img: string;
  category: string;
  ProjectHeader?: {
    title: string;
    publishDate: string;
    tags: string;
  };
}

export const projectsData: IProject[] = [
  {
    id: 1,
    title: 'Google Health Platform',
    category: 'Web Application',
    img: WebImage2,
    ProjectHeader: {
      title: 'Project Management UI - From Context',
      publishDate: 'Jul 26, 2021',
      tags: 'UI / Frontend',
    },
  },
  {
    id: 2,
    title: 'Phoenix Digital Agency',
    category: 'Mobile Application',
    img: MobileImage2,
  },
  {
    id: 3,
    title: 'Project Management UI',
    category: 'UI/UX Design',
    img: UIImage1,
  },
  {
    id: 4,
    title: 'Cloud Storage Platform',
    category: 'UI/UX Design',
    img: UIImage2,
  },
  {
    id: 5,
    title: 'React Social App',
    category: 'Mobile Application',
    img: MobileImage1,
  },
  {
    id: 6,
    title: 'Apple Design System',
    category: 'Web Application',
    img: WebImage1,
  },
];

export const singleProjectData = {
  ProjectHeader: {
    title: 'Project Management UI',
    publishDate: 'Jul 26, 2021',
    tags: 'UI / Frontend',
  },
  ProjectImages: [
    {
      id: 1,
      title: 'Kabul Project Management UI',
      img: UIImage1,
    },
    {
      id: 2,
      title: 'Kabul Project Management UI',
      img: WebImage2,
    },
    {
      id: 3,
      title: 'Kabul Project Management UI',
      img: MobileImage2,
    },
  ],
  ProjectInfo: {
    ClientHeading: 'About Client',
    CompanyInfo: [
      {
        id: 1,
        title: 'Name',
        details: 'Company Ltd',
      },
      {
        id: 2,
        title: 'Services',
        details: 'UI Design & Frontend Development',
      },
      {
        id: 3,
        title: 'Website',
        details: 'https://company.com',
      },
      {
        id: 4,
        title: 'Phone',
        details: '555 8888 888',
      },
    ],
    ObjectivesHeading: 'Objective',
    ObjectivesDetails:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
    Technologies: [
      {
        title: 'Tools & Technologies',
        techs: [
          'HTML',
          'CSS',
          'JavaScript',
          'Vue.js',
          'TailwindCSS',
          'AdobeXD',
        ],
      },
    ],
    ProjectDetailsHeading: 'Challenge',
    ProjectDetails: [
      {
        id: 1,
        details:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
      },
      {
        id: 2,
        details:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
      },
      {
        id: 3,
        details:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
      },
      {
        id: 4,
        details:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
      },
    ],
    SocialSharingHeading: 'Share This',
    SocialSharing: [
      {
        id: 1,
        name: 'Twitter',
        icon: 'Twitter',
        url: 'https://twitter.com/bullseye405',
      },
      {
        id: 2,
        name: 'Instagram',
        icon: 'Instagram',
        url: 'https://instagram.com/bullseye405',
      },
      {
        id: 3,
        name: 'Facebook',
        icon: 'Facebook',
        url: 'https://facebook.com/bullseye405',
      },
      {
        id: 4,
        name: 'LinkedIn',
        icon: 'Linkedin',
        url: 'https://linkedin.com/bullseye405',
      },
      {
        id: 5,
        name: 'Youtube',
        icon: 'Youtube',
        url: 'https://www.youtube.com/bullseye405',
      },
    ],
  },
};
