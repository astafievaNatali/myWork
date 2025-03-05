<template>
  <div class="site_mir">        
    <main class="main_mir">
          <h1 class="title">404</h1>
          <nuxt-link class="my_btn" :to="localePath('/')">
            <span class="header_btn_text">{{$t('title.main')}}</span>
            <span class="header_btn_svg">
                <svg-icon name="right" class="my_svg"/>
            </span>            
          </nuxt-link>
    </main>
  </div>
</template>
<style lang="scss" scoped>
    h1 {
      font-size: 120px;
      line-height: 1;
    } 
    .main_mir {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
</style>
