import Author from "./authorModel";

export default  interface Post{
    id: string,
    title: string,
    content: string,
    date: string,
    authorId: number
}