<script setup>
import { ref, onMounted } from 'vue';
const permissions = ref([]);
const loading = ref(true);

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

const handleEditRole = (permission) => {
    console.log(permission);
};

const handleDeleteRole = (permission) => {
    console.log(permission);
};

onMounted(() => {
    getPermissions();
});
</script>

<template>
    <div class="card container">
        <div class="text-end me-2 my-2">
            <router-link to="/dashboard/user-management/permissions/create">
                <button class="btn btn-primary btn-lg">
                    Add
                </button>
            </router-link>
        </div>
        <div class="row">
            <div class="col-12">
                <DataTable :loading="loading" :value="permissions" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
                    <Column field="id" sortable header="Id"></Column>
                    <Column field="name" sortable header="Name"></Column>
                    <Column header="Actions">
                        <template #body="slotProps">
                            <div class="btn-group btn-sm">
                                <button class="btn btn-outline-dark" @click="handleEditRole(slotProps.data)">Edit</button>
                                <button class="btn btn-outline-dark" @click="handleDeleteRole(slotProps.data)">Delete</button>
                            </div>
                        </template>
                    </Column>
                    <Column>
                        <template #empty> No roles found. </template>
                        <template #loading> Loading roles data. Please wait. </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>
