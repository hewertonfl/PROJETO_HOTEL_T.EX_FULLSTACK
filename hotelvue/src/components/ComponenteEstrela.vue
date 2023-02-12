<template>
    <div class="stars">
        <i class="fa-solid fa-star"></i>
        {{ stars(id) }}
    </div>
</template>

<script>
export default {
    name: 'ComponenteEstrela',
    props: ['id'],
    data() {
        return {
            starsMean: '',
        }
    },
    methods: {
        stars(id) {
            let stars = ''
            localStorage.getItem(`starsMean_${id}`)
                ? (stars = localStorage.getItem(`starsMean_${id}`))
                : (stars = '')
            this.starsMean = stars
            return stars
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
