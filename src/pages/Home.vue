<script setup lang="ts" >
import { onMounted, onUnmounted, ref, unref, watch } from 'vue';
import useStore from '../store/useStore';
import { storeToRefs } from 'pinia';
import type { Ref } from 'vue';
import ImageCard from '../components/ImageCard.vue';
const store = useStore()
const { images } = storeToRefs(store)
const { getImages } = store

const page: Ref<number> = ref(1)
let listener: any;
onMounted(() => {
    getImages()
})

watch(page, (curr,) => {
    getImages(30, unref(curr))
})


onMounted(() => {
    listener = window.addEventListener("scroll", () => {
        const {
            scrollTop,
            scrollHeight,
            clientHeight
        } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            page.value += 1
        }
    })
})
onUnmounted(() => {
    removeEventListener('scroll', listener)
})
</script>

<template>
    <div
        class="grid grid-rows-3 grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-y-8 gap-x-6 my-20 items-start md:px-8">
        
        <ImageCard :profile="image?.profile_image?.small" :name="image.user.name" :userName="image?.social?.instagram_username" :img="image?.urls?.regular" v-for="image in images" :key="image.id"  />
    </div>
</template>

<style scoped ></style>