import { NextRequest, NextResponse } from "next/server";
import { ChatMessage } from "@/types";

// Helper to call the Hugging Face Inference REST API (no SDK required)
const callHuggingFaceTextGeneration = async (
  message: string
): Promise<string | null> => {
  const apiKey = process.env.HUGGINGFACE_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      "https://api-inference.huggingface.co/models/gpt2",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: `Educational Assistant: I'll help answer your question.\n\nStudent: ${message}\n\nEducational Assistant:`,
          parameters: {
            max_new_tokens: 150,
            temperature: 0.8,
            return_full_text: false,
          },
        }),
      }
    );

    if (!res.ok) {
      console.error(
        "Hugging Face API responded with status",
        res.status,
        await res.text()
      );
      return null;
    }

    const json = await res.json();
    // The inference API typically returns an array of outputs with generated_text
    const generated = Array.isArray(json)
      ? json[0]?.generated_text
      : json?.generated_text;
    if (typeof generated === "string") return generated.trim();
    return null;
  } catch (error) {
    console.error("Hugging Face fetch error:", error);
    return null;
  }
};

// Function to get AI response using Hugging Face Inference REST API
const getAIResponse = async (message: string): Promise<string> => {
  const apiKey = process.env.HUGGINGFACE_API_KEY;

  if (!apiKey) {
    console.log("No Hugging Face API key found, using simulated response");
    return simulateAIResponse(message);
  }

  try {
    const generated = await callHuggingFaceTextGeneration(message);
    if (generated) {
      return generated || simulateAIResponse(message);
    }

    console.log("No generated text in response, using simulated response");
    return simulateAIResponse(message);
  } catch (error) {
    console.error("Hugging Face API error:", error);
    return simulateAIResponse(message);
  }
};

// Enhanced simulated AI responses for fallback (FREE!)
const simulateAIResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();

  // Educational responses based on keywords
  if (
    lowerMessage.includes("math") ||
    lowerMessage.includes("equation") ||
    lowerMessage.includes("calculate")
  ) {
    return "I'd be happy to help you with this math problem! Let's break it down step by step. First, identify the key variables and constants in the equation. Then, apply the appropriate mathematical operations. Would you like me to walk through a specific example?";
  }

  if (
    lowerMessage.includes("science") ||
    lowerMessage.includes("experiment") ||
    lowerMessage.includes("hypothesis")
  ) {
    return "Great question about science! The scientific method is key here: observation, hypothesis, experiment, analysis, and conclusion. Let's explore this concept together. What specific aspect would you like to understand better?";
  }

  if (
    lowerMessage.includes("essay") ||
    lowerMessage.includes("write") ||
    lowerMessage.includes("paper")
  ) {
    return "Writing a strong essay involves several steps: 1) Create an outline with your main points, 2) Write a compelling introduction with your thesis statement, 3) Develop body paragraphs with evidence and examples, 4) Conclude by summarizing your arguments. What topic are you writing about?";
  }

  if (
    lowerMessage.includes("study") ||
    lowerMessage.includes("exam") ||
    lowerMessage.includes("test")
  ) {
    return "Here are some effective study strategies: 1) Break your study sessions into 25-30 minute chunks with breaks, 2) Use active recall by testing yourself, 3) Create visual aids like mind maps, 4) Teach the concept to someone else. What subject are you studying for?";
  }

  if (
    lowerMessage.includes("assignment") ||
    lowerMessage.includes("homework") ||
    lowerMessage.includes("deadline")
  ) {
    return "Let me help you with your assignment! Start by carefully reading the instructions and breaking the task into smaller, manageable parts. Create a timeline working backwards from your deadline. Would you like help prioritizing your tasks or understanding specific requirements?";
  }

  // Teacher-focused responses
  if (
    lowerMessage.includes("grade") ||
    lowerMessage.includes("assessment") ||
    lowerMessage.includes("evaluate")
  ) {
    return "For effective grading and assessment, consider using a rubric with clear criteria. This ensures consistency and helps students understand expectations. Would you like suggestions for creating rubrics or alternative assessment methods?";
  }

  if (
    lowerMessage.includes("lesson plan") ||
    lowerMessage.includes("curriculum") ||
    lowerMessage.includes("teach")
  ) {
    return "When planning lessons, start with clear learning objectives. Use the 5E model: Engage, Explore, Explain, Elaborate, and Evaluate. Incorporate various teaching methods to accommodate different learning styles. What subject or topic are you planning for?";
  }

  // Default responses
  const defaultResponses = [
    "That's a great question! Let me help you understand this better. Could you provide more details about what specific aspect you'd like to explore?",
    "I'm here to assist you with your learning journey. Let's break down this topic step by step. What's the main challenge you're facing?",
    "Excellent question! To give you the most helpful answer, could you tell me more about the context? Are you working on an assignment, preparing for a test, or just curious to learn more?",
    "I'd be happy to help you with that! Learning is a process, and asking questions is a crucial part. Let's work through this together. What have you tried so far?",
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId, userId } = await request.json();

    if (!message || !sessionId || !userId) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get AI response from Hugging Face (or fallback to simulated)
    const responseContent = await getAIResponse(message);

    const aiResponse: ChatMessage = {
      id: Date.now().toString(),
      userId: "ai-assistant",
      content: responseContent,
      role: "assistant",
      timestamp: new Date(),
      sessionId,
    };

    return NextResponse.json({
      success: true,
      data: aiResponse,
      message: "AI response generated successfully",
      source: process.env.HUGGINGFACE_API_KEY
        ? "huggingface-gpt2"
        : "simulated",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
