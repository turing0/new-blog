import Link from 'next/link';
import useSWR from 'swr';
import cn from 'classnames';
import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import Gradient from './../Gradient';
export default function BlogPostCard({ title, slug }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;
  return (
    (<Link
      href={`/blog/${slug}`}
      className={cn(
        'transform hover:scale-[1.01] transition-all',
        'group rounded-lg w-full bg-gradient-to-r p-2 md:p-4',
      )}>

       <div className={cn(
        // Gradient[Math.floor(Math.random() * (25))],
      'absolute inset-2 md:inset-4 rounded-lg animate-overlayShow bg-gradient-r bg-yellow-600 dark:bg-neutral-200 bg-opacity-60 backdrop-blur-sm backdrop-filter group-hover:-inset-[0.5] group-hover:blur-md group-hover:duration-500 duration-100 ease-in-out transform transition-all',
      
      )}
      > </div> 
      <div className='relative w-full flex flex-row block h-full'>
   <div
    className="flex flex-col justify-between h-full w-full rounded-md hover:bg-[#f2ede6] duration-200 border-double bg-[#f2ede6] dark:bg-neutral-900 rounded-lg p-8 border border-2 border-gray-400 dark:border-gray-600 dark:border-double dark:border-neutral-800 hover:border-none dark:hover:border-none duration-200 ease-in-out transform hover:scale-[1.025] transition-all">
        <div className="flex flex-col md:flex-row justify-between">
          <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
            {title}
          </h4>
        </div>
        <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span className="ml-2 align-baseline capsize">
            {views ? new Number(views).toLocaleString() : '–––'}
          </span>
        </div>
      </div>
      </div>

    </Link>)
  );
}
