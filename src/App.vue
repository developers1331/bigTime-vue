<template>
    <div class="container">
        <div class="container__left-side">
            <LeftSide />
        </div>
        <div class="container__main-layouts">
            <MainLayouts />
        </div>
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

    &__left-side {
        grid-area: left-menu;
    }

    &__main-layouts {
        grid-area: layouts;
    }
}
</style>
