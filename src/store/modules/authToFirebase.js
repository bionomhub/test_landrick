import firebase from 'firebase/compat/app'
export default {
    actions: {
        async loginFirebase({dispatch, commit}, {email, password}){
            try{
                await firebase.auth().signInWithEmailAndPassword(email, password)
                // ctx.commit('updateIsAuth')
                // ctx.commit('updateIsAuth_')
            }catch (e){
                commit('setError', e)
                throw e
            }
        },

        async logoutFirebase({commit}){
            await firebase.auth().singOut()
            commit('clearInfo')
        },

        async registerFirebase({dispatch, commit}, {email, password, name}){
            try{
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name
                })
            }catch (e){
                commit('setError', e)
                throw e
            }
        },

        getUid(){
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        }
    },
    // state: {
    //     isAuth: false,
    //     isAuth_: 0,
    // },
    // mutations: {
    //     updateIsAuth(state){
    //         state.isAuth = !isAuth
    //     },
    //     updateIsAuth_(state){
    //         state.isAuth_++
    //     }
    //  },
    // getters: {
    //     allUpdateIsAuth(state) {
    //         return state.isAuth
    //     },
    //     allUpdateIsAuth_(state) {
    //         return state.isAuth_
    //     },
    // }
}
