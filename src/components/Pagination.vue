<template>
  <div class="flex flex-wrap items-center p-2 mt-4 mx-3 bg-white rounded-full">
    <div class="flex flex-wrap justify-center items-center grow">
      <VButton
        :disabled="previousDisable"
        @click="prevPage"
        name="prev"
        :class="{ disabled: previousDisable }"
        class="mr-2"
      />

      <VButton
        :disabled="nextDisable"
        @click="nextPage"
        name="next"
        :class="{ disabled: nextDisable }"
      />
    </div>
    <div class="text-black mr-2">Total movies: {{ total }}</div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

const emit = defineEmits(['prev', 'next'])

defineProps({
  previousDisable: {
    required: true,
    type: Boolean
  },
  nextDisable: {
    required: true,
    type: Boolean
  },
  total: {
    required: true,
    type: [String, Number] as PropType<String | Number>
  }
})

function prevPage() {
  emit('prev')
}

function nextPage() {
  emit('next')
}
</script>

<style scoped lang="css">
.disabled {
  cursor: no-drop;
}
</style>
