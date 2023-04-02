<template>
  <VLoadingPage :loadPage="loading" />

  <header class="bg-red-900 px-5 py-3 sticky top-0 w-full z-10">
    <nav class="flex justify-between items-center flex-wrap">
      <div class="text-white mr-3 mb-2">
        <RouterLink :to="{ name: 'home' }">
          <font-awesome-icon icon="fa-solid fa-home" class="text-xl cursor-pointer" />
          Home
        </RouterLink>
      </div>
      <div class="flex justify-end items-center mb-2">
        <div class="bg-white py-2 px-5 rounded-full flex justify-between flex-wrap mr-6">
          <!-- Favorite list -->
          <div v-if="isConnected()" class="text-black dark:text-white mr-6">
            <RouterLink :to="{ name: 'favorite' }">
              <font-awesome-icon
                icon="fa-regular fa-heart"
                class="text-xl cursor-pointer text-yellow-600"
              />
            </RouterLink>
          </div>

          <!-- Light/Dark mode -->
          <div @click="toggleMode" class="cursor-pointer">
            <font-awesome-icon v-if="dark" icon="fa-regular fa-moon" class="text-red-900 text-xl" />
            <font-awesome-icon v-else icon="fa-regular fa-sun" class="text-yellow-600 text-xl" />
          </div>
        </div>

        <!-- Login/Logout -->
        <div class="flex items-center bg-white py-2 px-6 rounded-full">
          <div v-if="!isConnected()" class="text-black">
            <RouterLink :to="{ name: 'connection' }"> Login </RouterLink>
          </div>
          <div v-else class="text-black dark:text-white">
            <VButton name="Logout" @click="logout" />
          </div>
        </div>
      </div>
    </nav>
  </header>

  <main class="container py-2">
    <slot />
  </main>
</template>

<script setup lang="ts">
const loading = ref(false)
const dark = ref(false)

function toggleMode() {
  loading.value = true
  if (!('theme' in localStorage)) {
    localStorage.theme = 'dark'
    dark.value = true
  } else if (localStorage.theme === 'dark') {
    localStorage.theme = 'light'
    dark.value = false
  } else {
    localStorage.theme = 'dark'
    dark.value = true
  }

  getMode()
  loading.value = false
}

function getMode() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

function isConnected() {
  return localStorage.getItem('userName')
}

function logout() {
  localStorage.removeItem('userName')
  window.location.reload()
}

getMode()
</script>
