const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required.' });
  }
  if (!password || password.trim() === '') {
    return res.status(400).json({ error: 'Password is required.' });
  }

  res.json({ message: 'Login successful' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});