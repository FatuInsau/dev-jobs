import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { SearchPage } from "./pages/Search"
import { Home } from "./pages/Home"
import jobsData from "./data.json"

function App() {

  return (
    <>
    <Header></Header>
    <SearchPage empleos={jobsData}></SearchPage>
    {/* <Home></Home> */}
    <Footer></Footer>
    </>
  )
}

export default App
