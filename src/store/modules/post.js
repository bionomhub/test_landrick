export default {
    actions: {
        // первый паарметр - некий контекст
        // второй параметр, какой-либо объект или праметр
        async fetchPosts(ctx, ){ // limit = 3
            // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)
            // const posts = await res.json()
            // this.posts = posts
            // что бы изменить posts мы должны обратиться к mutation
            ctx.commit('updatePosts', posts)
            // первый паарметр - название мутации которую зотим вызвать
            // второй параметр, то что передаем в мутации
        }
    },
    state: {
        // posts: 'dff',
        posts: [],
        count: 0,
        lol: 'lol'
    },
    mutations: {
    //     // первый параметр - state
    //     // второй параметр, то что мы будем передавать
     updatePosts(state, posts){
         state.posts = posts
     },
     increment (state) {
        state.count++
      },
      decrement (state) {
          state.count--
      },
      echo_lol (state) {
        alert(state.count)
      },
      createPosts(state, newPosts) {
        state.posts.unshift(newPosts)
      },
      deletePost(state){
        state.posts.shift()
      }

     },
    getters: {
        allPosts(state) {
            return state.posts
        },

        // postsCount(state) {
        //     return state.posts.length
        // },
        postsCount(state, getters) {
            return getters.validPosts.length
        },
        // в геттерах, вторым параметром принемаем геттеры  
        

        validPosts(state, ){
            return state.posts.filter(p => {
                return p.title && p.body
            })
        }
        
       
    }
}
