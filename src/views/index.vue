<script setup>
import { onMounted } from 'vue';

// import { useRouter } from 'vue-router';
// const router = useRouter();
// onMounted(() => {
//     router.push('/dashboard/home');
// });

onMounted(async () => {
    await Http.get('/products').then((res) => {
        console.log(res);
    });
});
</script>

<template>
    <div></div>
</template>
