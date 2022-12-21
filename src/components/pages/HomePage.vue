<template>
    <div class="home">
        <div class="home__left">
            <h2 class="title">
                ⭐ Top users
            </h2>
            <div>
                <TopUsersSlider />
            </div>
            <h2 class="title">
                🔥 Hot Bids
            </h2>
            <div>
                slider
            </div>
            <h2 class="title">
                🔥 Hot Bids
            </h2>
            <div>
                slider
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import TopUsersSlider from 'components/core/TopUsersSlider.vue';


</script>

<style scoped lang="scss">
.home {
    display: grid;
    grid-template-columns: 3fr 1fr;
    min-height: 100vh;
    color: var(--mc-textColor);
    background: var(--mc-bg);

    &__left {
        padding: 80px 35px;
    }

    .title {
        margin-bottom: 20px;
    }
}
</style>

