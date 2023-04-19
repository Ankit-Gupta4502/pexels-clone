import { defineStore } from "pinia"
import axios from "axios"
const secretKey = import.meta.env.VITE_API_KEY
interface imageType {
    id:  string,
    width: number,
    height: number
    url: number,
    alt_description: string,
    description: null | string
    urls: {
        raw: string,
        full: string,
        regular: string,
        thumb: string,
        small: string,
        small_s3: string,

    },
    profile_image: {
        small: string,
        medium: string,
        large: string
    },
    social: {
        instagram_username: string,
    },
    user: {
        id: number,
        name: string,
        portfolio_url: string,
        location: string
    }
    likes: number
}
interface tagType {
    title:string,type:string
}

interface imageDetailsType extends imageType{
    tags:tagType[]
}


const useStore = defineStore('store', {
    state: () => (
        {
            loading: false as boolean,
            errors: {} as any | Error,
            images: [] as imageType[],
            heroImg: '' as string,
            searchedImages: [] as imageType[],
            imageDetails:{} as imageDetailsType
        }
    ),

    actions: {
        async getImages(perPage: number = 20, page: number = 1) {
            this.loading = true;
            try {
                const response = await axios(`https://api.unsplash.com/photos?per_page=${perPage}&page=${page}&client_id=${secretKey}`)
                this.images = [...this.images, ...response.data]
                this.loading = false;
            } catch (error: any) {
                this.errors = error.message
                this.loading = false
            }
        },
        async getImageById(id:string) {
            try {
                this.loading = true
                const response = await axios(`https://api.unsplash.com/photos/${id}?client_id=${secretKey}`)
                this.imageDetails = response.data
                this.loading = false
            } catch (error: any) {
                this.errors = error.response.data
                this.loading = false
            }
        },
        async getRandomImage() {
            try {
                const response = await axios(`https://api.unsplash.com/photos/random?client_id=${secretKey}`)
                this.heroImg = response.data?.urls?.full
            } catch (error:any) {
                this.errors = error.response.data
            }
        },
        async searchImage(search: string | string[] = '', page: number = 1, perPage: number = 30) {
            try {
                this.loading= true
                const response = await axios(`https://api.unsplash.com/search/photos?client_id=${secretKey}&query=${search}&page=${page}&per_page=${perPage}`)
                this.searchedImages = [...this.searchedImages, ...response.data?.results]
                this.loading = false
            } catch (error: any | Error) {
                this.errors = error.response.data
                this.loading = false
            }
        },
        resetImages(){
            this.searchedImages = []            
        }
    }
})

export default useStore