<template>
  <div class="my-6">
    <VLoadingPage :loadPage="loading" />

    <h1 class="text-center dark:text-white text-slate-900 font-bold text-5xl my-6">List movies</h1>

    <!-- Search  -->
    <MovieSearch @input="onTitleInput" />

    <!-- Display movies  -->
    <div v-if="status == 'True'" class="flex flex-wrap justify-evenly">
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
      <EmptyData class="w-32" :error-msg="errorMsg" />
    </div>

    <!-- Pagination  -->
    <Pagination
      :previous-disable="previousDisable"
      :next-disable="nextDisable"
      :total="total"
      @prev="prevPage"
      @next="nextPage"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'
import { debounce } from 'lodash'
import { inject } from 'vue'

import type { Movie } from '@/models/Movie'

import MovieItem from '@/components/MovieItem.vue'
import MovieSearch from '@/components/MovieSearch.vue'
import Pagination from '@/components/Pagination.vue'
import EmptyData from '@/components/EmptyData.vue'

const apiUrl = inject('api_url')

const movies = ref([]) as Ref<Movie[] | []>
const total = ref(0)
const status = ref('False')
const nextDisable = ref(false)
const previousDisable = ref(false)
const loading = ref(false)

const search = ref('bat')
const errorMsg = ref('')

let page = ref(1)

const perPage = 10

let query = search.value

const nextPage = () => {
  if (page.value !== Math.ceil(total.value / perPage)) {
    nextDisable.value = false
    previousDisable.value = false
    page.value += 1
    query = search.value + '&page=' + page.value

    getMovies()
  } else {
    nextDisable.value = true
  }
}

const prevPage = () => {
  if (page.value !== 1) {
    previousDisable.value = false
    nextDisable.value = false
    page.value -= 1
    query = search.value + '&page=' + page.value

    getMovies()
  } else {
    previousDisable.value = true
  }
}

const goToPage = (numPage: number) => {
  page.value = numPage
}

const onTitleInput = debounce((payload: string) => {
  search.value = payload
  query = search.value

  getMovies()
}, 500)

function getMovies() {
  loading.value = true
  axios
    .get(`${apiUrl}&s=${query}`)
    .then((response) => {
      movies.value = response.data.Search
      total.value = response.data.totalResults ?? 0
      status.value = response.data.Response
      errorMsg.value = response.data.Error ?? ''
    })
    .catch((err) => {
      console.log(err)
      errorMsg.value = err.message
    })
    .finally(() => {
      loading.value = false
    })
}

getMovies()
</script>
