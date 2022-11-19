import Post from "./postModel";

export default interface Author{
    id: string,
    name: string,
    mobile: number,
    likes: number
    posts:  number[]
}