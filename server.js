const express = require("express");
const colors = require("colors");
const morgan = require("morgan"); // ✅ fixed typo
const dotenv = require("dotenv");

dotenv.config(); // ✅ load .env

const app = express();
app.use(express.json());
app.use(morgan("dev")); // ✅ fixed spelling


// Routes
app.get('/', (req, res) => {
  res.status(200).send({
    message: "server running",
  });
});

// PORT & MODE
const port = process.env.PORT || 8080;
const mode = process.env.NODE_ENV || 'development';

// Listen
app.listen(port, () => {
  console.log(`Server Running in ${mode} mode on port ${port}`.bgCyan.white

  );
});


