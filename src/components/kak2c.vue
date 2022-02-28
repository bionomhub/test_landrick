<template>
<div>
  <div v-for="item in get_kak2c['products']" :key="item">
      <!-- <router-link :to="item.id">{{item.id}}</router-link> -->
      <router-link :to='`/shop-product-detail/${item.id}`'>{{item.id}}</router-link>      
      
      <div v-for="lol in item.images" :key='lol'>
        <img style="width:100px;" :src="lol.url" alt="">
      </div>
      {{item.shortName}}
      <div v-for="lol in item.variants" :key='lol'>
        {{lol.price}}₽
      </div>
    </div>
</div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['get_kak2c'])
    }

}
</script>

<style>

</style>