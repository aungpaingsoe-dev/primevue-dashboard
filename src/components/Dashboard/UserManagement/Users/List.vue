<script setup>
import { ref, onMounted } from 'vue';
const users = ref([]);
const loading = ref(true);

const getUsers = async () => {
    loading.value = true;
    await Http.get('/v1/users')
        .then((response) => {
            users.value = response.data;
            loading.value = false;
        })
        .catch((error) => {
            console.log(error);
            loading.value = false;
        });
};

const handleEditUser = (user) => {
    console.log(user);
};

const handleRejectUser = (user) => {
    console.log(user);
};

onMounted(() => {
    getUsers();
});
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <DataTable :loading="loading" :value="users" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
                    <Column field="id" sortable header="Id"></Column>
                    <Column field="name" sortable header="Name"></Column>
                    <Column field="email" sortable header="Email"></Column>
                    <Column header="Actions">
                        <template #body="slotProps">
                            <div class="btn-group btn-sm">
                                <button class="btn btn-outline-dark" @click="handleEditUser(slotProps.data)">Edit</button>
                                <button class="btn btn-outline-dark" @click="handleRejectUser(slotProps.data)">Reject</button>
                            </div>
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
