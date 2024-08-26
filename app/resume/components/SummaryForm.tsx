'use client';

import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import { upsertSummary } from '../actions/upsertSummary';
import { Button } from '@/components/ui/button';

const SummaryForm = ({
  summary,
  userId,
}: {
  summary: string;
  userId: string;
}) => {
  const [data, setData] = useState(summary);

  const upsertAboutMeWithId = upsertSummary.bind(
    null,
    userId ? userId : 'cm0amudmw0000bktnof99d74w'
  );
  return (
    <form action={upsertAboutMeWithId} className="text-right my-4">
      <Textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        name="summary"
        className="mb-4"
        rows={10}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default SummaryForm;
