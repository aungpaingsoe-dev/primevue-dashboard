<script setup>
import { ref } from 'vue';

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
            <div class="w-25 border">
                <div class="px-1 py-1 rounded-3">
                    <table class="table table-borderless">
                        <tbody>
                            <tr>
                                <td>Position</td>
                                <td>- ITDP</td>
                            </tr>
                            <tr>
                                <td>Service Year</td>
                                <td>- 3 year</td>
                            </tr>
                            <tr>
                                <td>Business Unit</td>
                                <td>- CHLD</td>
                            </tr>
                            <tr>
                                <td>Department</td>
                                <td>- QASA</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>- Active</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="w-25 border">
                <div class="p-3 rounded-3 d-flex flex-column align-items-center gap-1">
                    <img src="/public/images/dashboard/employee_girl.png" class="employee-img" alt="" />
                    <div>Employee Name</div>
                    <div>ID - 19274</div>
                    <a href="#">Profile Detail</a>
                </div>
            </div>
            <div class="w-25 border">
                <div class="px-2 rounded-3 py-3 d-flex flex-column align-items-center gap-2">
                    <div class="fw-bold">Employee Type</div>
                    <div class="d-flex gap-2 w-100 disc">
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
            <div class="w-25 border">
                <div class="px-2 rounded-3 py-5 d-flex align-items-center gap-3">
                    <div>
                        <img src="../../../../../public/images/dashboard/award.png" class="award-img" alt="" />
                    </div>
                    <div>Best Project Owner awards of 2021</div>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="w-25 border">
                <div class="rounded-3">
                    <div class="py-3">
                        <Timeline :value="events">
                            <template #opposite="slotProps">
                                <small class="p-text-secondary">{{ slotProps.item.position }}</small>
                            </template>
                            <template #content="slotProps">
                                {{ slotProps.item.date }}
                            </template>
                        </Timeline>
                    </div>
                </div>
            </div>
            <div class="w-25 p-1 ">
                <div class="rounded-3 border ">
                    <div class="px-1 py-1 rounded-3">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>Laptop</td>
                                    <td>
                                        icon
                                    </td>
                                </tr>
                                <tr>
                                    <td>Car </td>
                                    <td>icon</td>
                                </tr>
                                <tr>
                                    <td>Hotel</td>
                                    <td>icon</td>
                                </tr>
                                <tr>
                                    <td>Sim Card</td>
                                    <td>icon</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="rounded-3 border">
                    <div class="px-1 py-1 rounded-3">
                        Attendance
                    </div>
                </div>
                <div class="rounded-3 border">
                    <div class="px-1 py-1 rounded-3">
                        Warning
                    </div>
                </div>
            </div>
            <div class="w-25 p-1">
                <div>
                    
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
