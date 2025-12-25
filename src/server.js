import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import productRouter from './routes/products.js';
import { connectMongoDB } from './db/connectMongoDB.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import authRouter from './routes/auth.js';
import { errors } from 'celebrate';
import cookieParser from 'cookie-parser';
import usersRouter from './routes/users.js';
const app = express();
const PORT = process.env.PORT ?? 3030;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(authRouter);
app.use(productRouter);
app.use(usersRouter);

app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

await connectMongoDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
