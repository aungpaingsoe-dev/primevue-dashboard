<script setup>
import InternalVacancy from '../dashboard3/charts/InternalVacancy.vue'
import ExternalVacancy from '../dashboard3/charts/ExternalVacancy.vue'
import Confirmation from '../dashboard3/charts/Confirmation.vue'
import ProgramAchievement from '../dashboard3/charts/ProgramAchievement.vue'
import ProgramAssignment from '../dashboard3/charts/ProgramAssignment.vue'
</script>

<template>
    <div class="container-fluid card p-3">
        <div class="row">
            <div class="col-md-4">
                <div class="border rounded-5 border-dark p-5" style="height: 200px">
                    <div class="d-flex flex-column gap-5 h-100 justify-content-center">
                        <div class=" text-center">
                            VACANCY
                        </div>
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
                <div class="border rounded-5 border-dark p-5" style="height: 200px">
                    <div class="d-flex flex-column gap-5 h-100 justify-content-center">
                        <InternalVacancy/>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="border rounded-5 border-dark p-5" style="height: 200px">
                    <div class="d-flex flex-column gap-5 h-100 justify-content-center">
                        <ExternalVacancy/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-md-4">
                <div class="border rounded-5 border-dark p-5" style="height: 300px">
                    <Confirmation/>
                </div>
            </div>
            <div class="col-md-4">
                <div class="border rounded-5 border-dark p-5" style="height: 300px">
                    <ProgramAchievement/>
                </div>
            </div>
            <div class="col-md-4">
                <div class="border rounded-5 border-dark p-5" style="height: 300px">
                    <ProgramAssignment/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
