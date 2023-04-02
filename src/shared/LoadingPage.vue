<template>
  <main>
    <div v-if="loadPage" class="overlay"></div>
    <div v-if="loadPage" class="loadingPage d-flex justify-content-center">
      <div class="spinner">
        <div class="circle one"></div>
        <div class="circle two"></div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
defineProps({
  loadPage: {
    required: true,
    type: Boolean
  }
})
</script>

<style scoped lang="css">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.8);
  height: 100%;
  width: 100%;
  z-index: 9000;
}
.loadingPage {
  position: fixed;
  margin: auto;
  left: calc((100% - 150px) / 2);
  top: calc((100% - 150px) / 2);
  z-index: 9001;
  background: transparent;
  border: none;
}
.spinner {
  position: relative;
  margin: auto;
}
.spinner .circle {
  position: absolute;
  border: 3px solid transparent;

  border-radius: 50%;
  animation: rotate linear infinite;
}
.spinner .circle.one {
  border-top-color: rgb(0 0 0 / 50%);
  color: rgb(0 0 0 / 50%);
  height: 50px;
  width: 50px;
  left: 50px;
  top: 50px;
  animation-duration: 0.85s;
}
.spinner .circle.two {
  border-top-color: #bb2e34;
  color: #bb2e34;
  height: 75px;
  width: 75px;
  top: 38px;
  left: 38px;
  animation-duration: 0.95s;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
