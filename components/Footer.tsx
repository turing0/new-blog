import Link from 'next/link';
import { motion } from 'framer-motion';
import NowPlaying from 'components/NowPlaying';
import { FadeContainer , popUp } from 'lib/anims';

const ExternalLink = ({ href, children }) => (
  <Link
    className="transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    legacyBehavior>
    {children}
    </Link>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-dashed border-gray-700 dark:border-gray-300 mb-4 sm:mb-8" />
      <NowPlaying />
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
         className="w-full max-w-2xl grid grid-cols-2 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-fuchsia-700 dark:text-gray-300 dark:hover:text-fuchsia-300  transition">Home</Link>
          
            <Link href="/about" className="text-gray-700 hover:text-fuchsia-700 dark:text-gray-300 dark:hover:text-fuchsia-300 transition">
              About  
          </Link>
          
            <Link href="/design" className="text-gray-700 hover:text-fuchsia-700 dark:text-gray-300 dark:hover:text-fuchsia-300 transition">
              Design inspiration
          </Link>
        </div>
        <div className="hidden sm:flex flex-col space-y-4 transition text-gray-700  dark:text-gray-300 transition ">
          <ExternalLink href="https://twitter.com/kapiljch">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/heykapil">GitHub</ExternalLink>
           <ExternalLink href="https://www.instagram.com/kapiljch">
            Instagram
          </ExternalLink> 
        </div>
        <div className="flex flex-col space-y-4">
          {/* <Link href="/uses">
             <Link{popUp} className="text-gray-700 hover:text-fuchsia-700 dark:text-gray-300 dark:hover:text-fuchsia-300 transition">Uses</motion.a> 
          </Link> */}
          
            <Link href="/guestbook" className="text-gray-700 hover:text-fuchsia-700 dark:text-gray-300 dark:hover:text-fuchsia-300 transition">
              Guestbook
          </Link>
            <Link href="/snippets" className="text-gray-700 hover:text-fuchsia-700 dark:text-gray-300 dark:hover:text-fuchsia-300 transition">
              Snippets
            </Link>
          
            <Link href="/tweets" className="text-gray-700 hover:text-fuchsia-700 dark:text-gray-300 dark:hover:text-fuchsia-300 transition">
              Tweets
            </Link>
        </div>
      </motion.div>
    </footer>
  );
}