import { Link } from "../components/Link"
export function NotFoundPage () {
  return (
    <>
        <main className="not-found-page">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-error-404"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 8v3a1 1 0 0 0 1 1h3" /><path d="M7 8v8" /><path d="M17 8v3a1 1 0 0 0 1 1h3" /><path d="M21 8v8" /><path d="M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" /></svg>
            <h1>Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <Link href="/"><button>Volver al Inicio</button>
            </Link>
            
        </main>
    </>
    
  )
}