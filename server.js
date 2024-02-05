const PORT = 8000;
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

// Middleware для обработки файлов с использованием Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/uploads', express.static(path.join(__dirname, 'src/uploads')));

// Загружаем аудиофайл с использованием Multer
app.post('/upload', upload.single('audioFile'), async (req, res) => {
  try {
    // Сохраняем аудиофайл на сервере
    const filePath = path.join(__dirname, 'src', 'uploads', 'recorded_audio.wav');
    await fs.writeFile(filePath, req.file.buffer);

    // Возвращаем URL для доступа к файлу
    const fileUrl = `http://localhost:8000/uploads/recorded_audio.wav`;
    res.json({ url: fileUrl });
  } catch (error) {
    console.error('Ошибка загрузки на сервер:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

API_KEY = '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';

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
    // console.log(options);
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    const data = await response.json();

    // console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log('Your server is running om PORT: ' + PORT));
