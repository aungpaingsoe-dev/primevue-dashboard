<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth.js';

const authStore = useAuthStore();
const email = ref(null);
const password = ref(null);

const handleLogin = async () => {
    await authStore.login(email.value, password.value);
};
</script>

<template>
    <div class="container-fluid">
        <div class="row vh-100">
            <div class="col-lg-6 bg-primary"></div>
            <div class="col-lg-6">

                <div class="col-lg-8 mx-auto">
                    <form @submit.prevent="handleLogin" class="d-flex flex-column justify-content-center vh-100 gap-3">
                        <div>
                            <h2 class="m-0">Login Here</h2>
                        </div>
                        <div class="">
                            <label for="email">Email</label>
                            <InputText type="text" id="email" v-model="email" placeholder="Enter your email" class="w-100" />
                        </div>
                        <div>
                            <label for="password">Password</label>
                            <Password v-model="password" placeholder="Enter your password" toggleMask :feedback="false" class="w-100" />
                        </div>
                        <div class="text-end">
                            <Button type="submit" label="Submit" class=" w-100" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>
