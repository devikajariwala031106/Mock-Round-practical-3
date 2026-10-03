import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import complaintRoutes from './routes/complaintRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/complaints', complaintRoutes);

// Global Error Middleware
app.use((err, req, res, next) => {
  res.status(500).json({ success: false, error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Vite-Node Server running on port ${PORT}`));
