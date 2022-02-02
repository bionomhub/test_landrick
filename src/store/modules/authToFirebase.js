import firebase from 'firebase/compat/app'
export default {
    actions: {
        async loginFirebase({dispatch, commit}, {email, password}){
            try{
                await firebase.auth().signInWithEmailAndPassword(email, password)
            }catch (e){
                throw e
            }
        },

        async logoutFirebase(){
            await firebase.auth().singOut()
        },

        async registerFirebase({dispatch}, {email, password, name}){
            try{
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name
                })
            }catch (e){
                throw e
            }
        },

        getUid(){
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        }
    },
    state: {

    },
    mutations: {
    
     },
    getters: {
       
    }
}
