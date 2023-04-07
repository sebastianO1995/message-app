<template>
  <div id="FindFriends" class="pt-[100px] overflow-auto fixed h-[100vh] w-full">
    <div class="flex w-full p-4 items-center curosr-pointer">
      <img
        class="rounded-full mr-4 w-12"
        src="https://random.imagecdn.app/100/100"
      />
      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">Bob</div>
        </div>

        <div class="flex items-center">
          <CheckAllIcon :size="18" class="mr-1" />
          <div class="text-[15px] text-gray-500">Hi im using whatsapp</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import CheckAllIcon from 'vue3-material-design-icons-ts/dist/CheckAll.vue';
</script>
<style></style>
