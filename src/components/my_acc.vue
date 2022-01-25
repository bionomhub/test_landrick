<template>
  <!-- <div v-if="user"> -->
        <!-- <div class="card horizontal" style="max-width:400px;margin:0 auto; border: none;" >
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

        <div class="ml-3">
              <h6 class="text-muted mb-0">Hello,</h6>
              <h5 class="mb-0">email: {{user.email}}</h5>
              
        </div>
        <!-- <button @click="signOut">logout</button> -->
    <!-- </div> -->
</template>

<script>
    import firebase from 'firebase/compat/app';

    export default {
        name: 'Register',
        data() {
            return {
                user: null,
            };
        },
        methods: {  
            signOut(e) {
                e.stopPropagation();    
                firebase.auth().signOut();
                alert('Successfully loguot!');
                this.$router.push('/');
            }
            

        },
        created() {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    this.user = user;
                }
            });
        }
    }
</script>

<style>

</style>