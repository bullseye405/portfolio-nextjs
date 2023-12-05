const WebImage1 = '/images/web-project-1.jpg';
const WebImage2 = '/images/web-project-2.jpg';
const MobileImage1 = '/images/mobile-project-1.jpg';
const MobileImage2 = '/images/mobile-project-2.jpg';
const UIImage1 = '/images/ui-project-1.jpg';
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
