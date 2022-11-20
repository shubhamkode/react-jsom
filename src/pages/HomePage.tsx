import { Posts } from '../components';
import { useSelector } from 'react-redux'
import { RootState } from '../store';

const HomePage = () => {

  const posts =  useSelector((store: RootState) => store.post.posts)

  return (
    <div className="p-3 mt-2 w-full max-w-5xl mx-auto">
      <Posts title=
        "Recent Posts"
        posts={posts} />
    </div>
  )
}

export default HomePage;