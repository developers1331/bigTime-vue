<template>
    <div class="info">
        <div class="info__avatar">
            <img
                src="assets/images/avatar.png"
                class="info__avatar-img"
                alt="avatar">
        </div>
        <div class="info__name">
            Wegana
        </div>
        <div class="info__statistics">
            <div class="info__statistics-cards">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;

    &__avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;
        padding: 7px;
        border: 2px solid var(--mc-third);
        border-radius: 50%;

        &-img {
            border-radius: 50%;
        }
    }

    &__name {
        margin-bottom: 35px;
        font-weight: 600;
        font-size: 24px;
    }

    &__statistics {
        width: 100%;

        &-cards {
            display: flex;
            align-items: center;
            justify-content: space-around;

            &-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                &-border {
                    margin-bottom: 25px;
                    padding: 13px 22px;
                    font-weight: 600;
                    font-size: 18px;
                    text-transform: capitalize;
                    border: 2px solid var(--mc-third);
                    border-radius: 16px;
                }

                &-name {
                    font-weight: 700;
                    font-size: 14px;
                    text-transform: capitalize;
                }
            }
        }
    }
}
</style>
