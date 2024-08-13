import React from 'react';

const experiences = [
  {
    title: 'Software Engineer',
    date: '08/2023 - Current',
    company: 'Insight Workshop',
    responsibilities: [
      'Wrote and developed new and well-tested code for different software projects.',
      'Assisted quality assurance team with testing software, investigating bugs and developing test cases.',
      'Coordinated with product managers to define clear project scopes, ensuring alignment with business goals and objectives.',
    ],
  },
  {
    title: 'React Developer',
    date: '05/2022 - 04/2024',
    company: 'Appraisal Inbox',
    responsibilities: [
      'Reviewed and optimized existing website code, achieving significant improvements in performance and maintainability.',
      'Utilized React framework to build dynamic and interactive web applications, improving site performance.',
      'Developed user-friendly website interfaces using HTML, CSS, and JavaScript for enhanced user experience.',
      'Collaborated with back-end developers to integrate APIs and ensure seamless functionality across platforms.',
    ],
  },
  {
    title: 'React Engineer',
    date: '02/2022 - 08/2023',
    company: 'InfoDevelopers Pvt. Ltd.',
    responsibilities: [
      'Demonstrated expertise in HTML5, CSS3, object-oriented JavaScript and large JavaScript applications.',
      'Adapted quickly to new web technologies and frameworks, staying ahead in the fast-paced tech environment.',
      'Coordinated closely with graphic designers to translate visual concepts into functional website elements.',
    ],
  },
  {
    title: 'Full Stack Developer',
    date: '04/2019 - 02/2022',
    company: 'Auxfin Development Nepal',
    location: 'Kathmandu, Nepal',
    responsibilities: [
      'Wrote and developed new and well-tested code for different software projects.',
      'Worked closely with other team members to identify and remove software bugs.',
      'Collaborated with cross-functional teams to identify software needs, translating complex requirements into actionable development tasks.',
    ],
  },
  {
    title: 'Full Stack Developer',
    date: '02/2021 - 07/2021',
    company: 'Biramedia',
    responsibilities: [
      'Completed assigned tasks and reached targets working solely in remote working capacity.',
      'Collaborated with cross-functional teams to define, design, and deploy new features, improving product performance and customer satisfaction.',
      'Designed and implemented RESTful APIs, enabling effective communication between front-end and back-end systems.',
    ],
  },
  {
    title: 'Intern',
    date: '12/2018 - 03/2019',
    company: 'Auxfin Development Nepal',
    location: 'Kathmandu, Nepal',
    responsibilities: [
      'Attended training to learn software development theory, techniques, and coding best practices.',
      'Learned new skills, testing techniques, and troubleshooting best practices.',
      'Created HTML templates, JavaScript files, and CSS for UI module development.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
      </div>
      <div className="relative">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start mb-12 relative"
          >
            <div className="md:w-1/4 md:text-right md:pr-6 mb-4 md:mb-0">
              <div className="text-gray-600 font-medium text-sm">
                {experience.date}
              </div>
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
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
            {index < experiences.length - 1 && (
              <div className="hidden md:block absolute top-0 left-1/4 w-0.5 bg-gray-300 h-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
