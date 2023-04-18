import { defineStore } from "pinia"
import axios from "axios"
const secretKey = import.meta.env.VITE_API_KEY 
interface imageType {
    id: number,
    width: number,
    height: number
    url: number,
    photographer: string,
    photographer_url: string,
    src: {
        original: string,
        large2x: string,
        large: string,
        medium: string,
        small: string,
        potrait: string,
        landscape: string,
        tiny: string
    }
}
const useStore = defineStore('store', {
    state: () => (
        {
            loading: false as boolean,
            errors: {} as any | Error,
            images: [] as Array<imageType>,
            heroImg:''as string
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
        }
    }
})

export default useStore