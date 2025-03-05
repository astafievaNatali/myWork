<template>
    <div class="header_info">
        <div class="header_info_item">
            <div class="lang"> 
                <nuxt-link class="lang_link"
                    v-for="locale in $i18n.locales"
                    :key="locale.code"                        
                    :class="{activeLang: locale.code === $i18n.locale}"
                    :to="switchLocalePath(locale.code)">{{ locale.code }}                        
                </nuxt-link>
           </div> 
        </div>        
        <div class="header_info_item">
            <address>
                <a class="header_phone" target="_blank" href="https://www.google.com/maps/place/IBC+Capital/@49.9734964,36.2976449,17z/data=!3m1!4b1!4m5!3m4!1s0x41270a6936b7c2e1:0xc27bae9a1e7b0efd!8m2!3d49.9733693!4d36.2997529">
                    Харьков, Московський проспект, 199 Д5, оф. 202
                </a>
            </address>
        </div>
        <div class="header_info_item">
            <div class="phones">
                <div class="phone"> <a href="tel:+380675772423" class="header_phone">+38 (067) 577-24-23</a></div>
                <div class="phone"> <a href="tel:+380675772423" class="header_phone">+38 (067) 577-24-23</a></div>
            </div>
        </div>
        <div class="header_info_item">
            <div class="social_block">
                <div class="social_item">
                    <a href="https://www.facebook.com/chpvvs/" target="_blank" class="social_link">
                        <svg-icon name="facebook" class="my_svg"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>