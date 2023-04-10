<template>
  <div id="FindFriends" class="pt-[100px] overflow-auto fixed h-[100vh] w-full">
    <div v-for="user in usersComputed" :key="user.sub">
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
  import { computed, ref } from 'vue';
  import type { Ref } from 'vue';
  const userStore = useUserStore();
  const { sub, userDataForChat, allUsers, removeUsersFromFindFriends } =
    storeToRefs(userStore);
  const hideMe = (user: User): boolean => user.sub !== sub.value;

  const users: Ref<User[]> = ref([]);
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

  const usersComputed = computed(() => {
    allUsers.value.forEach((user) => users.value.push(user));

    removeUsersFromFindFriends.value.forEach((remove) => {
      const index = users.value.findIndex((user) => user?.sub === remove);
      users.value.splice(index, 1);
    });

    return users.value;
  });
</script>
<style></style>
