import { Link, useParams } from "react-router-dom"

const post = {
      id: "1",
      title: "Magna do consequat et irure ipsum nulla labore.",
      content:
        "Eiusmod aliquip sunt ipsum occaecat adipisicing. Veniam Lorem culpa sit do anim mollit elit ullamco labore ea non. Eiusmod consequat adipisicing Lorem non. Ad mollit ut ipsum consequat officia deserunt enim irure minim.",
      date: "30/9/2019",
      authorId: 1,
    }

const PostPage = () => {
  const { id } = useParams();

  return (
    <div className="space-y-8 px-5 sm:px-2 max-w-5xl mx-auto">
      <div className="w-full bg-gray-200 rounded flex justify-center items-center flex-col py-3">
        <h3 className="text-3xl text-center font-light text-slate-800 px-2 py-4">{post.title}</h3>
        <div className="flex justify-around w-full items-center text-sm text-gray-600">
          <p className="">{post.date}</p>
          <Link to="/author/1" className="rounded text-xl text-emerald-900 cursor-pointer capitalize hover:underline hover:underline-offset-4 duration-300 ease-in-out">Shubham Agarwal</Link>
        </div>
      </div>
      <div>
        <p className="text-xl text-center">{post.content}</p>
      </div>
      <div className="w-full flex justify-end space-x-3 items-center">
        <button className="px-6 py-2 bg-blue-500 rounded text-white">Like</button>
        <button className="px-6 py-2 bg-black    rounded text-white">Dislike</button>
      </div>
    </div>
  )
}

export default PostPage