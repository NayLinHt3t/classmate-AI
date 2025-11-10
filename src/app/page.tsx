"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout";
import {
  ChartBarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  BellIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    title: "Total Students",
    value: "2,847",
    change: "+12%",
    changeType: "positive" as const,
    icon: AcademicCapIcon,
  },
  {
    title: "Active Teachers",
    value: "184",
    change: "+3%",
    changeType: "positive" as const,
    icon: UserGroupIcon,
  },
  {
    title: "Chat Sessions",
    value: "1,423",
    change: "+18%",
    changeType: "positive" as const,
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Lecture Summaries",
    value: "892",
    change: "+25%",
    changeType: "positive" as const,
    icon: DocumentTextIcon,
  },
  {
    title: "Active Reminders",
    value: "156",
    change: "-5%",
    changeType: "negative" as const,
    icon: BellIcon,
  },
  {
    title: "System Efficiency",
    value: "94.2%",
    change: "+2.1%",
    changeType: "positive" as const,
    icon: ArrowTrendingUpIcon,
  },
];

const recentActivities = [
  {
    id: 1,
    type: "chat",
    message: "New chat session started by John Smith (Grade 10)",
    time: "2 minutes ago",
  },
  {
    id: 2,
    type: "summary",
    message: 'Physics lecture summary generated for "Quantum Mechanics"',
    time: "15 minutes ago",
  },
  {
    id: 3,
    type: "reminder",
    message: "Assignment deadline reminder sent to Biology students",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "chat",
    message: "AI resolved 12 student queries automatically",
    time: "2 hours ago",
  },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Welcome to Classmate AI - Your comprehensive teaching assistant
            platform
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.title} className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-5 w-5 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <p
                  className={`text-xs ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  <span className="inline-flex items-center">
                    {stat.change} from last month
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ChartBarIcon className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div
                    className={`mt-1 h-2 w-2 rounded-full ${
                      activity.type === "chat"
                        ? "bg-blue-500"
                        : activity.type === "summary"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-500 mb-2" />
                  <span className="text-sm font-medium">Start Chat</span>
                </button>
                <button className="flex flex-col items-center p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <DocumentTextIcon className="h-8 w-8 text-green-500 mb-2" />
                  <span className="text-sm font-medium">Create Summary</span>
                </button>
                <button className="flex flex-col items-center p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <BellIcon className="h-8 w-8 text-yellow-500 mb-2" />
                  <span className="text-sm font-medium">Set Reminder</span>
                </button>
                <button className="flex flex-col items-center p-4 text-center border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <UserGroupIcon className="h-8 w-8 text-purple-500 mb-2" />
                  <span className="text-sm font-medium">Manage Users</span>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feature Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Platform Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mx-auto h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  AI Chatbot
                </h3>
                <p className="text-sm text-gray-600">
                  24/7 student support with intelligent Q&A assistance and
                  automated responses.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <DocumentTextIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Lecture Summary
                </h3>
                <p className="text-sm text-gray-600">
                  Automated summarization of educational content to reduce
                  teacher workload.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <BellIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Smart Reminders
                </h3>
                <p className="text-sm text-gray-600">
                  Intelligent scheduling system for assignments, exams, and
                  important deadlines.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
