import React from 'react'
import PostCard from './PostCard'

interface IPostsProps{
  title: string
  posts: any[]
}

const Posts: React.FC<IPostsProps> = ({title,posts}) => {
  return (
    <>
      <h2 className="text-2xl p-3 font-semibold tracking-widest text-slate-500 underline underline-offset-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </>
  )
}

export default Posts