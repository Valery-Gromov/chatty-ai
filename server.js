const PORT = 8000;
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

API_KEY = process.env.OPEN_AI_API_KEY;

app.post('/competions', async (req, res) => {
  console.log(req.body);
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: req.body.message,
        },
      ],
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    const data = await response.json();

    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log('Your server is running om PORT: ' + PORT));
