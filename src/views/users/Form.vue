<template>
    <div class="product-form">
        <div class="pb-3 text-center">
            <h1>User Infomation</h1>
            <router-link to="/user">Back to List</router-link>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-6 mx-auto">
                    <form @submit.prevent="save()">
                        <div class="mb-3">
                            <label for="user_name" class="form-label">User Name</label>
                            <input type="text" class="form-control" id="user_name">
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="number" class="form-control" id="email">
                        </div>
                        <div class="mb-3">
                            <label for="product_description" class="form-label">Product description</label>
                            <textarea class="form-control" id="product_description" rows="3"></textarea>
                        </div>
                        <div class="mb-3 float-end">
                            <button type="submit" class="btn btn-primary me-2">Save</button>
                            <button type="reset" class="btn btn-danger">Cannel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>