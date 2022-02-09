import axios from 'axios'
const URL = 'https://fakestoreapi.com/products'

export default {
    actions: {
        async fetchProducts({commit}) {
            commit('clearError')
            commit('setLoading, true')
            
            try {
                const productsVal = await firebase.database().ref('products').once('value')
                console.log(productsVal)

            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        },
        GET_PRODUCTS_FROM_API({
            commit
        }) {
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
        products: [],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
    }
}