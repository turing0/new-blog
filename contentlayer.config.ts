import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from 'contentlayer/source-files';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import rehypePrettyCode from "rehype-pretty-code"
import rehypePrism from 'rehype-prism-plus';
import rehypeKatex from 'rehype-katex';
import  GitHubSlugger  from 'github-slugger';
const slugger = new GitHubSlugger();
const headers_regex = /(#{1,6})\s+(.+)/g;
const computedFields: ComputedFields = {
  readingTime: {
    type: 'string',
    resolve: (doc) => readingTime(doc.body.raw).text
  },
  wordCount: {
    type: 'number',
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  headings: {
    type: "list",
    resolve: (doc) => {
      const headings = Array.from(doc.body.raw.matchAll(headers_regex))
      .map((value) => ({
       size: value[1].length,
       content: value[2],
       slug: slugger.slug(value[2]),
      }))
      .filter(({ size }) => size <= 3);
     return headings;
    },
  },
  tweetIds: {
    type: 'json',
    resolve: (doc) => {
      const tweetMatches = doc.body.raw.match(
        /<StaticTweet\sid="[0-9]+"\s\/>/g
      );
      const tweetIDs = tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]);
      return tweetIDs ?? [];
    }
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  }
};

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'blog/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: true },
  },
  computedFields
}));

const Snippet = defineDocumentType(() => ({
  name: 'Snippet',
  filePathPattern: 'snippets/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    logo: { type: 'string', required: true }
  },
  computedFields
}));

const Research = defineDocumentType(() => ({
  name: 'Research',
  filePathPattern: 'research/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    publishedIn: { type: 'string', required: false },
    publishedAt: { type: 'string', required: false},
    doi: {type: 'string', required: false}
  },
  computedFields
}));

const OtherPage = defineDocumentType(() => ({
  name: 'OtherPage',
  filePathPattern: '*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true }
  },
  computedFields
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Snippet, Research, OtherPage],
  mdx: {
    remarkPlugins: [
      remarkGfm,
      remarkMath
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypeKatex,
      rehypePrism,
      [  rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor']
          }

        }
      ]
    ]
  }
});

export default contentLayerConfig;
