import Link from 'next/link';
import GithubPersonal from 'components/metrics/GithubPersonal';
import Twitter from 'components/metrics/Twitter';
import Analytics from 'components/metrics/Analytics';
import Container from 'components/Container';
import GitHub from 'components/metrics/Github';
// import Unsplash from 'components/metrics/Unsplash';
// import YouTube from 'components/metrics/Youtube';
import TopTracks from 'components/TopTracks';
import LikesCard from 'components/metrics/Likes';

export default function Dashboard() {
  return (
    <Container
      title="Dashboard – Kapil Chaudhary"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my personal dashboard, built with Next.js API routes
            deployed as serverless functions. I use this dashboard to track
            various metrics across platforms like Twitter, GitHub, and
            more.
          </p>
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Analytics />
          <LikesCard />
          <Twitter type="total_tweets" />
          <Twitter type="followers" />
          <Twitter type="following" />
          <GitHub />
        </div>
        <div className="flex flex-col w-full">
          <GithubPersonal />
        </div> 
        {/* <div className="grid w-full grid-cols-1 gap-4 py-2 sm:grid-cols-2">
          </div> */}
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify
          updated daily.
        </p>
        <TopTracks />
        <div className="flex flex-col mx-auto pl-4 pt-10">
          <p className="text-md text-gray-700 dark:text-gray-300">
          What music should I listen to, according to you?
          </p>
          <Link
            href="https://twitter.com/messages/compose?recipient_id=1446110463322820632&text=Kapil%2C%20you%20should%20listen%20to%20"
            className="text-md mt-4 rounded-full border px-8 py-2 text-center font-normal text-gray-800 dark:text-gray-200 transition-colors hover:border-[#1bd760] hover:text-[#1bd760] dark:hover:text-[#1bd760]  "
            data-screen-name="@kapiljch"
            target="_blank"
            rel="noreferrer noopener">
          
            Kapil, you should listen to...
          
          </Link>
        </div>
      </div>
    </Container>
  );
}
