<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useProgressStore } from '@/stores/utli/progress';

const progressStore = useProgressStore();
const router = useRouter();
const route = useRoute();
const roles = ref([]);
const loading = ref(true);

const getRoles = async () => {
    loading.value = true;
    progressStore.disabled = false;
    await Http.get('/v1/roles')
        .then((response) => {
            roles.value = response.data;
            loading.value = false;
            progressStore.disabled = true;
        })
        .catch((error) => {
            console.log(error);
            loading.value = false;
        });
};

const handleEditRole = (role) => {
    console.log(role);
    router.push({
        name: 'dashboard-user-management-roles-edit',
        params: {
            id: role.id
        }
    });
};

const handleDeleteRole = (role) => {
    console.log(role);
};

onMounted(() => {
    getRoles();
});
</script>

<template>
    <div class="card container">
        <div class="text-end me-2 my-2">
            <router-link to="/dashboard/user-management/roles/create">
                <Button icon="pi pi-plus" severity="secondary" outlined size="small" />
            </router-link>
        </div>
        <div class="row">
            <div class="col-12">
                <DataTable :loading="loading" :value="roles" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
                    <Column field="id" sortable header="Id"></Column>
                    <Column field="name" sortable header="Name"></Column>
                    <Column header="Actions">
                        <template #body="slotProps">
                            <Button icon="pi pi-pencil" severity="secondary" outlined size="small" @click="handleEditRole(slotProps.data)" />
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
