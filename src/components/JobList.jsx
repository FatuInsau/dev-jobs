import { JobCard } from "../components/JobCard"

export function JobList ({ empleos }) {
    if (empleos.length === 0) {
        return (
            <div className="no-jobs">
                <p>No hay trabajos disponibles en este momento.</p>
            </div>
        )
    } else {
        return (
            <div className="jobs-results">
                    {empleos.map((empleo) => {
                    return (
                        <JobCard empleo={empleo} key={empleo.id} ></JobCard>
                    )
                })}
                </div>
        )
    }
}