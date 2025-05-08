import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { useState, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

const LoginContainer = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
  overflow: hidden;
`

const MainTitle = styled(motion.h1)`
  position: fixed;
  top: 1rem;
  left: 40%;
  transform: translateX(-50%);
  color: white;
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 2;
  text-align: center;
  margin: 0;
  padding: 0;
`

const LoginForm = styled(motion.div)`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 400px;
  margin: auto;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }
`

const Button = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  }
`

const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Label = styled.label`
  color: white;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;
`

const RegisterLink = styled(motion.a)`
  display: block;
  color: #00ffff;
  text-align: center;
  margin-top: 1rem;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ff6b6b;
    text-decoration: underline;
  }
`

const Scene = () => {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={6} 
        saturation={0} 
        fade 
        position={[0, 0, 0]} 
        speed={2}
      />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/home" 
          element={
            isAuthenticated ? (
              <Home />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
      </Routes>
    </Router>
  );
}

export default App
