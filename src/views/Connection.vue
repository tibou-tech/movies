<template>
  <div class="flex justify-center items-end my-6">
    <label class="relative">
      <span class="text-black dark:text-white">User name</span>
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg>
      </span>
      <input
        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="User name"
        required
        type="text"
        v-model="userName"
      />
    </label>

    <div class="ml-2">
      <VButton @click="addUser" name="save" type="submit" />
    </div>
  </div>
</template>

<script setup lang="ts">
const userName = ref('')

function addUser() {
  if (!userName.value) {
    return
  }

  localStorage.setItem('userName', userName.value)
  window.location.reload()
}
</script>
