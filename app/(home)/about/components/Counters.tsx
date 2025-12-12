'use client';

import CounterItem from '@/components/counter-item';
import { useCountUp } from 'react-countup';

const Counters = () => {
  // Freelance Stats
  useCountUp({ ref: 'freelanceExperience', end: 4, duration: 2 });
  useCountUp({ ref: 'freelanceJobs', end: 10, duration: 2 });
  useCountUp({ ref: 'freelanceHours', end: 1000, duration: 2 });
  useCountUp({ ref: 'freelanceEarned', end: 20, duration: 2 });

  // Full-Time Stats
  useCountUp({ ref: 'fullTimeExperience', end: 7, duration: 2 });
  useCountUp({ ref: 'fullTimeProjects', end: 15, duration: 2 });
  useCountUp({ ref: 'fullTimeTeams', end: 6, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 space-y-16 container mx-auto">
      {/* Freelance Stats */}
      <div className="bg-primary-light dark:bg-ternary-dark shadow-sm p-8 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Freelance / Upwork Stats
        </h3>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <CounterItem
            title="Years of experience"
            counter={<span id="freelanceExperience" />}
            measurement="+"
          />
          <CounterItem
            title="Total Jobs"
            counter={<span id="freelanceJobs" />}
            measurement=""
          />
          <CounterItem
            title="Total Hours"
            counter={<span id="freelanceHours" />}
            measurement="+"
          />
          <CounterItem
            title="Total Earned"
            counter={<span id="freelanceEarned" />}
            measurement="K+"
            currency="$"
          />
        </div>
      </div>

      {/* Full-Time Job Stats */}
      <div className="bg-primary-light dark:bg-ternary-dark shadow-sm p-8 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          Full-Time Job Stats
        </h3>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <CounterItem
            title="Years of experience"
            counter={<span id="fullTimeExperience" />}
            measurement="+"
          />
          <CounterItem
            title="Projects Completed"
            counter={<span id="fullTimeProjects" />}
            measurement="+"
          />
          <CounterItem
            title="Teams Worked With"
            counter={<span id="fullTimeTeams" />}
            measurement="+"
          />
        </div>
      </div>
    </div>
  );
};

export default Counters;
