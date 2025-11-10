"use client";

import { useState, useRef, useEffect } from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PaperAirplaneIcon,
  SparklesIcon,
  UserIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { ChatMessage } from "@/types";
import { formatDateTime } from "@/lib/utils";

const sampleQuestions = [
  "What is the quadratic formula?",
  "Explain photosynthesis in simple terms",
  "How do I solve algebraic equations?",
  "What are the main causes of World War II?",
  "Can you help me with essay writing tips?",
];

export default function ChatbotPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageContent?: string) => {
    const content = messageContent || input.trim();
    if (!content || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      userId: "user-1",
      content,
      role: "user",
      timestamp: new Date(),
      sessionId: "session-1",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        userId: "ai",
        content: generateAIResponse(content),
        role: "assistant",
        timestamp: new Date(),
        sessionId: "session-1",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 2000);
  };

  const generateAIResponse = (question: string): string => {
    const responses = {
      "quadratic formula":
        "The quadratic formula is x = (-b ± √(b²-4ac)) / 2a. It's used to solve quadratic equations of the form ax² + bx + c = 0. Would you like me to walk through an example?",
      "photosynthesis":
        "Photosynthesis is the process plants use to make food from sunlight. Plants take in carbon dioxide from air and water from soil, then use sunlight energy to convert these into glucose (sugar) and oxygen. The equation is: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂",
      "algebraic equations":
        "To solve algebraic equations: 1) Simplify both sides, 2) Move variables to one side and constants to the other, 3) Use inverse operations to isolate the variable. For example: 2x + 5 = 11 → 2x = 6 → x = 3",
      "world war ii":
        "Main causes of WWII include: 1) Treaty of Versailles harsh terms, 2) Rise of totalitarian regimes (Nazi Germany, Fascist Italy), 3) Economic depression, 4) Failure of League of Nations, 5) Appeasement policies. These factors created conditions for global conflict.",
      "essay writing":
        "Essay writing tips: 1) Start with a clear thesis statement, 2) Create an outline with introduction, body paragraphs, and conclusion, 3) Use topic sentences for each paragraph, 4) Support arguments with evidence, 5) Proofread for grammar and clarity.",
    };

    const lowerQuestion = question.toLowerCase();
    for (const [key, response] of Object.entries(responses)) {
      if (lowerQuestion.includes(key)) {
        return response;
      }
    }

    return `I understand you're asking about "${question}". As an AI teaching assistant, I'm here to help explain concepts, provide study guidance, and answer academic questions. Could you provide more specific details about what you'd like to learn?`;
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            AI Teaching Assistant
          </h1>
          <p className="text-gray-600">
            Get instant help with your studies. Ask questions about any subject!
          </p>
        </div>

        {/* Chat Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Messages */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <SparklesIcon className="h-5 w-5 text-blue-500" />
                  Chat Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                  {messages.length === 0 ? (
                    <div className="text-center text-gray-500 py-8">
                      <SparklesIcon className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>Start a conversation by asking a question!</p>
                      <p className="text-sm mt-2">
                        Try asking about math, science, history, or study tips.
                      </p>
                    </div>
                  ) : (
                    messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${
                          message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        {message.role === "assistant" && (
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <SparklesIcon className="h-4 w-4 text-blue-600" />
                          </div>
                        )}
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.role === "user"
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.role === "user"
                                ? "text-blue-100"
                                : "text-gray-500"
                            }`}
                          >
                            {formatDateTime(message.timestamp)}
                          </p>
                        </div>
                        {message.role === "user" && (
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                            <UserIcon className="h-4 w-4 text-gray-600" />
                          </div>
                        )}
                      </div>
                    ))
                  )}
                  {isLoading && (
                    <div className="flex gap-3 justify-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <SparklesIcon className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="bg-gray-100 px-4 py-2 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    disabled={!input.trim() || isLoading}
                    className="px-4"
                  >
                    <PaperAirplaneIcon className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sample Questions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Sample Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {sampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="w-full text-left text-sm p-2 rounded bg-gray-50 hover:bg-gray-100 transition-colors"
                    disabled={isLoading}
                  >
                    {question}
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Chat Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Session Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <ClockIcon className="h-4 w-4 text-gray-400" />
                  <span>Started: {formatDateTime(new Date())}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-600">Messages: </span>
                  <span className="font-medium">{messages.length}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-600">Status: </span>
                  <span
                    className={`font-medium ${
                      isLoading ? "text-blue-600" : "text-green-600"
                    }`}
                  >
                    {isLoading ? "Typing..." : "Ready"}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
