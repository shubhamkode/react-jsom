import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../models";

interface InitialState {
  posts: Post[];
}

const initialState: InitialState = {
  posts: [
    {
      id: "1",
      title: "Magna do consequat et irure ipsum nulla labore.",
      content:
        "Eiusmod aliquip sunt ipsum occaecat adipisicing. Veniam Lorem culpa sit do anim mollit elit ullamco labore ea non. Eiusmod consequat adipisicing Lorem non. Ad mollit ut ipsum consequat officia deserunt enim irure minim.",
      date: "30/9/2019",
      authorId: 1,
    },
    {
      id: "2",
      title: "Magna do consequat et irure ipsum nulla labore.",
      content:
        "Eiusmod aliquip sunt ipsum occaecat adipisicing. Veniam Lorem culpa sit do anim mollit elit ullamco labore ea non. Eiusmod consequat adipisicing Lorem non. Ad mollit ut ipsum consequat officia deserunt enim irure minim.",
      date: "30/9/2019",
      authorId: 1,
    },
    {
      id: "3",
      title: "Magna do consequat et irure ipsum nulla labore.",
      content:
        "Eiusmod aliquip sunt ipsum occaecat adipisicing. Veniam Lorem culpa sit do anim mollit elit ullamco labore ea non. Eiusmod consequat adipisicing Lorem non. Ad mollit ut ipsum consequat officia deserunt enim irure minim.",
      date: "30/9/2019",
      authorId: 1,
    },
    {
      id: "4",
      title: "Magna do consequat et irure ipsum nulla labore.",
      content:
        "Eiusmod aliquip sunt ipsum occaecat adipisicing. Veniam Lorem culpa sit do anim mollit elit ullamco labore ea non. Eiusmod consequat adipisicing Lorem non. Ad mollit ut ipsum consequat officia deserunt enim irure minim.",
      date: "30/9/2019",
      authorId: 1,
    },
    {
      id: "5",
      title: "Magna do consequat et irure ipsum nulla labore.",
      content:
        "Eiusmod aliquip sunt ipsum occaecat adipisicing. Veniam Lorem culpa sit do anim mollit elit ullamco labore ea non. Eiusmod consequat adipisicing Lorem non. Ad mollit ut ipsum consequat officia deserunt enim irure minim.",
      date: "30/9/2019",
      authorId: 1,
    },
  ],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});


export default postSlice.reducer;
export const { } = postSlice.actions;