import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { LikeButton } from 'components/LikeButton';
import Container from 'components/Container';
// import Subscribe from 'components/Subscribe';
import ViewCounter from 'components/ViewCounter';
import { PropsWithChildren, Suspense } from 'react';
import type { Blog } from 'contentlayer/generated';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import LikesCounter from '../components/LikesCounter';
const editUrl = (slug) =>
  `https://github.com/heykapil/new-blog/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://heykapil.in/blog/${slug}`
  )}`;

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  const path = `/blog/${post.slug}`
  const router = useRouter();

  return (
    <>
    <Container
      title={`${post.title} – Kapil Chaudhary`}
      description={post.summary}
      image={`https://heykapil.in/${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <div className="sticky top-6 hidden h-0 xl:!col-start-4 xl:block max-w-[24rem] self-start text-base">
        <div className="space-y-6">
				<p className="text-sm uppercase text-gray-9 mt-4">On this page</p>
        <div className="border-t border-fuchsia-800/10 dark:border-rose-200/10"></div>
				<div className="flex flex-col space-y-1">
        {post.headings ? (
              <div className="space-y-2 text-sm">
               {post.headings.map((h) => {
                  return (
                    <div key={h.slug}>
                      <a
                        href={`#${h.slug}`}
                        className={clsx(
                          "block text-fuchsia-500/3 dark:text-rose-100/50 underline-offset-2 transition-all hover:text-fuchsia-500 dark:hover:text-rose-100 hover:underline hover:decoration-fuchsia-500 dark:hover:decoration-pink-200",
                          {
                            "pl-2": h.size === 2,
                            "pl-4": h.size === 3,
                          },
                        )}
                      >
                        {h.content}
                      </a>
                    </div>
                  )
                })}
              </div>
            ) : null}
				</div>
        <div className="border-t border-fuchsia-800/10 dark:border-rose-200/10"></div>
        <div className="flex items-center justify-between">
              <LikeButton slug={post.slug} />
              <div className="fixed bottom-0 mb-5">
                <button
                  className="text-base text-fuchsia-500/3 hover:text-fuchsia-500 hover:underline dark:text-rose-100/30 dark:hover:text-rose-100/60"
                  onClick={() => {
                    window.scrollTo({ top: 0 })
                    router.push(path, undefined, { shallow: true })
                  }}
                >
                  Back to top
                </button>
              </div>
            </div>
        </div>
			</div>
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 capatalize text-3xl font-semibold tracking-tight text-black md:text-4xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex items-start justify-between w-full md:flex-row my-8">
        <div className="flex items-center">
          <Image
            alt="Shen Lu"
            height={36}
            width={36}
            sizes="20vw"
            src="/avatar.jpg"
            className="rounded-full mt-0 mb-0"
            priority
          />
          <div className="ml-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex text-black dark:text-gray-200 font-bold">
              Kapil Chaudhary
            </span>
            <div>Posted on {format(parseISO(post.publishedAt), 'MMM dd, yyyy')}</div>
          </div>
        </div>
        <div className="flex flex-col text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
         <div> <ViewCounter slug={post.slug} /> {` (`} <LikesCounter slug={post.slug} /> {')'} </div>
          <div>
            {post.readingTime}
            {` (`}
            {post.wordCount}
            {' words)'}
          </div>
        </div>
      </div>
        <Suspense fallback={null}>
        <div className="w-full text-justify mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="mt-8">
          {/* <Subscribe /> */}
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={discussUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Suggest Changes'}
          </a>
          </div>
        <div className="mt-5 align-center justify-center content-center">
        <LikeButton slug={post?.slug} />
        </div>
        </Suspense>
      </article>
    </Container>
    </>
  );
}
