import { useState, useEffect } from "react"
import { useRouter } from './useRouter'
import { useSearchParams } from "react-router"


export function useFilters() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [currentPage, setCurrentPage] = useState(() => {
        const page = Number(searchParams.get('page'))
        // se puede chequear que no pongan numeros negativos tmb y otros
        return Number.isNaN(page) ? page : 1
    })

    const [textToFilter, setTextToFilter] = useState(() => searchParams.get('text') || '')
    const [filters, setFilters] = useState(()=>{
        return {
            technology: searchParams.get('technology') || '',
            location: searchParams.get('type') || '',
            experienceLevel: searchParams.get('level') || '',
        }
    })
    const [jobs, setJobs] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    const { navigateTo } = useRouter()

    useEffect(() => {
        setCurrentPage(1)
    }, [textToFilter, filters.technology, filters.location, filters.experienceLevel])

    useEffect(() => {
        async function fetchJobs() {
            try {
                setLoading(true)

                const params = new URLSearchParams()
                if (textToFilter) params.append('text', textToFilter)
                if (filters.technology) params.append('technology', filters.technology)
                if (filters.location) params.append('type', filters.location)
                if (filters.experienceLevel) params.append('level', filters.experienceLevel)

                const offset = (currentPage - 1) * RESULTS_PER_PAGE
                params.append('limit', RESULTS_PER_PAGE)
                params.append('offset', offset)

                const queryParams = params.toString()

                const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)
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
    }, [filters, textToFilter, currentPage])

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

    useEffect(()=>{
        setSearchParams((params)=>{
if (textToFilter) params.set('text', textToFilter)
        if (filters.technology) params.set('technology', filters.technology)
        if (filters.location) params.set('type', filters.location)
        if (filters.experienceLevel) params.set('level', filters.experienceLevel)

        if (currentPage>1) params.set('page',currentPage)

        return params
        })
    
    },[filters, currentPage, textToFilter, useSearchParams])

    return {
        loading,
        jobs,
        total,
        handlePageChange,
        handleSearch,
        handleTextFilter,
        pageValues,
        textToFilter,
        filters
    }
}