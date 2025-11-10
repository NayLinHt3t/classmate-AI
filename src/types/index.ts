// Core types for the AI Teaching Assistant application

export interface User {
  id: string;
  email: string;
  name: string;
  role: "student" | "teacher" | "admin";
  institutionId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Institution {
  id: string;
  name: string;
  type: "school" | "university" | "college";
  address: string;
  contactEmail: string;
  subscriptionPlan: "basic" | "premium" | "enterprise";
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatMessage {
  id: string;
  userId: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  sessionId: string;
  attachments?: FileAttachment[];
}

export interface ChatSession {
  id: string;
  userId: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface LectureSummary {
  id: string;
  title: string;
  originalContent: string;
  summary: string;
  keyPoints: string[];
  teacherId: string;
  institutionId: string;
  subject: string;
  createdAt: Date;
  updatedAt: Date;
  fileAttachment?: FileAttachment;
}

export interface Reminder {
  id: string;
  userId: string;
  title: string;
  description: string;
  dueDate: Date;
  type: "assignment" | "exam" | "meeting" | "deadline" | "general";
  priority: "low" | "medium" | "high";
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface FileAttachment {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  url: string;
  uploadedBy: string;
  uploadedAt: Date;
}

export interface DashboardStats {
  totalStudents: number;
  totalTeachers: number;
  totalChatSessions: number;
  totalLectureSummaries: number;
  activeReminders: number;
  monthlyGrowth: {
    students: number;
    teachers: number;
    sessions: number;
  };
}

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
