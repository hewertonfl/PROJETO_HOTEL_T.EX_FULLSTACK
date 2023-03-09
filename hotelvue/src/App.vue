<template>
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/sobre">Sobre</router-link>
    
  </nav>  -->
    <body>
        <router-view name='header'></router-view>
        <router-view></router-view>
        <router-view name='footer'></router-view>
    </body>
</template>

<script>

export default {
    name: 'App',
    components: {
    },
}
</script>

<style lang="scss" src="./scss/style.scss" />
