<script setup lang="ts">
  import CheckAllIcon from 'vue3-material-design-icons-ts/dist/CheckAll.vue';
</script>

<template>
  <div class="">
    <div class="flex w-full px-4 py-3 items-center curosr-pointer">
      <img
        class="rounded-full mr-4 w-12"
        src="https://random.imagecdn.app/100/100"
      />
      <div class="w-full">
        <div class="flex justify-between items-center">
          <div class="text-[15px] text-gray-600">Bob</div>
          <div class="text-[12px] text-gray-600">date</div>
        </div>

        <div class="flex items-center">
          <CheckAllIcon :size="18" class="mr-1" />
          <div
            class="text-[15px] w-full text-gray-500 flex items-center justify-between"
          >
            This is a message...
          </div>
        </div>
      </div>
    </div>

    <div class="border-b w-[calc(100%-80px)] float-right"></div>
  </div>
</template>

<style scoped></style>