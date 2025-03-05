<template>
    <div class="slider-client_cover">
       <VueSlickCarousel v-bind="settings" class="slider-client">
             <SlideClient 
                 v-for="(item, index) in array"
                :key="`client_slider_slide_${index}`"
                :item="item"
                :index="index"
             /> 
        </VueSlickCarousel>
    </div>
</template>
<script>
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
  import SlideClient from "@/components/about/slide_client";

 export default {
    name: 'MyComponent',
    components: { 
        VueSlickCarousel,
        SlideClient
    },
    props: [
        'array',       
    ],  
    data() {
        return {
            settings: {    
                dots: false,   
                arrows: false, 
                infinite: true,
                speed: 3000,
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                speed: 3000,
                autoplaySpeed: 3000,
                responsive: [
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,              
                      }
                    },   
                    { breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,              
                      }
                    }, 
                    { breakpoint: 575,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,              
                      }
                    },               
                ]
            },
        }
      },
    }
</script>
<style lang="scss" scoped>
    .slider-client .slick-track {
        display: flex;
        align-items: center;
    }
</style>