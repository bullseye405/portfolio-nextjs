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
          {profile && formatText(profile?.aboutMe)}
        </div>
      </div>
    </div>
  );
};

export default Bio;
