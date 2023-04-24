// import { useEffect } from 'react';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { PageLikes } from 'lib/types';

export default function LikesCounter({ slug }) {
  const { data } = useSWR<PageLikes>(`/api/likes/${slug}`, fetcher);
  const likes = new Number(data?.likes);

  return <span>{`${likes > 0 ? likes.toLocaleString() : '–––'} likes`}</span>;
}
