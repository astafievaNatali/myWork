<template>
    <div class="logo_cover">
        <div class="logo" v-if="this.$route.name.indexOf('index') != -1">
            <picture>
                <source srcset="~assets/images/logo_img_1.png" media="(min-width: 600px)">
                <img src="~assets/images/logo_img_2.png" alt="Mirumir">
            </picture>
        </div>
        <nuxt-link no-prefetch :to="localePath('/')" @click.native="closeMenu()" class="logo" v-else >
            <picture>
                <source srcset="~assets/images/logo_img_1.png" media="(min-width: 600px)">
                <img src="~assets/images/logo_img_2.png" alt="Mirumir">
            </picture>
        </nuxt-link>
    </div>
</template>
<style lang="scss" scoped>
    .logo {
        display: block;
        position: relative;
        z-index: 11;
        picture,img {
            display: block;
            max-width: 100%;
            height: auto;
        }
    }
</style>
<script>
import { mapMutations } from 'vuex';
    export default { 
         methods: {
            ...mapMutations(['closeMenu']),   
        },         
    }
</script>