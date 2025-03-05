<template>
    <div class="container_cover">
        <div class="counter_block js_counter_block js_active">
            <div class="container_flex margin">
                <div class="block_flex margin w_25">
                    <div class="counter_item">
                        <div class="counter_main">
                            <div class="counter_number js_count js_opacity">
                                20
                            </div>                           
                        </div>
                        <div class="counter_text">
                            {{$t('counter.year')}}
                        </div>
                    </div>                    
                </div>
                <div class="block_flex margin w_25">
                     <div class="counter_item">
                        <div class="counter_main">
                            <div class="counter_number js_count js_opacity">
                                200
                            </div>
                            <div class="counter_plus">
                                +
                            </div>
                        </div>
                        <div class="counter_text">
                            {{$t('counter.project')}}
                        </div>
                    </div>
                </div>
                <div class="block_flex margin w_25">
                    <div class="counter_item">
                        <div class="counter_main">
                            <div class="counter_number js_count js_opacity">
                                4
                            </div>                           
                        </div>
                        <div class="counter_text">
                            {{$t('counter.products')}}
                        </div>
                    </div>
                </div>
                <div class="block_flex margin w_25">
                     <div class="counter_item">
                        <div class="counter_main">
                            <div class="counter_number js_count js_opacity">
                                20
                            </div>
                            <div class="counter_plus">
                                +
                            </div>
                        </div>
                        <div class="counter_text">
                            {{$t('counter.employee')}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .js_opacity {
        // opacity: 0;
        transition: all 0.3s ease;
    }
</style>