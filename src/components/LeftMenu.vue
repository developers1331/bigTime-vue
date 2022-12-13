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
            <transition
                name="login-exit"
                mode="out-in">
                <component 
                    :is="isAuth ? iconExit : iconLogin"
                    class="menu__auth-btn"   
                    @click="toggleAuth()" />
            </transition>
        </div>
    </section>
</template>

<script setup lang="ts">
import {Ref, ref} from 'vue';
import iconLogin from '../assets/icons/icon-menu-login.svg?component';
import iconExit from '../assets/icons/icon-menu-exit.svg?component';
// import logo from '../assets/logo.svg?component';

const isAuth: Ref<boolean> = ref(false);

function toggleAuth(): void {
    isAuth.value = !isAuth.value;
}

</script>

<style lang="scss" scoped>
.login-exit {

    &-enter-active,
    &-leave-active {
        transition: opacity 0.2s ease;
    }

    &-enter,
    &-leave-to {
        opacity: 0;
    }
}

.menu {
    height: 100%;

    &__auth-btn {
        cursor: pointer;
    }

    &__top {
        height: 100%;
    }

    &__bottom {
        display: flex;
        align-items: center;
        justify-content: center;

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
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
    }

    &__nav {
        height: 100%;

        &-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            height: 100%;
        }
    }
}
</style>
