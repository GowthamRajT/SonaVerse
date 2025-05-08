import { useState } from 'react'
import { Link } from 'react-router-dom'
import Scene from '../../../shared/components/Scene'
import {
  Container,
  MainTitle,
  Form,
  Title,
  Input,
  Button,
  Label,
  LinkStyled,
  NameContainer,
  NameInput
} from '../../../shared/components/StyledComponents'
import styled from 'styled-components'

const ErrorMessage = styled.div`
  color: #ff6b6b;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
  text-align: center;
  padding: 0.3rem;
  background-color: rgba(255, 107, 107, 0.1);
  border-radius: 4px;
  display: ${props => props.show ? 'block' : 'none'};
`

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    admissionNumber: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentId: ''
  })
  const [isTitleVisible, setIsTitleVisible] = useState(true)
  const [emailError, setEmailError] = useState('')

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop
    setIsTitleVisible(scrollTop < 100)
  }

  const validateEmail = (email) => {
    if (!email) {
      setEmailError('')
      return true
    }
    const sonatechDomain = '@sonatech.ac.in'
    if (!email.endsWith(sonatechDomain)) {
      setEmailError('Please use your SonaTech email address (@sonatech.ac.in)')
      return false
    }
    setEmailError('')
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateEmail(formData.email)) {
      return
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    if (name === 'email') {
      validateEmail(value)
    }
  }

  return (
    <Container onScroll={handleScroll}>
      <MainTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        isVisible={isTitleVisible}
      >
        SonaVerse
      </MainTitle>
      <Scene />
      <Form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Create Account</Title>
        <form onSubmit={handleSubmit}>
          <NameContainer>
            <div style={{ flex: 1 }}>
              <Label>First Name:</Label>
              <NameInput
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <Label>Admission Number:</Label>
              <NameInput
                type="text"
                name="admissionNumber"
                placeholder="Enter admission number"
                value={formData.admissionNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ flex: 1 }}>
              <Label>Last Name:</Label>
              <NameInput
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <Label>Gender:</Label>
              <NameInput
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                style={{ 
                  appearance: 'none',
                  backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'%3e%3cpath d=\'M7 10l5 5 5-5z\'/%3e%3c/svg%3e")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2.5rem'
                }}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </NameInput>
            </div>
          </NameContainer>
          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            placeholder="youremail@sonatech.ac.in"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ 
              border: emailError ? '1px solid #ff6b6b' : 'none',
              backgroundColor: emailError ? 'rgba(255, 107, 107, 0.1)' : 'rgba(255, 255, 255, 0.1)'
            }}
          />
          {emailError && (
            <div style={{ 
              color: '#ff6b6b', 
              fontSize: '0.8rem', 
              marginTop: '0.3rem',
              marginBottom: '0.5rem',
              textAlign: 'center',
              padding: '0.3rem',
              backgroundColor: 'rgba(255, 107, 107, 0.1)',
              borderRadius: '4px'
            }}>
              {emailError}
            </div>
          )}
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
          <LinkStyled
            to="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Already have an account? Login here
          </LinkStyled>
        </form>
      </Form>
    </Container>
  )
}

export default Register 