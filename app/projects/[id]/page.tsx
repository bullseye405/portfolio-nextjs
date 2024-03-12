import { ProjectGallery, ProjectHeader, ProjectInfo, ProjectRelatedProjects } from '../components';

const SingleProject = () => {
  return (
    <div className="container mx-auto mt-5 sm:mt-10">
      <ProjectHeader />
      <ProjectGallery />
      <ProjectInfo />
      <ProjectRelatedProjects />
    </div>
  );
};

export default SingleProject;
