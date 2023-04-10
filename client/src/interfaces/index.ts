import { DocumentData } from 'firebase/firestore';

export interface GoogleLoginResponse {
  clientId: string;
  client_id: string;
  credential: string;
  select_by: string;
}

export interface User {
  sub: string;
  email: string;
  picture: string;
  firstName: string;
  lastName: string;
}
export interface UserState extends User {
  allUsers: User[];
  userDataForChat: UserChatData[];
  showFindFriends: boolean;
  currentChat: DocumentData | null;
  removeUsersFromFindFriends: string[];
  chats: Chat[];
}

export interface UserChatData {
  id: string;
  sub1: string;
  sub2: string;
  firstName: string;
  picture: string;
}

export interface Message {
  message: string;
  sub2?: string;
  chatId: string;
  sub?: string;
}

export interface Chat {
  id: string;
  sub1: string;
  sub2: string;
  sub1HasViewed: string;
  sub2HasViewed: string;
  messages: Message[];
  user?: User;
}
