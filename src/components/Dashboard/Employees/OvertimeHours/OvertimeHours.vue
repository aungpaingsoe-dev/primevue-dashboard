<script setup>
const label= ['Hlaing Thar Yar', 'NaungOo', 'Naunglaypin', 'Tarchilake', 'Bamouk', 'TaungOo', 'Naypyitaw', 'Bago', 'NaungOo', 'Naunglaypin', 'Tarchilake', 'Bamouk', 'TaungOo', 'Naypyitaw', 'Bago'];
const documentStyle = getComputedStyle(document.documentElement);
const dataset = [
        {
//             label: 'Bago',
            backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            data: [0, 100000, 200000, 300000, 2000, 230000, 400000, 100000]
        }
    ];
</script>

<template>
              <div class=" m-auto card container-fluid">
              <div class="row"> 
               <div class="col-5 ">
                              <div class="vertical">
                              <HorizontalBarChart :dataset="dataset" class="h-full" :label="label"/>
                              </div>
               </div>
               <div class="col-7">
                              helooo
               </div>
              </div>
              </div>
</template>
<style scoped>
.vertical {
               height: 500px;
               overflow-y: auto;
               background-clip: green;
}
</style>