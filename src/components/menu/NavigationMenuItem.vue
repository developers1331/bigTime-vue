<template>
    <a :href="link"><li :style="{'background-image': 'url(' + name + ')'}"></li></a>
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

li {
    display: block;
    width: 24px;
    height: 24px;
    margin-bottom: 50px;
    background-repeat: no-repeat;
    background-size: contain;
}
</style>
