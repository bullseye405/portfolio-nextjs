import prisma from '@/lib/db';
import Link from 'next/link';
import React from 'react';
import CreatePostForm from './components/CreatePosts';

export const dynamic = 'force-dynamic';

const PostsPage = async () => {
  const posts = await prisma.post.findMany();

  const postCount = await prisma.post.count();
  return (
    <div>
      <CreatePostForm />
      <h1>All posts ({postCount})</h1>
      <ul>
        {posts.map((item) => (
          <div key={item.id}>
            <Link href={`/posts/${item.slug}`}>{item.title}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
