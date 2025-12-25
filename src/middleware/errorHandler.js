import { HttpError } from 'http-errors';

export const errorHandler = async (err, req, res, next) => {
  console.log('Error Middleware:', err);

  if (err instanceof HttpError) {
    return res.status(err.status).json({ message: err.message || err.name });
  }

  const isProd = process.env.NODE_ENV === 'production';

  res
    .status(500)
    .json({ message: isProd ? 'Something went wrong!' : err.message });
};
