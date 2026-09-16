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
    <div className="py-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">References</h2>
      <div className="space-y-6">
        {references.map((ref, index) => (
          <div
            key={index}
            className="p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-900">{ref.name}</h3>
            <p className="text-sm text-gray-700">{ref.position}</p>
            <p className="text-sm text-gray-700">
              <a
                href={`mailto:${ref.email}`}
                className="text-blue-600 hover:underline"
              >
                {ref.email}
              </a>
            </p>
            <p className="text-sm text-gray-700">
              Relationship: {ref.relationship}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
