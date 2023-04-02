<template>
  <div class="my-6">
    <VLoadingPage :loadPage="loading" />

    <h1 class="text-center dark:text-white text-slate-900 font-bold text-5xl my-6">
      Favorites list
    </h1>

    <!-- Display movies  -->
    <div v-if="movies.length" class="flex flex-wrap justify-evenly">
      <div v-for="movie in movies" :key="movie.imdbID" class="content mb-4">
        <MovieItem
          class="hover:scale-105 transition ease-in-out delay-50 duration-200 h-60 mr-2"
          :movie="movie"
          :limit="true"
        />
      </div>
    </div>

    <!-- Empty data  -->
    <div v-else class="flex items-center justify-center py-16 shadow-lg rounded-b-lg">
      <EmptyData class="w-32" error-msg="Movie not found!" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

import type { Movie } from '@/models/Movie'

import MovieItem from '@/components/MovieItem.vue'
import EmptyData from '@/components/EmptyData.vue'

const movies = ref([]) as Ref<Movie[] | []>
const loading = ref(false)

function getMovies() {
  loading.value = true

  movies.value = JSON.parse(localStorage.getItem('favorite') ?? '[]')

  loading.value = false
}

getMovies()
</script>
