import { MailIcon, MailMinus, Phone } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
      <div className="mb-6">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-semibold text-gray-800">
            <span>Samir</span>
            <span className="mx-1"> </span>
            <span>Prajapati</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <div className="text-gray-700">
            <div className="mb-2">
              <span>Kathmandu, </span>
              <span>Nepal</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-gray-700">
          <div className="mb-2 flex items-center justify-end space-x-2">
            <Phone className="w-5 h-5 text-gray-600" />
            <span>9840054758</span>
          </div>
          <div className="mb-2 flex items-center justify-end space-x-2">
            <MailIcon className="w-5 h-5 text-gray-600" />
            <a
              href="mailto:bullseye405@gmail.com"
              className="text-blue-600 hover:underline"
            >
              bullseye405@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
