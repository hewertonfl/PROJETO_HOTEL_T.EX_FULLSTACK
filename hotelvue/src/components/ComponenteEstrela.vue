<template>
    <div class="stars"><i class="fa-solid fa-star"></i> {{ starsMean() }}</div>
</template>

<script>
export default {
    name: 'ComponenteEstrela',
    props: ['id'],
    methods: {
        starsMean() {
            let media
            localStorage.getItem('starsMean')
                ? (media = localStorage.getItem('starsMean'))
                : (media = 0)
            return media
        },
    },
}
</script>

<style scoped>
.stars {
    margin-bottom: 5px;
    color: #a35700;
}
</style>
