import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

const Home = lazy(()=> import("./pages/Home"))
const SearchPage = lazy(()=> import("./pages/Search"))
const NotFoundPage = lazy(()=> import("./pages/NotFoundPage"))
const JobDetail = lazy(()=> import("./pages/JobDetail"))

function App() {

  return (
    <>
    <Header />
    <Suspense fallback={<div style={{maxWidth: '1280px', margin:'0 auto', padding: '1rem'}}><p style={{margin:'0 auto', padding: '2rem'}}>
      Cargando...
    </p></div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path='/jobs/:jobId' element={<JobDetail />}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
    </Suspense>
    </>
  )
}

export default App
