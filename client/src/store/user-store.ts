import { GoogleLoginResponse } from '../interfaces';
import axios from 'axios';
import { defineStore } from 'pinia';

axios.defaults.baseURL = 'http://localhost:4001/';
export const useUserStore = defineStore('user', {
  state: () => ({
    sub: '',
    email: '',
    picture: '',
    firstName: '',
    lastName: ''
  }),
  actions: {
    async getUserDetailsFromGoolge(data: GoogleLoginResponse) {
      try {
        const res = await axios.post('api/google-login', {
          token: data.credential
        });

        console.log(res.data);

        this.sub = res.data.sub;
        this.email = res.data.email;
        this.picture = res.data.picture;
        this.firstName = res.data.given_name;
        this.lastName = res.data.family_name;
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
    }
  },
  persist: true
});
