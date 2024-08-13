import Education from './components/Education';
import ExperienceSection from './components/Experiences';
import Header from './components/Header';
import References from './components/References';
import SkillsSlider from './components/Skills';
import Summary from './components/Summary';

const ResumePage = () => {
  return (
    <div className="mx-2 my-2 md:mx-20 md:my-10">
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
