import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Likes } from 'lib/types';
import MetricCard from 'components/metrics/Card';

export default function LikesCard() {
  const { data } = useSWR<Likes>('/api/likes', fetcher);

  const pageViews = new Number(data?.total);
  const link = 'https://heykapil.in';

  return (
    <MetricCard
      header="All-Time Likes"
      link={link}
      metric={pageViews}
      isCurrency={false}
    />
  );
}
