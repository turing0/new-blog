import Link from 'next/link';
import useSWR from 'swr';
import { parseISO, format } from 'date-fns';
import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import type { Blog } from 'contentlayer/generated';
import Gradient from 'components/Gradient';
export default function BlogPost({
  title,
  publishedAt,
  summary,
  slug
}: Pick<Blog, 'title' | 'summary' | 'publishedAt' | 'slug'>) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    (<Link
      href={`/blog/${slug}`}
      className="w-full group relative transition-all duration-500 hover:scale-[1.025] p-1">

      <div className="w-full transform transition-all">
      <div className="grid w-full grid-cols-1 gap-3 my-2 mt-4 sm:grid-cols-2 relative p-8 rounded-lg bg-black/5 dark:bg-white/5 border border-neutral-200 text-gray-900 dark:text-gray-100 dark:border dark:border-neutral-800 hover:border-none">
        <div>
          <h3 className="w-full mb-2 text-lg font-medium  md:text-xl  group-hover:text-primary-500 group-hover:dark:text-primary-500 ">
            {title}
          </h3>
           <p className="mb-4 min-w-fit max-w-full text-left text-gray-900 dark:text-[#c2c2c2] group-hover:text-primary-500 group-hover:dark:text-primary-500">
            {`${views ? new Number(views).toLocaleString() : '–––'} views`} |{' '}
            {format(parseISO(publishedAt), 'LLL dd, yyyy')}
          </p>
        </div> 
          <p className=" text-gray-600 dark:text-gray-400">{summary}</p>
      </div>
      </div>

    </Link>)
  );
}
