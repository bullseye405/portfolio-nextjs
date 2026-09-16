'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const createPostAction = async (formData: FormData) => {
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const content = (formData.get('content') as string) || null;

  await prisma.post.create({
    data: {
      title,
      slug,
      content,
    },
  });

  revalidatePath('/posts');
};
