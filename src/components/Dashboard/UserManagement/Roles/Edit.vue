<script setup>
import { onMounted, ref } from "vue";
import { useToast } from 'primevue/usetoast';
import { useField, useForm } from 'vee-validate';
import { useRouter, useRoute } from 'vue-router';

const toast = useToast();
const { handleSubmit, resetForm } = useForm();
const router = useRouter();
const route = useRoute();
const loading = ref(true);
let permissions = ref([]);

const { value: roleName, errorMessage: roleErrorMessage } = useField('roleName', (value) => validateField(value, 'roleName'));

const { value: permissionNames, errorMessage: permissionErrorMessage} = useField('permissions', (value) => validateField(value, 'permissions'));

const validateField = (value, fieldName) => {
    if (!value) {
        return `${fieldName} is required.`;
    }
    return true;
};

const getPermissions = async () => {
    loading.value = true;
    await Http.get('/v1/permissions')
        .then((response) => {
            permissions.value = response.data;
            loading.value = false;
        })
        .catch((error) => {
            console.log(error);
            loading.value = false;
        });
};
const onSubmit = handleSubmit(async (values) => {
    loading.value = true;
    await Http.put(`/v1/roles/${route.params.id}`, {
        name: values.roleName,
        permissions: values.permissions.map((permission) => {return permission.id})
    } ).then((response) => {
        toast.add({ severity: 'success', summary: 'Success', detail: `${response.message}`, life: 3000 });
        resetForm();
        router.push({ name: 'dashboard-user-management-roles' });
    }).finally(() => {
        loading.value = false;
    })
});
onMounted(async() => {
    await getPermissions();
    await Http.get(`v1/roles/${route.params.id}`)
    .then((response)=>{
        roleName.value = response.data.name;
        permissionNames.value = response.data.permissions;
    })
})
onMounted(() => {
    getPermissions();
})
</script>
<template>
    <div class="card">
        <div class="row">
            <div class="col-12 md:col-6">
                <div>
                    <form class="flex flex-column" @submit="onSubmit">
                        <!-- Role field -->
                        <div>
                            <label for="role" class="form-label">Role</label>
                            <InputText id="role" type="text" class="w-full" 
                            v-model="roleName"
                            :class="{ 'p-invalid': roleErrorMessage }" 
                            aria-describedby="role-error" placeholder="Enter your role" />
                            <small class="p-error" id="role-error">{{ roleErrorMessage || '&nbsp;' }}</small>
                        </div>

                        <!-- Permissions field -->
                        <div class="mt-3">
                            <label for="permissions" class="form-label">Assign Permissions</label>
                            <MultiSelect filter optionLabel="name" 
                            v-model="permissionNames"
                            placeholder="Selected Permissions" 
                            :class="{'p-invalid': permissionErrorMessage }" 
                            :maxSelectedLabels="3" 
                            :options="permissions"
                            aria-describedby="permissions-error" class="w-full" />
                            <small class="p-error" id="permission-error">
                                {{  permissionErrorMessage || '&nbsp;' }}
                            </small>
                        </div>

                        <div class="text-end mt-4">
                            <Button type="submit" label="Submit" :disabled="loading" />
                        </div>
                    </form>
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
