<template>
    <div class="product-form">
        <div class="pb-3 text-center">
            <h1>Product management</h1>
            <router-link to="/product">Back to List</router-link>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-6 mx-auto">
                    <form @submit.prevent="save()">
                        <div class="mb-3">
                            <label for="product_name" class="form-label">Product Name</label>
                            <input type="text" class="form-control" id="product_name">
                        </div>

                        <div class="mb-3">
                            <label for="product_price" class="form-label">Product price</label>
                            <input type="number" class="form-control" id="product_price">
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