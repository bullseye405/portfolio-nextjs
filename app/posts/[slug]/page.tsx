import prisma from '@/lib/db';
import React from 'react';

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
  });

  return (
    <div>
      <h1 className='text-5xl'>{post?.title}</h1>
      <h2 className='text-2xl'>{post?.content}</h2>
    </div>
  );
};

export default PostPage;
