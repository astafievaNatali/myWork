<template>
  <div class="site_mir">    
     <MirHeader />
    <main class="main_mir" :class="{ main_mir_other_page: this.$route.name.indexOf('index') == -1}">
      <Nuxt />
    </main>    
    <MirFooter />   
  </div>
</template>
<script>
import MirHeader from "@/components/header/Header";
import MirFooter from "@/components/footer/Footer";
export default {
    components: {
      MirHeader,
      MirFooter,
     
    }
}
</script>
<style lang="scss" scoped>
 
</style>

