'use client';

import Image from 'next/image';
import {
  CSSLogo,
  NextLogo,
  NodeLogo,
  RTLLogo,
  SassLogo,
  TailwindLogo,
  TypescriptLogo,
  ZustandLogo,
} from '../../../public/images/logos';

const skills = [
  {
    name: 'React',
    url: 'https://reactjs.org/',
    logo_url: 'https://reactnative.dev/img/header_logo.svg',
    // logo_url: ReactLogo,
    order: 1,
  },
  {
    name: 'Redux',
    url: 'https://redux.js.org/',
    logo_url: 'https://redux.js.org/img/redux.svg',
    order: 2,
  },
  {
    name: 'Zustand',
    url: 'https://github.com/pmndrs/zustand',
    logo_url:
      //   'https://raw.githubusercontent.com/pmndrs/zustand/main/media/logo.svg',
      ZustandLogo,
    order: 3,
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    logo_url:
      //   'https://www.typescriptlang.org/assets/images/icons/ts-logo-128.svg',
      TypescriptLogo,
    order: 4,
  },
  {
    name: 'CSS',
    url: 'https://www.w3.org/Style/CSS/',
    // logo_url: 'https://www.w3.org/Style/CSS/logo.png',
    logo_url: CSSLogo,
    order: 5,
  },
  {
    name: 'Sass',
    url: 'https://sass-lang.com/',
    // logo_url: 'https://sass-lang.com/assets/img/logos/logo-black.svg',
    logo_url: SassLogo,
    order: 6,
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    logo_url:
      //   'https://tailwindcss.com/_next/static/media/logo-dark.e872b544.svg',
      TailwindLogo,
    order: 7,
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    // logo_url: 'https://nextjs.org/static/images/twitter-card.png',
    logo_url: NextLogo,
    order: 8,
  },
  {
    name: 'GraphQL',
    url: 'https://graphql.org/',
    logo_url: 'https://graphql.org/img/logo.svg',
    order: 10,
  },
  {
    name: 'React Native',
    url: 'https://reactnative.dev/',
    logo_url: 'https://reactnative.dev/img/header_logo.svg',
    order: 9,
  },
  {
    name: 'Jest',
    url: 'https://jestjs.io/',
    logo_url: 'https://jestjs.io/img/jest.png',
    order: 11,
  },
  {
    name: 'React Testing Library',
    url: 'https://testing-library.com/docs/react-testing-library/intro',
    // logo_url: 'https://testing-library.com/img/logo.svg',
    logo_url: RTLLogo,
    order: 12,
  },
  {
    name: 'Laravel',
    url: 'https://laravel.com/',
    logo_url: 'https://laravel.com/img/logomark.min.svg',
    order: 13,
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org/',
    // logo_url: 'https://nodejs.org/static/images/logo.svg',
    logo_url: NodeLogo,
    order: 14,
  },
  {
    name: 'MySQL',
    url: 'https://www.mysql.com/',
    logo_url: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png',
    order: 15,
  },
  {
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    logo_url: 'https://www.postgresql.org/media/img/about/press/elephant.png',
    order: 16,
  },
  {
    name: 'OpenLayers',
    url: 'https://openlayers.org/',
    logo_url: 'https://openlayers.org/theme/img/logo-dark.svg',
    order: 17,
  },
  {
    name: 'Leaflet',
    url: 'https://leafletjs.com/',
    logo_url: 'https://leafletjs.com/docs/images/logo.png',
    order: 18,
  },
];

// Slider component
const SkillsSlider = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="overflow-hidden flex flex-wrap gap-12 justify-center items-center">
        {skills
          .sort((a, b) => a.order - b.order)
          .map((skill) => (
            <div key={skill.order} className="px-2">
              <a href={skill.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={skill.logo_url}
                  alt={skill.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkillsSlider;
