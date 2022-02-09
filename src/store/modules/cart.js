export default {
    state: {
        cart: {},
        delItem: {},
        TotalPositions: 0,
        Total: 0,
        basket_total: {},
      },

    mutations:{
        UPDATE_CART: (state, item) => {
            state.TotalPositions++;
            if (item.id in state.cart) {
              state.cart[item.id].qt++;
              // state.basket_total.push(state.cart[item.objectID].price);
              // state.cart[item.objectID].push(item);
            } else {
              let stateItem = { ...item };
              stateItem.qt = 1;
              state.cart[item.id] = stateItem;
              // state.cart.push(item.id)
            }
            // state.Total = state.cart.length;
          },
        DELETE_FULL_CART(state){
            state.cart = {};
            state.TotalPositions = 0
        },
        sumTotal(state) {
          // let basket_total = [];
          // state.basket_total
          // state.cart.forEach(val => {
          //     basket_total += val.price;
          // });

          // state.basket_total
          // state.cart.forEach(el => basket_total += el.price*el.qt);
          state.basket_total = state.cart.reduce((sum, equity) => {
            return sum + equity.value;
          }, 0)
        },
    },
    actions: {
        increase_list({commit}, id){
            commit('increase', id)
        },
        decrement_list({commit}, id){
            commit('decrement', id)
        },
        ADD_TO_CART({commit}, item){
            commit('UPDATE_CART', item)
        },
        DELETE_TO_CART({commit}){
            commit('DELETE_FULL_CART')
        },
        act_sumTotal({commit}){
          commit('sumTotal')
      },
    },
    getters: {
        get_cart : s => s.cart,
        get_TotalPositions : s => s.TotalPositions,
        get_basket_total : s => s.basket_total,
        get_Total : s => s.Total,
        

    }
}

