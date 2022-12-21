<template>
    <nav class="navigation-menu">
        <ul class="navigation-menu__list">
            <NavigationMenuItem :name="'/src/assets/icons/icon-menu-gear.svg'" :link="'123.html'" />
            <NavigationMenuItem :name="'/src/assets/icons/icon-menu-statistics.svg'" :link="'321.html'" />
        </ul>
    </nav>
</template>

<script setup lang="ts">
import NavigationMenuItem from './NavigationMenuItem.vue';
</script>

<style lang="scss" scoped>
.navigation-menu {
    height: 100px;

    &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: 100%;
    }
}
</style>
