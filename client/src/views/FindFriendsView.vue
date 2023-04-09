<template>
  <div id="FindFriends" class="pt-[100px] overflow-auto fixed h-[100vh] w-full">
    <div v-for="user in userStore.allUsers" :key="user.sub">
      <div
        v-if="hideMe(user)"
        @click="createNewChat(user)"
        class="flex w-full p-4 items-center cursor-pointer"
      >
        <img class="rounded-full mr-4 w-12" :src="user.picture || ''" />
        <div class="w-full">
          <div class="flex justify-between items-center">
            <div class="text-[15px] text-gray-600">
              {{ user.firstName }} {{ user.lastName }}
            </div>
          </div>

          <div class="flex items-center">
            <div class="text-[15px] text-gray-500">Hi im using whatsapps</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useUserStore } from '../store/user-store';
  import { User } from '../interfaces';
  import { storeToRefs } from 'pinia';

  const userStore = useUserStore();
  const { sub, userDataForChat } = storeToRefs(userStore);
  const hideMe = (user: User): boolean => user.sub !== sub.value;

  const createNewChat = (user: User) => {
    userDataForChat.value = [];
    userDataForChat.value.push({
      id: '',
      sub1: sub.value,
      sub2: user.sub,
      firstName: user.sub,
      picture: user.picture
    });
  };
</script>
<style></style>
