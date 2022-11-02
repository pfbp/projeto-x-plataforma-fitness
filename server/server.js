import app from './src/app.js';

const API_PORT = process.env.PORT || 3000;


app.listen(API_PORT, () => {
  console.log(`Server listening at http://localhost:${API_PORT}`);
});