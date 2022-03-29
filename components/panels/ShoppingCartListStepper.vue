<template>
<form class="">
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-full dark:bg-gray-50 px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart List</h1>
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
<div class="mt-6 mb-4 font-semibold text-2xl"><h4>Add new item to Shopping List </h4></div>
<div class="col">
              <div class="font-semibold">
                Name
                <input v-model="itemName" type="text" class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-1/2 px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none">
              </div>
              <div class="font-semibold mt-6">
                Quantity
                <input v-model="itemQuantity" type="number" min="0" class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-1/2 px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none">
              </div>
              <div class="font-semibold mt-6">
                Color
                <input v-model="itemColor" type="text" class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-1/2 px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none">
              </div>
              <div class="font-semibold mt-6">
                Category
                <input v-model="itemCategory" type="text" class="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-1/2 px-3 py-2 border border-transparent shadow ring-1 sm:text-sm focus:border-teal-500 focus:ring-teal-500 focus:outline-none">
              </div>
                <div class="mt-4">
                    <button type="button" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" @click="addItem" > Add  </button>
                </div>
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