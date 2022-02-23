export default {
    state: {
        cart: {},
        // delItem: {},
        TotalPositions: 0,
        Total: 0,
      },

    mutations:{
      //добвление товаров в корзину
        UPDATE_CART: (state, item) => {
          console.log(item.qt)
            if(item.qt){
              console.log('if')
              state.TotalPositions += item.qt;
              
              if (item.id in state.cart) {
                state.cart[item.id].qt += item.qt;
                state.Total += state.cart[item.id].price * item.qt;
              } else {
                let stateItem = { ...item };
                stateItem.qt = item.qt;
                state.cart[item.id] = stateItem;
                state.Total += state.cart[item.id].price * item.qt;
              }

            }else{
              console.log('else')
              state.TotalPositions++;
            
              if (item.id in state.cart) {
                state.cart[item.id].qt++;
                state.Total += state.cart[item.id].price;
              } else {
                let stateItem = { ...item };
                stateItem.qt = 1;
                state.cart[item.id] = stateItem;
                state.Total += state.cart[item.id].price;
              }
            }
          },
        // очищаем всю корзину
        DELETE_FULL_CART(state){
            state.cart = {};
            state.TotalPositions = 0;
            state.Total = 0;
        },
        // удаляет элемент из корзины
        set_removeItem(state, item){
          state.TotalPositions-=state.cart[item].qt;
          console.log(state.cart[item].qt);
          if(state.TotalPositions == 0){
            state.Total = 0;
          }else{
            state.Total -= (state.cart[item].qt * state.cart[item].price);
          }
          delete state.cart[item];
        },
        // прибавляет количество 
        increase(state, item){
          state.cart[item].qt++;
          state.Total += state.cart[item].price;
          state.TotalPositions++;
        },
        // убавляет количество 
        decrement(state, item){
         if(state.cart[item].qt > 1){
          state.cart[item].qt--;
          state.Total -= state.cart[item].price;
          state.TotalPositions--;
         }
        },
    },
    actions: {
        increase_count({commit}, item){
            commit('increase', item)
        },
        decrement_count({commit}, item){
            commit('decrement', item)
        },
        ADD_TO_CART({commit}, item){
            commit('UPDATE_CART', item )
        },
        DELETE_TO_CART({commit}){
            commit('DELETE_FULL_CART')
        },
        removeItem({commit}, item){
          commit('set_removeItem', item)
        },
    },
    getters: {
        get_cart : s => s.cart,
        get_TotalPositions : s => s.TotalPositions,
        get_basket_total : s => s.basket_total,
        get_Total : s => s.Total.toFixed(2),
        

    }
}

