export const state = () => ({
    users: [],  
    mainUsers: [],
})

export const mutations = {
    setUsers(state, users) {
        state.users = users
    },
    setMainUsers(state,mainUsers) {
        state.mainUsers = mainUsers
    }
}

export const actions = {
    async fetchUser({commit}) {        
        const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
        commit('setUsers', users)
    },
    async fetchMainUser(ctx, limit) {  
        const mainUsers = await this.$axios.$get(`https://jsonplaceholder.typicode.com/users${limit}`)
        ctx.commit('setMainUsers', mainUsers)
    }
}

export const getters = {
    users: s => s.users ,
    mainUsers: s => s.mainUsers,
    usersCount: s => s.users.length

}
