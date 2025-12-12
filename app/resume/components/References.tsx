import Image from 'next/image';

const references = [
  {
    name: 'Matt Carson',
    position: 'Senior Manager @ ExtraSpace Storage',
    email: 'mcarson@extraspace.com',
    relationship: 'Manager',
    imgSrc: '/images/references/matt_carson.jpg',
  },
  {
    name: 'Chase Pursley',
    position: 'Founder @ Appraisal Inbox',
    email: 'chase@appraisalinbox.com',
    relationship: 'Client',
    imgSrc: '/images/references/chase_pursley.jpg',
  },
  {
    name: 'Sabin Maharjan',
    position: 'Development Manager @ Auxfin Development Nepal',
    email: 'sabin.maharjan@auxfin.com',
    relationship: 'Former Manager',
    imgSrc: '/images/references/sabin_maharjan.jpg',
  },
];

const References = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">
        References
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {references.map((ref, index) => (
          <div
            key={index}
            className="p-5 border border-gray-200 rounded-xl shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <Image
                src={ref.imgSrc}
                width={80}
                height={80}
                alt={`${ref.name} photo`}
                className="rounded-full object-cover"
              />

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {ref.name}
                </h3>
                <p className="text-sm text-gray-700">{ref.position}</p>

                <a
                  href={`mailto:${ref.email}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  {ref.email}
                </a>

                <p className="text-xs text-gray-600 mt-1">{ref.relationship}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References;
