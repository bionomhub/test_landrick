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
        
        async GET_PRODUCTS_FROM_FB({commit}){
            try{
                const products_fb = (await firebase.database().ref('/products').once('value')).val()
                await commit('set_productions', products_fb)
                await commit('set_category')
            } catch (e) {

            }
        },
        // получаем все категории товара
        act_categories({commit}){
            commit('set_category')
        },
        updateFilter({commit} ,item) {
            commit('set_updateFilter', item)
        },
        push_currentPage({commit}, item){
            commit('set_currentPage', item)
        },
        simillarFilter({commit} ,item) {
            commit('set_simillarFilter', item)
        },
        act_push_prod({commit}, item){
            commit('mut_push_prod', item)
        }
    },

    state: {
        // products_fb:[],
        // products: [],
        products_all: [],
        category: [],
        filters_products_all: [],
        currentPage: 1,
        simillar_prod: [],
    },

    mutations: {
        // SET_PRODUCTS_TO_STATE: (state, products) => {
        //     state.products = products
        // },
        set_productions(state, products_fb){
            state.products_all = products_fb
            state.filters_products_all = products_fb
        },
        // получаем все категории товара
        set_category(state){
            let categories = [];
            state.products_all.forEach(function(item, index, array) {
            // console.log(item.category, index);
            categories.push(item.category)
            });
            state.category = new Set(categories);
        },

        //фильтруем товары по категории
        set_updateFilter(state, item) {
            if (item === "all" || item === '') {
                state.filters_products_all = state.products_all;
            } else {
                state.filters_products_all = state.products_all.filter((x) => x.category === item);
                state.currentPage = 1
            }
            
        },
        set_simillarFilter(state, item) {
                state.simillar_prod = state.products_all.filter((x) => x.category === item);
        },

        set_currentPage(state, item){
            state.currentPage = item
        },
        mut_push_prod(item){
            router.push(`/shop-product-detail/${item.id}`) 
        }

    },

    getters: {
        // PRODUCTS(state) {
        //     return state.products;
        // },
        get_products(state){
            return state.products_all
        },
        get_category(state){
            return state.category
        },
        get_filters_products_all(state){
            // return state.products_all.filter((x) => x.category === state.filterCategory);
            return state.filters_products_all
        },
        get_currentPage(state){
            return state.currentPage
        },
        get_similar_products(state){
            return state.simillar_prod
        },

    }
}


