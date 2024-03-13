import Image from 'next/image';
import { aboutMeData } from '../../../constants/aboutMe';

const profileImage = '/images/profile/profile.png';

const Bio = () => {
  return (
    <div className="container mx-auto">
      <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
          <Image
            height={400}
            width={400}
            alt="Profile Image"
            src={profileImage}
            className="rounded-lg w-96"
            quality={100}
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
