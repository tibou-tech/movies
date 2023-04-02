<template>
  <div>
    <article v-if="movie">
      <div class="flex flex-wrap px-4 leading-tight">
        <div class="flex-grow flex justify-center">
          <MovieItem :movie="movie" :disabled="true" :event="''" />
        </div>
        <div class="grow">
          <MovieDetails :movie="movie" />
        </div>
      </div>
      <div class="my-6">
        <VButton @click="$router.back()" name="back" />
      </div>
    </article>

    <!-- Empty data  -->
    <div v-else class="flex items-center justify-center py-16 shadow-lg rounded-b-lg">
      <EmptyData class="w-32" :error-msg="errorMsg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '@/models/Movie'
import axios from 'axios'
import type { Ref } from 'vue'
import { inject } from 'vue'

import MovieItem from '@/components/MovieItem.vue'
import MovieDetails from '@/components/MovieDetails.vue'
import EmptyData from '@/components/EmptyData.vue'

const apiUrl = inject('api_url')

const route = useRoute()

const movie = ref(null) as Ref<Movie | null>

const errorMsg = ref('')

const movieId = computed(() => {
  return route.params.id
})

function showMovie() {
  axios
    .get(`${apiUrl}&i=${movieId.value}`)
    .then((response) => {
      movie.value = response.data
    })
    .catch((err) => {
      console.log(err)
      errorMsg.value = err.message
    })
}

showMovie()
</script>
