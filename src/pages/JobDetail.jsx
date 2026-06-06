import { useState, useEffect } from "react"
import { useParams } from "react-router"

export function JobDetail () {
    const { jobId } = useParams()

    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`)
        .then()
    },[])

    return (
        <>
            <h1>Job Detail</h1>
            <h2> La id es {jobId}</h2>
        </>
    )
}