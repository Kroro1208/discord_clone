export interface initialUserState {
  user: null | {
    userId: string;
    image: string;
    email: string;
    displayName: string;
  };
}

export interface initialChannelState {
  channelId: string | null;
  channelName: string | null;
}