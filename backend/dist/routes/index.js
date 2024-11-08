"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateResponse = void 0;
const generative_ai_1 = require("@google/generative-ai");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const API_KEY = process.env.API_KEY || "AIzaSyBgmOUVN55UaKfr8rzWqP64db9ycULzKaE";
// GoogleGenerativeAI required config
const configuration = new generative_ai_1.GoogleGenerativeAI(API_KEY);
// Model initialization
const modelId = "gemini-pro";
const model = configuration.getGenerativeModel({ model: modelId });
// These arrays are to maintain the history of the conversation
const conversationContext = [];
const currentMessages = [];
// Controller function to handle chat conversation
const generateResponse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield chat.sendMessage(prompt);
        const response = yield result.response;
        const responseText = response.text();
        // Store the conversation
        conversationContext.push([prompt, responseText]);
        res.send({ response: responseText });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.generateResponse = generateResponse;
