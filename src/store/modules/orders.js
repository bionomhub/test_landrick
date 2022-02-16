import firebase from 'firebase/compat/app'


export default {
    actions: {
        async sendOrder({dispatch, commit},{OrderName, OrderSurName, OrderCity, OrderAdress, OrderPhone, dateOrder, get_Total, get_TotalPositions, ordersId}){
            try {
                const uid = await dispatch('getUid')
                const orderId = (await firebase.database().ref(`/users/orderId`).once('value')).val()

                await firebase.database().ref(`/users/`).update({orderId: orderId+1})
                await firebase.database().ref(`/users/${uid}/info/orders/${orderId}`).update({id: orderId, name: OrderName, surName: OrderSurName, city: OrderCity, adress:OrderAdress, phone: OrderPhone, data: dateOrder, totalSum: get_Total, totalPosition: get_TotalPositions, orderInto: ordersId})
                    
                // await commit('clearOrder')
                await dispatch('getOrder')
                await dispatch('DELETE_TO_CART')
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async getOrder({dispatch, commit}){
            try{
                const uid = await dispatch('getUid')
                const order_bd = (await firebase.database().ref(`/users/${uid}/info/orders`).once('value')).val()
                await commit('setOrder', order_bd)
            } catch (e) {

            }
        },


    },
    state: {
        state_order: {},
    },
    mutations:{
        setOrder(state, order_bd){
            state.state_order = order_bd
        },
        clearOrder(state){
            state.state_order = {}
        },
    },
    getters: {
        // take_order : s => s.state_order,
        take_order (state){
            return state.state_order
        } 
        // => s.state_order,

    }
}
