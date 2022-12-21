<template>
    <div class="achievements__item">
        <div class="achievements__item-left">
            <img
                src="{{ user.srcImg }}"
                alt="achievement"
                class="achievements__item-img">
        </div>
        <div class="achievements__right">
            <h3 class="achievements__item-name">
            </h3>
            <p class="achievements__item-desc">
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.achievements__item {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 15px;
    padding: 14px;
    background: var(--mc-achievementBg);
    border-radius: 16px;

    &-left {
        max-width: 69px;
        border-radius: 16px;
        margin-right: 14px;
    }

    &-img {
        width: 100%;
    }

    &-desc {
        margin: 0;
    }

    &-name {
        margin: 5px 0 8px;
    }
}
</style>
