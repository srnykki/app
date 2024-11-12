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
let conversationContext = [];
let currentMessages = [];
// Controller function to handle chat conversation
const generateResponse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { prompt } = req.body;
        // Adding Naruto's style of speech to the conversation context
        // Example of how Naruto would speak:
        // For example, "dattebayo" is something Naruto often uses to end his sentences.
        const narutoStyleMessage = [
            "Naruto: 'Eu nunca desisto! Dattebayo! Eu vou ser o Hokage, sem importar o que aconteça!'",
            "Naruto: 'O que eu mais quero é proteger todos os meus amigos! Eu não vou falhar, dattebayo!'",
            "Naruto: 'Você acha que pode me derrotar? Eu sou o Naruto Uzumaki, e vou vencer, porque eu nunca desisto!'",
            "Naruto: 'Minha vontade nunca morre, dattebayo!'"
        ];
        // Add Naruto's persona to the conversation context to influence the chat model's response
        for (const message of narutoStyleMessage) {
            currentMessages.push({
                role: "model",
                parts: [{ text: message }]
            });
        }
        // Restore the previous context (if any) for a continuous conversation
        for (const [inputText, responseText] of conversationContext) {
            currentMessages.push({
                role: "user",
                parts: [{ text: inputText }]
            });
            currentMessages.push({
                role: "model",
                parts: [{ text: responseText }]
            });
        }
        // Start a new chat with the model, passing the context
        const chat = model.startChat({
            history: currentMessages,
            generationConfig: {
                maxOutputTokens: 100,
            },
        });
        // Send the user's message to the model
        const result = yield chat.sendMessage(prompt);
        const response = yield result.response;
        const responseText = response.text();
        // If the response from the model isn't Naruto-like, we can rephrase it
        //
        // Store the conversation (input + response) in the context
        conversationContext.push([prompt, responseText]);
        // Send the response back to the user
        res.send({ response: responseText });
        // Optionally, reset the currentMessages if you don't want it to grow indefinitely
        currentMessages = [];
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.generateResponse = generateResponse;
