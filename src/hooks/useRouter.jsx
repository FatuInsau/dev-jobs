import { useNavigate, useLocation } from "react-router";

export function useRouter () {
    const navigate = useNavigate()
    const location = useLocation()

    function navigateTo(path) {
        navigate(path)
    }

    function goBack() {
    navigate(-1)
  }

    return {
        currentPath: location.pathname,
        navigateTo,
        goBack
    }
}