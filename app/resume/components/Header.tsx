import React from 'react';

const Header = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <div className="doc-item">
          <div className="name text-xl font-semibold">
            <span>Samir</span>
            <span className="mx-1"></span>
            <span>Prajapati</span>
          </div>
        </div>
      </div>
      <div className="doc-item">
        <div className="flex flex-wrap">
          <div className="address w-full md:w-1/2">
            <div className="contactLt">
              <div className="mb-2">
                <span>Kathmandu, </span>
                <span>Nepal</span>
              </div>
            </div>
          </div>
          <div className="contactRt w-full md:w-1/2 text-right">
            <div className="mb-2">
              <span>9840054758</span>
            </div>
            <div className="mb-2">
              <span>bullseye405@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
