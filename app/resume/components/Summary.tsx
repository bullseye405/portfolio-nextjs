import { formatText } from '@/components/format-text';
import SummaryForm from './SummaryForm';

const Summary = ({ summary, userId }: { summary: string; userId: string }) => {
  const isAdmin = process.env.NEXT_PUBLIC_USER_TYPE === 'admin';

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Summary</h2>
      </div>
      {isAdmin && <SummaryForm summary={summary} userId={userId} />}
      <div className="text-base leading-relaxed text-gray-700">
        {formatText(summary)}
      </div>
    </div>
  );
};

export default Summary;
