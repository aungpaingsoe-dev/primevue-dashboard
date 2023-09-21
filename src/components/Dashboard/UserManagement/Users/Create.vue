<script setup>
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const { handleSubmit, resetForm } = useForm();
const loading = ref(false);
const router = useRouter();
const toast = useToast();

// Username field
const { value: usernameValue, errorMessage: usernameErrorMessage } = useField('username', (value) => validateField(value, 'Username'));

// Email field
const { value: emailValue, errorMessage: emailErrorMessage } = useField('email', (value) => validateField(value, 'Email'));

// Password field
const { value: passwordValue, errorMessage: passwordErrorMessage } = useField('password', (value) => validateField(value, 'Password'));

// Password Confrimation field
const { value: passwordConfirmationValue, errorMessage: passwordConfirmationErrorMessage } = useField('password_confirmation', (value) => validateField(value, 'Password Confirmation'));

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
    for(let i = 0; i < values.roles.length; i++ ){
        assign_roles.push(values.roles[i].id);
    }
    await Http.post('/v1/users', {
        name: values.username,
        email: values.email,
        password: values.password,
        password_confirmation: values.password_confirmation,
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

                        <!-- Password field -->
                        <div>
                            <label for="password" class="form-label">Password</label>
                            <Password id="password" v-model="passwordValue" :class="{ 'p-invalid': passwordErrorMessage }" aria-describedby="password-error" class="w-full" placeholder="Enter your password" toggleMask />
                            <small class="p-error" id="password-error">{{ passwordErrorMessage || '&nbsp;' }}</small>
                        </div>

                        <!-- Password Confirmation field -->
                        <div>
                            <label for="password_confirmation" class="form-label">Password Confirmation</label>
                            <Password
                                id="password_confirmation"
                                v-model="passwordConfirmationValue"
                                :class="{ 'p-invalid': passwordConfirmationErrorMessage }"
                                aria-describedby="password-error"
                                class="w-full"
                                placeholder="Enter your confirmation"
                                toggleMask
                            />
                            <small class="p-error" id="password-error">{{ passwordConfirmationErrorMessage || '&nbsp;' }}</small>
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
