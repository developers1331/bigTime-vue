<template>
    <div class="info__statistics-cards-item">
        <div class="info__statistics-cards-item-border">
            <!-- {{ value }} -->
        </div>
        <div class="info__statistics-cards-item-name">
            <!-- {{ text }} -->
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.info {

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
