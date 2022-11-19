import { useParams } from 'react-router-dom'

const AuthorPage = () => {
  const { id } = useParams();

  return (
    <div>Author: {id} </div>
  )
}

export default AuthorPage