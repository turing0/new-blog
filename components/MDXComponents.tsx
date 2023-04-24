import Link from 'next/link';
import Image from "next/legacy/image";
// import Pre from 'components/Pre'
import ProsCard from 'components/cards/ProsCard';
import ConsCard from 'components/cards/ConsCard';
import Unsplash from 'components/metrics/Unsplash';
import Analytics from 'components/metrics/Analytics';
import YouTube from 'components/metrics/Youtube';
import Step from 'components/Step';
import ImageWithTheme from 'components/ImageWithTheme';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" className='customLink' {...props} />;
};

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props) {
  return (
    <div className="flex bg-zinc-200 dark:bg-zinc-800 rounded-lg p-4 my-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

const MDXComponents = {
  Image: RoundedImage,
  ImageWithTheme,
  a: CustomLink,
  Callout,
  Analytics,
  ConsCard,
  ProsCard,
  Step,
  Unsplash,
  YouTube
};

export default MDXComponents;