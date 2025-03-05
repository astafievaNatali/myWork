<template>
    <section class="section_page">
        <div class="block_page">
              <div class="container_cover">
                <h1 class="title title_big">{{title}}</h1>
                <div class="admin_text">
                    {{text}}
                </div>
            </div>
        </div>       
        <div class="block_page">
            <div class="block_img_fix">
                <div class="img_fix" :style="{ backgroundImage: `url(${url})` }"></div>
            </div>
        </div>  
        <div class="block_page">
            <Counter />
        </div>
        <div class="block_page">
            <div class="container_cover">
                <h3 class="subtitle">
                    {{$t('we_trust')}}
                </h3>
                <h2 class="title title_left">
                    {{$t('our_client')}}
                </h2>
                <SliderClient :array="data"/>
            </div>
        </div>
        <div class="block_page">           
            <div class="container_cover">
                <div class="comment_block">                   
                    <Comment v-for="comment in comments"  :key="comment.id" :comment="comment" v-show="comment.id <= 3 ? true : false"/> 
                </div>
                <div class="comment_btn">
                    <button class="my_btn" @click="toggleComment" :class="{ js_active: isActive }">
                        <span class="my_btn_text" v-if="!isActive">{{ $t('show_all') }}</span>
                        <span class="my_btn_text" v-else>{{ $t('close_all') }}</span>
                        <span class="my_btn_svg">
                            <svg-icon name="right" class="my_svg"/>
                        </span>                      
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import Comment from "@/components/about/comment_item";
import SliderClient from "@/components/about/slider_client";
import Counter from "@/components/about/counter";
import { log } from 'util';
export default {
    head() {
         return {
            title: this.$t('title.about_us'),       
        }
    },
    components: {
       Comment, 
       SliderClient,
       Counter
    },
    data () {
       return {
            title: this.$t('title.about_us'), 
            text: this.$t('about_us_page'), 
            url: require(`~/assets/images/pict.jpg`),  
            isActive: false,          
       }
    },
    // async asyncData() {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');        
    //     const comments = await response.json();        
    //     return {comments};
    // },  
    async asyncData (ctx) {
        try {
        const data = await ctx.$axios.$get(`https://jsonplaceholder.typicode.com/todos?_limit=6`);       
        const comments = await ctx.$axios.$get(`https://jsonplaceholder.typicode.com/comments?_limit=10`);
            return {
                data,
                comments              
            }
        } catch (err) {
            console.error('err === ', err);
        }
    },  
    methods: {
        toggleComment(){
            let comments = document.querySelectorAll('.comment_item');         
            if(!this.isActive) {
                for (var i = 0; i < comments.length; i++) {
                comments[i].style.display = "block";
            }
            } else {
                for (var i = 3; i < comments.length; i++) {
                    comments[i].style.display = "none";
                }
            }
            this.isActive = !this.isActive; 
        },
        handleScroll (event) { 
                       
        }        
    },
    mounted () {        
        window.addEventListener('scroll', this.handleScroll); 
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);       
    }
}
</script>
<style lang="scss" scoped>
    .admin_text {
        max-width: 850px;
        margin: 0 auto;        
        font-size: 25px;
        font-family: $ff-bold;
        line-height: 1.6;
    }
    .block_img_fix {
        position: relative;
        overflow: hidden;
        height: 50vh;
    }
    .img_fix {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50%; 
    }
    .subtitle {
        font-size: $font-size * 1.125;
        letter-spacing: 1.8px;
        font-family:$ff-light;
        margin: 0 0 20px;
        text-transform: uppercase;
        font-weight: normal;
    }    
</style>