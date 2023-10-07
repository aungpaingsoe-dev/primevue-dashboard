<script setup>
import DollarIcon from '@/components/Reusables/Icons/Dollar.vue';
const label = ['Tp Management', 'General', 'Assistant', 'Senior Developer', 'Department', 'Section', 'Staff', 'ot'];

const data = [
    {
        label: 'Sales',
        data: [540, 325, 702, 620, 400, 100, 210, 700],
        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)']
    }
];
</script>
<template>
    <div class="card container-fluid">
        <div class="row">
            <div class="col-7">
                <h3 class="text-center font-bold">Level of total salary</h3>
                <BarChart :labels="label" :datasets="data" />
            </div>
            <div class="col-3 m-4">
                <div class="p-5 d-flex justify-content-center align-items-center border-1 dollarBox">
                    <DollarIcon class="me-3" />
                    <p class="">400</p>
                </div>
            </div>
        </div>
        <div class="mt-5 row">
            <div class="horizontalBar col-7">
                <h3 class="text-center font-bold">Number of salary manpower (MMK)</h3>
                <HorizontalBarChart class="h-full pb-4" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.dollarBox {
    height: 150px;
    border-radius: 30px;
}
.dollarBox p {
    font-size: 30px;
    font-weight: bold;
}
.horizontalBar {
    height: 380px;
}
</style>
