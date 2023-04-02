<template>
  <button
    :disabled="disabled"
    @click="click"
    class="inline-block rounded bg-red-900 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
    :class="{ disabled: disabled }"
  >
    {{ name }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  disabled: {
    default: false,
    type: Boolean
  },
  name: {
    required: true,
    type: String
  }
})

const emit = defineEmits(['click'])

function click() {
  emit('click')
}
</script>
