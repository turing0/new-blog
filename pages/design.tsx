import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import Container from 'components/Container';
import type { OtherPage } from 'contentlayer/generated';
import { allOtherPages } from 'contentlayer/generated';
import DesignLayout from 'layouts/design'
export default function Research({ body: { code } }: OtherPage) {
  const Component = useMDXComponent(code); 
  return (
    <DesignLayout>
      <Component components={components as any} />
    </DesignLayout>
  ); 
} 

export async function getStaticProps() {
  const design = allOtherPages.find((page) => page.slug === 'design')!;

  return { props: design };
}