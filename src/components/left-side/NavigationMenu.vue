<template>
    <nav class="navigation-menu">
        <div class="navigation-menu__list">
            <NavigationMenuItem :component="gear" :link="'/profile'" />
            <NavigationMenuItem :component="statistics" :link="'/statistics-users'" />
        </div>
    </nav>
</template>

<script setup lang="ts">
import NavigationMenuItem from 'components/left-side/NavigationMenuItem.vue';
import gear from '@assets/icons/icon-menu-gear.svg?component';
import statistics from '@assets/icons/icon-menu-statistics.svg?component';
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
