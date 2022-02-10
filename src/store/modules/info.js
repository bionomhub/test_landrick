import firebase from 'firebase/compat/app'

export default {
    state: {
        info: {},
        info2: []
    },
    mutations:{
        setInfo(state, info){
            state.info = info
        },
        clearInfo(state){
            state.info = {}
        },
        setInfo2(state, info2){
            state.info2 = info2
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
        async fetchInfo2({commit}){
            try{
                const info2 = (await firebase.database().ref('/products').once('value'))
                commit('setInfo2', info2)
            } catch (e) {

            }
        }
    },
    getters: {
        info : s => s.info,
        info2 : s => s.info2
    }
}

