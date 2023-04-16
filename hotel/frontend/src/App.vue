<template>
    <body>
        <router-view name='header'></router-view>
        <router-view></router-view>
        <router-view name='footer'></router-view>
    </body>
</template>

<script>

export default {
    name: 'App',
}
</script>

<style lang="scss" src="./scss/style.scss" />
