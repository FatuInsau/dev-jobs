import { useState } from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { SearchPage } from "./pages/Search"
import { Home } from "./pages/Home"
import jobsData from "./data.json"

function App() {

  const [currentPage, setCurrentPage] = useState(1)
  const [textToFilter, setTextToFilter] = useState('')
  const [filters, setFilters] = useState({
    technology: '',
    location: '',
    experienceLevel: '',
  })

    // Búsqueda
  const handleSearch = (newFilters) => {
    setFilters({
      technology: newFilters.technology,
      location: newFilters.location,
      experienceLevel: newFilters.experienceLevel,
    })
    setTextToFilter(newFilters.search)
  }

  // Filtrar por los selects
  const jobsFilteredByFilters = jobsData.filter((job) => {
    return (
      (filters.technology === '' || job.data.technology === filters.technology) &&
      (filters.location === '' || job.data.modalidad === filters.location) &&
      (filters.experienceLevel === '' || job.data.nivel === filters.experienceLevel)
    )
  })

  // Filtrar por texto
  const jobsWithTextFilter =
    textToFilter === ''
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) => {
          return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
        })

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter)
    setCurrentPage(1)
  }

  // Paginación
    const RESULTS_PER_PAGE = 5

    const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE)
    const pagedResults = jobsWithTextFilter.slice(
        (currentPage - 1) * RESULTS_PER_PAGE, // inicio
        currentPage * RESULTS_PER_PAGE // fin (no incluido)
    )

    const pageValues = {
      totalPages: totalPages,
      currentPage: currentPage,
      setCurrentPage: setCurrentPage,
    }

  return (
    <>
    <Header></Header>
    <SearchPage empleos={pagedResults} onSearch={handleSearch} pageValues={pageValues} onTextFilter={handleTextFilter}></SearchPage>
    {/* <Home></Home> */}
    <Footer></Footer>
    </>
  )
}

export default App
