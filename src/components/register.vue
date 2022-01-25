<template>
    <div>
        <h4 class="card-title text-center">Регистрация</h4>
        <form class="login-form mt-4" @submit.prevent="register">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group ">
                        <label>Имя <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <user-icon class="fea icon-sm icons"></user-icon>
                            <input type="text" class="form-control pl-5" placeholder="Имя" name="s" required=""
                                v-model="first_name">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group ">
                        <label>Фамилия <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <user-check-icon class="fea icon-sm icons"></user-check-icon>
                            <input type="text" class="form-control pl-5" placeholder="Фамилия" name="s" required=""
                                v-model="last_name">
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group ">
                        <label>Email <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <mail-icon class="fea icon-sm icons"></mail-icon>
                            <input type="email" class="form-control pl-5" placeholder="Email" name="email" required=""
                                v-model="email">
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group ">
                        <label>Пароль <span class="text-danger">*</span></label>
                        <div class="position-relative">
                            <key-icon class="fea icon-sm icons"></key-icon>
                            <input type="password" class="form-control pl-5" placeholder="Пароль" required=""
                                v-model="password">
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">Я принимаю <a href="#"
                                    class="text-primary">условия конфиденциальности</a></label>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <button class="btn btn-primary btn-block">Зарегистрироваться</button>
                </div>
                <div class="col-lg-12 mt-4 text-center">
                    <h6>Зарегистрироваться с помощью</h6>
                    <div class="row">
                        <div class="col-6 mt-3">
                            <a href="javascript:void(0)" class="btn btn-block btn-light"><i
                                    class="mdi mdi-phone text-primary"></i> Телефон</a>
                        </div>

                        <div class="col-6 mt-3">
                            <a href="javascript:void(0)" class="btn btn-block btn-light"><i
                                    class="mdi mdi-google text-danger"></i> Google</a>
                        </div>
                    </div>
                </div>
                <div class="mx-auto">
                    <p class="mb-0 mt-3"><small class="text-dark mr-2">Уже есть аккаунт ?</small>
                        <router-link to="/auth-login" class="text-dark font-weight-bold">Вход</router-link>
                    </p>
                </div>
            </div>
        </form>

        <!-- <div class="card horizontal" style="max-width:400px;margin:0 auto;" v-if="user">
            <div class="card-image" style="margin-top:25px;margin-left:10px;"> <img :src="user.photoURL"
                    style="width:75px;height:75px;border-radius:50%;border:4px solid #333" /> </div>
            <div class="card-stacked">
                <div class="card-content">
                    <p> name: <strong>{{user.displayName}}</strong><br />email:<strong>{{user.email}}</strong><br />uid:
                        <strong>{{user.uid}}</strong> <br />provider: <strong
                            class="teal-text">{{user.providerData[0].providerId}}</strong> </p>
                </div>
            </div>
        </div> -->


    </div>
</template>

<script>
    import firebase from 'firebase/compat/app'
    // import { getAuth } from 'firebase/auth'


    export default {
        name: 'Register',
        data() {
            return {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                // Uid: '',
                // user: null,
            };
        },
        methods: {
            register() {
                const uid = getUid
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.email, this.password)
                    .then(() => {
                        alert('Successfully registered! Please login.');
                        this.$router.push('/');
                    })
                    .catch(error => {
                        alert(error.message);
                    });
                firebase
                    .database().ref(`/users/${uid}/info`).set({
                        first_name: this.first_name,
                        last_name: this.last_name
                    });
            },
            getUid(){
                const user = firebase.auth().currentUser
                return user ? user.Uid : null
            }


        },
        
        // created() {
        //     firebase.auth().onAuthStateChanged(user => {
        //         if (user) {
        //             this.user = user;
        //         }
        //     });
        // }
    
    }
</script>

<style>

</style>