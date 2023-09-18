<script setup>
// import EmployeeType from './charts/EmployeeType.vue';
// import EmployeeStatus from './charts/EmployeeStatus.vue';
// import FemaleMale from './charts/FemaleMale.vue';
// import ServiceYear from './charts/ServiceYear.vue';
// import YearManPower from './charts/YearManPower.vue';
import InternalVacancy from './charts/InternalVacancy.vue';
import 'primeicons/primeicons.css';
</script>

<template>
    <div class="container-fluid card p-3">
        <div class="d-flex my-3 row">
            <div class="employeeType" >
                <div class="border border-dark rounded-4 p-4">
                    <div class="text-center">
                        <i class="pi pi-briefcase" style="font-size: 2rem"></i>
                    </div>
                    <div class="d-flex justify-content-center mt-2">
                        <div class="text-center">
                            <p class="fs-4">20</p>
                            <p>Internal</p>
                        </div>
                        <div class="ms-5 text-center">
                            <p class="fs-4">20</p>
                            <p>External</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="internalVacancy">
                <div class="border border-dark rounded-4 p-4">
                    <InternalVacancy/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.employeeType {
    width: 40%;
}
.internalVacancy {
    width: 40%;
}
/* .femaleMale,
.yearlyManPower {
    width: 30%;
} */
.internalVacancy .card,
.femaleMale .card,
.serviceYear .card,
.yearlyManPower .card {
    padding: unset !important;
}
</style>
