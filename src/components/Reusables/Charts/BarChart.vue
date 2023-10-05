<template>
    <Chart type="bar" :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    label: {
        type: Array,
        default() {
            return ['Q1', 'Q2', 'Q3', 'Q4'];
        }
    },
    data: {
        type: Array,
        default() {
            return [540, 325, 702, 620];
        }
    }
});
console.log(props)
const chartData = ref({
    labels:  props.label,
    datasets: [
        {
            label: 'Sales',
            data: props.data,
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
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
