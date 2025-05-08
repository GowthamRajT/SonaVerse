import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f1f1f1;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  height: 100vh;
  overflow-y: auto;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 250px;
  padding: 20px;
`;

const Header = styled.header`
  background-color: white;
  padding: 15px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

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
`;

const MenuItem = styled.div`
  padding: 12px 15px;
  margin: 5px 0;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const QuestionCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const QuestionTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const QuestionMeta = styled.div`
  display: flex;
  gap: 15px;
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`;

const Button = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  background-color: #f1f1f1;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    background-color: #e1e1e1;
  }
`;

const AddQuestionButton = styled(motion.button)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #b92b27;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #a82420;
  }
`;

function Home() {
  const [questions] = useState([
    {
      id: 1,
      title: "What are the best practices for learning React in 2024?",
      author: "John Doe",
      answers: 12,
      upvotes: 45,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      title: "How to implement authentication in a MERN stack application?",
      author: "Jane Smith",
      answers: 8,
      upvotes: 32,
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      title: "What are the key differences between MongoDB and PostgreSQL?",
      author: "Mike Johnson",
      answers: 15,
      upvotes: 67,
      timestamp: "1 day ago"
    }
  ]);

  return (
    <Container>
      <Sidebar>
        <MenuItem>Home</MenuItem>
        <MenuItem>Answer</MenuItem>
        <MenuItem>Spaces</MenuItem>
        <MenuItem>Notifications</MenuItem>
        <MenuItem>Library</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
      </Sidebar>

      <MainContent>
        <Header>
          <SearchBar placeholder="Search SonaVerse" />
          <ProfileSection>
            <Avatar>JD</Avatar>
          </ProfileSection>
        </Header>

        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionTitle>{question.title}</QuestionTitle>
            <QuestionMeta>
              <span>{question.author}</span>
              <span>{question.answers} answers</span>
              <span>{question.upvotes} upvotes</span>
              <span>{question.timestamp}</span>
            </QuestionMeta>
            <ActionButtons>
              <Button>Upvote</Button>
              <Button>Answer</Button>
              <Button>Share</Button>
            </ActionButtons>
          </QuestionCard>
        ))}

        <AddQuestionButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          +
        </AddQuestionButton>
      </MainContent>
    </Container>
  );
}

export default Home; 