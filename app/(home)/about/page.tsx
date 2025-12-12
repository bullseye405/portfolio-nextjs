import Bio from './components/Bio';
import Counters from './components/Counters';
// import Clients from './components/Clients';

export const dynamic = 'force-dynamic';

const About = () => {
  return (
    <div>
      <Bio />
      <Counters />
      {/* <Clients /> */}
    </div>
  );
};

export default About;
