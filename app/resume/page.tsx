import Education from './components/Education';
import ExperienceSection from './components/Experiences';
import Header from './components/Header';
import References from './components/References';
import SkillsSlider from './components/Skills';
import Summary from './components/Summary';

export const dynamic = 'force-dynamic';

const ResumePage = async () => {
  return (
    <div className="px-4 sm:px-6 lg:px-20 xl:px-32 2xl:px-56 bg-white min-h-screen py-4">
      <Header />

      <Summary />

      <ExperienceSection />

      <SkillsSlider />

      <Education />

      <References />
    </div>
  );
};

export default ResumePage;
