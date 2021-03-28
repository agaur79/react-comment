import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchComment = createAsyncThunk("comment", async (page) => {
  console.log('-page--', page);
  const response = await fetch(`http://localhost:4000/comment?page=${page}`);
  return await response.json();
});

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: { },
  extraReducers: {
    [fetchComment.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchComment.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...action.payload.data];
    },
    [fetchComment.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { userAdded } = commentSlice.actions;

export default commentSlice.reducer;