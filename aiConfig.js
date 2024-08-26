// services/openaiService.js
import {  OpenAI } from 'openai';

const config = {
    apiKey: "YOUR_API_KEY",
    dangerouslyAllowBrowser: true
}

const openAiClient = new OpenAI({
    apiKey: config.apiKey,
    dangerouslyAllowBrowser: config.dangerouslyAllowBrowser
});

export default openAiClient;