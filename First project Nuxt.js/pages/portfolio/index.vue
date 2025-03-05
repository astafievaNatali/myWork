<template>
    <div class="section_page">
        <div class="container_cover">
            <h1 class="title title_big">{{title}}</h1>
            {{usersCount}}
            <ul class="">
                <li v-for="user in users" :key="user.id">
                    <a href="#" @click.prevent="openUser(user)">{{user.name}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapGetters} from "vuex";

export default {
    async fetch ({store}) {        
        if(store.getters['users/users'].length === 0 ) {
            await store.dispatch('users/fetchUser')
        }
    },
    head() {
         return {
            title: this.$t('title.portfolio'),       
        }
    },
    data () {
        return {
            title: this.$t('title.portfolio'),   
        }
    },       
    computed: {
        //  users() {
        //     return this.$store.getters['users/users']
        // },
        ...mapGetters({
          usersCount: 'users/usersCount',
          users: 'users/users'
      })       
    }, 
    methods: {
        openUser(user) {
            this.$router.push(`/${this.$i18n.locale}/portfolio/${user.id}`)
        },
    },
}
</script>