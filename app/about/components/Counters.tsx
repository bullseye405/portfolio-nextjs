'use client';

import CounterItem from '@/components/counter-item';
import { useCountUp } from 'react-countup';

const Counters = () => {
  useCountUp({ ref: 'experienceCounter', end: 5, duration: 2 });

  useCountUp({ ref: 'jobsCounterRed', end: 10, duration: 2 });
  useCountUp({ ref: 'hourCounterRef', end: 1000, duration: 2 });
  useCountUp({ ref: 'earnedCounterRef', end: 20, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">

      <CounterItem
          title="Years of experience"
          counter={<span id="experienceCounter" />}
          measurement="+"
        />

        <CounterItem
          title="Total Jobs (Upwork)"
          counter={<span id="jobsCounterRed" />}
          measurement=""
        />

        <CounterItem
          title="Total Hours (Upwork)"
          counter={<span id="hourCounterRef" />}
          measurement="+"
        />

        <CounterItem
          title="Total Earned (Upwork)"
          counter={<span id="earnedCounterRef" />}
          measurement="K+"
          currency={'$'}
        />

      </div>
    </div>
  );
};

export default Counters;
