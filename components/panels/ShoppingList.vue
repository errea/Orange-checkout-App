<template>
<form class="">
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 dark:bg-gray-50 px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">3 Items</h2>
        </div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
    <tr v-for="(item, index) in itemsList" :key="index">
    <td>
      <span v-show="!item.inEditMode">{{ item.itemName }}</span>
      <input v-show="item.inEditMode" v-model="item.itemName" :placeholder="item.itemName"/>
    </td>

    <td>
      <span v-show="!item.inEditMode">{{ item.itemQuantity }}</span>
      <input v-show="item.inEditMode" v-model="item.itemQuantity" type="number" :placeholder="item.quantity" /> 
    </td>
     <td>
      <span v-show="!item.inEditMode">{{ item.itemColor }}</span>
      <input v-show="item.inEditMode" v-model="item.itemColor" :placeholder="item.itemColor"/>
    </td>
     <td>
      <span v-show="!item.inEditMode">{{ item.itemCategory }}</span>
      <input v-show="item.inEditMode" v-model="item.itemCategory" :placeholder="item.itemCategory"/>
    </td>

    <td>
      <button v-show="item.inEditMode" type="button" class="" @click="editItemComplete(item)"> Save  </button>
      <button v-show="!item.inEditMode" type="button" class="" @click="editItem(item)"  > Edit  </button>
      <button type="button" class="btn btn-danger" @click="removeItem(index)"> Delete  </button>
    </td>
  </tr>
        
        </tbody>
    </table>
</div>
<div class="mt-6 mb-4"><h4>Add new item</h4></div>
<div class="col">
              <div class="">
                Name
                <input v-model="itemName" type="text" class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-1/2 px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none">
              </div>
              <div class="col-md-6 form-group">
                Quantity
                <input v-model="itemQuantity" type="number" min="0" class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-1/2 px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none">
              </div>
              <div class="col-md-6 form-group">
                Color
                <input v-model="itemColor" type="text" class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-1/2 px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none">
              </div>
              <div class="col-md-6 form-group">
                Category
                <input v-model="itemCategory" type="text" class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-1/2 px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none">
              </div>
                <div class="mt-2">
                    <button type="button" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" @click="addItem" > Add  </button>
                </div>
              </div>
    </div>
    

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Items 3</span>
          <span class="font-semibold text-sm">590$</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input id="promo" type="text" placeholder="Enter your code" class="p-2 text-sm w-full">
        </div>
        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
          <NuxtLink to="/user/stepper">
              <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</form>

</template> 

<script>

export default {
  name: 'ShoppingList',
   components: {
  },
    data () {
        return {
          user:'',
          itemQuantity:'',
          itemName:'',
          itemColor:'',
          itemCategory:'',
          itemsList: [ 
                    {
                      itemQuantity: 3,
                      itemName: "Apples",
                      itemColor:"Red",
                      itemCategory:"Laptop",
                      inEditMode: false
                    },
                    {
                      itemQuantity: 6,
                      itemName: "Pears",
                      itemColor:"Blue",
                      itemCategory:"Fruit",
                      inEditMode: false
                      
                    }],
                    inEditMode: false,
         }
    },
    mounted () {
      if(sessionStorage.activeUser) {
        const activeUser = sessionStorage.activeUser;
        this.user = JSON.parse(activeUser);
      }
    },
    methods: {
                addItem (){
                      const quantityIN = this.itemQuantity;
                      const colorIN = this.itemColor;
                      const categoryIN = this.itemCategory;
                      const itemNameIN = this.itemName.trim();
                      this.itemsList.push({ 
                        itemQuantity: quantityIN,
                        itemName: itemNameIN,
                        itemColor: colorIN,
                        itemCategory: categoryIN,
                        inEditMode: false
                      });
                      this.clearAll();
                  },
                  clearItemQuantity () {
                      this.itemQuantity = '';
                  },
                  clearItemName () {
                      this.itemName = '';
                  },
                  clearItemColor () {
                      this.itemColor = '';
                  },
                  clearItemCategory () {
                      this.itemCategory = '';
                  },
                  clearAll () {
                    this.clearItemQuantity();
                    this.clearItemName();
                    this.clearItemColor();
                    this.clearItemCategory();
                  },
                  removeItem (index){
                      this.itemsList.splice(index, 1);
                  },
                  editItem (item){
                      item.inEditMode = true;
                  },
                  editItemComplete (item) {
                      item.inEditMode = false;
                  }
    }
}
</script>

<style>
/* .nuxt-logo {
  height: 180px;
} */
</style>