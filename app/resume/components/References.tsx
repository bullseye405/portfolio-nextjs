import React from 'react';

const references = [
  {
    name: 'Chase Pursley',
    position:
      'Founder @ Appraisal Inbox, The Operating System for Smart Appraisal Teams',
    email: 'chase@appraisalinbox.com',
    relationship: 'Client',
  },
  {
    name: 'Sabin Maharjan',
    position: 'Development Manager @ Auxfin Development Nepal',
    email: 'sabin.maharjan@auxfin.com',
    relationship: 'Former Manager',
  },
];

const References = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-6">References</h2>
      <div className="space-y-4">
        {references.map((ref, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold">{ref.name}</h3>
            <p className="text-sm text-gray-600">{ref.position}</p>
            <p className="text-sm text-gray-600">
              <a
                href={`mailto:${ref.email}`}
                className="text-blue-500 hover:underline"
              >
                {ref.email}
              </a>
            </p>
            <p className="text-sm text-gray-600">
              Relationship: {ref.relationship}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
