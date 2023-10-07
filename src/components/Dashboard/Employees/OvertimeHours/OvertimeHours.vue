<script setup>
import { ref } from 'vue';
const label = ['Hlaing Thar Yar', 'NaungOo', 'Naunglaypin', 'Tarchilake', 'Bamouk', 'TaungOo', 'Hlaing Thar Yar', 'NaungOo', 'Naunglaypin', 'Tarchilake', 'Bamouk', 'TaungOo'];
const documentStyle = getComputedStyle(document.documentElement);

const dataset = [
    {
        //             label: 'Bago',
        backgroundColor: documentStyle.getPropertyValue('--blue-500'),
        borderColor: documentStyle.getPropertyValue('--blue-500'),
        data: [0, 100000, 200000, 300000, 2000, 230000, 400000, 100000]
    }
];
let scrollHeight = ref(0);
if (label.length > 7) {
    scrollHeight.value = 500 + (label.length - 7) * 20;
}

//LiNE CHART
const datasetLine = [
    {
        label: 'monthly',
        data: [65, 59, 80, 81, 56, 55, 50, 56, 55, 50, 56, 55],
        fill: false,
        borderColor: documentStyle.getPropertyValue('--blue-500'),
        // tension: 0
    }
];
</script>

<template>
    <div class="m-auto card container-fluid">
        <div class="row">
            <div class="col-5">
                <h3 class="text-center font-bold pb-2">Overtime Cost by Monthly</h3>
                <div class="box">
                    <div :style="{ height: `${scrollHeight}px` }">
                        <HorizontalBarChart :datasets="dataset" :labels="label" class="h-full" />
                    </div>
                </div>
            </div>
            <div class="col-7">
                <h3 class="text-center">Overtime Cost by Monthly</h3>
                <div class="lineBox">
                    <LineChart class="h-full" :datasets="datasetLine" />
                </div>

                <div class="row pt-3 horizontalBox">
                    <div class="col-6 ">
                        <HorizontalBarChart class="h-full" :datasets="dataset" />
                    </div>
                    <div class="col-6">
                        <LineChart class="h-full"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.box {
    height: 80vh;
    max-height: 70vh;
    overflow-y: auto;
}
.lineBox {
    height: 35vh;
    max-height: 25vh;
}
.horizontalBox{
    height: 40vh;
}
</style>
