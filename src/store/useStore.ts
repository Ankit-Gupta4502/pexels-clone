import { defineStore } from "pinia"
import axios from "axios"
const secretKey = import.meta.env.VITE_API_KEY
interface imageType {
    id: number,
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
const useStore = defineStore('store', {
    state: () => (
        {
            loading: false as boolean,
            errors: {} as any | Error,
            images: [] as Array<imageType>,
            heroImg: '' as string
        }
    ),
    actions: {
        async getImages(perPage: number = 20, page: number = 1) {
            this.loading = true;
            try {
                const response = await axios(`https://api.unsplash.com/photos?per_page=${perPage}&page=${page}&client_id=${secretKey}`)
                this.images = await response.data.photos
                this.loading = false;
            } catch (error: any) {
                this.errors = error.message
                this.loading = false
            }
        },
        async getImageById(id: number) {
            try {
                const response = await axios(`https://api.unsplash.com/photos/${id}?client_id=${secretKey}`)
            } catch (error) {

            }
        },
        async getRandomImage(){
            try {
                const response = await axios(`https://api.unsplash.com/photos/random?client_id=${secretKey}`)
            } catch (error) {
                
            }
        },
        async searchImage(search:string='',page:number=1,perPage:number=20){
            try {
                const response  = await axios(`https://api.unsplash.com/search/photos?client_id=${secretKey}&query=${search}&page=${page}&per_page=${perPage}`)
            } catch (error) {
                
            }
        }
    }
})

export default useStore