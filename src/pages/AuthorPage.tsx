import { useParams } from 'react-router-dom'
import { Posts } from '../components';

import { useSelector } from 'react-redux';
import { RootState } from '../store';

const AuthorPage = () => {
  const { id } = useParams();
  const {posts} = useSelector((store: RootState)=>store.post)

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="max-w-3xl p-2 mx-auto flex justify-center items-center flex-col space-y-4">

        <div className="w-[30vw] h-auto mx-auto rounded-lg shadow-lg">
        <img src={`https://joeschmoe.io/api/v1/${'shubham'}`} alt="profile pic" />
        </div>

        <h3 className="text-2xl tracking-wide ">{'Shubham Agarwal'}</h3>
        <div>
          <p className="text-gray-700  text-center">Mobile: { '90900909'}</p>
          <div className="flex space-x-3 text-gray-700">
            <p>Likes: { 10 }</p>
            <p>Posts: { 20 }</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-2xl w-full py-2 rounded bg-slate-300 tracking-wider font-semibold  text-center  text-gray-700 underline">Posts</h3>
        <Posts title="" posts={posts} />
      </div>
    </div>
  )
}

export default AuthorPage