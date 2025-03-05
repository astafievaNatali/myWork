<template>
    <footer class="footer_mir">
        <div class="container_cover">
            <div class="container_flex justify">
                <div class="block_flex">
                    <ul class="nav">
                        <li class="nav_li">
                            <nuxt-link no-prefetch active-class="active" class="nav_link" :to="localePath('service')">
                                <span class="nav_link--animation" :data-text="$t('menu.service')">
                                    {{ $t('menu.service') }}
                                </span>
                           </nuxt-link>
                        </li>
                        <li class="nav_li">
                            <nuxt-link no-prefetch active-class="active" class="nav_link" :to="localePath('portfolio')" >
                                 <span class="nav_link--animation" :data-text="$t('menu.portfolio')">
                                    {{ $t('menu.portfolio') }}
                                </span>
                            </nuxt-link>
                        </li>
                        <li class="nav_li">
                            <nuxt-link no-prefetch active-class="active" class="nav_link" :to="localePath('products')" >
                                 <span class="nav_link--animation" :data-text="$t('menu.products')">
                                    {{ $t('menu.products') }}
                                </span>
                            </nuxt-link>
                        </li>                    
                        <li class="nav_li">
                            <nuxt-link no-prefetch active-class="active" class="nav_link" :to="localePath('about_us')" >
                                 <span class="nav_link--animation" :data-text="$t('menu.about_us')">
                                    {{ $t('menu.about_us') }}
                                </span>
                            </nuxt-link>
                        </li>
                        <li class="nav_li">
                            <nuxt-link no-prefetch active-class="active" class="nav_link" :to="localePath('contacts')" >
                                 <span class="nav_link--animation" :data-text="$t('menu.contacts')">
                                    {{ $t('menu.contacts') }}
                                </span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="block_flex">
                    <a class="header_btn" href="https://mirumir.name/uk/brief" target="_blank">
                        <span class="header_btn_text">{{ $t('brief') }}</span>
                        <span class="header_btn_svg">
                            <svg-icon name="right" class="my_svg"/>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </footer>  
</template>
<style lang="scss" scoped>
    .nav_link {
        &.active {
            color: $blue;
        }
    }
</style>