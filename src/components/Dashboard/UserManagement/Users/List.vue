<script setup>
import { ref, onMounted } from 'vue';
const users = ref([]);

const getUsers = async () => {
    await Http.get('/v1/user')
        .then((response) => {
            users.value = response.data;
        })
        .catch((error) => {
            console.log(error);
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
                <DataTable :value="users" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
                    <Column field="id" sortable header="Id"></Column>
                    <Column field="name" sortable header="Name"></Column>
                    <Column field="email" sortable header="Email"></Column>
                    <template #empty> No customers found. </template>
                    <template #loading> Loading customers data. Please wait. </template>
                    <Column header="Actions">
                        <template #body="slotProps">
                            <div class="btn-group btn-sm">
                                <button class="btn btn-outline-dark" @click="handleEditUser(slotProps.data)">Edit</button>
                                <button class="btn btn-outline-dark" @click="handleRejectUser(slotProps.data)">Reject</button>
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>
