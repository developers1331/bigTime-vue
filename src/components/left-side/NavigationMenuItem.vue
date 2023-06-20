<template>
    <div class="menu-item">
        <router-link :to="link">
            <component :is="props.component" />
        </router-link>
    </div>
</template>

<script setup lang="ts">
import type {Component} from 'vue';

export interface IPropsNavigationMenu {
    component: Component,
    link: string,
}

const props = defineProps<IPropsNavigationMenu>();
</script>

<style lang="scss" scoped>

.menu-item {
    display: block;
    width: 24px;
    height: 24px;
    margin-bottom: 50px;
    background-repeat: no-repeat;
    background-size: contain;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
}
</style>
