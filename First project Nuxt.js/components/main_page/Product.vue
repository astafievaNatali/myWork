<template>
    <div class="block_flex w_50 margin">
        <div class="product_item">
            <div class="product_img">
                <img :data-src="require(`~/assets/images/prod_${item.id}.png`)" alt="" v-lazy-load>
            </div>
            <div class="product_info">
                <div class="product_title">
                    {{$t(`product_name_${item.id}`)}}                    
                </div>
                {{item.title}}
            </div>
        </div>        
    </div>
</template>
<script>
export default {
   props: {
        item: {
            type: Object,
        }
    },
}
</script>
<style lang="scss" scoped>
    .product {
        &_item {
            position: relative;
        }
        &_info {
            position: absolute;
            top: 0;
            left: 0;
            max-width: 375px;
            padding: 15px;
            font-family: $ff-medium;
            font-size: $font-size * 1.125;
        }
        &_title {
            font-size: 28px;
            margin: 0 0 20px;
            font-family: $ff-bold;
        }
    }
</style>