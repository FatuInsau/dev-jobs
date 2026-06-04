import { Routes, Route } from 'react-router'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { SearchPage } from "./pages/Search"
import { Home } from "./pages/Home"
import { NotFoundPage } from "./pages/NotFoundPage"

function App() {

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
