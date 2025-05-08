import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Link } from 'react-router-dom'

const RegisterContainer = styled.div`
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

const RegisterForm = styled(motion.div)`
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

const LoginLink = styled(Link)`
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

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentId: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <RegisterContainer>
      <MainTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        SonaVerse
      </MainTitle>
      <Scene />
      <RegisterForm
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Create Account</Title>
        <form onSubmit={handleSubmit}>
          <Label>Full Name:</Label>
          <Input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            placeholder="youremail@sonatech.ac.in"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Label>Student ID:</Label>
          <Input
            type="text"
            name="studentId"
            placeholder="Enter your student ID"
            value={formData.studentId}
            onChange={handleChange}
            required
          />
          <Label>Password:</Label>
          <Input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Label>Confirm Password:</Label>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <Button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            Register
          </Button>
          <LoginLink
            to="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Already have an account? Login here
          </LoginLink>
        </form>
      </RegisterForm>
    </RegisterContainer>
  )
}

export default Register 