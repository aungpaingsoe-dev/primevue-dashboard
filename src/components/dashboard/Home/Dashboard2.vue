<script setup>
import Hi5UsedRange from './charts/Hi5UsedRange.vue';
import Promotion from './charts/Promotion.vue';
import Demotion from './charts/Demotion.vue';
import ResignTermination from './charts/ResignTermination.vue';
</script>

<template>
    <div class="container-fluid card p-3">
        <div class="row">
            <div class="col-md-4">
                <div class="border rounded-5 border-dark p-5" style="height: 200px">
                    <div class="d-flex flex-column gap-5 h-100 justify-content-center">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="text-xl">25 Jan 2022</div>
                            <div>
                                <i class="pi pi-cloud" style="font-size: 40px"></i>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-column align-items-center gap-3">
                                <span class="text-success text-2xl"> 90% </span>
                                <span> Present </span>
                            </div>
                            <div class="d-flex flex-column align-items-center gap-3">
                                <span class="text-danger text-2xl"> 10% </span>
                                <span> Absent </span>
                            </div>
                            <div class="d-flex flex-column align-items-center gap-3">
                                <span class="text-primary-400 text-2xl"> 10% </span>
                                <span> Leave </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="border rounded-5 border-dark p-5" style="height: 200px">
                    <div class="d-flex flex-column gap-5 h-100 justify-content-center">
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="text-xl">25 Jan 2022</div>
                            <div>
                                <i class="pi pi-sun" style="font-size: 40px"></i>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-column align-items-center gap-3">
                                <span class="text-success text-2xl"> 90% </span>
                                <span> Present </span>
                            </div>
                            <div class="d-flex flex-column align-items-center gap-3">
                                <span class="text-danger text-2xl"> 10% </span>
                                <span> Absent </span>
                            </div>
                            <div class="d-flex flex-column align-items-center gap-3">
                                <span class="text-primary-400 text-2xl"> 10% </span>
                                <span> Leave </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="border rounded-5 border-dark p-5" style="height: 200px">
                    <div class="d-flex flex-column gap-5 h-100 justify-content-center">
                        <Hi5UsedRange />
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-md-4">
                <div class="border rounded-5 border-dark p-5" style="height: 200px">
                    <Promotion />
                </div>
            </div>
            <div class="col-md-4">
                <div class="border rounded-5 border-dark p-5" style="height: 200px">
                    <Demotion />
                </div>
            </div>
            <div class="col-md-4">
                <div class="border rounded-5 border-dark p-5" style="height: 200px">
                    <ResignTermination/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
