import { singleProjectData } from '@/constants/projectData';
import { Clock, Tag } from 'lucide-react';

const ProjectHeader = () => {
  return (
    <div>
      <p className="text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {singleProjectData.ProjectHeader?.title}
      </p>
      <div className="flex">
        <div className="flex items-center mr-10">
          <Clock className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleProjectData.ProjectHeader?.publishDate}
          </span>
        </div>
        <div className="flex items-center">
          <Tag className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleProjectData.ProjectHeader?.tags}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
