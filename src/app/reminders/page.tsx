"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BellIcon,
  PlusIcon,
  CalendarDaysIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { Reminder } from "@/types";
import { formatDate, formatDateTime } from "@/lib/utils";

const sampleReminders: Reminder[] = [
  {
    id: "1",
    userId: "user-1",
    title: "Physics Assignment Due",
    description: "Quantum mechanics problem set - Chapter 5 exercises",
    dueDate: new Date("2024-10-10"),
    type: "assignment",
    priority: "high",
    completed: false,
    createdAt: new Date("2024-10-01"),
    updatedAt: new Date("2024-10-01"),
  },
  {
    id: "2",
    userId: "user-1",
    title: "Biology Lab Exam",
    description: "Microscopy and cell structure examination",
    dueDate: new Date("2024-10-15"),
    type: "exam",
    priority: "high",
    completed: false,
    createdAt: new Date("2024-10-02"),
    updatedAt: new Date("2024-10-02"),
  },
  {
    id: "3",
    userId: "user-1",
    title: "Parent-Teacher Meeting",
    description: "Discussion about student progress and upcoming projects",
    dueDate: new Date("2024-10-12"),
    type: "meeting",
    priority: "medium",
    completed: false,
    createdAt: new Date("2024-10-03"),
    updatedAt: new Date("2024-10-03"),
  },
  {
    id: "4",
    userId: "user-1",
    title: "Literature Essay Submission",
    description: "Analysis of Shakespeare's Hamlet - 1500 words",
    dueDate: new Date("2024-10-08"),
    type: "deadline",
    priority: "medium",
    completed: true,
    createdAt: new Date("2024-09-25"),
    updatedAt: new Date("2024-10-07"),
  },
];

