<template>
    <div class="home__achievements">
        <div class="home__achievements-cards">
            <div class="home__achievements-cards-item">
                <div class="home__achievements-cards-item-like">
                    <span class="home__achievements-cards-item-like-span">666</span>
                </div>
                <img
                    src="../../assets/achievement-home-1.jpg"
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
                <img
                    src="../../assets/achievement-home-1.jpg"
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
                <img
                    src="../../assets/achievement-home-1.jpg"
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
                <img
                    src="../../assets/achievement-home-1.jpg"
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
                <img
                    src="../../assets/achievement-home-1.jpg"
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
                <img
                    src="../../assets/achievement-home-1.jpg"
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
// import {container} from 'tsyringe';
// import AchivService from 'services/achiv.service';

// const achivService: AchivService = container.resolve(AchivService);

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

        &-item {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            &-like {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 60%;
                height: 50px;
                padding: 0 10px;
                font-weight: 600;
                background: #161a42;
                cursor: pointer;
                border-radius: 14px;

                &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: -13px;
                    width: 25%;
                    height: 70px;
                    background: #161a42;
                    transform: rotate(-25deg);
                    border-top-left-radius: 30px;
                    border-top-right-radius: 30px;
                }

                &-span {
                    position: relative;

                    &:after {
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
                z-index: 1;
                width: 100%;
                margin-top: -4px;
                margin-bottom: 15px;
                border-radius: 14px;
            }

            &-name {
                font-weight: 600;
            }
        }
    }
}
</style>
