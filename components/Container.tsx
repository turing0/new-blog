import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import cn from 'classnames';
import useSound from 'use-sound';
import Footer from 'components/Footer';
import Nav from 'components/menu/Nav';
// import MobileMenu from 'components/MobileMenu';
import { Tooltip } from '@nextui-org/react';
import { Command } from 'react-feather';
import { useKBar } from 'kbar';
// import { MenuIcon } from '@heroicons/react/outline';
// import { XIcon } from "@heroicons/react/outline";

function NavItem({ href, text, description }) {
  const router = useRouter();
  const isActive = router.pathname.split('/')[1] === href.split('/')[1];
  const [playpageChange] = useSound("/media/page-change.mp3");
  const [playMenuon] = useSound("/media/switch-on.mp3");

  return <>
  <NextLink
    href={href}
    className={cn(
      isActive
        ? 'font-semibold text-neutral-800 bg-gradient-to-br from-header-active-from via-header-active-via to-header-active-to dark:bg-gradient-to-bl dark:from-rose-300 dark:via-pink-500 dark:to-orange-600'
        : 'font-semibold text-gray-800 dark:text-gray-400',
      'hidden font-semibold md:inline-block px-3 py-2 rounded-lg  text-gray-800 dark:text-gray-200 hover:bg-gradient-to-tr hover:from-header-hover-from hover:via-header-hover-via hover:to-header-hover-to hover:dark:bg-gradient-to-tr hover:dark:from-sky-500 hover:dark:via-cyan-700 hover:dark:to-blue-500'
    )}
    onClick={() => {
      playpageChange()
    }}>

    <Tooltip
      content={description}
      color="secondary"
      placement="bottomStart"
    >
      <span className="text-base capsize">{text}</span>
    </Tooltip>

  </NextLink>
  </>;
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [playpageSwitch] = useSound("/media/page-switch.mp3");
  const [playMenuon] = useSound("/media/switch-on.mp3");
  const [open, setOpen] = useState(false);
  const { query } = useKBar()

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Kapil Chaudhary - Researcher',
    description: `Researcher by profession, Coder by hobby.`,
    image: '/static/images/banner.png',
    type: 'website',
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://heykapil.in${router.asPath}`} />
        <link rel="canonical" href={`https://heykapil.in${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Kapil Chaudhary" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kapiljch" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="bg-[#faf6f1] dark:bg-gray-900">
      <svg
        className="pointer-events-none fixed top-0 left-0 isolate z-50 opacity-25 dark:opacity-[0.15] mix-blend-normal"
        width="100%"
        height="100%"
        >
        <filter id="pedroduarteisalegend">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#pedroduarteisalegend)"
        ></rect>
      </svg>
      <div className="top-0 left-0 absolute">
          <div
            className={cn(
              "rounded-full bg-gradient-to-r",
              "dark:from-rose-700 dark:via-pink-700 dark:to-purple-700 dark:opacity-60",
              "from-blue-300 via-cyan-300 to-green-300 opacity-70",
              "-z-50 aspect-square w-full max-w-screen-lg blur-3xl filter",
              "bottom-[calc(100%-200px)] dark:bottom-[calc(100%-180px)]",
              )}
          ></div>
        </div>
      <Nav open={open} setOpen={setOpen} />
           <div className="top-0 sm:top-1 ml-[0em] sticky z-30 backdrop-blur supports-backdrop-blur:bg-gray-50/80 supports-backdrop-blur:dark:bg-gray-900/80  rounded-lg flex flex-col px-8 w-full max-w-full justify-between">
            <nav className="flex justify-between relative w-full max-w-[710px] mx-auto p-3 bg-[#faf6f1] sm:border sm:border-1 sm:border-red-100 sm:dark:border-1 sm:dark:border-zinc-900 hover:border-none dark:hover:border-none text-black dark:bg-gray-900 dark:text-white rounded-xl ">
            <a href="#skip" className="skip-nav">
              Skip to content
            </a>
            
            {open ? (
              <>
              <div className="relative">
               <div className="absolute sm:hidden top-0 left-1/2 rounded-[50%] blur-[32px] [transform:translate(-50%,-50%)]  bg-gradient-to-tr from-cyan-600 via-sky-500 to-blue-500 dark:bg-gradient-to-tr dark:from-purple-500 dark:to-pink-500 md:h-52 md:w-52 md:blur-[56px]"></div>   
              </div>
              <button
              onClick={() => {
                setOpen(false)
                playMenuon()
              }}
              className="sm:hidden">
                 <svg
                  className="h-5 w-5 text-gray-900 dark:text-gray-100"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
              </>
            ) : (
          <>
          <button className='absolute h-5 w-5 sm:hidden'
          onClick={() =>
              {
                setOpen(true)
                playMenuon()
                }}>
          <svg
            className="h-5 w-5 text-gray-900 dark:text-gray-100 mt-2 rounded-md"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="currentColor"
          >
          <path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" /><path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" /><path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" />
          </svg>
          </button>
          </>
            )}
            
            <div className="mr-auto">
              <NavItem href="/" text="Home" description="HomePage." />
              <NavItem href="/guestbook" text="Guestbook" description="Let others know you were here!" />
              <NavItem href="/dashboard" text="Dashboard" description="Stats at one place." />
              <NavItem href="/blog" text="Blog" description="Read my blog articles." />
              <NavItem href="/snippets" text="Snippets" description="Code snippets worth sharing." />
            </div> 
            <div role="group" className='inline-flex gap-3'>
            <button
              aria-label='Toggle Command Pallete'
              type='button'
              className='w-9 h-9  rounded-lg flex items-center justify-center hover:ring-2 ring-neutral-500'
              onClick={() => {
                query.toggle()
                playMenuon()
              }}
              >
                <Command width={20} height={20} />
              </button>
              <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-9 h-9 rounded-lg flex items-center justify-center  hover:ring-2 ring-neutral-500"
              onClick={() => {
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
                playMenuon()
              }
              }
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-900 dark:text-gray-100"
                >
                  {resolvedTheme === 'dark' ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>
            </div>
          </nav>
        </div>
        
        <main
          id="skip"
          className="flex mt-8 flex-col justify-center px-8 bg-[#faf6f1] dark:bg-gray-900"
        >
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}