import { IProject } from '@/constants/projectData';
import Image from 'next/image';
import Link from 'next/link';

const SingleProject = ({ project }: { project: IProject }) => {
  const { id, category, title, img } = project;
  return (
    <Link href={`/projects/${id}`} aria-label="Single Project">
      <div
        className="rounded-xl shadow-lg hover:shadow-xl
            mb-10 sm:mb-0
            bg-secondary-light dark:bg-ternary-dark
        "
      >
        <Image
          src={img}
          alt={title}
          height={300}
          width={300}
          className="rounded-t-xl border-none w-full"
        />

        <div className="text-center px-4 py-6">
          <p className="font-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
            {title}
          </p>
          <span className="text-lg text-ternary-dark dark:text-ternary-light">
            {category}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SingleProject;
