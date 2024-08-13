import { projectsData } from '@/constants/projectData';
import { SingleProject } from '.';

const ProjectRelatedProjects = () => {
  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        Related Projects
      </p>
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          mt-6 sm:gap-10
        "
      >
        {projectsData
          .filter((item) => item.category === 'Web Application')
          .map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
      </div>
    </div>
  );
};

export default ProjectRelatedProjects;
