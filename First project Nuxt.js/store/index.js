export const state = () => ({
    openMenu: false,    
  })

export const mutations = {
    toggleMenu (state) {   
        console.log(state.openMenu);     
        state.openMenu = !state.openMenu;
        if(state.openMenu == false){
            document.querySelector('body').style.overflow = '';
        } else {
            document.querySelector('body').style.overflow = 'hidden';
        }
        
    },
    closeMenu (state) {
        state.openMenu = false;
        document.querySelector('body').style.overflow = '';
    }
}

export const actions = {
    nuxtServerInit({dispatch}) {
        console.log('nuxtServerInit');
    }
}

export const getters = {}