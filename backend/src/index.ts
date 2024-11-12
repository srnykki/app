import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { generateResponse } from "./routes";
const cors = require('cors');


dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

app.use(cors({ 
  origin: 'http://localhost:1420',
}));

app.post("/generate", generateResponse);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

