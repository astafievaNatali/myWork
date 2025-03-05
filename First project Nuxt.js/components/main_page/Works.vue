<template>
  <div class="container_cover">
         <h2 class="title">
            {{$t('our_work')}}           
        </h2>
        <div class="container_grid">
            <Work v-for="(item, index) in array" :key="item.id" :item="item"  :index="index"/> 
            <div class="block_grid">
              <div class="portfolio_all">
                <div class="portfolio_btn">
                    <nuxt-link class="my_btn" :to="localePath('/portfolio')">
                        <span class="my_btn_text">
                            {{$t('all_works')}}
                        </span>
                        <span class="my_btn_svg">
                            <svg-icon name="right" class="my_svg"/>
                        </span>
                    </nuxt-link>
                  </div>
                  <div class="portfolio_fon"></div>
              </div>              
            </div>
        </div>         
  </div>
</template>
<script>
import Work from "@/components/main_page/Work";
export default {   
    components: {
      Work
    },
    props: [
        'array',       
    ], 
}
</script>