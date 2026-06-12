import { lazy, Suspense, useState } from 'react'
import { Routes, Route } from 'react-router'

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

const Home = lazy(()=> import("./pages/Home"))
const SearchPage = lazy(()=> import("./pages/Search"))
const NotFoundPage = lazy(()=> import("./pages/NotFoundPage"))
const JobDetail = lazy(()=> import("./pages/JobDetail"))

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <>
    <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout}/>
    <Suspense fallback={<div style={{maxWidth: '1280px', margin:'0 auto', padding: '1rem'}}><p style={{margin:'0 auto', padding: '2rem'}}>
      Cargando...
    </p></div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path='/jobs/:jobId' element={<JobDetail isLoggedIn={isLoggedIn}/>}/>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer></Footer>
    </Suspense>
    </>
  )
}

export default App
