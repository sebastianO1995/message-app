<template>
  <div class="ml-[420px] w-full">
    <div class="w-full">
      <div id="BG"></div>
      <div class="border-l border-green-500 w-full">
        <div
          class="bg-[#f0f0f0] fixed z-10 min-w-[calc(100vw-420px)] flex justify-between items-center px-2 py-2"
        >
          <div class="flex items-center">
            <img
              class="rounded-full mx-1 w-10"
              src="https://random.imagecdn.app/100/100"
            />
            <div class="text-gray-900 ml-1 font-semibold">Bob</div>
          </div>
          <DotsVerticalIcon fill-color="#515151" />
        </div>
      </div>
      <div
        id="MessagesSection"
        class="pt-20 pb-8 z-[-1] h-[calc(100vh-65px)] w-[calc(100vw-420px)] overflow-auto fixed touch-auto"
      >
        <div class="px-20 text-sm">
          <div class="flex w-[calc(100%-50px)]">
            <div class="inline-block bg-white p-2 rounded-md my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet
              ipsa a veniam, ullam nam non expedita quibusdam? Quod enim porro
              dolorem commodi ipsum tempore natus nostrum, nam earum quas.
            </div>
          </div>
          <div
            class="flex justify-end space-x-1 w-[calc(100%-50px)] float-right"
          >
            <div class="inline-block bg-green-200 p-2 rounded-md my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure amet
              ipsa a veniam, ullam nam non expedita quibusdam? Quod enim porro
              dolorem commodi ipsum tempore natus nostrum, nam earum quas.
            </div>
          </div>
        </div>
      </div>
      <div class="w-[calc(100vw-420px)] p-2.5 z-10 bg-[#f0f0f0] fixed bottom-0">
        <div class="flex items-center justify-center">
          <EmoticonExcitedOutlineIcon
            :size="27"
            class="mx-1.5"
            fill-color="#515151"
          />
          <PaperclipIcon :size="27" class="mx-1.5 mr-3" fill-color="#515151" />
          <input
            type="text"
            autocomplete="off"
            placeholder="Message"
            class="mr-1 rounded-lg shadow appearance-none w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button class="ml-3 p-2 w-12 flex items-center justify-center">
            <SendIcon fill-color="#515151" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import DotsVerticalIcon from 'vue3-material-design-icons-ts/dist/DotsVertical.vue';
  import EmoticonExcitedOutlineIcon from 'vue3-material-design-icons-ts/dist/EmoticonExcitedOutline.vue';
  import PaperclipIcon from 'vue3-material-design-icons-ts/dist/Paperclip.vue';
  import SendIcon from 'vue3-material-design-icons-ts/dist/Send.vue';
</script>
<style scoped>
  #BG {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    background: teal;
    /* TODO ADD IMAGE BACKGROUND */
    /* background: url() no-repeat center;  */
  }
</style>
