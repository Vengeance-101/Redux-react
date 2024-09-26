import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loadiing",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.state = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

// thunk

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  const data = await res.data;
  return data;
});

// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await axios.get("https://fakestoreapi.com/products");
//       dispatch(setProducts(res.data));
//       console.log(res.data);
//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       console.error("Error fetching products:", error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
