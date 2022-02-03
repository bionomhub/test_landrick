import firebase from 'firebase/compat/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export default {
    actions: {
        async loginFirebase({dispatch, commit}, {email, password}){
            try{
                await firebase.auth().signInWithEmailAndPassword(email, password)
            }catch (e){
                commit('setError', e)
                throw e
            }
        },
        async loginFirebaseGoogle({commit}, {provider}){
            try{
                await firebase.auth().signInWithPopup(provider)
            }catch (e){
                commit('setError', e)
                throw e
            }
        },

        async logoutFirebase({commit}){
            await firebase.auth().signOut()
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
}
