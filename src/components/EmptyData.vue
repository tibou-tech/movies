<template>
  <div class="flex flex-col items-center">
    <VBaseEmptyData class="w-32" />

    <p class="mt-3 text-center text-sm text-black dark:text-white">
      {{ errorMsg }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  errorMsg: {
    required: true,
    type: String
  }
})
</script>
