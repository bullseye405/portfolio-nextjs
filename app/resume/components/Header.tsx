import { Github, Linkedin, MailIcon } from 'lucide-react';
import Image from 'next/image';

import { SOCIALS } from '@/constants/socialLinks';
import AnimatedTagline from './AnimatedTagline';

const profileImage = '/images/profile/profile.png';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-x-8">
      <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-6">
        <Image
          src={profileImage}
          alt="Profile Image"
          width={100}
          height={100}
          className="rounded-full shadow-md"
        />

        <div className="mt-4 md:mt-0 text-center md:text-left">
          <h1 className="text-2xl font-semibold text-gray-800">
            Samir Prajapati
          </h1>
          <p className="text-gray-600">Full Stack Developer</p>

          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a
              href={`mailto:${SOCIALS.mail}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="hover:text-blue-600 text-gray-600"
            >
              <MailIcon className="w-5 h-5" />
            </a>

            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-black text-gray-600"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700 text-gray-600"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <AnimatedTagline animationStyle="typewriter" />
        </div>
      </div>

      <div className="hidden md:block text-right text-gray-500"></div>
    </div>
  );
};

export default Header;
