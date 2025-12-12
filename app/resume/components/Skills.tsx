'use client';

import Image from 'next/image';
import {
  NextLogo,
  RTLLogo,
  SassLogo,
  ZustandLogo
} from '../../../public/images/logos';

const skills = [
  {
    name: 'React',
    url: 'https://reactjs.org/',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg',
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
    logo_url: ZustandLogo,
    order: 3,
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    logo_url:
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    order: 4,
  },

  { name: 'Sass', url: 'https://sass-lang.com/', logo_url: SassLogo, order: 6 },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    logo_url:
      'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    order: 7,
  },
  { name: 'Next.js', url: 'https://nextjs.org/', logo_url: NextLogo, order: 8 },
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
    logo_url:
      'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
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

  {
    name: 'API Gateway',
    url: 'https://aws.amazon.com/api-gateway/',
    logo_url:
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    order: 19,
  },
];

const SkillsSlider = () => {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Skills</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {skills
          .sort((a, b) => a.order - b.order)
          .map((skill) => (
            <div key={skill.order} className="relative group">
              <a href={skill.url} target="_blank" rel="noopener noreferrer">
                <div className="w-20 h-20 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300 hover:scale-110">
                  <Image
                    src={skill.logo_url}
                    alt={skill.name}
                    width={45}
                    height={45}
                    className="object-contain"
                  />
                </div>
              </a>

              {/* Tooltip */}
              <div className="absolute left-1/2 -bottom-8 -translate-x-1/2 py-1 px-3 rounded-md bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {skill.name}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SkillsSlider;
