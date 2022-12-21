<template>
    <div class="achievements">
        <div class="achievements__top">
            <h2 class="achievements__title">
                Latest achievements
            </h2>
            <a href="#" class="achievements__btn">See All</a>        
        </div>
        <app-user-list-achievements-item />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.achievements {

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    &__btn {
        position: relative;
        display: block;
        margin-right: 30px;

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            right: -28px;
            display: block;
            width: 17px;
            height: 9px;
            background: url(../../assets/images/icons/icon-arrow-right.svg) no-repeat;
            background-size: contain;
            transform: translateY(-50%);
            transition: all 0.2s ease;
        }

        &:hover:after {
            transform: translate(5px, -50%);
        }
    }
}
</style>
