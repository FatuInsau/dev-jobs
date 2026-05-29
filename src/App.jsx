import { Routes, Route } from 'react-router'
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { SearchPage } from "./pages/Search"
import { Home } from "./pages/Home"
import { NotFoundPage } from "./pages/NotFoundPage"
import { useFilters } from '../src/hooks/useFilters'
import { useEffect } from 'react'

function App() {

  const {
        loading,
        jobs,
        total,
        handlePageChange,
        handleSearch,
        handleTextFilter,
        pageValues
    } = useFilters()

    useEffect(() => {
      document.title= `Resultado: ${total}, Página ${pageValues.currentPage} - DevJobs`
    }, [total, pageValues.currentPage])

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage empleos={jobs} onSearch={handleSearch} pageValues={pageValues} onTextFilter={handleTextFilter} loading={loading} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
