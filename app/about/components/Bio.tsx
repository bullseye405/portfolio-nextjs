import Image from 'next/image';
import { aboutMeData } from './aboutMe';

const profileImage = '/images/profile.jpeg';

const Bio = () => {
  return (
    <div className="container mx-auto">
      <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
          <Image
            height={100}
            width={100}
            alt="Profile Image"
            src={profileImage}
            className="rounded-lg w-96"
          />
        </div>

        <div className="font-regular w-full sm:w-3/4 text-left">
          {aboutMeData.map((item) => {
            return (
              <p
                key={item.id}
                className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
              >
                {item.bio}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bio;
