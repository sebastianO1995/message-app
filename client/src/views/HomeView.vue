<template>
  <div class="flex">
    <div id="Header" class="fixed w-[420px] z-10">
      <div
        class="bg-[#f0f0f0] w-full flex justify-between items-center px-3 py-2"
      >
        <img class="rounded-full ml-1 w-10" :src="userStore.picture || ''" />
        <div class="flex items-center justify-center">
          <AccountGroupIcon fill-color="#515151" class="mr-6" />
          <DotsVerticalIcon
            fill-color="#515151"
            @click="logout"
            class="cursor-pointer"
          />
        </div>
      </div>
      <div id="Search" class="bg-white w-full px-2 border-b shadow-sm">
        <div
          class="px-1 m-2 bg-[#f0f0f0] flex items-center justify-center rounded-md"
        >
          <MagnifyIcon fill-color="#515151" class="ml-2" :size="18" />
          <input
            @click="showFindFriends = !showFindFriends"
            type="text"
            autocomplete="off"
            placeholder="Start a new chat"
            class="ml-5 appearance-none w-full bg-[#f0f0f0] py-1.5 px-2.5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
    <div v-if="showFindFriends">
      <ChatsView class="mt-[100px]" />
    </div>
    <div v-else>
      <FindFriendsView class="pt-28" />
    </div>
    <div v-if="userDataForChat.length">
      <MessageView />
    </div>
    <div v-else>
      <div
        class="ml-[420px] fixed w-[calc(100vw-420px)] h-[100vh] bg-gray-100 text-center"
      >
        <div class="grid h-screen place-items-center">
          <div>
            <div class="w-full flex items-center justify-center">
              <!-- TODO add image  -->
              <img width="375" src="https://random.imagecdn.app/400/200" />
            </div>
            <div class="text-[32px] text-gray-500 font-light mt-10">
              WhatsApp Wb
            </div>
            <div class="text-[14px] text-gray-600 mt-2">
              <div>Send A message</div>
              <div>Just some text when you dont have a chat open</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import AccountGroupIcon from 'vue3-material-design-icons-ts/dist/AccountGroup.vue';
  import DotsVerticalIcon from 'vue3-material-design-icons-ts/dist/DotsVertical.vue';
  import MagnifyIcon from 'vue3-material-design-icons-ts/dist/Magnify.vue';
  import ChatsView from './ChatsView.vue';
  import MessageView from './MessageView.vue';
  import FindFriendsView from './FindFriendsView.vue';
  import { useUserStore } from '../store/user-store';
  import { useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { onMounted } from 'vue';
  const userStore = useUserStore();

  const { showFindFriends, userDataForChat } = storeToRefs(userStore);

  const router = useRouter();

  onMounted(async () => {
    try {
      userStore.getAllUsers();
      userStore.getAllChatsByUser();
    } catch (error) {
      console.log(error);
    }
  });
  const logout = () => {
    const res = confirm('Are you sure you want to logout?');

    if (res) {
      userStore.logout();
      router.push('/login');
    }
  };
</script>
<style lang="css"></style>
