<template>
    <swiper
        :slides-per-view="5"
        :scrollbar="{
            hide: true
        }"
        :modules="[Scrollbar]"
        class="mySwiper">
        <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
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
    height: 136px;
}

.swiper-slide {
    /* Center slide text vertically */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    text-align: center;
    background: #fff;
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
                font-weight: 700;
            }

            &-value {
                color: var(--mc-linkColor);
            }
        }
    }
}
</style>
