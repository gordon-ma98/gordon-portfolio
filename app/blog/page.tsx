import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import ViewCounter from './view-counter';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Read about my projects on software development, design, and more.',
};

export default async function BlogPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        So, here are some projects which I have built:
      </p>
    </section>
  );
}
