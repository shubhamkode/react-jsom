import { useSelector } from 'react-redux';
import { Posts } from '../components';
import { RootState } from '../store';

const PostsPage = () => {
  const { posts } = useSelector((store: RootState) => store.post)

  return (
    <div className="max-w-5xl mx-auto">
      <Posts title="Latest Posts" posts={posts} />
    </div>
  )
}

export default PostsPage
