import store from "../store/store";

export default function(to, from, next) {
    if(store.getters.info){
        next()
    }else{
        next('/login')
    }
}
