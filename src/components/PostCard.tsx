import React from 'react'
import { Link } from "react-router-dom";

interface IPostCardProps {
  post: any
}

const PostCard: React.FC<IPostCardProps> = ({post}) => {
  return (
    <Link to={`/post/${post.id}`}
      className="p-4 duration-300 hover:bg-slate-600 hover:text-slate-100 ease-in-out shadow-md rounded">
      <h2>{ post.title}</h2>
    </Link>
  )
}

export default PostCard