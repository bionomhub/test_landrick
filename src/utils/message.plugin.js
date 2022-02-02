import M from 'materialize-css'
// import messages from 'messages'

export default{
    install(Vue, options) {
        Vue.prototype.$message = function(html){
            M.toast({html})
        }

        Vue.prototype.$error = function(html){
            M.toast({html: `[ошибка]: ${html}` })
        }
    }
}