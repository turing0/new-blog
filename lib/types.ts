export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form;
  message?: string;
};

export type Subscribers = {
  count: number;
};

export type Views = {
  total: number;
};

export type Likes = {
  total: number;
};

export type PageLikes = {
  likes: number;
};

export type GithubStats = {
  repos: any;
  gists: any;
  total: number;
};

export type Song = {
  songUrl: string;
  audioUrl: string;
  artist: string;
  title: string;
  isPlaying: boolean;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type TopTracks = {
  tracks: Song[];
};

export type YouTube = {
  subscriberCount: number;
  viewCount: number;
};

export type GitHub = {
  stars: number;
};

export type Unsplash = {
  downloads: number;
  views: number;
};

export type TwitterStats = {
  user: any;
  public_metrics: any;
  followers_count: number;
  following_count: number;
  tweet_count: number;
};

export type RandomConference = {
  name: string;
  image: string;
  description: string;
  about: string;
  link: string;
};

export default interface Rpaper  {
  id: number
  title: string
  date_published: string
  authors: string
  journal?: string
  indexing?: string
  abstract: string
  doi?: string
  link: string
};
