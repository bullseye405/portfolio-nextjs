'use client';

import { Textarea } from '@/components/ui/textarea';
import React, { useEffect, useState } from 'react';
import { upsertAboutMe } from '../actions/upsertAboutMe';
import { Button } from '@/components/ui/button';
import { UserProfile } from '@prisma/client';

const AboutMeForm = ({ profile }: { profile: UserProfile | null }) => {
  const [data, setData] = useState(profile?.aboutMe);

  const upsertAboutMeWithId = upsertAboutMe.bind(
    null,
    profile ? profile.userId : 'cm0amudmw0000bktnof99d74w'
  );
  return (
    <form action={upsertAboutMeWithId} className="text-right">
      <Textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        name="aboutMe"
        className="mb-4"
        rows={10}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AboutMeForm;
