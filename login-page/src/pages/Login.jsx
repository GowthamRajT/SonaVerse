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
  LinkStyled
} from '../../../shared/components/StyledComponents'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const MainContent = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-left: calc(50% + 30px);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

const StyledForm = styled(Form)`
  width: 100%;
  max-width: 400px;
`

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      setIsAuthenticated(true);
      navigate('/home');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Container>
      <Scene />
      <MainContent>
        <PageTitle>SonaVerse</PageTitle>
        <SubTitle>Learning is a celebration!</SubTitle>
        <StyledForm
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Title>Welcome Back</Title>
          <form onSubmit={handleSubmit}>
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              placeholder="youremail@sonatech.ac.in"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Label>Password:</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {error && (
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
                {error}
              </div>
            )}
            <Button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </Button>
            <LinkStyled
              to="/register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Don't have an account? Register here
            </LinkStyled>
          </form>
        </StyledForm>
      </MainContent>
    </Container>
  )
}

export default Login 