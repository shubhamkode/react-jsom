import { Authors } from '../components'
import { useSelector } from 'react-redux'
import { RootState } from '../store'



const AuthorsPage = () => {
    const authors = useSelector((store: RootState) =>store.author.authors)

  return (
      <div className="mt-5 p-4 max-w-5xl mx-auto">
          <Authors authors={authors} /> 
      </div>
  )
}

export default AuthorsPage