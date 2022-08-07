<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    mounted() {
        this.$store.commit('SET_USER_FROM_LOCALSTORAGE')
    }
};
</script>