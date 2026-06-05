import { useSearchForm } from "../hooks/useSearchForm" 
import { JobList } from "../components/JobList"
import { Pagination } from "../components/Pagination"
import { useId, useRef } from 'react'
import { useFilters } from "../hooks/useFilters"

export function SearchPage() {

    const idText = useId()
    const idTechnology = useId()
    const idLocation = useId()
    const idExperienceLevel = useId()
    const inputRef = useRef()

    const { loading, total,  pageValues, jobs, handleTextFilter, handleSearch } = useFilters()

    const onTextFilter = handleTextFilter
    const onSearch = handleSearch

    const { handleSubmit, handleTextChange } = useSearchForm({ idText, idTechnology, idLocation, idExperienceLevel, onSearch, onTextFilter})

    const title = loading ? 'Cargando...' : total === 0 ? 'No se encontraron resultados' : `Resultado: ${total}, Página ${pageValues.currentPage} - DevJobs`

    const handleClearInput = (event) => {
        event.preventDefault()
        inputRef.current.value=''
        onTextFilter('')
    }

    return (
        <main className="main-search-page">
            <title>{title}</title>
            <section>
                <h1> Encuentra tu próximo trabajo</h1>
                <p>Explora miles de oportunidades en el sector tecnológico.</p>
                <form role="search" onChange={handleSubmit}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>

                        <input type="text" ref={inputRef} name={idText} placeholder="Buscar trabajos, empresas o habilidades" onChange={handleTextChange}/>
                        <button onClick={handleClearInput}>
           ✖︎
          </button>
                    </div>
                    <div>
                        <select name={idTechnology} id={idTechnology}>
                            <option value="">Tecnología</option>
                            <optgroup label="Tecnologías Populares">
                                <option value="javascript">JavaScript</option>
                                <option value="python">Python</option>
                                <option value="react">React</option>
                                <option value="nodejs">Node.js</option>
                            </optgroup>
                            <option value="java">Java</option>
                            <hr />
                            <option value="csharp">C#</option>
                            <option value="c">C</option>
                            <option value="c++">C++</option>
                            <hr />
                            <option value="ruby">Ruby</option>
                            <option value="php">PHP</option>
                        </select>
                        <select name={idLocation} id={idLocation}>
                            <option value="">Ubicación</option>
                            <option value="remoto">Remoto</option>
                            <option value="cdmx">Ciudad de México</option>
                            <option value="guadalajara">Guadalajara</option>
                            <option value="monterrey">Monterrey</option>
                            <option value="barcelona">Barcelona</option>
                        </select>
                        <select name={idExperienceLevel} id={idExperienceLevel}>
                            <option value="">Nivel de experiencia</option>
                            <option value="junior">Junior</option>
                            <option value="mid">Mid-level</option>
                            <option value="senior">Senior</option>
                            <option value="lead">Lead</option>
                        </select>
                    </div>
                </form>
            </section>
            <section
                className="search-result-section">
                <h2>Resultados de búsqueda</h2>
                { loading ? <p>Cargando empleos...</p> : null}
                <JobList empleos={jobs}></JobList>

            </section>
            <Pagination currentPage = {pageValues.currentPage} totalPages = {pageValues.totalPages} onPageChange= {pageValues.setCurrentPage}></Pagination>
        </main>
    )
}