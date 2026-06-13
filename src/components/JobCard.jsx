import { useState } from "react"
import { Link } from "./Link"
import  styles from '../style/JobCard.module.css'
import { FavoriteButton } from "./FavoriteButton"
import { useAuthStore } from '../store/authStore'

function JobCardApplyButton ({ jobId }) {

    const [isApplied, setIsApplied] = useState(false)
    const { isLoggedIn } = useAuthStore()

    const buttonClass = isApplied ? 'is-Applied-button' : undefined
     const buttonText = isApplied ? 'Aplicado' : 'Aplicar'

     function handleApplyClick () {
        setIsApplied (true)
     }

    return (
        <button disabled={!isLoggedIn} onClick={handleApplyClick}  className={buttonClass}> {buttonText} </button>
    )
}

export function JobCard ({ empleo }) {

    const { titulo, empresa, ubicacion, descripcion, id } = empleo

    return (
        <article>
            <div>
                <Link className={styles.title} href={`/jobs/${id}`} >{titulo}</Link>             
                <small> {empresa} | {ubicacion} </small>
                <p> {descripcion} </p>
            </div>
            <div className={styles.actions}>
                <Link className={styles.details} href={`/jobs/${id}`} >Ver detalles</Link>
                < JobCardApplyButton jobId={id}/>
                <FavoriteButton jobId={id} />
                
            </div>
        </article>
    )
}