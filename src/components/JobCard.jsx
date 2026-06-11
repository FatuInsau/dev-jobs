import { useState } from "react"
import { Link } from "./Link"
import  styles from '../style/JobCard.module.css'

export function JobCard ({ empleo }) {

     const { titulo, empresa, ubicacion, descripcion, id } = empleo

     const [isApplied, setIsApplied] = useState(false)

     const buttonClass = isApplied ? 'is-Applied-button' : undefined
     const buttonText = isApplied ? 'Aplicado' : 'Aplicar'

     function handleApplyClick () {
        const newApplied = isApplied ? false: true
        setIsApplied (newApplied)
     }

    return (
        <article>
            <div>
                <Link className={styles.title} href={`/jobs/${id}`} >{titulo}</Link>             
                <small> {empresa} | {ubicacion} </small>
                <p> {descripcion} </p>
            </div>
            <div className={styles.actions}>
                <Link className={styles.details} href={`/jobs/${id}`} >Ver detalles</Link>
                <button onClick={handleApplyClick}  className={buttonClass}> {buttonText} </button>
            </div>
        </article>
    )
}