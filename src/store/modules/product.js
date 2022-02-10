import axios from 'axios'
import firebase from 'firebase/compat/app'
const URL = 'https://fakestoreapi.com/products'
const FirebaseUrl = 'https://e-cosmo-8f042-default-rtdb.firebaseio.com/products'

export default {
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return axios(URL, {
                    method: "GET"
                })
                .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data)
                    return products;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
    },
    state: {
        products_fb:[],
        products: [],
        // info2: []
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products
        },
        // SET_PRODUCTS_FIREBASE(state, products_fb){
        //     state.products_fb = products_fb
        // }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        // get_products_fb(state){
        //     return state.products_fb;
        // }
        

    }
}