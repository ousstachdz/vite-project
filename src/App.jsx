import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from './Components/Home'
import Buy from './Components/Buy'
import { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => {
    setIsDark((prv) => {
      return !prv
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div className={isDark ? 'dark' : ''}>
              <Home toggleTheme={toggleTheme} isDark={isDark} />
            </div>
          }
        ></Route>
        <Route
          path='/buy'
          element={
            <div className={isDark ? 'dark' : ''}>
              <Buy toggleTheme={toggleTheme} isDark={isDark} />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
