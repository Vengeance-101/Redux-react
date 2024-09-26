const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      // Check if the item already exists in the cart by its ID
      const itemExists = state.find((item) => item.id === action.payload.id);
      // console.log(itemExists);
      if (!itemExists) {
        state.push(action.payload);
      }
    },
    remove(state, action) {
      return state.filter((item) => {
        console.log("------------------------------------");
        console.log("Item ID:", item.id); // Logs the current item's id
        console.log("Action Payload:", action.payload); // Logs the action payload
        return item.id !== action.payload; // Keeps items where IDs don't match the payload
      });
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
