<script setup lang="ts" >
const props = defineProps<{
    name?:string,
    userName?:string|null,
    description?:string|null,
    altDescription?:string,
    likes?:number,
    img:string,
    profile:string,
    handleModal?:(id:string)=>void,
    id:string
}>()
</script>


<template>
<div class="relative cursor-pointer min-h-[100px] group rounded-xl overflow-hidden img-wrapper  " @click="()=>handleModal?.(id)" >
            <img :src="img" alt="" class="object-cover">
            <div
                class="absolute group-hover:translate-y-0 transition-all duration-500 translate-y-full inset-0 w-full h-full flex flex-col  justify-between py-5 bg-black/50 px-3">
                <span class="">
                    {{ userName }}
                </span>
                <div class="flex items-center justify-between">

                    <div>
                        <div class="flex items-center ">
                            <img :src="profile" v-if="profile" />
                            <span class="text-white texl-2xl font-bold "> {{ name }} </span>
                        </div>
                        <p class="text-white/75 line-clamp-2 "  >
                            {{ description || altDescription }}
                        </p>
                    </div>
                    <div class="flex space-x-1">
                        <span  class=" text-rose-500 " >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" class="w-10 h-10">
                                <path
                                    d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
    
                        </span>
                        <span class="text-white">
                            {{ likes }}
                        </span>

                    </div>
                </div>
            </div>
        </div>

</template>