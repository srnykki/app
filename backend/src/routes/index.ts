import { Request, Response } from "express";
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.API_KEY || "AIzaSyBgmOUVN55UaKfr8rzWqP64db9ycULzKaE";
// GoogleGenerativeAI required config
const configuration = new GoogleGenerativeAI(API_KEY);

// Model initialization
const modelId = "gemini-pro";
const model = configuration.getGenerativeModel({ model: modelId });

// These arrays are to maintain the history of the conversation
const conversationContext: any = [];
const currentMessages: any = [];

// Controller function to handle chat conversation
export const generateResponse = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;

    // Restore the previous context
    for (const [inputText, responseText] of conversationContext) {
      currentMessages.push({
        role: "user",
        parts: [{ text: inputText }] // Adjusted to have parts as an array of objects
      });
      currentMessages.push({
        role: "model",
        parts: [{ text: responseText }] // Adjusted to have parts as an array of objects
      });
    }

    const chat = model.startChat({
      history: currentMessages,
      generationConfig: {
        maxOutputTokens: 100,
      },
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const responseText = response.text();

    // Store the conversation
    conversationContext.push([prompt, responseText]);
    res.send({ response: responseText });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
