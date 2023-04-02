<template>
  <div class="border border-red-700 px-5 py-3 my-4 flex items-center">
    <div class="dark:text-white text-black mr-5">Search</div>

    <label class="relative grow">
      <span class="sr-only">Search</span>
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg>
      </span>
      <input
        class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search for anything..."
        type="text"
        v-model="search"
        @input="input"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['input'])
const search = ref('bat')

function input() {
  emit('input', search.value)
}
</script>
