<template>
    <div class="block_grid" :class="`block_grid_item${index}`">
        <nuxt-link class="link_block portfolio_item" :to="localePath(`/portfolio/${item.id}`)">
            <div class="portfolio_img">
                <img :data-src="require(`/assets/images/portfolio_all/${item.username}.jpg`)" :alt="item.company.name" v-lazy-load class="img-responsive">  
            </div>
            <div class="portfolio_text">
                <div class="portfolio_subtitle" v-if="index == 0">
                    {{item.company.bs}}
                </div>  
                <div class="portfolio_title">
                    {{item.company.name}}
                </div>
            </div>
        </nuxt-link>  
    </div>
</template>
<script>
export default {
     props: [
        'item',    
        'index'   
    ], 
}
</script>