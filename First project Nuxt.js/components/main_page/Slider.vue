<template>
  <div class="slider_cover">    
    <VueSlickCarousel v-bind="settings" class="slider">
      <div class="slide" v-for="(item, index) in 2">
        <div class="slide_block" :to="localePath('portfolio')">
            <div class="slide_flex">             
                <div class="slide_text">
                  <div class="slide_title">
                    {{ $t(`slide.text_${index}`) }}
                  </div>
                  <div class="slide_btn">
                    <nuxt-link class="header_btn" :to="localePath('portfolio')">                       
                        <span class="header_btn_text">{{ $t('our_work') }}</span>
                        <span class="header_btn_svg">
                            <svg-icon name="right" class="my_svg"/>
                        </span>
                    </nuxt-link >  
                  </div>
                </div>
                <div class="slide_img">
                    <nuxt-link class="slide_link" :to="localePath('portfolio')">
                      <img :data-src="require(`~/assets/images/img-${index}.png`)" alt=""  v-lazy-load>
                    </nuxt-link >  
                </div>
            </div>
        </div>         
      </div>
    </VueSlickCarousel>
  </div>
</template>
 
<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
        return {
            settings: {    
                dots: false,   
                arrows: false,        
                fade: true,
                infinite: true,
                speed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speed: 3000,
                autoplaySpeed: 3000,
            },
        }
      },
    }
</script> 