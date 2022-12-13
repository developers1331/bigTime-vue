<template>
    <div class="container">
        <LeftMenuVue />
        <div></div>
    </div>
</template>

<script setup lang="ts">
import LeftMenuVue from './components/LeftMenu.vue';
</script>

<style scoped lang="scss">
.container {
    display: grid;
    grid-template-areas: 'left-menu layouts';
    grid-template-columns: 110px 1fr;

    &:first-child {
        grid-area: left-menu;
    }

    &:last-child {
        grid-area: layouts;
    }
}
</style>
