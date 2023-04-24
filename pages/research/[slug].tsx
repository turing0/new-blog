import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import ResearchLayout from 'layouts/research';
import { allResearch  } from 'contentlayer/generated';
import type { Research } from 'contentlayer/generated';

export default function RnippetPage(research: Research) {
  const Component = useMDXComponent(research.body.code);

  return (
    <ResearchLayout research={research}>
      <Component components={components as any} />
    </ResearchLayout>
  );
}

export function getStaticPaths() {
  return {
    paths: allResearch.map((s) => ({ params: { slug: s.slug } })),
    fallback: false
  };
}

export function getStaticProps({ params }) {
  const research = allResearch.find((research) => research.slug === params.slug);

  return { props: research };
}
