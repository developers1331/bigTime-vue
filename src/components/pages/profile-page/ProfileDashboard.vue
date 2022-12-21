<template>
    <section class="profile">
        <h2 class="profile__title">
            My Profile
        </h2>
        <!-- <app-user-info></app-user-info>
        <app-user-list-achievements></app-user-list-achievements> -->
    </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.profile {
    position: relative;
    min-height: 100vh;
    padding: 35px 25px;
    color: var(--mc-textColor);
    background: var(--mc-main);
    border-left: 2px solid var(--mc-third);
    overflow-x: hidden;

    &:before {
        content: '';
        position: absolute;
        top: 21px;
        right: -34px;
        display: block;
        width: 201px;
        height: 373px;
        background: url(../../assets/icons/profile/icon-circles.svg) no-repeat;
        background-size: contain;
    }

    &:after {
        content: '';
        position: absolute;
        top: -3px;
        left: 0;
        display: block;
        width: 178px;
        height: 427px;
        background: url(../../assets/icons/profile/icon-circles-2.svg) no-repeat;
        background-size: contain;
    }

    &__title {
        margin: 0 0 30px;
        font-weight: 700;
        font-size: 36px;
        text-align: center;
    }
}
</style>
