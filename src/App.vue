<template>
    <div class="container">
        <LeftSide />
        <MainLayouts />
    </div>
</template>

<script setup lang="ts">

import MainLayouts from './components/MainLayouts.vue';
import LeftSide from './components/LeftSide.vue';
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
