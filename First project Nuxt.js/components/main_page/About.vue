<template>
    <div class="container_cover">
        <h2 class="title">
            {{$t('who_we')}}
        </h2>
        <div class="admin_text">
            <p>{{$t('admin_text_1')}}</p>
            <p>{{$t('admin_text_2')}}</p>
        </div>
        <div class="about_block">
             <div class="container_flex al_start margin">
                <div class="block_flex w_33 margin" v-for="item in items" :key="item.id">
                    <div class="about_item">
                        <div class="about_title">
                            {{item.title}}
                        </div>
                        <div class="about_text">
                            {{item.name}}
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    </div>
</template>
<script>
    export default {
        data() {
            return {
                items: [
                    {
                        title: "Разработка",
                        name: "Наша команда разработчиков решает задачи вашего бизнеса с помощью обоснованных и проверенных решений.",
                    },
                    {
                        title: "Дизайн",
                        name: " Интуитивно понятный и удобный дизайн с использованием последних тенденций UI / UX.",
                    },   
                    {
                        title: "Продвижение",
                        name: "Оценка потребностей наших клиентов и бизнес-целей имеет решающее значение, чтобы помочь нам определить и создать их идеальный продукт.",
                    }               
                ]
            }
        },
    }
</script>
<style lang="scss" scoped>
    .admin_text {
        max-width: 850px;
        margin: 0 auto;
    }
</style>