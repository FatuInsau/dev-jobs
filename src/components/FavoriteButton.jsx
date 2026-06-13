import { useFavoritesStore } from "../store/favouritesStore"
import { useAuthStore } from '../store/authStore'

export function FavoriteButton ({jobId}) {
    const { toggleFavorite, isFavorite } = useFavoritesStore()
    const { isLoggedIn } = useAuthStore()

    if (isLoggedIn) {
        return (
            <button  onClick={()=>{toggleFavorite(jobId)}} aria-label={isFavorite(jobId) ? 'Remove from favorites' : 'Add to favorites'}>
                    {isFavorite(jobId) ? '♥' : '♡'}
            </button>
        )
    }

    return 
        { isLoggedIn && (<button  onClick={()=>{toggleFavorite(jobId)}}
        aria-label={isFavorite(jobId) ? 'Remove from favorites' : 'Add to favorites'}>
                    {isFavorite(jobId) ? '♥' : '♡'}
                </button>)}
    
}