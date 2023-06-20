<template>
    <swiper
        :slides-per-view="5"
        :scrollbar="{
            hide: true
        }"
        :modules="[Scrollbar]"
        class="mySwiper">
        <swiper-slide>
            <div class="slider__slide-item">
                <div class="slider__slide-item-img">
                    <img src="../../assets/ava-user-1.jpg" alt="img-slide">
                </div>
                <div class="slider__slide-item-desc">
                    <div class="slider__slide-item-desc-name">
                        Crone
                    </div>
                    <div class="slider__slide-item-desc-value">
                        1331
                    </div>
                </div>
            </div>  
        </swiper-slide>
        <swiper-slide>
            <div class="slider__slide-item">
                <div class="slider__slide-item-img">
                    <img src="../../assets/ava-user-1.jpg" alt="img-slide">
                </div>
                <div class="slider__slide-item-desc">
                    <div class="slider__slide-item-desc-name">
                        Doken
                    </div>
                    <div class="slider__slide-item-desc-value">
                        1331
                    </div>
                </div>
            </div>  
        </swiper-slide>
        <swiper-slide>
            <div class="slider__slide-item">
                <div class="slider__slide-item-img">
                    <img src="../../assets/ava-user-1.jpg" alt="img-slide">
                </div>
                <div class="slider__slide-item-desc">
                    <div class="slider__slide-item-desc-name">
                        Wegana
                    </div>
                    <div class="slider__slide-item-desc-value">
                        1331
                    </div>
                </div>
            </div>  
        </swiper-slide>
        <swiper-slide>
            <div class="slider__slide-item">
                <div class="slider__slide-item-img">
                    <img src="../../assets/ava-user-1.jpg" alt="img-slide">
                </div>
                <div class="slider__slide-item-desc">
                    <div class="slider__slide-item-desc-name">
                        Firefly
                    </div>
                    <div class="slider__slide-item-desc-value">
                        1331
                    </div>
                </div>
            </div>  
        </swiper-slide>
        <swiper-slide>
            <div class="slider__slide-item">
                <div class="slider__slide-item-img">
                    <img src="../../assets/ava-user-1.jpg" alt="img-slide">
                </div>
                <div class="slider__slide-item-desc">
                    <div class="slider__slide-item-desc-name">
                        qWeepo
                    </div>
                    <div class="slider__slide-item-desc-value">
                        1331
                    </div>
                </div>
            </div>  
        </swiper-slide>
        <swiper-slide>
            <div class="slider__slide-item">
                <div class="slider__slide-item-img">
                    <img src="../../assets/ava-user-1.jpg" alt="img-slide">
                </div>
                <div class="slider__slide-item-desc">
                    <div class="slider__slide-item-desc-name">
                        Monzer
                    </div>
                    <div class="slider__slide-item-desc-value">
                        1331
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider__slide-item">
                <div class="slider__slide-item-img">
                    <img src="../../assets/ava-user-1.jpg" alt="img-slide">
                </div>
                <div class="slider__slide-item-desc">
                    <div class="slider__slide-item-desc-name">
                        Pashkayashka
                    </div>
                    <div class="slider__slide-item-desc-value">
                        1331
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider__slide-item">
                <div class="slider__slide-item-img">
                    <img src="../../assets/ava-user-1.jpg" alt="img-slide">
                </div>
                <div class="slider__slide-item-desc">
                    <div class="slider__slide-item-desc-name">
                        Pechenka
                    </div>
                    <div class="slider__slide-item-desc-value">
                        1331
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="slider__slide-item">
                <div class="slider__slide-item-img">
                    <img src="../../assets/ava-user-1.jpg" alt="img-slide">
                </div>
                <div class="slider__slide-item-desc">
                    <div class="slider__slide-item-desc-name">
                        AbaldetSlayer
                    </div>
                    <div class="slider__slide-item-desc-value">
                        1331
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Scrollbar} from 'swiper';

</script>

<style scoped lang="scss">


.swiper {
    width: 65vw;
    height: 120px;
    background: transparent;
}

.swiper-slide {
    /* Center slide text vertically */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    text-align: center;
    background: transparent;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slider__slide {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-items: center;

    &-item {
        display: flex;
        align-items: center;
        justify-content: center;

        &-img {
            width: 60px;
            height: 60px;
            margin-right: 20px;

            img {
                border-radius: 14px;
            }
        }

        &-desc {

            &-name {
                margin-bottom: 5px;
                font-weight: 700;
                font-size: 18px;
            }

            &-value {
                color: var(--mc-linkColor);
                font-size: 16px;
            }
        }
    }
}

/* stylelint-disable-next-line selector-pseudo-class-no-unknown */
:deep(.swiper-scrollbar-drag) {
    background: var(--mc-linkColor);
}
</style>
