
<template>
    <div class="card">
        <div class="row">
            <div class="col-12 md:col-6">
                <div>
                    <form class="flex flex-column">
                        <!-- Role field -->
                        <div>
                            <label for="role" class="form-label">Role</label>
                            <InputText id="role" type="text" class="w-full" aria-describedby="role-error" placeholder="Enter your role" />
                        </div>

                        <!-- Permissions field -->
                        <div class="mt-3">
                            <label for="permissions" class="form-label">Assign Permissions</label>
                            <MultiSelect filter optionLabel="name" placeholder="Selected Permissions" :maxSelectedLabels="3" aria-describedby="permissions-error" class="w-full" />
                        </div>

                        <div class="text-end mt-4">
                            <Button type="submit" label="Submit"  />
                        </div>
                    </form>
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
