import Education from './Education';
import ExperienceSection from './Experiences';
import Header from './Header';
import References from './References';
import SkillsSlider from './Skills';
import Summary from './Summary';

const Resume = () => {
  return (
    <div className="mx-20 my-10">
      <Header />

      <Summary />

      <ExperienceSection />

      <SkillsSlider />

      <Education />

      <References />
    </div>
  );
};

export default Resume;
