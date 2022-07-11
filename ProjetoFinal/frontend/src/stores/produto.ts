import { defineStore } from 'pinia'
import { api } from '../baseConfig'
//import { userStore } from '../stores/user'
// import { getErrorMessage } from '../mixin/errorMessageMixing'
// import { authenticationHeader } from '../mixin/authenticat

interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    discount: number,
    quantity: number,
    rating: number
    image: {
        url: string
        alternativeText: string
    }
}

interface State {
    products: Product[],
}

export const productStore = defineStore('store', {
    state: (): State => ({
        products:[],
    }),
    getters: {
        previousManga(state) {
            return (product: Product) => {
                const currentIndex = state.products.findIndex(p => p.id === product.id)
                return currentIndex > 0 ? state.products[currentIndex - 1].id : product.id
            }
        },
        nextManga(state) {
            return (product: Product) => {
                const currentIndex = state.products.findIndex(m => m.id === product.id)
                return currentIndex < state.products.length - 1 ? state.products[currentIndex + 1].id : product.id
            }
        }
    },
    actions : {
        async getProducts() {
            
        },
        async get(id: number) {
            
        },
        async create() {
            
        },
        async delete(id: number) {
            
        },
        async update() {
            
        }
    }
})