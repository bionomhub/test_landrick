import firebase from 'firebase/compat/app'

export default {
    state: {
        info: {},
        products_all: {}
    },
    mutations:{
        setInfo(state, info){
            state.info = info
        },
        clearInfo(state){
            state.info = {}
        },
        set_productions(state, products_fb){
            state.products_all = products_fb
        },
    },
    actions: {
       async fetchInfo({dispatch, commit}){
            try{
                const uid = await dispatch('getUid')
                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
                commit('setInfo', info)
            } catch (e) {

            }
        },
        async action_productions({commit}){
            try{
                const products_fb = (await firebase.database().ref('/products').once('value')).val()
                commit('set_productions', products_fb)
            } catch (e) {
 
            }
        }
    },
    getters: {
        info : s => s.info,
        // info2 : s => s.info2,
        get_products(state){
            return state.products_all
        }
    }
}

