
<template>
    <div class="card">
        <div class="row">
            <div class="col-12 md:col-6">
                <div>
                    <form class="flex flex-column">
                        <!-- Permissions field -->
                        <div>
                            <label for="permissions" class="form-label">Permissions</label>
                            <InputText id="permission" type="text" class="w-full" aria-describedby="permission-error" placeholder="Enter your permission" />
                        </div>

                        <!-- Roles field -->
                        <div class="mt-3">
                            <label for="roles" class="form-label">Assign Roles</label>
                            <MultiSelect filter optionLabel="name" placeholder="Selected Roles" :maxSelectedLabels="3" aria-describedby="roles-error" class="w-full" />
                        </div>

                        <div class="text-end mt-4">
                            <Button type="submit" label="Submit"  />
                        </div>
                    </form>
                    <Toast />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.p-password-input {
    width: 100% !important;
}
</style>
