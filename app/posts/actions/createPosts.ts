'use server';

import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const createPostAction = async (data: any) => {
  console.log({ data: JSON.stringify(data) });
  await prisma.post.create({
    data: {
      title: data.get('title'),
      slug: data.get('slug'),
      content: data.get('content'),
    },
  });

  revalidatePath('/posts')
};
