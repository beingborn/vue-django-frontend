<script setup>
import { RouterView } from 'vue-router';
</script>

<!-- 
  1. 폰트 세팅
  2. 헤더 푸터 작업 진행 
  3. 라우터 세팅 
  4. GuestOnly, MemberOnly 
-->

<template>
  <div class="flex flex-col items-center min-h-screen">
    <header>
      <div class="w-full max-w-[1300px] flex items-center justify-between h-10 border">
        <h1>
          비보
        </h1>
        <div class="flex items-center gap-2">
          <button type="button">
          테마
          </button>
          <button type="button">
            프로필
          </button>
        </div>
      </div>
    </header>

    <main class="grow max-w-[1300px] mx-auto p-8 border w-full">
      <RouterView />
    </main>

    <footer>
      <div class="flex items-center">
        <p>@2025 mhlee reserved</p>
      </div>
    </footer>
  </div>
  

</template>
