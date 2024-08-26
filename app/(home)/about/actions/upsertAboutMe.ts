'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const upsertAboutMe = async (userId: string, formData: FormData) => {
  const aboutMe = formData.get('aboutMe') as string;
  await prisma.userProfile.upsert({
    where: { userId },
    update: { aboutMe },
    create: { aboutMe, userId, summary: '' },
  });
  revalidatePath('/about');
};
