<template>
    <Chart type="bar" :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { ref, onMounted } from 'vue';

onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();
const props = defineProps({
    labels: {
        type: Array,
        default() {
            return  ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        }
    },
    datasets: {
        type: Array,
        default() {
           const documentStyle = getComputedStyle(document.documentElement);
            return[
            {
                label: 'My First dataset',
                backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                borderColor: documentStyle.getPropertyValue('--blue-500'),
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                borderColor: documentStyle.getPropertyValue('--pink-500'),
                data: [28, 48, 40, 19, 86, 27, 90]
            }
            ]
        }
    }
})
const setChartData = () => {

    return {
        labels: props.labels,
        datasets: props.datasets,
        barThickness: 6
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    // const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        // options: {
        //     aspectRatio: 2.8
        // },
        la: 90,
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                display: false,
                // labels: {
                //     fontColor: textColor
                // }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                },
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
};
</script>
