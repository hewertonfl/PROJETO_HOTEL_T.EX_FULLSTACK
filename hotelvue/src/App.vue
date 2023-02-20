<template>
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/sobre">Sobre</router-link>
    
  </nav>  -->
    <body>
        <router-view name='header'></router-view>
        <router-view></router-view>
        <router-view name='footer'></router-view>
        <!-- <ComponenteHeaderBanner />
        <ComponenteFooter /> -->
    </body>
</template>

<script>
// import ComponenteHeaderBanner from './components/ComponenteHeaderBanner.vue'
// import ComponenteFooter from './components/ComponenteFooter.vue'

export default {
    name: 'App',
    components: {
        // ComponenteHeaderBanner,
        // ComponenteFooter,
    },
}
</script>

<style lang="scss" src="./scss/style.scss" />
