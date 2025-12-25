export const notFoundHandler = async (req, res) => {
  res.status(404).json({
    message: 'Route not found',
  });
};
