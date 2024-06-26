
import { useState } from "react";
import { Navbar } from "./Components/Navbar"
import { Home } from "./Components/Home";
import { Join } from "./Components/Join";


function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [page, setPage] = useState('Login')
  const [username, setUsername] = useState('')

  const renderPage = () => {
    switch (page) {
      case 'Inicio':
        return (
          <div>
            <Navbar onToggle={handleToggle} setPage={setPage} />
            <Home setPage={setPage} />
          </div>
        )

      case 'Join':
        return (
          <div>
            <Navbar onToggle={handleToggle} setPage={setPage} />
            <Join />
          </div>
        )

      default:
        return (
          <div>
            <Navbar onToggle={handleToggle} setPage={setPage} />
            <Home setPage={setPage} />
          </div>
        )
    }
  }

  const handleToggle = () => {
    setDarkMode(!darkMode);
  }

  return (
    <>
      {renderPage()}
    </>
  )
}

export default App
