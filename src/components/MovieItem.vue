<template>
  <div>
    <h3 class="font-bold text-black dark:text-white text-lg my-2">
      {{ limit ? movie?.Title.limit(20) : movie?.Title }}
    </h3>

    <RouterLink
      :disabled="disabled" 
      :event="event"
      :to="to"
    >
      <figure>
        <img :src="movie?.Poster"
          :alt="movie?.Title.limit(20)"
          class="rounded-md object-cover"
          :class="class"
        >
        <!-- <div class="poster" :style="{ backgroundImage: 'url(' + movie.Poster + ')' }"></div> -->
        <figcaption class="flex justify-between flex-wrap mt-2">
          <time class="px-3 py-0 rounded-full dark:bg-white bg-slate-900 text-white dark:text-slate-900 mr-2"> {{ movie?.Year }}</time>
          <div class="px-3 py-0 rounded-full dark:bg-white bg-slate-900 text-white dark:text-slate-900"> {{ movie?.Type }} </div>
        </figcaption>
      </figure>
    </RouterLink>
  </div>
  
</template>

<script setup lang="ts">

import type { PropType, Ref } from 'vue';
import type { Movie } from '@/models/Movie'

const props = defineProps({
    movie: {
      required: true,
      type: [Object, null] as PropType<Movie | null>,
    },
    class: {
      default: undefined,
      type: String,
    },
    event: {
      default: 'click',
      type: String,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    limit: {
      default: false,
      type: Boolean,
    },

});

let to = !props.disabled ? { name: 'movie.show', params: { id: props.movie?.imdbID } } : ''
</script>

<style scoped lang="css">

</style>