<script setup lang="ts">
  import CheckAllIcon from 'vue3-material-design-icons-ts/dist/CheckAll.vue';
  import { toRefs, computed } from 'vue';
  import { Chat } from '../interfaces';
  import moment from 'moment';
  import { useUserStore } from '@/store/user-store';
  import { storeToRefs } from 'pinia';
  const userStore = useUserStore();
  const { sub, userDataForChat } = storeToRefs(userStore);

  interface ChatProps {
    chat: Chat;
  }

  const props: ChatProps = defineProps({
    chat: {
      type: Object as () => Chat,
      required: true
    }
  });

  const { chat } = toRefs(props);

  const isActive = computed(() => {
    if (userDataForChat.value.length) {
      if (userDataForChat.value[0].sub1 === chat.value.user?.sub) {
        return true;
      }

      if (userDataForChat.value[0].sub2 === chat.value.user?.sub) {
        return true;
      }
    }

    return false;
  });
  const tickColor = (chat: Chat) => {
    let color = '';

    if (chat.sub1 === sub.value) {
      if (chat.sub1HasViewed) color = '#7df9ff';
      else color = '#b5b5b5';
    }

    if (chat.sub2 === sub.value) {
      if (chat.sub2HasViewed) color = '#7df9ff';
      else color = '#b5b5b5';
    }

    return color;
  };
  const lastChatMessage = (chat: Chat) => {
    return chat.messages[chat.messages.length - 1].message.substring(0, 20);
  };

  const lastCreatedAt = (chat: Chat) => {
    if (chat.messages.length) {
      return moment(chat.messages[chat.messages.length - 1].createdAt).format(
        'MMM D YY | HH:MM A'
      );
    }
  };
</script>

<template>
  <div :class="isActive ? 'bg-gray-200' : ''">
    <div class="flex w-full px-4 py-3 items-center curosr-pointer">
      <img class="rounded-full mr-4 w-12" :src="chat?.user?.picture || ''" />
      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">
            {{ chat?.user?.firstName }}
          </div>
          <div class="text-[12px] text-gray-600">{{ lastCreatedAt(chat) }}</div>
        </div>

        <div class="flex items-center">
          <CheckAllIcon :size="18" :fill-color="tickColor(chat)" class="mr-1" />
          <div
            class="text-[15px] w-full text-gray-500 flex items-center justify-between"
          >
            {{ lastChatMessage(chat) }}...
          </div>
        </div>
      </div>
    </div>

    <div class="border-b w-[calc(100%-80px)] float-right"></div>
  </div>
</template>

<style scoped></style>
