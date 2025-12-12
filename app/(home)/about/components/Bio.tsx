import { formatText } from '@/components/format-text';
import prisma from '@/lib/db';
import Image from 'next/image';
import AboutMeForm from './Form';

const profileImage = '/images/profile/profile.png';

const Bio = async () => {
  const profile = await prisma.userProfile.findFirst();

  const isAdmin = process.env.NEXT_PUBLIC_USER_TYPE === 'admin';
  return (
    <div className="container mx-auto">
      {isAdmin && <AboutMeForm profile={profile} />}
      <div className="flex flex-col sm:flex-row sm:gap-10 mt-10">
        <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
          <Image
            height={400}
            width={400}
            alt="Profile Image"
            src={profileImage}
            className="rounded-xl shadow-lg  sm:w-full"
            quality={100}
          />
        </div>

        <div className="w-full sm:w-3/4 bg-secondary-light dark:bg-secondary-dark p-6 rounded-xl shadow-md">
          {profile && formatText(profile.aboutMe)}
        </div>
      </div>
    </div>
  );
};

export default Bio;
