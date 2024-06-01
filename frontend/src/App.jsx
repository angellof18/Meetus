
import { useState } from "react";
import { Navbar } from "./Components/Navbar"
import { Home } from "./Components/Home";
import { Join } from "./Components/Join";
import { Signup } from "./Components/Signup";
import { Login } from "./Components/Login";


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
            <Join setPage={setPage} usuario={username} />
          </div>
        )

      case 'Registro':
        return (
          <div>
            <Signup setPage={setPage} />
          </div>
        )

      case 'Login':
        return (
          <Login setPage={setPage} setUser={setUsername} />
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
