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

  const links = [
    { href: '/projects', label: 'Projects', isActive: false },
    { href: '/about', label: 'About Me', isActive: true },
    { href: '/contact', label: 'Contact', isActive: true },
  ];

  return (
    <div className="sm:container sm:mx-auto">
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            <Link href={'/'} className="text-3xl">
              Samir Prajapati
            </Link>
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
          {links
            .filter((link) => link.isActive)
            .map((link) => (
              <Link
                key={link.href}
                aria-label={link.label}
                href={link.href}
                className={cn(commonLinkStyle)}
              >
                {link.label}
              </Link>
            ))}

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
          {links
            .filter((link) => link.isActive)
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(commonLinkStyle)}
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
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
