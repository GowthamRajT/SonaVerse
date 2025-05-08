import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Login from './login-page/src/pages/Login'
import Register from './registration-page/src/pages/Register'
import Home from './pages/Home'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated ? <Home /> : <Login setIsAuthenticated={setIsAuthenticated} />} 
        />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App 