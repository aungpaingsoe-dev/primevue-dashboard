<script setup>
const label = ['Tp Management', 'General', 'Assistant', 'Senior Developer' , 'Department', 'Section', 'Staff', 'ot'];
const data = [540, 325, 702, 620,400,100,210, 700]
</script>
<template>
               <div>
                              <div class="row">
                                             <div class="col-8">
                                                            <BarChart :label="label" :data="data"/>
                                             </div>
                                             <div class="col-3">
                                                           <div class=" ">
                                                            400
                                                           </div>
                                             </div>
                              </div>
               </div>
</template>