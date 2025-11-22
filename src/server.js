import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import productRouters from './routes/productsRoutes.js';
import authRouters from './routes/authRoutes.js';

import { connectMongoDB } from './db/connectMongoDB.js';
import { errorHandler } from './middleware/errorHandler.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errors } from 'celebrate';

const app = express();
const PORT = process.env.PORT ?? 3030;

app.use(express.json());
app.use(cors());

app.use(authRouters);
app.use(productRouters);

app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
