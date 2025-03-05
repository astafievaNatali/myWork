<template>
    <div class="menu">
        <div class="container_cover">
            <div class="container_flex al_end">
                <div class="block_flex w_60">
                    <ul class="nav">
                        <li class="nav_li">
                            <nuxt-link no-prefetch active-class="active" class="nav_link nav_link--big" @click.native="toggleMenu()" :to="localePath('service')">
                                <span class="nav_link--animation" :data-text="$t('menu.service')">
                                    {{ $t('menu.service') }}
                                </span>
                           </nuxt-link>
                        </li>
                        <li class="nav_li">
                            <nuxt-link no-prefetch active-class="active" class="nav_link nav_link--big" @click.native="toggleMenu()" :to="localePath('portfolio')" >
                                 <span class="nav_link--animation" :data-text="$t('menu.portfolio')">
                                    {{ $t('menu.portfolio') }}
                                </span>
                            </nuxt-link>
                        </li>
                        <li class="nav_li">
                            <nuxt-link no-prefetch active-class="active" class="nav_link nav_link--big" @click.native="toggleMenu()" :to="localePath('products')" >
                                 <span class="nav_link--animation" :data-text="$t('menu.products')">
                                    {{ $t('menu.products') }}
                                </span>
                            </nuxt-link>
                        </li>                    
                        <li class="nav_li">
                            <nuxt-link no-prefetch active-class="active" class="nav_link" @click.native="toggleMenu()" :to="localePath('about_us')" >
                                 <span class="nav_link--animation" :data-text="$t('menu.about_us')">
                                    {{ $t('menu.about_us') }}
                                </span>
                            </nuxt-link>
                        </li>
                        <li class="nav_li">
                            <nuxt-link no-prefetch active-class="active" class="nav_link" @click.native="toggleMenu()" :to="localePath('contacts')" >
                                 <span class="nav_link--animation" :data-text="$t('menu.contacts')">
                                    {{ $t('menu.contacts') }}
                                </span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="block_flex w_40">
                    <HeaderInfo />
                </div>
            </div>
        </div> 
    </div>   
</template>
<script>
import HeaderInfo from "@/components/header/Info"
import { mapMutations } from 'vuex';
    export default { 
        components: {
            HeaderInfo
        },
         methods: {
            ...mapMutations(['toggleMenu']),   
        },         
    }
</script>