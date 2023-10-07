<template>
    <Chart type="line" :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    labels: {
        type: Array,
        default() {
            return ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        }
    },
    datasets: {
        type: Array,
        default() {
            const documentStyle = getComputedStyle(document.documentElement);
            return [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ];
        }
    }
});

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
    return {
        labels: props.labels,
        datasets: props.datasets
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawOnChartArea: false,
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    drawOnChartArea: false,
                    color: surfaceBorder
                }
            }
        }
    };
};
</script>
