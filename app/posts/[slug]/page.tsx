import prisma from '@/lib/db';
import React from 'react';

export const dynamic = 'force-dynamic';

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  return (
    <div>
      <h1 className='text-5xl'>{post?.title}</h1>
      <h2 className='text-2xl'>{post?.content}</h2>
    </div>
  );
};

export default PostPage;
