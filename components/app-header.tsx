'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import HireMeModal from '@/components/hire-me-modal';
import IndigoButton from '@/components/indigo-button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ThemeSwitcher from './theme-switcher';

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showHireMe, setShowHireMe] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleHireModal = () => {
    setShowHireMe(!showHireMe);
  };

  const commonLinkStyle =
    'block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2';
  return (
    <div className="sm:container sm:mx-auto">
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            <Link href={'/'} className='text-3xl'>Samir Prajapati</Link>
          </div>

          <ThemeSwitcher smallScreen />

          <Button
            onClick={toggleMenu}
            variant={'link'}
            size={'icon'}
            className="focus:outline-none sm:hidden text-3xl"
          >
            {showMenu ? <X size={36} /> : <Menu size={36} />}
          </Button>
        </div>

        <div
          className={
            showMenu
              ? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
              : 'hidden'
          }
        >
          <Link
            aria-label="Projects"
            href="/projects"
            className={cn(commonLinkStyle)}
          >
            Projects
          </Link>
          <Link
            aria-label="About Me"
            href="/about"
            className={cn(
              commonLinkStyle,
              'border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark'
            )}
          >
            About Me
          </Link>

          <Link
            aria-label="Contact"
            href="/contact"
            className={cn(
              commonLinkStyle,
              'border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark'
            )}
          >
            Contact
          </Link>

          <div className="border-t-2 pt-3 sm:pt-0 border-primary-light dark:border-secondary-dark">
            <IndigoButton
              onClick={toggleHireModal}
              className="font-medium sm:hidden block text-left text-md shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
            >
              Hire me
            </IndigoButton>
          </div>
        </div>

        <div className="font-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <Link
            href="/projects"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="About Me"
          >
            About Me
          </Link>
          <Link
            href="/contact"
            className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Contact"
          >
            Contact
          </Link>
        </div>

        <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
          <div className="hidden md:flex">
            <IndigoButton onClick={toggleHireModal} className="font-medium">
              Hire Me
            </IndigoButton>
          </div>
          <ThemeSwitcher />
        </div>

        <HireMeModal open={showHireMe} toggle={toggleHireModal} />
      </div>
    </div>
  );
};

export default AppHeader;
