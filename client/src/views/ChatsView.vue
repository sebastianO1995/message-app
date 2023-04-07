<template>
  <div
    id="Messages"
    class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-[420px]"
  >
    <MessageRow />
  </div>
</template>
<script setup lang="ts">
  import MessageRow from '../components/MessageRow.vue';
</script>
<style lang="css"></style>
