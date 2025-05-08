import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
  overflow-y: auto;
  padding: 5rem 0;
  z-index: 1;
`

export const MainTitle = styled(motion.h1)`
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
  z-index: 3;
  text-align: center;
  margin: 0;
  padding: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  opacity: ${props => props.isVisible ? 1 : 0};
`

export const Form = styled(motion.div)`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: ${props => props.isLogin ? '350px' : '450px'};
  margin: 2rem auto;
  min-height: fit-content;
`

export const Title = styled.h1`
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.3rem 0;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    background: rgba(255, 255, 255, 0.2);
  }
`

export const Button = styled(motion.button)`
  width: 100%;
  padding: 0.8rem;
  margin-top: 0.8rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
  }
`

export const Label = styled.label`
  color: white;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  display: block;
`

export const LinkStyled = styled(Link)`
  display: block;
  color: #00ffff;
  text-align: center;
  margin-top: 0.8rem;
  text-decoration: none;
  font-size: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ff6b6b;
    text-decoration: underline;
  }
`

export const NameContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.3rem;
`

export const NameInput = styled(Input)`
  flex: 1;
` 