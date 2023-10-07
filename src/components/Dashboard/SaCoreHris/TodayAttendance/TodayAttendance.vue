<script setup>
const label = ['Attendance', 'Leave', 'Late', 'Absent'];
const documentStyle = getComputedStyle(document.documentElement);
const dataset = {
    dataset1: [
        {
//             label: 'Bago',
            backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            data: [60, 30, 20, 32]
        }
    ],
    dataset2: [
        {
//             label: 'Bago',
            backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            data: [60, 30, 20, 32]
        }
    ],
    dataset3: [
        {
//             label: 'Bago',
            backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            data: [60, 30, 20, 32]
        }
    ],
};
</script>
<template>
               <div class="container-fluid card m-auto ">
                              
    <div class="row ">
        <div class="col-4 attendance" >
               <h4 class="text-center font-bold">Bago Todays Attendance List</h4>
            <HorizontalBarChart :datasets="dataset.dataset1" :labels="label" class="h-full pb-4"/>
        </div>

        <div class="col-4 attendance" >
               <h4 class="text-center font-bold">CE1 Todays Attendance List</h4>
            <HorizontalBarChart :datasets="dataset.dataset2" :labels="label" class="h-full pb-4"/>
        </div>

        <div class="col-4 attendance" >
               <h4 class="text-center font-bold">Dawei Todays Attendance List</h4>
            <HorizontalBarChart :datasets="dataset.dataset3" :labels="label" class="h-full pb-4"/>
        </div>

    </div>
               </div>
</template>
<style scoped>
.attendance{
               height: 360px;
}
</style>