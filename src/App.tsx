import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"

function App() {


  return (
    <div className="max-w-full">
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
