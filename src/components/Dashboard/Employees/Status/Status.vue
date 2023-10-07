<template>
    <div class="container-fluid card">
        <div class="row">
            <div class="col-lg-3 p-1">
                <div class=" d-flex justify-content-center flex-column align-items-center gap-3">
                    <div>Employee By Gender - Jan 22</div>
                    <div class=" d-flex justify-content-center ">
                        <div>
                            <img 
                            src="/images/dashboard/employee_man.png" 
                            style="height: 80px" 
                            alt="" />
                        </div>
                        <div>
                            <img 
                            src="/images/dashboard/employee_girl.png" 
                            style="height: 80px"
                            alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 p-1">
                <div class=" d-flex justify-content-center flex-column align-items-center gap-3">
                    <div>Active Employee</div>
                    <div class=" d-flex justify-content-center ">
                        <VerticalBarChart/>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 p-1">
                <div class=" d-flex justify-content-center flex-column align-items-center gap-3">
                    <div>Employee Status</div>
                    <div class=" d-flex justify-content-center ">
                        <HorizontalBarChart/>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 p-1">
                <div class=" d-flex justify-content-center flex-column align-items-center gap-3">
                    <div>Resign & Termination Employee</div>
                    <div class=" d-flex justify-content-center ">
                        <VerticalBarChart/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-lg-3 p-1">
                <div class=" d-flex justify-content-center flex-column align-items-center gap-3">
                    <div>Today Attendance Status</div>
                    <table class=" table table-borderless">
                        <tr>
                            <td>
                                icon
                            </td>
                            <td>Attendance - 2200</td>
                        </tr>
                        <tr>
                            <td>
                                icon
                            </td>
                            <td>Absenteeism - 70</td>
                        </tr>
                        <tr>
                            <td>
                                icon
                            </td>
                            <td>Leave - 89</td>
                        </tr>
                        <tr>
                            <td>
                                icon
                            </td>
                            <td>Late - 120</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="col-lg-4 p-1">
                <div class=" d-flex justify-content-center flex-column align-items-center gap-3">
                    <div>Active Employee</div>
                    <div class=" d-flex justify-content-center ">
                        <VerticalBarChart/>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 p-1">
                <div class=" d-flex justify-content-center flex-column align-items-center gap-3">
                    <div>Resign & Termination Employee</div>
                    <div class=" d-flex justify-content-center ">
                        <VerticalBarChart/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
