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

const handleEditPermission = (permission) => {
    console.log(permission);
};

onMounted(() => {
    getPermissions();
});
</script>

<template>
    <div class="card">
        <div class="text-end">
            <router-link to="/dashboard/user-management/permissions/create">
                <Button icon="pi pi-plus" severity="secondary" outlined size="small" />
            </router-link>
        </div>
        <div class="row">
            <div class="col-12">
                <DataTable :loading="loading" :value="permissions" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
                    <Column field="id" sortable header="Id"></Column>
                    <Column field="name" sortable header="Name"></Column>
                    <Column header="Actions">
                        <template #body="slotProps">
                            <Button icon="pi pi-pencil" severity="secondary" outlined size="small" @click="handleEditPermission(slotProps.data)" />
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
