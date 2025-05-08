import { motion, AnimatePresence, useDragControls } from 'framer-motion'
import styled from '@emotion/styled'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

const HomeContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
  display: flex;
  position: relative;
`

const MenuButtonContainer = styled(motion.div)`
  position: fixed;
  z-index: 1000;
  transition: all 0.3s ease;
`

const MenuButton = styled(motion.button)`
  position: relative;
  z-index: 1000;
  background: none;
  border: none;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`

const MenuIcon = styled(motion.div)`
  width: 24px;
  height: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const MenuLine = styled(motion.span)`
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1px;
  transition: all 0.3s ease;
`

const MenuCircle = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid white;
  border-radius: 50%;
  opacity: 0.8;
`

const MenuLines = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span {
    width: 100%;
    height: 2px;
    background: white;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
`

const Scene = () => {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
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

const Sidebar = styled(motion.div)`
  width: 220px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.8rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`

const SidebarHandle = styled(motion.div)`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`

const HandleLine = styled.div`
  width: 2px;
  height: 20px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 2px;
  border-radius: 1px;
`

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  z-index: 998;
  opacity: 0;
  pointer-events: none;
  &.active {
    opacity: 1;
    pointer-events: auto;
  }
`

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const Header = styled.header`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 2;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const QuestionCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

const QuestionTitle = styled.h2`
  color: #ff6b6b;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`

const QuestionContent = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
`

const MenuItem = styled(motion.div)`
  padding: 0.6rem;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.9rem;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ff6b6b;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

const MainTitle = styled(motion.h1)`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  text-align: center;
  position: relative;
  z-index: 3;
`

const SubTitle = styled(motion.p)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.8rem;
  margin: 0.2rem 0 0 0;
  text-align: center;
  font-style: italic;
  letter-spacing: 1px;
  position: relative;
  z-index: 3;
`

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dragControls = useDragControls();
  const [dragX, setDragX] = useState(0);
  const [questions] = useState([
    {
      id: 1,
      title: "What are the best practices for learning programming?",
      content: "I'm a beginner in programming and would like to know the most effective ways to learn and improve my skills..."
    },
    {
      id: 2,
      title: "How to prepare for technical interviews?",
      content: "I have an upcoming technical interview and would appreciate any tips or resources to help me prepare..."
    }
  ]);

  const menuItems = [
    { icon: "🏠", label: "Home" },
    { icon: "❓", label: "Questions" },
    { icon: "💬", label: "Answers" },
    { icon: "👤", label: "Profile" },
    { icon: "⚙️", label: "Settings" }
  ];

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 30) {
      setIsMenuOpen(true);
      setDragX(0);
    } else {
      setIsMenuOpen(false);
      setDragX(-220);
    }
  };

  const handleSidebarClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setDragX(isMenuOpen ? -220 : 0);
  };

  return (
    <HomeContainer>
      <Scene />
      
      <AnimatePresence>
        <Sidebar
          drag="x"
          dragControls={dragControls}
          dragConstraints={{ left: -220, right: 0 }}
          dragElastic={0}
          onDragEnd={handleDragEnd}
          initial={{ x: -220 }}
          animate={{ x: isMenuOpen ? 0 : -220 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          style={{ x: dragX }}
        >
          <SidebarHandle
            onPointerDown={(e) => dragControls.start(e)}
            onClick={handleSidebarClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HandleLine />
            <HandleLine />
            <HandleLine />
          </SidebarHandle>
          {menuItems.map((item, index) => (
            <MenuItem
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <span>{item.icon}</span>
              {item.label}
            </MenuItem>
          ))}
        </Sidebar>
        <Overlay
          className={isMenuOpen ? 'active' : ''}
          onClick={() => {
            setIsMenuOpen(false);
            setDragX(-220);
          }}
        />
      </AnimatePresence>
      
      <div style={{ 
        flex: 1, 
        marginLeft: isMenuOpen ? '220px' : '0', 
        transition: 'margin-left 0.8s ease' 
      }}>
        <Header>
          <MainTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SonaVerse
          </MainTitle>
          <SubTitle
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learning is a Celebration!
          </SubTitle>
        </Header>
        
        <MainContent>
          {questions.map(question => (
            <QuestionCard
              key={question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <QuestionTitle>{question.title}</QuestionTitle>
              <QuestionContent>{question.content}</QuestionContent>
            </QuestionCard>
          ))}
        </MainContent>
      </div>
    </HomeContainer>
  )
}

export default Home 