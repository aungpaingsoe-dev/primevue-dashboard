import BarChart from '@/components/Reusables/Charts/BarChart.vue';
import DoughnutChart from '@/components/Reusables/Charts/DoughnutChart.vue';
import HorizontalBarChart from '@/components/Reusables/Charts/HorizontalBarChart.vue';
import VerticalBarChart from '@/components/Reusables/Charts/VerticalBarChart.vue';
import LineChart from '@/components/Reusables/Charts/LineChart.vue';
import PieChart from '@/components/Reusables/Charts/PieChart.vue';
import PolorChart from '@/components/Reusables/Charts/PolarChart.vue';

export function chartComponents(app) {
    app.component('DoughnutChart', DoughnutChart);
    app.component('HorizontalBarChart', HorizontalBarChart);
    app.component('VerticalBarChart', VerticalBarChart);
    app.component('LineChart', LineChart);
    app.component('PieChart', PieChart);
    app.component('PolorChart', PolorChart);
    app.component('BarChart', BarChart);
}