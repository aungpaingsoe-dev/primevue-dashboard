<template>
    <div class="container-fluid card p-3">
        <div class="row">
            <div class="col-md-4">
                <div class="border rounded-5 p-5 h-20rem">
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
                <div class="border rounded-5 p-5 h-20rem">
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
                <div class="border rounded-5 p-5 h-20rem">
                    <div class="d-flex flex-column gap-5 h-100 justify-content-center">
                        <BarChart />
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-md-4  h-20rem">
                <div class="border rounded-5 p-5 h-full">
                    <BarChart class="h-full"/>
                </div>
            </div>
            <div class="col-md-4 h-20rem">
                <div class="border rounded-5 p-5 h-full">
                    <BarChart class="h-full"/>
                </div>
            </div>
            <div class="col-md-4 h-20rem">
                <div class="border rounded-5 p-5 h-full ">
                    <BarChart class="h-full"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
