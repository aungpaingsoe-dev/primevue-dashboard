import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProgressStore = defineStore('progress', () => {
    const status = ref(false);

    const showProgress = (is_status = true, is_disable) => {
        if (is_disable) {
            status.value = is_status;
        }
    };

    return {
        status,
        showProgress
    };
});
