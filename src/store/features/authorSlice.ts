import { createSlice } from "@reduxjs/toolkit";
import { Author } from "../../models";

interface InitialState {
  authors: Author[];
}
const initialState: InitialState = {
  authors: [
    {
      id: "1",
      name: "Dana Koloskvi",
      mobile: 92328043,
      likes: 0,
      posts: [1, 2, 3, 4],
    },
    {
      id: "2",
      name: "Dana Koloskvi",
      mobile: 92328043,
      likes: 0,
      posts: [1, 2, 3, 4],
    },
    {
      id: "3",
      name: "Dana Koloskvi",
      mobile: 92328043,
      likes: 0,
      posts: [1, 2, 3, 4],
    },
    {
      id: "4",
      name: "Dana Koloskvi",
      mobile: 92328043,
      likes: 0,
      posts: [1, 2, 3, 4],
    },
  ],
};

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
});

export default authorSlice.reducer;
export const { } = authorSlice.actions;