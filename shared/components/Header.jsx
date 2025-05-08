import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const HeaderContainer = styled.header`
  background-color: white;
  padding: 15px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h1`
  color: #ff6b6b;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`

const NavItem = styled(motion.a)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #f1f1f1;
  }
`

const SearchBar = styled.input`
  width: 300px;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #b92b27;
  }
`

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #b92b27;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Title>SonaVerse</Title>
      <Nav>
        <NavItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Home</NavItem>
        <NavItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Answer</NavItem>
        <NavItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Spaces</NavItem>
        <NavItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Notifications</NavItem>
      </Nav>
      <SearchBar placeholder="Search SonaVerse" />
      <ProfileSection>
        <Avatar>SV</Avatar>
      </ProfileSection>
    </HeaderContainer>
  )
}

export default Header 