import { NextRequest, NextResponse } from "next/server";
import { ChatMessage } from "@/types";

// This would typically connect to your AI service (OpenAI, Claude, etc.)
const generateAIResponse = (message: string): string => {
  // Simple mock responses for demo
  const responses = [
    "I understand your question about " +
      message.slice(0, 50) +
      "... Let me help you with that.",
    "That's a great question! Here's what I can tell you about that topic...",
    "I'd be happy to explain this concept. Based on your question, here's what you should know...",
    "Let me break this down for you step by step...",
  ];

  return responses[Math.floor(Math.random() * responses.length)];
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

    // Simulate AI processing delay
    await new Promise((resolve) =>
      setTimeout(resolve, 1000 + Math.random() * 2000)
    );

    const aiResponse: ChatMessage = {
      id: Date.now().toString(),
      userId: "ai-assistant",
      content: generateAIResponse(message),
      role: "assistant",
      timestamp: new Date(),
      sessionId,
    };

    return NextResponse.json({
      success: true,
      data: aiResponse,
      message: "AI response generated successfully",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
