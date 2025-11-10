"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AcademicCapIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { User } from "@/types";
import { formatDate } from "@/lib/utils";

const sampleStudents: (User & {
  grade: string;
  gpa: number;
  chatSessions: number;
  summariesGenerated: number;
})[] = [
  {
    id: "1",
    email: "john.smith@school.edu",
    name: "John Smith",
    role: "student",
    institutionId: "inst-1",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-10-01"),
    grade: "10th Grade",
    gpa: 3.8,
    chatSessions: 24,
    summariesGenerated: 12,
  },
  {
    id: "2",
    email: "emma.johnson@school.edu",
    name: "Emma Johnson",
    role: "student",
    institutionId: "inst-1",
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-09-28"),
    grade: "11th Grade",
    gpa: 3.9,
    chatSessions: 18,
    summariesGenerated: 8,
  },
  {
    id: "3",
    email: "michael.brown@school.edu",
    name: "Michael Brown",
    role: "student",
    institutionId: "inst-1",
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-10-02"),
    grade: "9th Grade",
    gpa: 3.6,
    chatSessions: 31,
    summariesGenerated: 15,
  },
  {
    id: "4",
    email: "sarah.davis@school.edu",
    name: "Sarah Davis",
    role: "student",
    institutionId: "inst-1",
    createdAt: new Date("2024-01-25"),
    updatedAt: new Date("2024-10-01"),
    grade: "12th Grade",
    gpa: 4.0,
    chatSessions: 16,
    summariesGenerated: 10,
  },
];

export default function StudentsPage() {
  const [students] = useState(sampleStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("all");

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade =
      selectedGrade === "all" || student.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  const grades = Array.from(new Set(students.map((s) => s.grade)));
  const totalStudents = students.length;
  const averageGPA =
    students.reduce((sum, s) => sum + s.gpa, 0) / students.length;
  const totalChatSessions = students.reduce(
    (sum, s) => sum + s.chatSessions,
    0
  );
  const totalSummaries = students.reduce(
    (sum, s) => sum + s.summariesGenerated,
    0
  );

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Student Management
            </h1>
            <p className="mt-2 text-gray-600">
              Monitor student progress and platform engagement
            </p>
          </div>
          <Button>
            <UserPlusIcon className="h-4 w-4 mr-2" />
            Add Student
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <AcademicCapIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {totalStudents}
                  </p>
                  <p className="text-sm text-gray-600">Total Students</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <ChartBarIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {averageGPA.toFixed(1)}
                  </p>
                  <p className="text-sm text-gray-600">Average GPA</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {totalChatSessions}
                  </p>
                  <p className="text-sm text-gray-600">Chat Sessions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <DocumentTextIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {totalSummaries}
                  </p>
                  <p className="text-sm text-gray-600">Summaries Used</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search students by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
              >
                <option value="all">All Grades</option>
                {grades.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Students Table */}
        <Card>
          <CardHeader>
            <CardTitle>Students ({filteredStudents.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">
                      Student
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">
                      Grade
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">
                      GPA
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">
                      Chat Sessions
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">
                      Summaries
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">
                      Joined
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-blue-600">
                              {student.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {student.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {student.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                          {student.grade}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">
                            {student.gpa.toFixed(1)}
                          </span>
                          <div
                            className={`w-2 h-2 rounded-full ${
                              student.gpa >= 3.8
                                ? "bg-green-500"
                                : student.gpa >= 3.5
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            }`}
                          />
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <ChatBubbleLeftRightIcon className="h-4 w-4 text-gray-400" />
                          <span>{student.chatSessions}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <DocumentTextIcon className="h-4 w-4 text-gray-400" />
                          <span>{student.summariesGenerated}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-500">
                        {formatDate(student.createdAt)}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Performance Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {students
                  .sort((a, b) => b.gpa - a.gpa)
                  .slice(0, 5)
                  .map((student, index) => (
                    <div key={student.id} className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                          index === 0
                            ? "bg-yellow-100 text-yellow-800"
                            : index === 1
                            ? "bg-gray-100 text-gray-800"
                            : index === 2
                            ? "bg-orange-100 text-orange-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {student.name}
                        </p>
                        <p className="text-sm text-gray-500">{student.grade}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">
                          {student.gpa.toFixed(1)}
                        </p>
                        <p className="text-sm text-gray-500">GPA</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Most Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {students
                  .sort((a, b) => b.chatSessions - a.chatSessions)
                  .slice(0, 5)
                  .map((student, index) => (
                    <div key={student.id} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-medium text-purple-800">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {student.name}
                        </p>
                        <p className="text-sm text-gray-500">{student.grade}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">
                          {student.chatSessions}
                        </p>
                        <p className="text-sm text-gray-500">Sessions</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
