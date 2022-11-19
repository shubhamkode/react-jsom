
import { Route, Routes } from 'react-router-dom'
import { AuthorPage, AuthorsPage, HomePage, PostPage, PostsPage } from './pages'
import { Header, Footer} from './components'

const App = () => {
  return (
    <>
    <Header />
      <div className="mt-[10vh] sm:mt-[15vh] mb-5 container mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />}  />

        <Route path="/authors" element={<AuthorsPage />}  />
        <Route path="/author/:id" element={<AuthorPage />} />

        <Route path="/posts" element={<PostsPage />}  />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </div>
      <div className="mt-[8vh]">
        <Footer />
    </div>
  </>
  )
}

export default App