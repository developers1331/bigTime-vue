<template>
    <section class="left-side">
        <div class="left-side__top">
            <div class="left-side__logo">
                <!-- <logo class="left-side__log-picture" alt="logo"/> -->
            </div>
            <NavigationMenu />
        </div>
        <div class="left-side__bottom">
            <transition
                name="login-exit"
                mode="out-in">
                <component 
                    :is="isAuth ? iconExit : iconLogin"
                    class="left-side__auth-btn"   
                    @click="toggleAuth()" />
            </transition>
        </div>
    </section>
</template>

<script setup lang="ts">
import {Ref, ref} from 'vue';
import iconLogin from '../assets/icons/icon-menu-login.svg?component';
import iconExit from '../assets/icons/icon-menu-exit.svg?component';
import NavigationMenu from '../components/left-side/NavigationMenu.vue';
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

.left-side {
    position: fixed;
    top: 0;
    left: 0;
    width: 110px;
    height: 100%;
    padding: 80px 5px;
    background: var(--mc-main);
    border-right: 2px solid var(--mc-third);

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
}
</style>
