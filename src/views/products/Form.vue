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
              <input
                type="text"
                class="form-control"
                id="product_name"
                v-model="product.name"
                @blur="validate()"
                v-bind:class="{ 'is-invalid': errors.name }"
              />
              <div class="invalid-feedback" v-if="errors.name">
                {{ errors.name }}
              </div>
            </div>

            <div class="mb-3">
              <label for="product_price" class="form-label"
                >Product price</label
              >
              <input
                type="number"
                class="form-control"
                id="product_price"
                v-model="product.price"
                @blur="validate()"
                v-bind:class="{ 'is-invalid': errors.price }"
              />
              <div class="invalid-feedback" v-if="errors.price">
                {{ errors.price }}
              </div>
            </div>
            <div class="mb-3">
              <label for="product_description" class="form-label"
                >Product description</label
              >
              <textarea
                class="form-control"
                id="product_description"
                rows="3"
                v-model="product.description"
                @blur="validate()"
                v-bind:class="{ 'is-invalid': errors.description }"
              ></textarea>

              <div class="invalid-feedback" v-if="errors.description">
                {{ errors.description }}
              </div>
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

<script>
export default {
  name: "ProductForm",
  data() {
    return {
      product: {
        name: "",
        price: 0,
        description: "",
      },
      errors: {
        name: "",
        price: "",
        description: "",
      },
    };
  },
  methods: {
    validate() {
      let isValid = true;
      this.errors = {
        name: "",
        price: "",
        description: "",
      };
      if (!this.product.name) {
        this.errors.name = "Product name is required";
        isValid = false;
      }
      if (!this.product.price) {
        this.errors.price = "Product price is required";
        isValid = false;
      } else if (!this.isNumber(this.product.price)) {
        this.errors.price = "Product price must be number";
        isValid = false;
      }
      if (!this.product.description) {
        this.errors.description = "Product description is required";
        isValid = false;
      }
      return isValid;
    },
    isNumber(value) {
      return /^\d*$/.test(value);
    },
    save() {
		if(this.validate()) {
			console.log('call api');
	  }
    },
  },
};
</script>
