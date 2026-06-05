import React from 'react'
import Home from './pages/home'
import Navbar from './components/layout/Navbar'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}
export default App