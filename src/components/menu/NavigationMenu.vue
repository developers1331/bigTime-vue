<template>
    <nav class="navigation-menu">
        <ul class="navigation-menu__list">
            <NavigationMenuItem :name="'V'" :link="'123.html'" />
            <NavigationMenuItem :name="'D'" :link="'321.html'" />
            <NavigationMenuItem :name="'V'" :link="'231.html'" />
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
