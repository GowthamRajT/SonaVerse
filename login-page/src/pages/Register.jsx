import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Scene from '../../../shared/components/Scene'
import {
  Container,
  Form,
  Title,
  Input,
  Button,
  Label,
  LinkStyled,
  NameContainer,
  NameInput
} from '../../../shared/components/StyledComponents'

const MainContent = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 2rem;
`

const PageTitle = styled.h1`
  color: #ff6b6b;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

const SubTitle = styled.h2`
  color: white;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  font-weight: normal;
`

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const PopupContent = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const PopupTitle = styled.h2`
  color: #ff6b6b;
  margin-bottom: 1rem;
`

const PopupMessage = styled.p`
  color: white;
  margin-bottom: 1.5rem;
`

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    admissionNumber: '',
    registrationNumber: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    studentId: ''
  })
  const [emailError, setEmailError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      setShowSuccessPopup(true);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoToLogin = () => {
    navigate('/');
  };

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
    <Container>
      <Scene />
      <MainContent>
        <PageTitle>SonaVerse</PageTitle>
        <SubTitle>Learning is a celebration!</SubTitle>
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
                <Input
                  as="select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: 'black' }}
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Input>
              </div>
            </NameContainer>
            <Label>Registration Number:</Label>
            <Input
              type="text"
              name="registrationNumber"
              placeholder="Enter registration number"
              value={formData.registrationNumber}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  handleChange(e);
                }
              }}
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
            <Label>Password:</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
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
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
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
      </MainContent>
      {showSuccessPopup && (
        <PopupOverlay>
          <PopupContent
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <PopupTitle>Registration Successful!</PopupTitle>
            <PopupMessage>
              Your account has been created successfully. You can now login with your credentials.
            </PopupMessage>
            <Button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoToLogin}
            >
              Go to Login
            </Button>
          </PopupContent>
        </PopupOverlay>
      )}
    </Container>
  )
}

export default Register 