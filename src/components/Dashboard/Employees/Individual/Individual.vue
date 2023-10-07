<script setup>
import { ref } from 'vue';
const documentStyle = getComputedStyle(document.documentElement);

const events = ref([
    { date: '15/10/2020', position: 'CHLD HRD Dept', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
    { date: '15/10/2020', position: 'COURSIA System Management', icon: 'pi pi-cog', color: '#673AB7' },
    { date: '15/10/2020', position: 'CHLD Digital Dept', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { date: '16/10/2020', position: 'CHLD BPOC Dept', icon: 'pi pi-check', color: '#607D8B' },
    { date: '15/10/2020', position: 'CHLD Digital Dept', icon: 'pi pi-cog', color: '#673AB7' },
    { date: '15/10/2020', position: 'CIO Quality Assurance Dept', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { date: '16/10/2020', position: 'CHID Orientation & Inclass', icon: 'pi pi-check', color: '#607D8B' }
]);
</script>

<template>
    <div class="container-fluid card">
        <div class="row">
            <!-- Postion Detail -->
            <div class="col-lg-3 p-0 border">
                <table class="table table-borderless align-middle">
                    <tr>
                        <td>Position</td>
                        <td>-</td>
                        <td>ITDP</td>
                    </tr>
                    <tr>
                        <td>Service Year</td>
                        <td>-</td>
                        <td>3 year</td>
                    </tr>
                    <tr>
                        <td>Business Unit</td>
                        <td>-</td>
                        <td>CHLD</td>
                    </tr>
                    <tr>
                        <td>Department</td>
                        <td>-</td>
                        <td>QASA</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>-</td>
                        <td>Active</td>
                    </tr>
                </table>
            </div>
            <!-- Profile -->
            <div class="col-lg-3 p-0 border">
                <div class="d-flex flex-column justify-content-center h-100 align-items-center gap-1">
                    <img src="/public/images/dashboard/employee_girl.png" class="employee-img" alt="" />
                    <div>Employee Name</div>
                    <div>ID - 19274</div>
                    <a href="#">Profile Detail</a>
                </div>
            </div>
            <!-- Employee Type -->
            <div class="col-lg-3 p-0 border">
                <div class="d-flex flex-column justify-content-center align-items-center gap-3 h-100">
                    <div class="fw-bold">Employee Type</div>
                    <div class="d-flex justify-content-center gap-2 w-100 disc">
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <div class="disc-title">D</div>
                            <span class="disc-desc">Dominant</span>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <div class="disc-title">C</div>
                            <span class="disc-desc">Compliance</span>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <div class="disc-title">I</div>
                            <span class="disc-desc">Influence</span>
                        </div>
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <div class="disc-title">S</div>
                            <span class="disc-desc">Steadiness</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Award -->
            <div class="col-lg-3 p-0 border">
                <div class="d-flex flex-column justify-content-center align-items-center h-100 gap-3">
                    <img src="/public/images/dashboard/award.png" class="award-img" alt="" />
                    <div>Best Project Owner awards of 2021</div>
                </div>
            </div>
            <!-- Career History -->
            <div class="col-lg-3 p-0 border">
                <div class="fw-bold text-center py-3">Providing Employee Service</div>
                <Timeline :value="events">
                    <template #opposite="slotProps">
                        <small class="p-text-secondary">{{ slotProps.item.position }}</small>
                    </template>
                    <template #content="slotProps">
                        {{ slotProps.item.date }}
                    </template>
                </Timeline>
            </div>
            <!-- Employee Service -->
            <div class="col-lg-3 p-0 border">
                <div class="p-2 border-bottom">
                    <div class="fw-bold text-center py-2">Providing Employee Service</div>
                    <div class="d-flex flex-column gap-2">
                        <div class="d-flex justify-content-between">
                            <div>Laptop</div>
                            <div>no</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div>Car</div>
                            <div>no</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div>Hotel</div>
                            <div>no</div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div>Sim Card</div>
                            <div>no</div>
                        </div>
                    </div>
                </div>

                <div class="p-2 border-top border-bottom">
                    <div class="fw-bold text-center py-2">Attendance</div>
                    <DoughnutChart />
                </div>

                <div class="p-2 border-top">
                    <div class="fw-bold text-center py-2">Providing Employee Service</div>
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td>Vrabel Warning</td>
                                <td>yes</td>
                            </tr>
                            <tr>
                                <td>Written Warning</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Final Warning</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- PA result -->
            <div class="col-lg-3 p-0 border">
                <div class="border-bottom">
                    <div class="fw-bold text-center py-3">Providing Employee Service</div>
                    <HorizontalBarChart
                        :labels="['Meet Expection', 'So So', 'Excellence', 'Poor', 'Exceed Expection']"
                        :datasets="[
                            {
                                label: 'My First dataset',
                                backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                                borderColor: documentStyle.getPropertyValue('--blue-500'),
                                data: [1, 2, 3, 4, 5]
                            }
                        ]"
                    />
                </div>
                <div class="d-flex flex-column gap-2 p-3 border-top">
                    <div class="fw-bold text-center py-2">Recommend By PA result</div>
                    <div class="d-flex justify-content-between">
                        <div>Training Recommend</div>
                        <div>no</div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>Talent Recommend</div>
                        <div>no</div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>Promotion Recommend</div>
                        <div>no</div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>Transfer Recommend</div>
                        <div>no</div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>Demotion Recommend</div>
                        <div>no</div>
                    </div>
                </div>
            </div>
            <!-- Attendance -->
            <div class="col-lg-3 p-0 border">
                <div class=" border-bottom p-3">
                    <LineChart
                        :labels="['Staff', 'Sr.Staff', 'Section Head']"
                        :datasets="[
                            {
                                label: 'First Dataset',
                                data: [1, 2, 5],
                                fill: false,
                                borderColor: documentStyle.getPropertyValue('--blue-500'),
                                tension: 0.4
                            }
                        ]"
                    />
                </div>
                <div class=" border-top">
                    <div class="fw-bold text-center py-3">
                        Attendance of Training
                    </div>
                    <DoughnutChart />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.w-30 {
    width: 30%;
}

.w-20 {
    width: 20%;
}

.w-25 {
    width: 25%;
}

.employee-img {
    width: 50px;
}

.disc-title {
    width: 40px;
    height: 40px;
    max-width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    font-weight: bold;
}

.disc-desc {
    font-size: 10px;
    overflow: hidden;
}

.award-img {
    height: 50px;
}
</style>
