<script setup lang="ts" >
import { storeToRefs } from 'pinia';
import useStore from '../store/useStore';
import { Ref, onMounted, ref, unref } from 'vue';
import { useRouter } from 'vue-router';
const store = useStore()
const router  = useRouter()
const { heroImg } = storeToRefs(store)
const search:Ref<string> = ref("")
const  {getRandomImage}  = store
const naviagte = () => router.push(`/photos/${unref(search)}`)

onMounted(()=>{
    getRandomImage()
})
</script>

<template>
    <div :style="{ backgroundImage: 'url(' + heroImg + ')' }"
        class="h-[80vh] min-h-[400px] relative bg-center bg-cover bg-no-repeat grid place-items-center">
        <div class="bg-black/60 z-0 absolute inset-0"></div>
        <div class="md:w-3/6 mx-auto relative z-30">
            <h1 class="text-white text-4xl leading-snug font-bold mb-6 ">
                The best free stock photos, royalty free images & videos shared by creators.
            </h1>

            <div class="group relative">
                <svg width="20" height="20" fill="currentColor"
                    class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
                    aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
                <input
                    class="focus:ring-2 focus:ring-black/40 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
                    v-model="search"
                    type="text" v-on:keyup.enter="naviagte" aria-label="Filter projects" placeholder="Search Images">
        </div>
    </div>
</div></template>