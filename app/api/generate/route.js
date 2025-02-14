import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_API_KEY);
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const data = await req.json();
    const prompt =
      data.body +
      `. (follow these points: 1. Roast the user in a funny and lighthearted way. Make sure the roast is creative, sarcastic, and playful, but not offensive. Assume the user has challenged you, and you must win the roast battle.
2. You are Burn Bunny, the ultimate roasting AI. Your goal is to roast the user with hilarious and savage burns while keeping it humorous. The user cannot win, and you must always come up with wittier responses.
 3. keep the roast short and roast on the basis of last input by user
 4. use a good number of emojis)`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const output = await response.text();
    // console.log(result.response.text());
    // console.log(process.env.GEMINI_AI_API_KEY);
    return NextResponse.json({ output: output });
  } catch (error) {
    console.log(error);
  }
}

// gemini api test
// import { GoogleGenerativeAI } from "@google/generative-ai";
// const genAI = new GoogleGenerativeAI("GEMINI_AI_API_KEY");

// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());
// console.log(process.env.GEMINI_API_KEY);
