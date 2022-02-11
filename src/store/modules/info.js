import firebase from 'firebase/compat/app'


export default {
    state: {
        info: {},
    },
    mutations:{
        setInfo(state, info){
            state.info = info
        },
        clearInfo(state){
            state.info = {}
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
        mut_clearInfo({commit}){
            commit('clearInfo')
        }
    },
    getters: {
        info : s => s.info,
        // info(state){
        //     return state.info
        // }
    }
}

