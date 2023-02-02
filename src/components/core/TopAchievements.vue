<template>
    <div class="home__achievements">
        <div class="home__achievements-cards">
            <div class="home__achievements-cards-item">
                <div class="home__achievements-cards-item-like">
                    <span class="home__achievements-cards-item-like-span">666</span>
                </div>
                <img src="../../assets/achievement-home-1.jpg"
                     alt="img"
                     class="home__achievements-cards-item-img">
                <div class="home__achievements-cards-item-name">
                    Example
                </div>
            </div>
            <div class="home__achievements-cards-item">
                <div class="home__achievements-cards-item-like">
                    <span class="home__achievements-cards-item-like-span">666</span>
                </div>
                <img src="../../assets/achievement-home-1.jpg"
                     alt="img"
                     class="home__achievements-cards-item-img">
                <div class="home__achievements-cards-item-name">
                    Example
                </div>
            </div>
            <div class="home__achievements-cards-item">
                <div class="home__achievements-cards-item-like">
                    <span class="home__achievements-cards-item-like-span">666</span>
                </div>
                <img src="../../assets/achievement-home-1.jpg"
                     alt="img"
                     class="home__achievements-cards-item-img">
                <div class="home__achievements-cards-item-name">
                    Example
                </div>
            </div>
            <div class="home__achievements-cards-item">
                <div class="home__achievements-cards-item-like">
                    <span class="home__achievements-cards-item-like-span">666</span>
                </div>
                <img src="../../assets/achievement-home-1.jpg"
                     alt="img"
                     class="home__achievements-cards-item-img">
                <div class="home__achievements-cards-item-name">
                    Example
                </div>
            </div>
            <div class="home__achievements-cards-item">
                <div class="home__achievements-cards-item-like">
                    <span class="home__achievements-cards-item-like-span">666</span>
                </div>
                <img src="../../assets/achievement-home-1.jpg"
                     alt="img"
                     class="home__achievements-cards-item-img">
                <div class="home__achievements-cards-item-name">
                    Example
                </div>
            </div>
            <div class="home__achievements-cards-item">
                <div class="home__achievements-cards-item-like">
                    <span class="home__achievements-cards-item-like-span">666</span>
                </div>
                <img src="../../assets/achievement-home-1.jpg"
                     alt="img"
                     class="home__achievements-cards-item-img">
                <div class="home__achievements-cards-item-name">
                    Example
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.home {
    &__achievements {
        margin-bottom: 30px;
        &-cards {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 40px;
        }
    }
    &__achievements-cards {
        &-item {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            &-like {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                background: #161A42;
                height: 50px;
                width: 60%;
                padding: 0 10px;
                border-radius: 14px;
                font-weight: 600;
                cursor: pointer;
                position: relative;                
                &::after {
                    content: '';
                    background: #161A42;
                    width: 25%;
                    height: 70px;
                    position: absolute;
                    top: 0;
                    right: -13px;
                    border-top-left-radius: 30px;
                    border-top-right-radius: 30px;
                    transform: rotate(-25deg);
                }
                &-span {
                    position: relative;
                    &::after {
                        content: '';
                        position: absolute;
                        top: -4px;
                        right: -30px;
                        width: 22px;
                        height: 22px;
                        background: url(../../assets/icons/icon-like.svg) no-repeat;
                    }
                }
            }
            &-img {
                border-radius: 14px;
                margin-top: -4px;
                margin-bottom: 15px;
                width: 100%;
                z-index: 1;
            }
            &-name {
                font-weight: 600;
            }
        }
    }
}
</style>