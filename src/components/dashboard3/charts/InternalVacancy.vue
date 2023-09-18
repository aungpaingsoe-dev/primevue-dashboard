<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" style="height:250px" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const chartData = ref({
    labels: ['Q1', 'Q2', 'Q3'],
    datasets: [
        {
            label: 'Sales',
            data: [540, 325, 702],
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)',],
            borderWidth: 1
        }
    ]
});
const chartOptions = ref({
    scales: {
        y: {
            beginAtZero: true
        }
    }
});
</script>