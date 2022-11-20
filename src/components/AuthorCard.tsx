import React from 'react'
import { Author } from '../models'
import { AiOutlineLike, AiOutlineRight } from 'react-icons/ai'

interface IAuthorCardProps {
  author: Author
}

const AuthorCard: React.FC<IAuthorCardProps> = ({ author }) => {
  return (
    <div className='w-full shadow-md rounded p-4 mt-5 hover:bg-slate-600 duration-300 hover:text-slate-200 group ease-in-out flex justify-between items-center'>
      <div className="flex space-x-4">
        <div className="w-20 p-3 h-auto rounded-full shadow-md">
          <img src={`https://joeschmoe.io/api/v1/${author.name}`} alt="profile pic" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">{author.name}</h3>
          <div className='flex'>
            <p className="relative top-[2px]">{author.likes}</p>
            <AiOutlineLike className='text-xl' />
          </div>
          <div className="group-hover:text-slate-300 text-slate-600 flex items-center space-x-4">
            <p className="text-sm">Posts: {author.posts.length}</p>
          </div>
        </div>
      </div>
      <AiOutlineRight className="text-2xl font-bold relative top-2" />
    </div>
  )
}

export default AuthorCard