export default function RemindersPage() {
  const [reminders, setReminders] = useState<Reminder[]>(sampleReminders);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newReminder, setNewReminder] = useState({
    title: "",
    description: "",
    dueDate: "",
    type: "general" as Reminder["type"],
    priority: "medium" as Reminder["priority"],
  });

  const handleAddReminder = () => {
    if (!newReminder.title || !newReminder.dueDate) return;

    const reminder: Reminder = {
      id: Date.now().toString(),
      userId: "current-user",
      title: newReminder.title,
      description: newReminder.description,
      dueDate: new Date(newReminder.dueDate),
      type: newReminder.type,
      priority: newReminder.priority,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setReminders((prev) => [reminder, ...prev]);
    setNewReminder({
      title: "",
      description: "",
      dueDate: "",
      type: "general",
      priority: "medium",
    });
    setShowAddForm(false);
  };

  const toggleCompletion = (id: string) => {
    setReminders((prev) =>
      prev.map((reminder) =>
        reminder.id === id
          ? {
              ...reminder,
              completed: !reminder.completed,
              updatedAt: new Date(),
            }
          : reminder
      )
    );
  };

  const getPriorityColor = (priority: Reminder["priority"]) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-50";
      case "medium":
        return "text-yellow-600 bg-yellow-50";
      case "low":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getTypeIcon = (type: Reminder["type"]) => {
    switch (type) {
      case "assignment":
        return "📝";
      case "exam":
        return "📚";
      case "meeting":
        return "👥";
      case "deadline":
        return "⏰";
      default:
        return "📌";
    }
  };

  const upcomingReminders = reminders.filter(
    (r) => !r.completed && new Date(r.dueDate) >= new Date()
  );
  const completedReminders = reminders.filter((r) => r.completed);
  const overdueReminders = reminders.filter(
    (r) => !r.completed && new Date(r.dueDate) < new Date()
  );

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Smart Reminders
            </h1>
            <p className="mt-2 text-gray-600">
              Never miss important deadlines and events
            </p>
          </div>
          <Button onClick={() => setShowAddForm(true)}>
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Reminder
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <BellIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {upcomingReminders.length}
                  </p>
                  <p className="text-sm text-gray-600">Upcoming</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {overdueReminders.length}
                  </p>
                  <p className="text-sm text-gray-600">Overdue</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {completedReminders.length}
                  </p>
                  <p className="text-sm text-gray-600">Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <CalendarDaysIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {reminders.length}
                  </p>
                  <p className="text-sm text-gray-600">Total</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Add Reminder Form */}
        {showAddForm && (
          <Card>
            <CardHeader>
              <CardTitle>Add New Reminder</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <Input
                    value={newReminder.title}
                    onChange={(e) =>
                      setNewReminder({ ...newReminder, title: e.target.value })
                    }
                    placeholder="Enter reminder title..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Due Date *
                  </label>
                  <Input
                    type="datetime-local"
                    value={newReminder.dueDate}
                    onChange={(e) =>
                      setNewReminder({
                        ...newReminder,
                        dueDate: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  value={newReminder.description}
                  onChange={(e) =>
                    setNewReminder({
                      ...newReminder,
                      description: e.target.value,
                    })
                  }
                  placeholder="Add description..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={newReminder.type}
                    onChange={(e) =>
                      setNewReminder({
                        ...newReminder,
                        type: e.target.value as Reminder["type"],
                      })
                    }
                  >
                    <option value="general">General</option>
                    <option value="assignment">Assignment</option>
                    <option value="exam">Exam</option>
                    <option value="meeting">Meeting</option>
                    <option value="deadline">Deadline</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Priority
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={newReminder.priority}
                    onChange={(e) =>
                      setNewReminder({
                        ...newReminder,
                        priority: e.target.value as Reminder["priority"],
                      })
                    }
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-2">
                <Button onClick={handleAddReminder}>Add Reminder</Button>
                <Button variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reminders Sections */}
        <div className="space-y-8">
          {/* Overdue Reminders */}
          {overdueReminders.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
                <ExclamationTriangleIcon className="h-5 w-5" />
                Overdue ({overdueReminders.length})
              </h2>
              <div className="space-y-4">
                {overdueReminders.map((reminder) => (
                  <Card key={reminder.id} className="border-red-200 bg-red-50">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <button
                            onClick={() => toggleCompletion(reminder.id)}
                            className="mt-1 w-5 h-5 border-2 border-gray-300 rounded hover:border-blue-500 transition-colors"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-lg">
                                {getTypeIcon(reminder.type)}
                              </span>
                              <h3 className="font-medium text-gray-900">
                                {reminder.title}
                              </h3>
                              <span
                                className={`px-2 py-1 text-xs rounded ${getPriorityColor(
                                  reminder.priority
                                )}`}
                              >
                                {reminder.priority}
                              </span>
                            </div>
                            {reminder.description && (
                              <p className="text-sm text-gray-600 mb-2">
                                {reminder.description}
                              </p>
                            )}
                            <p className="text-sm text-red-600 font-medium">
                              Due: {formatDateTime(reminder.dueDate)} (Overdue)
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Reminders */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BellIcon className="h-5 w-5" />
              Upcoming ({upcomingReminders.length})
            </h2>
            <div className="space-y-4">
              {upcomingReminders.map((reminder) => (
                <Card key={reminder.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <button
                          onClick={() => toggleCompletion(reminder.id)}
                          className="mt-1 w-5 h-5 border-2 border-gray-300 rounded hover:border-blue-500 transition-colors"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">
                              {getTypeIcon(reminder.type)}
                            </span>
                            <h3 className="font-medium text-gray-900">
                              {reminder.title}
                            </h3>
                            <span
                              className={`px-2 py-1 text-xs rounded ${getPriorityColor(
                                reminder.priority
                              )}`}
                            >
                              {reminder.priority}
                            </span>
                          </div>
                          {reminder.description && (
                            <p className="text-sm text-gray-600 mb-2">
                              {reminder.description}
                            </p>
                          )}
                          <p className="text-sm text-gray-500">
                            Due: {formatDateTime(reminder.dueDate)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Completed Reminders */}
          {completedReminders.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-green-600 mb-4 flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5" />
                Completed ({completedReminders.length})
              </h2>
              <div className="space-y-4">
                {completedReminders.map((reminder) => (
                  <Card key={reminder.id} className="opacity-75">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <button
                            onClick={() => toggleCompletion(reminder.id)}
                            className="mt-1 w-5 h-5 bg-green-500 text-white rounded flex items-center justify-center"
                          >
                            <CheckCircleIcon className="h-3 w-3" />
                          </button>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-lg">
                                {getTypeIcon(reminder.type)}
                              </span>
                              <h3 className="font-medium text-gray-900 line-through">
                                {reminder.title}
                              </h3>
                              <span
                                className={`px-2 py-1 text-xs rounded ${getPriorityColor(
                                  reminder.priority
                                )}`}
                              >
                                {reminder.priority}
                              </span>
                            </div>
                            {reminder.description && (
                              <p className="text-sm text-gray-600 mb-2 line-through">
                                {reminder.description}
                              </p>
                            )}
                            <p className="text-sm text-gray-500">
                              Completed: {formatDate(reminder.updatedAt)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
