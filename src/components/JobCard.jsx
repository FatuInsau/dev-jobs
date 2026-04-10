import { useState } from "react"

export function JobCard ({ empleo }) {

     const { titulo, empresa, ubicacion, descripcion } = empleo

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
                <h3> {titulo} </h3>
                <small> {empresa} | {ubicacion} </small>
                <p> {descripcion} </p>
            </div>
            
            <button onClick={handleApplyClick}  className={buttonClass}> {buttonText} </button>
        </article>
    )
}