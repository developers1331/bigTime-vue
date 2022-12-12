<template>
    <section class="menu">
        <div class="menu__top">
            <div class="menu__logo">
                <!-- <logo class="menu__log-picture" alt="logo"/> -->
            </div>
            <nav class="menu__nav">
                <ul class="menu__nav-list">
                    <li>PiZZZda</li>
                    <li>PiZZZda</li>
                    <li>PiZZZda</li>
                </ul>
            </nav>
        </div>
        <div class="menu__bottom">
            <iconLogin v-if="!isAuth" @click="toggleAuth()" alt="login"/>
            <iconExit v-if="isAuth" @click="toggleAuth()" alt="exit"/>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import iconLogin from '../assets/icons/icon-menu-login.svg?component';
import iconExit from '../assets/icons/icon-menu-exit.svg?component';
import logo from '../assets/logo.svg?component';

const isAuth = ref(false);

function toggleAuth(): void {
    isAuth.value = !isAuth.value;
}
</script>

<style lang="scss" scoped>
    .menu {
        height: 100%;
        &__top {
            height: 100%;
        }
        &__bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            &-exit,
            &-login {
                display: block;
                width: 24px;
                height: 24px;
                cursor: pointer;
            }
        }
        &__logo {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 40px;
        }
        &__nav {
            height: 100%;
            &-list {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                height: 100%;
                    .menu__nav-list-item {
                        margin-bottom: 50px;
                    }
            }
        }
}
</style>
