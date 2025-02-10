import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Add proper MIME types for static assets
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Fake processing endpoint
app.post('/api/process', (req, res) => {
    const features = {
      eyebrows: 7.3,
      eyes: 7.8,
      nose: 7.1,
      lips: 8.4,
      face: 7.6,
      skin: 8.2,
      hair: 7.9,
      chin: 7.5,
      jawline: 7.7,
      cheekbones: 8.1,
      forehead: 7.4
    };
  
    setTimeout(() => {
        res.json({
          overall: "Top 15%",
          features,
          glowUpTips: [] // Add tips here
        });
      }, 5000);
    });

// Payment endpoint
app.post('/api/payment', (req, res) => {
    setTimeout(() => {
      res.json({ 
        success: true,
        transactionId: `TX${Math.floor(Math.random() * 1000000)}`
      });
    }, 2000);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));