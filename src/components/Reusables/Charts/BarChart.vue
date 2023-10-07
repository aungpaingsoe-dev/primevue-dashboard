<template>
    <Chart type="bar" :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    labels: {
        type: Array,
        default() {
            return ['Q1', 'Q2', 'Q3', 'Q4'];
        }
    },
    datasets: {
        type: Array,
        default() {
            return [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)']
                }
            ];
        }
    }
});
const chartData = ref({
    labels: props.labels,
    datasets: props.datasets.map(datasetItem => ({
        ...datasetItem, // Copy the existing dataset properties
        barPercentage: 1, // Set the desired barPercentage value
      })),
});
const chartOptions = ref({
    scales: {
        x: {
            grid: {
                drawOnChartArea: false,
            }
        },
        y: {
            grid: {
                drawOnChartArea: false,
            },
            beginAtZero: true
        }
    },
    maintainAspectRatio: false
});
</script>
