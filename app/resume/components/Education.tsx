import React from 'react';
import { educationData } from './contants';

const Education = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-6">Education</h2>
      <div className="relative overflow-x-auto">
        <div className="flex space-x-6">
          {educationData.map((edu, index) => (
            <div key={index} className="w-64">
              <div className="h-full  relative p-4 bg-gray-100 rounded-lg shadow-sm">
                {/* <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div> */}
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-sm text-gray-700">{edu.field}</p>
                <p className="text-sm text-gray-600">
                  {edu.institution}, {edu.location}
                </p>
                {/* <p className="text-sm text-gray-600">
                  {edu.startDate} - {edu.endDate}
                </p> */}
                 {edu.endYear && (
                  <p className="text-sm text-gray-600">
                    {edu.endYear}
                  </p>
                )}
                {/* <p className="text-sm text-gray-600">{edu.gpa}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
