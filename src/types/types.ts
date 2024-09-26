// STACK SCREENS NAVIGATOR
export type RootStackParamList = {
  /* Home: undefined; */
  Splash: undefined;
  HomeStack: undefined;
  Main: undefined;
  Media: { videos: Video[]; initialIndex: number };
  Video: { videos: Video[]; initialIndex: number };
  Dummy: undefined;
};

// BOTTOM TABS NAVIGATOR
export type BottomTabParamList = {
  Home: undefined;
  HomeTab: undefined;
  Media: { videos: Video[]; initialIndex: number };
  Games: undefined;
  Reports: undefined;
  Account: undefined;
};

export interface Video {
  id: string;
  likes_count: number;
  comments_count: number;
  url: string;
  thumbnail: string;
  urls: {
    hls: {
      playlist: string;
    };
  };
}
