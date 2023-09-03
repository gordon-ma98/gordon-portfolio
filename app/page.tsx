import Link from 'next/link';
import Image from 'next/image';
import { getBlogViews, getTweetCount, getStarCount } from 'lib/metrics';
import {
  ArrowIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  ViewsIcon,
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';

export const revalidate = 60;

export default async function HomePage() {
  let starCount, views, tweetCount;

  try {
    [starCount, views, tweetCount] = await Promise.all([
      getStarCount(),
      getBlogViews(),
      getTweetCount(),
    ]);
  } catch (error) {
    console.error(error);
  }

  return (
    <section>
      {name()}
      <p className="my-5 max-w-[650px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex mb-5 max-w-[650px] flex-col md:flex-row justify-center items-center">
        <Image
          alt="Gordon Ma"
          className="rounded-full"
          src={avatar}
          placeholder="blur"
          height={300}
          width={300}
          priority
        />
      </div>
      {bio()}
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/gordon-ma98"
          >
            <GitHubIcon />
            <p className="h-7 ml-2">see my github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/gord-ma/"
          >
            <LinkedInIcon />
            <p className="h-7 ml-2">see my linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/gord-ma/"
          >
            <ArrowIcon />
            <p className="h-7">see my resume</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
