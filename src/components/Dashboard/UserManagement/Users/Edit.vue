<script setup>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const { handleSubmit, resetForm } = useForm();
const loading = ref(false);
const router = useRouter();
const route = useRoute();
const toast = useToast();

onMounted(async() => {
    await Http.get(`v1/users/${route.params.id}`)
    .then((response)=>{
        console.log(response)
        usernameValue.value = response.data.name;
        emailValue.value = response.data.email;
        rolesValue.value = response.data.roles
    })
})

// Username field
const { value: usernameValue, errorMessage: usernameErrorMessage } = useField('username', (value) => validateField(value, 'Username'));

// Email field
const { value: emailValue, errorMessage: emailErrorMessage } = useField('email', (value) => validateField(value, 'Email'));

// Roles field
const { value: rolesValue, errorMessage: rolesErrorMessage } = useField('roles', (value) => validateField(value, 'Roles'));

const roles = ref([
    {
        id: 1,
        name: 'admin'
    },
    {
        id: 2,
        name: 'user'
    }
]);

const validateField = (value, fieldName) => {
    if (!value) {
        return `${fieldName} is required.`;
    }
    return true;
};

const onSubmit = handleSubmit(async (values) => {
    loading.value = true;
    // Format Selected Roles Array From eg: [{ id : 1, name : 'admin' }] to [1]
    let assign_roles = [];
    for (let i = 0; i < values.roles.length; i++) {
        assign_roles.push(values.roles[i].id);
    }
    
    await Http.put(`/v1/users/${route.params.id}`, {
        name: values.username,
        email: values.email,
        roles: assign_roles
    })
        .then((response) => {
            toast.add({ severity: 'success', summary: 'Success', detail: `${response.message}`, life: 3000 });
            resetForm();
            router.push({ name: 'dashboard-user-management-users' });
        })
        .finally(() => {
            loading.value = false;
        });
});
</script>

<template>
    <div class="card">
        <div class="row">
            <div class="col-12 md:col-6">
                <div>
                    <form @submit="onSubmit" class="flex flex-column">
                        <!-- Username field -->
                        <div>
                            <label for="username" class="form-label">Username</label>
                            <InputText id="username" v-model="usernameValue" type="text" class="w-full" :class="{ 'p-invalid': usernameErrorMessage }" aria-describedby="username-error" placeholder="Enter your username" />
                            <small class="p-error" id="username-error">{{ usernameErrorMessage || '&nbsp;' }}</small>
                        </div>

                        <!-- Email field -->
                        <div>
                            <label for="email" class="form-label">Email</label>
                            <InputText id="email" v-model="emailValue" type="email" class="w-full" :class="{ 'p-invalid': emailErrorMessage }" aria-describedby="email-error" placeholder="Enter your email" />
                            <small class="p-error" id="email-error">{{ emailErrorMessage || '&nbsp;' }}</small>
                        </div>

                        <!-- Roles field -->
                        <div>
                            <label for="roles" class="form-label">Assign Roles</label>
                            <MultiSelect v-model="rolesValue" :options="roles" filter optionLabel="name" placeholder="Selected Roles" :maxSelectedLabels="3" aria-describedby="roles-error" class="w-full" />
                            <small class="p-error" id="roles-error">{{ rolesErrorMessage || '&nbsp;' }}</small>
                        </div>

                        <div class="text-end mt-4">
                            <Button type="submit" label="Submit" :disabled="loading" />
                        </div>
                    </form>
                    <Toast />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.p-password-input {
    width: 100% !important;
}
</style>
