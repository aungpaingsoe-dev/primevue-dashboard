<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { FilterMatchMode, FilterOperator } from 'primevue/api';

const router = useRouter();
const users = ref([]);
const loading = ref(true);
const filters = ref();
const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    };
};
initFilters();
const getUsers = async () => {
    loading.value = true;
    await Http.get('/v1/users')
        .then((response) => {
            users.value = response.data;
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            loading.value = false;
        });
};

const handleEditUser = (user) => {
    console.log(user);
    router.push({
        name: 'dashboard-user-management-users-edit',
        params: {
            id: user.id
        }
    });
};

onMounted(() => {
    getUsers();
});
</script>

<template>
    <div class="card container">
        <div class="row">
            <div class="col-12">
                <DataTable :loading="loading" :value="users" paginator v-model:filters="filters" :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem" :globalFilterFields="['name', 'email']" filterDisplay="menu">
                        <div class="flex justify-content-between mb-4">
                            <!-- <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" /> -->
                            <span class="p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText placeholder="Keyword Search" v-model="filters['global'].value" />
                            </span>
                            <div>
                                <router-link to="/dashboard/user-management/create">
                                    <button class="btn btn-primary text-lg">Add</button>
                                </router-link>
                            </div>
                        </div>
                    <template #empty> <p class="text-center">No Users found. </p></template>
                    <!-- <template #loading> Loading customers data. Please wait. </template> -->

                    <Column field="id" sortable header="Id"></Column>
                    <Column field="name" sortable header="Name"></Column>
                    <Column field="email" sortable header="Email"></Column>
                    <Column field="roles" header="Roles" :sortable="true">
                        <template #body="slotProps">
                            <span v-for="role in slotProps.data.roles" :key="role.id">
                                <Badge class="ms-1" :value="role.name"></Badge>
                            </span>
                        </template>
                    </Column>
                    <Column field="created_at" sortable header="Created At"></Column>
                    <Column header="Actions">
                        <template #body="slotProps">
                            <span class="p-buttonset">
                                <Button icon="pi pi-pencil" severity="secondary" outlined size="small" @click="handleEditUser(slotProps.data)" />
                            </span>
                        </template>
                    </Column>
                    <Column>
                        <template #empty> No users found. </template>
                        <template #loading> Loading users data. Please wait. </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>
