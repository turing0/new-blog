import Image from 'next/image';
import Container from 'components/Container';
import type { PropsWithChildren } from 'react';
import type { Snippet } from 'contentlayer/generated';
import { LikeButton } from 'components/LikeButton';
export default function SnippetLayout({
  children,
  snippet
}: PropsWithChildren<{ snippet: Snippet }>) {
  return (
    <Container
      title={`${snippet.title} - Code Snippet`}
      description="A collection of code snippets – related to Next.js, CSS, LaTeX, Matlab and others."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <div className="flex justify-between w-full mb-8">
          <div>
            <h1 className="font-bold capatalize text-3xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
              {snippet.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              {snippet.description}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <Image
              alt={snippet.title}
              height={48}
              width={48}
              src={`/logos/${snippet.logo}`}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="prose text-justify dark:prose-dark w-full">{children}</div>
        <div className="mt-5 align-center justify-center content-center">
        <LikeButton slug={snippet?.slug} />
        </div>
      </article>
    </Container>
  );
}
