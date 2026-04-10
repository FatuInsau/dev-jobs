import { JobCard } from "../components/JobCard"

export function SearchPage() {

    const empleos = [
        {
            id: 1,
            titulo: 'Desarrollador Frontend',
            empresa: 'Tech Solutions Inc.',
            ubicacion: 'Remoto',
            descripcion: 'Buscamos un desarrollador frontend con experiencia en React.',
        },
        {
            id: 2,
            titulo: 'Ingeniero Backend',
            empresa: 'Data Systems',
            ubicacion: 'Madrid',
            descripcion: 'Experiencia con Node.js y bases de datos.',
        },
        {
            id: 3,
            titulo: 'Full Stack Developer',
            empresa: 'StartupCo',
            ubicacion: 'Barcelona',
            descripcion: 'Desarrollo completo de aplicaciones web.',
        },
    ]

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
            <section>
                <h2>Resultados de búsqueda</h2>
                {empleos.map((empleo) => {
                    return (
                        <JobCard empleo={empleo} key={empleo.id} ></JobCard>
                    )
                })}
            </section>
        </main>
    )
}