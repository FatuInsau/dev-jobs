import { useState, useEffect } from "react"
import jobsData from "../data.json"

export function useFilters() {

    const [currentPage, setCurrentPage] = useState(1)
    const [textToFilter, setTextToFilter] = useState('')
    const [filters, setFilters] = useState({
        technology: '',
        location: '',
        experienceLevel: '',
    })
    const [jobs, setJobs] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading ]= useState(true)

    useEffect(() => {
        async function fetchJobs() {
            try {
                setLoading(true)
                const response = await fetch(`https://jscamp-api.vercel.app/api/jobs`)
                const json = await response.json()

                setJobs(json.data)
                setTotal(json.total)
            } catch (error) {
                console.error('Error fetching jobs: ', error)
            } finally {
                setLoading(false)
            }
        }

        fetchJobs()
    }, [])

        const handleSearch = (newFilters) => {
        setFilters({
            technology: newFilters.technology,
            location: newFilters.location,
            experienceLevel: newFilters.experienceLevel,
        })
        setTextToFilter(newFilters.search)
        setCurrentPage(1)
    }

    const handleTextFilter = (newTextToFilter) => {
        setTextToFilter(newTextToFilter)
        setCurrentPage(1)
    }

    const RESULTS_PER_PAGE = 5

    const totalPages = Math.ceil(total / RESULTS_PER_PAGE)

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    const pageValues = {
        totalPages: totalPages,
        currentPage: currentPage,
        setCurrentPage: setCurrentPage,
    }

    return {
        loading,
        jobs,
        total,
        handlePageChange,
        handleSearch,
        handleTextFilter,
        pageValues
    }
}