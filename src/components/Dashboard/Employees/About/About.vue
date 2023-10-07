<script setup>
const confirmationLabel = ['Jan', 'Feb', 'Mar'];
const confirmationDataset = [
{
                    label: 'SH',
                    data: [540],
                    backgroundColor: ['rgba(255, 255, 0, 0.5)'],
                    borderColor: ['rgb(255, 159, 64)']
                },
                {
                    label: 'DH',
                    data: [350],
                    backgroundColor: ['rgba(255, 159, 64, 0.2)'],
                    borderColor: ['rgb(255, 159, 64)']
                },
                {
                    label: 'GM/AGM',
                    data: [200],
                    backgroundColor: ['rgba(128, 0, 128, 0.5)'],
                    borderColor: ['rgb(255, 159, 64)']
                },
                {
                    label: 'Chief',
                    data: [300],
                    backgroundColor: ['rgba(0, 128, 0, 0.5)'],
                    borderColor: ['rgb(255, 159, 64)']
                }
]
const resignDataset = [
{
                    label: 'Resign',
                    data: [500],
                    backgroundColor: ['rgba(128, 0, 128, 0.5)'],
                    borderColor: ['rgb(255, 159, 64)']
                },
                {
                    label: 'Termination',
                    data: [300],
                    backgroundColor: ['red'],
                    borderColor: ['rgb(255, 159, 64)']
                }
]
</script>
<template>
    <div class="container-fluid card m-auto">
        <div class="row">
            <!---------------------------  CONFIRMATION -------------------------------------->
            <div class="col-4">
                <div class="border-1 p-5 rounded-3 vertical">
                    <h5>Confirmation</h5>
                    <BarChart class="h-full pb-4" :labels="confirmationLabel" :datasets="confirmationDataset"/>
                </div>
            </div>

            <!------------------------- INCREMENT ------------------>
            <div class="col-4">
                <div class="border-1 p-5 rounded-3 vertical">
                    <h5 >Increment</h5>
                    <BarChart class="h-full pb-4" :labels="confirmationLabel" :datasets="confirmationDataset"/>
                </div>
            </div>

                 <!------------------------- HI5 USEAGE RATE ------------------>
                 <div class="col-4">
                <div class="border-1 p-5 rounded-3 vertical">
                    <h5 >Hi 5 Useage Rate</h5>
                    <BarChart class="h-full pb-4" />
                </div>
            </div>
        </div>

        <div class="row">
            <!---------------------------  PROMOTION -------------------------------------->
            <div class="col-4">
                <div class="border-1 p-5 rounded-3 vertical">
                    <h5>Promotion</h5>
                    <BarChart class="h-full pb-4" :labels="confirmationLabel" :datasets="confirmationDataset"/>
                </div>
            </div>

            <!------------------------- Demotation ------------------>
            <div class="col-4">
                <div class="border-1 p-5 rounded-3 vertical">
                    <h5 >Demotation</h5>
                    <BarChart class="h-full pb-4" :labels="confirmationLabel" :datasets="confirmationDataset"/>
                </div>
            </div>

                 <!------------------------- Resign-Termination ------------------>
                 <div class="col-4">
                <div class="border-1 p-5 rounded-3 vertical">
                    <h5 >Resign-Termination</h5>
                    <BarChart class="h-full pb-4" :labels="label" :datasets="resignDataset"/>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.vertical {
    height: 35vh;
}
</style>
