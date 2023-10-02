<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import FullScreen from '../components/Reusables/Icons/FullScreen.vue';
import { useLayout } from '@/layout/composables/layout';
import { useRouter } from 'vue-router';

const { layoutConfig, onMenuToggle } = useLayout();

const outsideClickListener = ref(null);
const topbarMenuActive = ref(false);
let toggleClick = ref(false);
const router = useRouter();
const myDocument = document.documentElement;

onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});

const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
};

const getFullScreen = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
    toggleClick.value = !toggleClick.value;
    if (toggleClick.value) {
        enterScreen();
    } else {
        exitScreen();
    }
};

function enterScreen() {
    if (myDocument.requestFullScreen) {
        myDocument.requestFullScreen();
    } else if (myDocument.msRequestFullScreen) {
        myDocument.msRequestFullScreen();
    } else if (myDocument.mozRequestFullScreen) {
        myDocument.mozRequestFullScreen();
    } else if (myDocument.webkitRequestFullScreen) {
        myDocument.webkitRequestFullScreen();
    }
}

function exitScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExistFullScreen) {
        document.msExistFullScreen();
    } else if (document.mozExistFullScreen) {
        document.mozExistFullScreen();
    } else if (document.webkitExistFullScreen) {
        document.webkitExistFullScreen();
    }
}

const onSettingsClick = () => {
    topbarMenuActive.value = false;
    router.push('/documentation');
};
const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl = document.querySelector('.layout-topbar-menu');
    const topbarEl = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
};
</script>

<template>
    <div class="layout-topbar">
        <router-link to="/" class="layout-topbar-logo">
            <img src="/layout/images/dashboard/umg.png" alt="logo" />
            <span>UMG Myanmar</span>
        </router-link>

        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>

        <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="onTopBarMenuButton()">
            <i class="pi pi-ellipsis-v"></i>
        </button>

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <button @click="getFullScreen()" class="p-link layout-topbar-button">
                <FullScreen />
            </button>

            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-calendar"></i>
                <span>Calendar</span>
            </button>
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-user"></i>
                <span>Profile</span>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.p-dropdown {
    border: unset;
}
</style>
