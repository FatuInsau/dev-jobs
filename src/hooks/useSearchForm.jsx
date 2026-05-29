import { useState } from "react"

export function useSearchForm ({ idText, idTechnology, idLocation, idExperienceLevel, onSearch, onTextFilter }) {

    const [searchText, setSearchText] = useState('')

     const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

    const filters = {
      search: formData.get(idText),
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel),
    }

    onSearch(filters)
    }

    const handleTextChange = (event) => {
        const text = event.target.value
        setSearchText(text)
        onTextFilter(text)
    }

    return {
        searchText,
        handleSubmit,
        handleTextChange
    }
}