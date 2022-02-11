<template>
    
    <div>
        <Navbar />
        <div>
            <h1>Товар номер {{ productId }}</h1>
        </div>
        
        <Footer />
    </div>
    
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ArrowUpIcon,
  HeartIcon,
  EyeIcon,
  ShoppingCartIcon,
  MessageCircleIcon,
  MailIcon,
  UserIcon,
} from "vue-feather-icons";

    export default {
        computed: {
            productId() {
                return +this.$route.params.id;
            }
        },
        components:{
            Navbar,
            Footer,
            ArrowUpIcon,
            HeartIcon,
            EyeIcon,
            ShoppingCartIcon,
            MessageCircleIcon,
            MailIcon,
            UserIcon,
        }
    }
</script>