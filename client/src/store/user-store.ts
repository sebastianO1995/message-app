/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  updateDoc,
  arrayUnion,
  onSnapshot,
  query
} from 'firebase/firestore';

import { GoogleLoginResponse, UserState, Message } from '../interfaces';
import axios from 'axios';
import { db } from '../firebase-init';
import { defineStore } from 'pinia';
import { v4 as uuid } from 'uuid';

axios.defaults.baseURL = 'http://localhost:4001/';
export const useUserStore = defineStore('user', {
  state: () =>
    <UserState>{
      sub: '',
      email: '',
      picture: '',
      firstName: '',
      lastName: '',
      allUsers: [],
      chats: [],
      userDataForChat: [],
      showFindFriends: false,
      currentChat: null,
      removeUsersFromFindFriends: []
    },
  actions: {
    async getUserDetailsFromGoolge(data: GoogleLoginResponse) {
      try {
        const res = await axios.post('api/google-login', {
          token: data.credential
        });

        const userExists = await this.checkIfUserExists(res.data.sub);

        if (!userExists) await this.saveUserDetails(res);

        await this.getAllUsers();

        this.sub = res.data.sub;
        this.email = res.data.email;
        this.picture = res.data.picture;
        this.firstName = res.data.given_name;
        this.lastName = res.data.family_name;
      } catch (error) {
        console.log(error);
      }
    },

    async getAllUsers() {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const results: any[] = [];

      querySnapshot.forEach((doc) => {
        results.push(doc.data());
      });

      if (results.length) {
        this.allUsers = [];
        results.forEach((res: any) => {
          this.allUsers.push(res);
        });
      }
    },

    async checkIfUserExists(id: string) {
      const docRef = doc(db, 'users', id);
      const docSnap = await getDoc(docRef);
      return docSnap.exists();
    },

    async saveUserDetails(res: any) {
      try {
        await setDoc(doc(db, 'users', res.data.sub), {
          sub: res.data.sub,
          email: res.data.email,
          picture: res.data.picture,
          firstName: res.data.given_name,
          lastName: res.data.family_name
        });
      } catch (error) {
        console.log(error);
      }
    },

    async getChatById(id: string) {
      onSnapshot(doc(db, 'chat', id), (doc) => {
        const res = [];
        res.push(doc.data());
        this.currentChat = res;
      });
    },

    async sendMessage(data: Message) {
      try {
        if (data.chatId) {
          await updateDoc(doc(db, `chat/${data.chatId}`), {
            sub1HasViewed: false,
            sub2HasViewed: false,
            messages: arrayUnion({
              sub: this.sub,
              message: data.message,
              createdAt: Date.now()
            })
          });
        } else {
          const id = uuid();
          await setDoc(doc(db, `chat/${id}`), {
            sub1: this.sub,
            sub2: data.sub2,
            sub1HasViewed: false,
            sub2HasViewed: false,
            messages: [
              {
                sub: this.sub,
                message: data.message,
                createdAt: Date.now()
              }
            ]
          });

          this.userDataForChat[0].id = id;
          this.showFindFriends = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      this.sub = '';
      this.email = '';
      this.picture = '';
      this.firstName = '';
      this.lastName = '';
      this.allUsers = [];
      this.chats = [];
      this.userDataForChat = [];
      this.showFindFriends = false;
      this.currentChat = null;
      this.removeUsersFromFindFriends = [];
    }
  },
  persist: true
});
