export default {
    state: {
        wishlist: {},
        TotalWishlist: 0,
      },

    mutations:{
      //добвление товаров в корзину
        UPDATE_WISHLIST: (state, item) => {
          state.TotalWishlist++;
            
          if (item.id in state.wishlist) {
            // state.wishlist[item.id].qt++;
          } else {
            let stateItem = { ...item };
            stateItem.qt = 1;
            state.wishlist[item.id] = stateItem;
          }
        },
        // очищаем всю корзину
        DELETE_FULL_WISHLIST(state){
          state.wishlist = {};
          state.TotalWishlist = 0;
        },
        // удаляет элемент из корзины
        // set_removeItem(state, item){
        //   state.TotalWishlist-=state.wishlist[item].qt;
        //   console.log(state.wishlist[item].qt);
         
        //   delete state.wishlist[item];
        // },
    },
    actions: {

        ADD_TO_WISHLIST({commit}, item){
            commit('UPDATE_WISHLIST', item)
        },
        DELETE_TO_WISHLIST({commit}){
            commit('DELETE_FULL_WISHLIST')
        },
        // removeItem({commit}, item){
        //   commit('set_removeItem', item)
        // }
    },
    getters: {
        get_wishlist : s => s.wishlist,
        get_TotalWishlist : s => s.TotalWishlist,
    }
}

