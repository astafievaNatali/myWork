<template>
    <div class="section_page">
        <div class="container_cover">
            <h1 class="title title_big">
                {{user.name}}
            </h1>
        </div>
    </div>
</template>
<script>
export default {
    validate({params}) {  
        return /^\d+$/.test(params.id);
    },
    async asyncData({$axios, params}) {
        const user = await $axios.$get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        return {user}
    }
}
</script>