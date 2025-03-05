<template>
    <div class="client_block">
        <a href="https://bmw-motorrad.kyiv.ua/ua" v-if="item.completed" target="_blank" class="client_link">
            <img :data-src="require(`~/assets/images/client/logo_${item.id}.png`)" alt="" v-lazy-load class='img-responsive'>
        </a>
        <div v-else class="client_link">
             <img :data-src="require(`~/assets/images/client/logo_${item.id}.png`)" alt="" v-lazy-load class='img-responsive'>
        </div> 
    </div>
</template>
<script>
    export default {
        props: [
            'item',  
            "index"     
        ],
    }
</script>
<style lang="scss" scoped>
    .client {
        &_link {
            display: block;
            padding: 10px;
        }
    }
</style>