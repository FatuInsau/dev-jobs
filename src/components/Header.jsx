import { NavLink } from "react-router" 
import { Link } from "./Link"
import { useAuthStore } from "../store/authStore.js";
import { useFavoritesStore } from "../store/favouritesStore.js";

const HeaderUserButton = () => {
  const { isLoggedIn, login, logout } = useAuthStore()

  return isLoggedIn
  ? <button onClick={logout}>Cerrar sesión</button>
  : <button onClick={login}>Iniciar sesión</button>
  
}

export function Header () {
  const { isLoggedIn } = useAuthStore()
  const { countFavorites } = useFavoritesStore()

  const numberOfFavorites = countFavorites()

    return(
         <header>
        <Link href="/">
          <h1>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            DevJobs
          </h1>
        </Link>
        <nav className="nav-header">
          <NavLink 
          className={({ isActive }) => isActive ? 'nav-link-active' : ''}
          to="/search">Empleos</NavLink>
          {
            isLoggedIn && (
              <NavLink 
              className={({ isActive }) => isActive ? 'nav-link-active' : ''}
              to='/profile'>
                Perfil  ♥ {numberOfFavorites}
              </NavLink>
            )
          }
        </nav>

        <HeaderUserButton />
        
      </header>
    )
}