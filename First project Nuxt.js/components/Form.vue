<template>
    <section>
        <div class="container_flex">
            <div class="block_flex w_50">
                <div class="block_idea">
                        idea
                </div>
            </div>
             <div class="block_flex w_50">
                <nuxt-link class="block_portfolio" :to="localePath('/portfolio')">
                    <span class="block_portfolio_subtitle">

                    </span>
                    <span class="block_portfolio_title">

                    </span>
                    <span class="block_portfolio_btn">

                    </span>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    .block_idea,
    .block_portfolio {
        padding: 100px 25px;
        display: flex;
        align-items: center;
        justify-content: center;
     }
    .block_portfolio {
         flex-direction: column;
     }
    
</style>