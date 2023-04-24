import Link from 'next/link';
import Image from "next/legacy/image";
import Gradient from '../Gradient'

export default function FunctionCard({
  title,
  description,
  slug,
  logo,
  ...rest
}) 
{
  return (
    (<Link
      href={`/snippets/${slug}`}
      className=" group relative text-gray-900 dark:text-gray-100 p-2 rounded-lg w-full  transform hover:scale-[1.025] transition-all"
      {...rest}>

      <div className='relative h-full block rounded-lg p-6 bg-black/5 dark:bg-white/5'>
      <Image
        alt={title}
        height={32}
        width={32}
        src={`/logos/${logo}`}
        className="rounded-full"
      />
      <h3 className="text-lg font-bold text-left mt-2">
        {title}
      </h3>
      <p className="mt-1 text-gray-500">{description}</p>
      </div>

    </Link>)
  );
}
