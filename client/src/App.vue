<template>
  <router-view />
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from './store/user-store';
  const userStore = useUserStore();
  const router = useRouter();

  onMounted(() => {
    if (!userStore.sub) router.push('/login');
  });
</script>
