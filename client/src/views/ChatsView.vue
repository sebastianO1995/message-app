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
  import { Chat, ChatViewed } from '../interfaces';
  import { storeToRefs } from 'pinia';
  import { onMounted } from 'vue';
  const userStore = useUserStore();

  const { chats, userDataForChat, sub } = storeToRefs(userStore);

  onMounted(async () => {
    if (userDataForChat.value.length) {
      try {
        await userStore.getChatById(userDataForChat.value[0].id);
      } catch (error) {
        console.log('ChatsView ', error);
      }
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
      const data: ChatViewed = {
        id: chat.id,
        key1: 'sub1HasViewed',
        val1: false,
        key2: 'sub2HasViewed',
        val2: false
      };

      if (chat.sub1 === sub.value || chat.sub2 === sub.value) {
        data.val1 = true;
        data.val2 = true;
      }

      await userStore.hasReadMessage(data);
    } catch (error) {
      console.log(error);
    }
  };
</script>
<style lang="css"></style>
