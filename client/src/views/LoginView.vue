<template>
  <div class="w-full">
    <div class="bg-teal-600 z-[-1] w-full h-[225px] fixed top-0"></div>
    <div
      class="bg-[#191919] z-[-1] w-full h-[calc(100vh-225px)] fixed bottom-0"
    ></div>

    <div class="max-w-xl mx-auto">
      <div class="mt-10 flex items-center w-full">
        <!-- TODO: add logo here  -->
        <img width="40" src="https://random.imagecdn.app/100/100" />
        <div class="font-semibold text-gray-100 ml-6">Whats app web</div>
      </div>
      <div class="bg-white z-10 p-24 m-6 mt-10">
        <div class="text-center text-4xl text-gray-700 font-light pb-10">
          Clone
        </div>
        <div class="w-full flex justify-center bg-[#191919] p-3 rounded-md">
          <GoogleLogin :callback="callback" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { GoogleLoginResponse } from '../interfaces';
  import { useUserStore } from '../store/user-store';
  const userStore = useUserStore();
  const router = useRouter();
  const callback = async (response: GoogleLoginResponse) => {
    await userStore.getUserDetailsFromGoolge(response);
    setTimeout(() => {
      router.push('/');
    }, 200);
  };
</script>
<style lang=""></style>
