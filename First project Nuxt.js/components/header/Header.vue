<template>
     <header class="header_mir" :class="{ main_page: this.$route.name.indexOf('index') != -1}">  
        <div class="container_cover">
            <div class="container_flex justify">
                <div class="block_flex">
                    <Logo />
                </div>
                <div class="block_flex">
                    <div class="header_data">
                        <div class="container_flex">
                            <div class="block_flex">
                                <a href="tel:+380675772423" class="header_phone">+38 (067) 577-24-23</a>
                            </div>
                            <div class="block_flex" v-if="this.$route.name.indexOf('contacts')">                              
                                <button class="header_btn" @click="goToContacts">
                                    <span class="header_btn_text">{{ $t('Call_us') }}</span>
                                    <span class="header_btn_svg">
                                        <svg-icon name="right" class="my_svg"/>
                                    </span>
                                </button>
                            </div>
                            <div class="block_flex">
                                <button class="header_menu_burger"  @click="toggleMenu()" :class="{open_menu: openMenu}">
                                    <span class="line line_1"></span>
                                    <span class="line line_2"></span>
                                    <span class="line line_3"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>        
        <div class="menu_cover" :class="{open_menu: openMenu}">
            <MirMenu />
        </div>            
     </header>
</template>
<script>
import Logo from '@/components/header/Logo';
import MirMenu from "@/components/header/Menu";
import { mapMutations } from 'vuex';
    export default {
        components: {
            Logo,
            MirMenu
        },
        computed: {
            openMenu() {                
                return this.$store.state.openMenu
            },
        },
         methods: {
            ...mapMutations(['toggleMenu']),  
            goToContacts () {
                this.$router.push(`/${this.$i18n.locale}/contacts`)                
            } 
        },   
    }
</script>

