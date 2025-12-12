const educationData = [
  {
    degree: "Bachelor's degree",
    field: "Computer Science",
    institution: "National College Of Computer Studies",
    location: "Kathmandu",
    startYear: "2015",
    endYear: "2019",
  },
  {
    degree: "Higher Secondary (+2)",
    field: "Science",
    institution: "Capitol Hill College",
    location: "Kathmandu",
    startYear: "2012",
    endYear: "2014",
  },
  {
    degree: "School",
    field: "Secondary Education",
    institution: "Saraswoti Boarding Higher Secondary School",
    location: "Kathmandu",
    startYear: "",
    endYear: "2012",
  },
];

const Education = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
        Education
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {edu.degree}
            </h3>

            <p className="text-gray-700 text-sm">{edu.field}</p>

            <p className="text-gray-600 text-sm">
              {edu.institution}, {edu.location}
            </p>

            <p className="text-sm font-medium text-gray-800 mt-1">
              {edu.startYear
                ? `${edu.startYear} – ${edu.endYear}`
                : edu.endYear}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
