import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const app = express();

// Configure CORS
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sonaverse')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  admissionNumber: { type: String, unique: true },
  gender: String,
  email: { type: String, unique: true },
  studentId: { type: String, unique: true },
  password: String
});

const User = mongoose.model('User', userSchema);

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    const userData = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [
        { email: userData.email },
        { admissionNumber: userData.admissionNumber },
        { studentId: userData.studentId }
      ]
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create new user
    const user = new User({
      ...userData,
      password: hashedPassword
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 