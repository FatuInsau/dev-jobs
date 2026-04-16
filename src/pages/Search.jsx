import { useState } from "react"
import { JobList } from "../components/JobList"
import { Pagination } from "../components/Pagination"


export function SearchPage({ empleos }) {

    const [ currentPage, setCurrentPage] = useState(1)

    const RESULTS_PER_PAGE = 5

    const totalPages = Math.ceil(empleos.length / RESULTS_PER_PAGE)

    const pagedResults = empleos.slice(
        (currentPage - 1) * RESULTS_PER_PAGE, // inicio
        currentPage * RESULTS_PER_PAGE // fin (no incluido)
    )

    return (
        <main className="main-search-page">
            <section>
                <h1> Encuentra tu próximo trabajo</h1>
                <p>Explora miles de oportunidades en el sector tecnológico.</p>
                <form role="search">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                            <path d="M21 21l-6 -6" />
                        </svg>

                        <input type="text" placeholder="Buscar trabajos, empresas o habilidades" />

                        <button>✖︎</button>
                    </div>
                    <div>
                        <select name="" id="">
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
                        <select name="" id="">
                            <option value="">Ubicación</option>
                            <option value="remoto">Remoto</option>
                            <option value="cdmx">Ciudad de México</option>
                            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="barcelona">Barcelona</option>
                        </select>
                        <select name="" id="">
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
                <JobList empleos={pagedResults}></JobList>
                
            </section>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage}></Pagination>
        </main>
    )
}