import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { useRouter } from "../hooks/useRouter"
import { Link } from '../components/Link'
import snarkdown from "snarkdown"
import styles from '../style/Detail.module.css'

function JobSection ({ title, content }) {
    const html = snarkdown(content)

    return (
        <section>
            <h2>
                {title}
            </h2>
            <div dangerouslySetInnerHTML={{
                __html:html
            }}/>
        </section>
    )
}

export default function JobDetail ({ isLoggedIn }) {
    const { jobId } = useParams()
    const { navigateTo } = useRouter()

    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`)
        .then(res => {
            if(!res.ok) throw new Error('Surgió un Error')
            return res.json()
        })
        .then(json => {
            setJob(json)
        })
        .catch(err => {
            setError(err.message)
        })
        .finally(() => {
            setLoading(false)
        })
    },[jobId])

    if (loading) {
        return (<div className={styles.loading}>
            <p>Cargando...</p>
        </div>)
    }

    if (error || !job) {
        return (
            <div className={styles.error}>
                <h2>
                    Oferta no encontrada.
                </h2>
                <p>Puede que esta oferta haya caducado o que la URL no sea correcta.</p>
                <button onClick={() => {navigateTo('/')}}>
                    Volver al inicio
                </button>
            </div>
        )
    }

    return (
        <div className={styles.jobDetail}>
            <title>{job.titulo}</title>
            <div>
                <nav>
                    <Link href='/search'>
                    Empleos</Link>
                    <span className={styles.separador}>/</span>
                    <span>{job.titulo}</span>
                </nav>
            </div>
            <header className={styles.header}>
                <h1>
                    {job.titulo}
                </h1>
                <p>{job.empresa}· {job.ubicacion}</p>
            </header>

            <button disabled={!isLoggedIn} className={styles.applyButton}>
                {isLoggedIn ? 'Aplicar ahora' : 'Inicia sesión para poder aplicar'}
            </button>

            <JobSection title='Descripción del puesto' content={job.content.description} />
            <JobSection title='Responsabilidades' content={job.content.responsibilities} />
            <JobSection title='Requisitos' content={job.content.requirements} />
            <JobSection title='Acerca de la empresa' content={job.content.about} />
        </div>
    )
}