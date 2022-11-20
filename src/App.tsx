
import { Route, Routes } from 'react-router-dom'
import { AuthorPage, AuthorsPage, AuthPage, DashBoardPage, HomePage, PostPage, PostsPage } from './pages'
import { Header, Footer } from './components'

const App = () => {
  return (
    <>
      <Header />
      <div className="mt-[15vh] mb-5">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/authors" element={<AuthorsPage />} />
          <Route path="/author/:id" element={<AuthorPage />} />

          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:id" element={<PostPage />} />

          <Route path="/auth/:kind" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
        </Routes>
      </div>
      {/* <div className="mt-[8vh]">
        <Footer />
      </div> */}
    </>
  )
}

export default App
