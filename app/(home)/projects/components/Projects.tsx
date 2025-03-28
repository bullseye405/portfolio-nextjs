'use client';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import SingleProject from '@/app/(home)/projects/components/SingleProject';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { projectsData } from '@/constants/projectData';

const selectOptions = [
  'Web Application',
  'Mobile Application',
  'UI/UX Design',
  'Branding',
];

interface ProjectProps {
  isHomePage?: boolean;
}

const Projects = ({ isHomePage }: ProjectProps) => {
  const [searchProject, setSearchProject] = useState('');
  const [selectProject, setSelectProject] = useState('');

  const commonStyle = `font-general-medium 
    rounded-lg
    text-sm
    sm:text-md
    dark:font-medium
    bg-secondary-light
    dark:bg-ternary-dark
    text-primary-dark
    dark:text-ternary-light
  `;

  return (
    <>
      <div className={!isHomePage ? 'container mx-auto' : ''}>
        <section className="py-5 sm:py-10 sm:mt-10">
          <div className="text-center">
            <p className="font-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
              Projects portfolio
            </p>
          </div>

          <div className="mt-10 sm:mt-16">
            <h3
              className="
            text-center 
            text-secondary-dark 
            dark:text-ternary-light 
            text-md 
            sm:text-xl 
            mb-3
        "
            >
              Search projects by title or filter by category
            </h3>

            <div
              className="
            flex justify-between 
            border-b border-primary-light dark:border-secondary-dark
            pb-3 gap-3
          "
            >
              <div className="flex justify-center gap-2">
                <Button size={'icon'} variant={'ghost'} className={commonStyle}>
                  <Search className="h-5 w-5" />
                </Button>
                <Input
                  id="name"
                  name="name"
                  type="search"
                  placeholder="Search Projects"
                  aria-label="Name"
                  className={commonStyle}
                />
              </div>

              <div className="w-1/2 sm:w-1/3 ">
                <Select
                  onValueChange={(val) => setSelectProject(val)}
                  defaultValue={selectProject}
                >
                  <SelectTrigger className={commonStyle}>
                    <SelectValue
                      placeholder="All Project"
                      className="     
                text-primary-dark
                dark:text-ternary-light
                "
                    />
                  </SelectTrigger>
                  <SelectContent className={commonStyle}>
                    {selectOptions.map((item) => (
                      <SelectItem value={item} key={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div
            className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            mt-6 sm:gap-10
          "
          >
            {projectsData.map((project) => (
              <SingleProject key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
      {isHomePage && (
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
      )}
    </>
  );
};

export default Projects;
