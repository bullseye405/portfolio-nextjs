'use client';

import { FileText } from 'lucide-react';
import Image from 'next/image';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

const DeveloperImage = '/images/developer.svg';
const DeveloperImageDark = '/images/developer-dark.svg';

const IntroSection = () => {
  const { theme } = useTheme();
  const router = useRouter();

  // const handleClick = async () => {
  //   const response = await fetch('/api/file');
  //   const blob = await response.blob();
  //   const url = window.URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = 'samir_prajapati_resume.pdf';
  //   link.click();
  //   window.URL.revokeObjectURL(url);
  // };

  return (
    <div className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2">
      <div className="w-full md:w-1/3 text-left">
        <h1 className="font-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
          Hi, I am Samir
        </h1>

        <p className="mt-4 text-lg md:text-2xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-none text-gray-500 dark:text-gray-200">
          A web developer based in Nepal
        </p>

        <div className="flex justify-center sm:block">
          <a
            onClick={() => {
              router.push('/resume');
            }}
            aria-label="download resume"
            className="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 
            text-lg border border-indigo dark:border-ternary-dark 
            py-2.5 sm:py-3 shadow-lg rounded-lg 
            bg-indigo-50 focus:ring-1 focus:focus:ring-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500
            cursor-pointer
            "
          >
            <FileText className="mr-2 sm:mr-3 h-5 w-5 sm:w-6 sm:h-6 duration-100" />
            <span className="text-sm sm:text-lg duration-100">Resume</span>
          </a>
        </div>
      </div>

      <Image
        src={theme === 'dark' ? DeveloperImageDark : DeveloperImage}
        alt="Developer"
        width={100}
        height={100}
        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
      />
    </div>
  );
};

export default IntroSection;
