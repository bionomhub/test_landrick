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
        },

        async updateUserName({dispatch}, {NewName, NewSurName, NewEmail}){
            try{
                const uid = await dispatch('getUid')
                
                if(NewName){
                    await firebase.database().ref(`/users/${uid}/info`).update({name: NewName})
                }
                if(NewSurName){
                    await firebase.database().ref(`/users/${uid}/info`).update({surName: NewSurName})
                }
                if(NewEmail){
                    await firebase.database().ref(`/users/${uid}/info`).update({email: NewEmail})
                }
                await dispatch('fetchInfo')

                // set - добавляет поле в текущую вложенность, прим этом убирает старые поля
                // push - создает новый хеш с новой вложенностью
                // update  - обновляет данные, создает поля, если их не было до этого
                // конструкция - firebase.database().ref(`/users/${uid}/info`)

            }catch (e){
                commit('setError', e)
                throw e
            }
        },
        async updateShippingAdress({dispatch}, {ShippingName, ShippingSurName, ShippingAdress, ShippingPhone}){
            try{
                const uid = await dispatch('getUid')
                if(ShippingName){
                    await firebase.database().ref(`/users/${uid}/info`).update({ShippingName: ShippingName})
                }
                if(ShippingSurName){
                    await firebase.database().ref(`/users/${uid}/info`).update({ShippingSurName: ShippingSurName})
                }
                if(ShippingAdress){
                    await firebase.database().ref(`/users/${uid}/info`).update({ShippingAdress: ShippingAdress})
                }
                if(ShippingPhone){
                    await firebase.database().ref(`/users/${uid}/info`).update({ShippingPhone: ShippingPhone})
                }
                await dispatch('fetchInfo')
            }catch(e){
                commit('setError', e)
                throw e
            }
        },
    },
    getters: {
        info : s => s.info,
        // info(state){
        //     return state.info
        // }
    }
}

