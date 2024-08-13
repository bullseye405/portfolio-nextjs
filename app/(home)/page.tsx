import Link from 'next/link';

import IntroSection from '@/app/(home)/components/IntroSection';
import Projects from './projects/components/Projects';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {

  return (
    <div className="container mx-auto">
      <IntroSection />
      <Projects isHomePage />
      <div className="mt-8 sm:mt-10 flex justify-center">
        <Link
          href={'/projects'}
          aria-label="More Projects"
          className="
            font-medium flex items-center
            px-6 py-3 rounded-lg shadow-lg hover:shadow-xl
            bg-indigo-500 hover:indigo-600 focus:ring-1 focus:ring-indigo-900
            text-white text-lg sm:text-xl duration-300
          "
        >
          More Projects
        </Link>
      </div>
    </div>
  );
}
