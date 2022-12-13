<template>
    <a :href="link"><li>{{name}}</li></a>
</template>

<script setup lang="ts">
export interface IPropsNavigationMenu {
    name: string, 
    link: string,
}

const props = defineProps<IPropsNavigationMenu>();

</script>

<style lang="scss" scoped>
a {
    color: #fff;
}
</style>
