import { formatText } from '@/components/format-text';
import SummaryForm from './SummaryForm';
import prisma from '@/lib/db';

const Summary = async () => {
  const profile = await prisma.userProfile.findFirst();

  const isAdmin = process.env.NEXT_PUBLIC_USER_TYPE === 'admin';

  if (!profile) {
    return <></>;
  }

  return (
    <div className="py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Summary</h2>
      </div>
      {isAdmin && (
        <SummaryForm summary={profile.summary} userId={profile.userId} />
      )}
      <div className="text-base leading-relaxed text-gray-700">
        {formatText(profile.summary)}
      </div>
    </div>
  );
};

export default Summary;
