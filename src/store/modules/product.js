// import axios from 'axios'
import firebase from 'firebase/compat/app'
const URL = 'https://fakestoreapi.com/products'
const FirebaseUrl = 'https://e-cosmo-8f042-default-rtdb.firebaseio.com/products'

export default {
    actions: {
        // GET_PRODUCTS_FROM_API({commit}) {
        //     return axios(URL, {
        //             method: "GET"
        //         })
        //         .then((products) => {
        //             commit('SET_PRODUCTS_TO_STATE', products.data)
        //             return products;
        //         })
        //         .catch((error) => {
        //             console.log(error)
        //             return error;
        //         })
        // },
        async action_productions({commit}){
            try{
                const products_fb = (await firebase.database().ref('/products').once('value')).val()
                commit('set_productions', products_fb)
            } catch (e) {

            }
        }
    },
    state: {
        // products_fb:[],
        // products: [],
        products_all: {}
    },
    mutations: {
        // SET_PRODUCTS_TO_STATE: (state, products) => {
        //     state.products = products
        // },
        set_productions(state, products_fb){
            state.products_all = products_fb
        },
    },
    getters: {
        // PRODUCTS(state) {
        //     return state.products;
        // },
        get_products(state){
            return state.products_all
        }
        

    }
}