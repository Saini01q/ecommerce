import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const productthunk = createAsyncThunk("product", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

const productslice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    totalquantity: 0,
    totalprice: 0,
    addedproducts: [],
    searchProduct:[]
  },
  reducers: {
    addtocart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.addedproducts.find((item) => item.id === newItem.id);

      if (existingItem) {

        existingItem.quantity++;
        state.totalprice += existingItem.price;
      } else {

        state.addedproducts.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          image: newItem.image
        });
        state.totalprice += newItem.price;
        state.totalquantity++;
      }
    },
    handleremoveitem: (state, action) => {
      const id = action.payload;
      const itemIndex = state.addedproducts.findIndex((item) => item.id === id);

      if (itemIndex !== -1) {
        const item = state.addedproducts[itemIndex];
        state.totalprice -= item.price * item.quantity;
        state.addedproducts.splice(itemIndex, 1);
        state.totalquantity--;
      }
    },
    handleIncreaseItem: (state, action) => {
      const id = action.payload;
      const findIndex = state.addedproducts.find((item) => item.id === id);

      if (findIndex) {

        findIndex.quantity++;

        state.totalprice += findIndex.price;

        state.totalquantity++;

      }
    },

    handledecreaseItem: (state, action) => {

      const id = action.payload;
      const findIndex = state.addedproducts.find((item) => item.id === id);


      if (findIndex && findIndex.quantity > 1) {

        findIndex.quantity--;

        state.totalprice -= findIndex.price;


      }
    },
    handleSearchProduct: (state, action)=>{
      const query = action.payload;
      state.searchProduct = state. products. filter((i)=>i. title.toLowerCase().includes(query.toLowerCase()));
     },


  },
  extraReducers: (builder) => {
    builder.addCase(productthunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(productthunk.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(productthunk.rejected, (state) => {
      state.loading = true;
    });
  },
});

export const { addtocart, handleremoveitem, handleIncreaseItem, handledecreaseItem,handleSearchProduct } = productslice.actions;
export default productslice.reducer;
