import prisma from '@/lib/db';

const formatDate = (startDate: Date, endDate: Date | null) => {
  // Helper function to format month and year
  const pad = (num: number) => (num < 10 ? `0${num}` : num);

  const startMonth = pad(startDate.getMonth() + 1);
  const startYear = startDate.getFullYear();
  const endMonth = endDate ? pad(endDate.getMonth() + 1) : '';
  const endYear = endDate ? endDate.getFullYear() : '';

  return `${startMonth}/${startYear} - ${
    endMonth ? `${endMonth}/${endYear}` : 'Current'
  }`;
};

const ExperienceSection = async () => {
  const exp = await prisma.experience.findMany({
    include: {
      responsibilities: true,
    },
    orderBy: {
      startDate: 'desc',
    },
  });
  return (
    <div className="py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
      </div>
      <div className="relative">
        {exp.map((experience, index) => {
          const date = formatDate(experience.startDate, experience.endDate);
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start mb-12 relative"
            >
              <div className="md:w-1/4 md:text-right md:pr-6 mb-4 md:mb-0">
                <div className="text-gray-600 font-medium text-sm">{date}</div>
              </div>
              <div className="md:w-3/4 md:pl-6">
                <div className="font-semibold text-xl text-gray-900">
                  {experience.title}
                </div>
                <div className="text-gray-700 text-sm mb-3">
                  {experience.company}
                  {experience.location ? `, ${experience.location}` : ''}
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility.description}</li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block absolute top-0 left-1/4 w-0.5 bg-gray-300 h-full"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
