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
        click_product({commit}, click_product){
            commit('push_id_product', click_product)
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
        // sort({commit}){
        //     commit('')
        // }
        sort_low_to_high({commit}){
            commit('mut_low_to_high')
        }
    },

    state: {
        // products_fb:[],
        // products: [],
        products_all: [],
        click_product_id: {},
        category: [],
        filters_products_all: [],
        currentPage: 1
    },

    mutations: {
        // SET_PRODUCTS_TO_STATE: (state, products) => {
        //     state.products = products
        // },
        set_productions(state, products_fb){
            state.products_all = products_fb
            state.filters_products_all = products_fb
            
        },
        push_id_product(state, click_product){
            state.click_product_id = click_product
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
        // set_lol(state, item){
        //     if(item === 2){
        //         state.currentPage 
        //     }
        // }
        set_currentPage(state, item){
            state.currentPage = item
        },
        mut_low_to_high(state){
            state.filters_products_all
        },
    },

    getters: {
        // PRODUCTS(state) {
        //     return state.products;
        // },
        get_products(state){
            return state.products_all
        },
        get_click_product_id(state){
            return  state.click_product_id   
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
        }

    }
}


