import cors from "cors";
import express from "express";

import { checkIfPalindrome } from "./components/checkIfPalindrome";

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());

app.get("/:text", (req, res) => {
  const text = req.params.text;

  const result = checkIfPalindrome(text);
  const response = result === 1 ? true : false;
  res.status(200).json({
    data: {
      anagram: text,
      canFormPalindrome: response,
    },
  });
});

export const server = app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});

export default app;
