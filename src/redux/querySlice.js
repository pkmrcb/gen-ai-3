import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queries: [],
  currentQuery: "",
  results: null,
  loading: false,
  error: null,
};

const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.currentQuery = action.payload;
    },
    submitQuery(state) {
      state.loading = true;
      state.error = null;
    },
    querySuccess(state, action) {
      state.loading = false;
      state.results = action.payload;
      state.queries.unshift(state.currentQuery);
      state.currentQuery = "";
    },
    queryError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setQuery, submitQuery, querySuccess, queryError } = querySlice.actions;
export default querySlice.reducer;
