<template>
  <div class="text-black dark:text-white mt-6 ml-6">
    <div class="mt-3">Distribution: {{ movie?.Released }}</div>
    <div class="mt-3">Classification: {{ movie?.Genre }}</div>
    <div class="mt-3">
      {{ movie?.Plot }}
    </div>

    <div class="mt-10" v-if="isAuthenticated()">
      <font-awesome-icon
        icon="fa-regular fa-heart"
        class="text-5xl cursor-pointer"
        :class="existFavorite ? 'text-yellow-600' : 'animate-bounce'"
        @click="addToFavorite"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType, Ref } from 'vue'
import type { Movie } from '@/models/Movie'

const props = defineProps({
  movie: {
    required: true,
    type: [Object, null] as PropType<Movie | null>
  },
  class: {
    default: undefined,
    type: String
  }
})

const movies = ref([]) as Ref<Movie[] | []>
const existFavorite = ref(false)

function isAuthenticated() {
  if (localStorage.userName) {
    return true
  }

  return false
}

function addToFavorite() {
  if (isExistsFavorite()) {
    let index = 0

    movies.value = getFavorites.value

    index = movies.value.findIndex((x) => x.imdbID == props?.movie?.imdbID)

    console.log(movies.value, index)
    if (index === -1) {
      return
    }

    movies.value.splice(index, 1)

    localStorage.setItem('favorite', JSON.stringify(movies.value))

    existFavorite.value = false
  } else {
    movies.value = getFavorites.value

    movies.value.push(props?.movie)

    localStorage.setItem('favorite', JSON.stringify(movies.value))

    existFavorite.value = true
  }
}

const getFavorites = computed(() => {
  if (!localStorage.favorite) {
    return []
  }

  return JSON.parse(localStorage.getItem('favorite') ?? '[]')
})

function isExistsFavorite() {
  if (!localStorage.favorite) {
    return false
  }

  if (
    JSON.parse(localStorage.getItem('favorite') ?? '[]').filter(
      (e) => e.imdbID == props?.movie?.imdbID
    ).length > 0
  ) {
    return true
  }

  if (movies.value.filter((e) => e.imdbID == props?.movie?.imdbID).length > 0) {
    return true
  }

  return false
}

function totalFavorites() {
  return JSON.parse(localStorage.getItem('favorite') ?? '[]').length
}

watch(
  () => existFavorite.value,
  () => {
    isExistsFavorite()
    totalFavorites()
  },
  { immediate: true }
)

function hasFavorite() {
  if (isExistsFavorite()) {
    existFavorite.value = true
  } else {
    existFavorite.value = false
  }
}

isAuthenticated()

hasFavorite()
</script>
