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
                commit('set_productions', products_fb)
            } catch (e) {

            }
        },
        click_product({commit}, click_product){
            commit('push_id_product', click_product)
        },
        // act_categories({commit}){
        //     commit('set_categories')
        // }
    },
    state: {
        // products_fb:[],
        // products: [],
        products_all: [],
        click_product_id: {},
        category: [],
    },
    mutations: {
        // SET_PRODUCTS_TO_STATE: (state, products) => {
        //     state.products = products
        // },
        set_productions(state, products_fb){
            state.products_all = products_fb;

           

            // let categories_product
            // for (categories_product of products_fb.get('category')){
            //     state.category.push(categories_product)
            //   }
            //   const newArrayCat = new Set(state.category);
            //   state.category = Array.from(newArrayCat);
            // state.category = newArrayCat

            // let stateItem = { ...item };
            // state.cart[item.id] = stateItem;


            for (categories_product of products_fb.get('category')){
                state.category.push(categories_product)
              }
              const newArrayCat = new Set(state.category);
              state.category = Array.from(newArrayCat);

        },
        push_id_product(state, click_product){
            state.click_product_id = click_product
        },
        // set_categories(state){
            // for (categories_product of state.products_all.get('category')){
        //         state.category.push(categories_product)
                // state.category += categories_product
            //   }
            //   const newArrayCat = new Set(state.category);
            //   state.category = Array.from(newArrayCat);
        // }
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
        get_categories(state){
            return state.category
        }
        

    }
}


// const array = [1, 2, 1, 4, 6, 6, 7, 4];
// const newArray = new Set(array);
// // alert(Array.from(new Set(array)));


// 
// const newArray = new Set(products_fb);
// state.category = Array.from(newArray);


// map.get(key)
// map.keys('category')

// for (let vegetable of recipeMap.keys()) {
//     alert(vegetable); // огурец, помидор, лук
// }

