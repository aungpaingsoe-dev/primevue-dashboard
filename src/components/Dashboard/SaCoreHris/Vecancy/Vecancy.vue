<template>
    <div class="container-fluid card p-3">
        <div class="row">
            <div class="col-md-4">
                <div class="border rounded-5 p-5" style="height: 200px">
                    <div class="d-flex flex-column gap-5 h-100 justify-content-center">
                        <div class="text-center">VACANCY</div>
                        <div class="d-flex justify-content-around">
                            <div class="d-flex flex-column align-items-center gap-3">
                                <span class="text-2xl"> 20 </span>
                                <span> Internal </span>
                            </div>
                            <div class="d-flex flex-column align-items-center gap-3">
                                <span class="text-2xl"> 40 </span>
                                <span> External </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="border rounded-5 p-5" style="height: 200px">
                    <div class="d-flex flex-column gap-5 h-100 justify-content-center">
                        <BarChart />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="border rounded-5 p-5" style="height: 200px">
                    <div class="d-flex flex-column gap-5 h-100 justify-content-center">
                        <BarChart />
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-md-4">
                <div class="border rounded-5 p-5" style="height: 300px">
                    <BarChart />
                </div>
            </div>
            <div class="col-md-4">
                <div class="border rounded-5 p-5" style="height: 300px">
                    <DoughnutChart />
                </div>
            </div>
            <div class="col-md-4">
                <div class="border rounded-5 p-5" style="height: 300px">
                    <DoughnutChart />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
