'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const upsertSummary = async (userId: string, formData: FormData) => {
  const summary = formData.get('summary') as string;
  await prisma.userProfile.upsert({
    where: { userId },
    update: { summary },
    create: { summary, userId, aboutMe: '' },
  });
  revalidatePath('/resume');
};
