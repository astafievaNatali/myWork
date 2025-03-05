<template>
  <div class="">
      <div class="main_page">
        <section class="section_slider">
            <Slider />
        </section>
        <section class="section section_about">
            <About />
        </section>
        <section class="section section_works">
          <Works :array="users"/> 
        </section>
        <section class="section section_products">
          <div class="container_cover">
            <h2 class="title">{{$t('menu.products')}}</h2>
            <div class="container_flex margin">
                <Product
                    v-for="album in albums"
                    :key="album.id"
                    v-bind:item="album"                  
                  /> 
            </div>
            <div class="products_btn">
                <nuxt-link :to="localePath('products')" class="my_btn">
                    <span class="my_btn_text">{{ $t('prezentation') }}</span>
                    <span class="my_btn_svg">
                        <svg-icon name="right" class="my_svg"/>
                    </span>
                </nuxt-link>
            </div>
          </div>
        </section>      
    </div> 
    <Form /> 
  </div>  
</template>

<script>
import Slider from "@/components/main_page/Slider";
import About from "@/components/main_page/About";
import Works from "@/components/main_page/Works";
import Product from "@/components/main_page/Product";
import Form from "@/components/Form";
import {mapGetters, mapActions} from "vuex";

export default {
  head() {
    return {
       title: this.$t('title.main'),       
    }
  },
  components: {
    Slider,
    About,
    Works,
    Product,
    Form
  }, 
  async asyncData() {   
      const response = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=2');
      const albums = await response.json();     
      return {albums}
  }, 
  computed: {
      ...mapGetters({
          users: 'users/mainUsers'
      })
  },
   methods: {
        openUser(user) {
            this.$router.push(`/${this.$i18n.locale}/portfolio/${user.id}`)
        },
        ...mapActions({
            fetchMainUser: 'users/fetchMainUser'
        })
    },
    async mounted () {        
        this.fetchMainUser('?_limit=4')
    }
}
</script>
<style lang="scss" scoped>
  .products_btn {
    text-align: center;
    margin: 30px 0 0;
    .my_btn {
      border: none;
    }
  }
</style>
