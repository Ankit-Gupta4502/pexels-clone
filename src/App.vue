<script setup lang="ts">
import Hero from './components/Hero.vue';
import { onMounted } from 'vue';
import useStore from './store/useStore';

const { getImages } = useStore()
onMounted(() => {
  getImages()
})

</script>

<template>
  <div>
    <Hero />
    <RouterView />
  </div>
</template>
