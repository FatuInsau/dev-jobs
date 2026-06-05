import { Link } from "./Link"

export function Pagination ({ currentPage = 1, totalPages = 5, onPageChange = () => {}}) {

    const pages = Array.from({ length: totalPages }, (_, i) => i+1)

    const firstPage = currentPage === 1
    const lastPage = currentPage === totalPages

    const stylePrevButton = firstPage ? 'disabled-button' : ''
    const styleNextButton = lastPage ? 'disabled-button' : ''

    const handleNext = (e) => {
        e.preventDefault()
        if (currentPage < totalPages) {
            onPageChange(currentPage+1)
        }
    }

    const handlePrev = (e) => {
        e.preventDefault()
        if (currentPage > 1) {
            onPageChange(currentPage-1)
        }
    }

    const handlePageClick = (e, page) => {
        e.preventDefault()
        onPageChange(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        
    }

    const buildPageUrl = (page) => {
        const url = new URL(window.location)
        url.searchParams.set('page',page)
        return `${url.pathname}?${url.searchParams.toString()}`
    }

    return (
        <nav className="pagination-nav">
            <Link href={buildPageUrl(currentPage-1)} aria-disabled={currentPage === 1} className={stylePrevButton} onClick={handlePrev}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 6l-6 6l6 6" />
        </svg>
            </Link>
            { pages.map((page) => {
                return (
                    <Link key={page} className={currentPage === page ? 'is-active' : ''} href={buildPageUrl(currentPage)}onClick={(e)=>{handlePageClick(e,page)}}>
                        {page}
                    </Link>
                )
            })}
            <Link href={buildPageUrl(currentPage+1)} aria-disabled={currentPage === totalPages} className={styleNextButton} onClick={handleNext}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
            </Link>
        </nav>
    )
}