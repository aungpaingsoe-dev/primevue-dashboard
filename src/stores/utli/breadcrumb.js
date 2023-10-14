import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBreadCrumbStore = defineStore('breadcrumb', () => {
    const items = ref([]);

    const setItems = (payload) => {
        items.value = payload;
    };

    return {
        items,
        setItems
    };
});
