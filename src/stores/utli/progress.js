import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProgressStore = defineStore('progress', () => {
    const status = ref(false);
    const disabled = ref(true);
    const showProgress = (is_status = true, is_disable = disabled) => {
        if (is_disable) {
            status.value = is_status;
        }
    };

    return {
        status,
        disabled,
        showProgress
    };
});
