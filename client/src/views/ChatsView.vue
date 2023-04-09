<template>
  <div
    id="Messages"
    class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-[420px]"
  >
    <div v-for="chat in chats" :key="chat.id">
      <div @click="openChat(chat)">
        <MessageRow :chat="chat" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useUserStore } from '@/store/user-store';
  import MessageRow from '../components/MessageRow.vue';
  import { Chat } from '../interfaces';
  import { storeToRefs } from 'pinia';
  import { onMounted } from 'vue';
  const userStore = useUserStore();

  const { chats, userDataForChat } = storeToRefs(userStore);

  onMounted(async () => {
    if (userDataForChat.value.length) {
      await userStore.getChatById(userDataForChat.value[0].id);
    }
  });
  const openChat = async (chat: Chat) => {
    userDataForChat.value = [];
    userDataForChat.value.push({
      id: chat.id,
      sub1: chat.sub1,
      sub2: chat.sub2,
      firstName: chat?.user?.firstName || '',
      picture: chat?.user?.picture || ''
    });

    try {
      await userStore.getChatById(chat.id);
    } catch (error) {
      console.log(error);
    }
  };
</script>
<style lang="css"></style>
