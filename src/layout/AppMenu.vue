<script setup>
import { ref } from 'vue';
import menus from '../core/menus';
import AppMenuItem from './AppMenuItem.vue';

const model = ref([...menus]);
</script>

<template>
    <ul class="layout-menu">
        <div class="layout-menu-title">
            <h4 class="text-primary fw-bold d-flex gap-3"><i class="pi pi-th-large" style="font-size: 2rem"></i> Admin Panel</h4>
        </div>
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
