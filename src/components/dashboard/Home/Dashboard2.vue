<script setup>
import EmployeeType from './charts/EmployeeType.vue';
import EmployeeStatus from './charts/EmployeeStatus.vue';
import FemaleMale from './charts/FemaleMale.vue';
</script>

<template>
    <div class="container-fluid card p-3">
        <div class="d-flex gap-1">
            <div class="w-full">
                <div class="border mx-1 border-dark rounded-4 p-4 d-flex align-items-center gap-4">
                    <div>
                        <i class="pi pi-user" style="font-size: 2.5rem"></i>
                    </div>
                    <div>
                        <div class="h5">Total</div>
                        <div class="h3">2789</div>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div class="border mx-1 border-dark rounded-4 p-4 d-flex align-items-center gap-4">
                    <div>
                        <i class="pi pi-user" style="font-size: 2.5rem"></i>
                    </div>
                    <div>
                        <div class="h5">Total</div>
                        <div class="h3">2789</div>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div class="border mx-1 border-dark rounded-4 p-4 d-flex align-items-center gap-4">
                    <div>
                        <i class="pi pi-user" style="font-size: 2.5rem"></i>
                    </div>
                    <div>
                        <div class="h5">Total</div>
                        <div class="h3">2789</div>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div class="border mx-1 border-dark rounded-4 p-4 d-flex align-items-center gap-4">
                    <div>
                        <i class="pi pi-user" style="font-size: 2.5rem"></i>
                    </div>
                    <div>
                        <div class="h5">Total</div>
                        <div class="h3">2789</div>
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div class="border mx-1 border-dark rounded-4 p-4 d-flex align-items-center gap-4">
                    <div>
                        <i class="pi pi-user" style="font-size: 2.5rem"></i>
                    </div>
                    <div>
                        <div class="h5">Total</div>
                        <div class="h3">2789</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex my-3 row">
            <div class="employeeType">
                <div class="border border-dark rounded-4 p-4">
                    <EmployeeType/>
                </div>
            </div>
            <div class="employeeStatus">
                <div class="border border-dark rounded-4 p-4">
                    <EmployeeStatus/>
                </div>
            </div>
            <div class="femaleMale">
                <div class="border border-dark rounded-4 p-4">
                    <FemaleMale />
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.employeeType {
    width: 40%;
}
.employeeStatus {
    width: 30%;
}
.femaleMale {
    width: 30%;
}
.employeeStatus .card, .femaleMale .card {
    padding: unset !important;
}
</style>
