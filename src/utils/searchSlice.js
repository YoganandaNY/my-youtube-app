import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    // {"ip": ["iphone", "iphone11"]}
    cacheResults: (state, action) => {
      // state = Object.assign(state, action.payload);

      // you need to ensure that you either mutate the state argument or return a new state, but not both
      return { ...state, ...action.payload };
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
