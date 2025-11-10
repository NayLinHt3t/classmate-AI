"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  UserGroupIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import { User } from "@/types";
import { formatDate } from "@/lib/utils";

const sampleTeachers: (User & {
  department: string;
  summariesCreated: number;
  studentsHelped: number;
  activeReminders: number;
})[] = [
  {
    id: "1",
    email: "dr.wilson@school.edu",
    name: "Dr. Sarah Wilson",
    role: "teacher",
    institutionId: "inst-1",
    createdAt: new Date("2023-08-15"),
    updatedAt: new Date("2024-10-01"),
    department: "Physics",
    summariesCreated: 45,
    studentsHelped: 120,
    activeReminders: 8,
  },
  {
    id: "2",
    email: "prof.martinez@school.edu",
    name: "Prof. Carlos Martinez",
    role: "teacher",
    institutionId: "inst-1",
    createdAt: new Date("2023-09-01"),
    updatedAt: new Date("2024-09-28"),
    department: "Biology",
    summariesCreated: 38,
    studentsHelped: 95,
    activeReminders: 12,
  },
  {
    id: "3",
    email: "ms.chen@school.edu",
    name: "Ms. Lisa Chen",
    role: "teacher",
    institutionId: "inst-1",
    createdAt: new Date("2023-08-20"),
    updatedAt: new Date("2024-10-02"),
    department: "Mathematics",
    summariesCreated: 52,
    studentsHelped: 140,
    activeReminders: 6,
  },
  {
    id: "4",
    email: "mr.thompson@school.edu",
    name: "Mr. David Thompson",
    role: "teacher",
    institutionId: "inst-1",
    createdAt: new Date("2023-07-10"),
    updatedAt: new Date("2024-10-01"),
    department: "English Literature",
    summariesCreated: 29,
    studentsHelped: 85,
    activeReminders: 10,
  },
  {
    id: "5",
    email: "dr.patel@school.edu",
    name: "Dr. Anjali Patel",
    role: "teacher",
    institutionId: "inst-1",
    createdAt: new Date("2023-09-15"),
    updatedAt: new Date("2024-09-30"),
    department: "Chemistry",
    summariesCreated: 41,
    studentsHelped: 110,
    activeReminders: 9,
  },
];

export default function TeachersPage() {
  const [teachers] = useState(sampleTeachers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSearch =
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || teacher.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const departments = Array.from(new Set(teachers.map((t) => t.department)));
  const totalTeachers = teachers.length;
  const totalSummaries = teachers.reduce(
    (sum, t) => sum + t.summariesCreated,
    0
  );
  const totalStudentsHelped = teachers.reduce(
    (sum, t) => sum + t.studentsHelped,
    0
  );
  const totalActiveReminders = teachers.reduce(
    (sum, t) => sum + t.activeReminders,
    0
  );

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Teacher Management
            </h1>
            <p className="mt-2 text-gray-600">
              Monitor faculty engagement and platform usage
            </p>
          </div>
          <Button>
            <UserPlusIcon className="h-4 w-4 mr-2" />
            Add Teacher
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <UserGroupIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {totalTeachers}
                  </p>
                  <p className="text-sm text-gray-600">Total Teachers</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DocumentTextIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {totalSummaries}
                  </p>
                  <p className="text-sm text-gray-600">Summaries Created</p>
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
                    {totalStudentsHelped}
                  </p>
                  <p className="text-sm text-gray-600">Students Helped</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <BellIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {totalActiveReminders}
                  </p>
                  <p className="text-sm text-gray-600">Active Reminders</p>
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
                  placeholder="Search teachers by name, email, or department..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="all">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Teachers Table */}
        <Card>
          <CardHeader>
            <CardTitle>Faculty Members ({filteredTeachers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">
                      Teacher
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">
                      Department
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">
                      Summaries
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">
                      Students Helped
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">
                      Reminders
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
                  {filteredTeachers.map((teacher) => (
                    <tr key={teacher.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-purple-600">
                              {teacher.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {teacher.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {teacher.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                          {teacher.department}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <DocumentTextIcon className="h-4 w-4 text-gray-400" />
                          <span className="font-medium">
                            {teacher.summariesCreated}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <ChatBubbleLeftRightIcon className="h-4 w-4 text-gray-400" />
                          <span className="font-medium">
                            {teacher.studentsHelped}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-1">
                          <BellIcon className="h-4 w-4 text-gray-400" />
                          <span
                            className={`font-medium ${
                              teacher.activeReminders > 0
                                ? "text-yellow-600"
                                : "text-gray-500"
                            }`}
                          >
                            {teacher.activeReminders}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-500">
                        {formatDate(teacher.createdAt)}
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
              <CardTitle>Most Active Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teachers
                  .sort((a, b) => b.summariesCreated - a.summariesCreated)
                  .slice(0, 5)
                  .map((teacher, index) => (
                    <div key={teacher.id} className="flex items-center gap-3">
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
                          {teacher.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {teacher.department}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">
                          {teacher.summariesCreated}
                        </p>
                        <p className="text-sm text-gray-500">Summaries</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Student Impact Leaders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teachers
                  .sort((a, b) => b.studentsHelped - a.studentsHelped)
                  .slice(0, 5)
                  .map((teacher, index) => (
                    <div key={teacher.id} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs font-medium text-purple-800">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          {teacher.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {teacher.department}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">
                          {teacher.studentsHelped}
                        </p>
                        <p className="text-sm text-gray-500">Students</p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Department Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departments.map((dept) => {
                const deptTeachers = teachers.filter(
                  (t) => t.department === dept
                );
                const deptSummaries = deptTeachers.reduce(
                  (sum, t) => sum + t.summariesCreated,
                  0
                );
                const deptStudents = deptTeachers.reduce(
                  (sum, t) => sum + t.studentsHelped,
                  0
                );

                return (
                  <div
                    key={dept}
                    className="p-4 border border-gray-200 rounded-lg"
                  >
                    <h3 className="font-medium text-gray-900 mb-2">{dept}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Teachers</span>
                        <span className="font-medium">
                          {deptTeachers.length}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Summaries</span>
                        <span className="font-medium">{deptSummaries}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Students</span>
                        <span className="font-medium">{deptStudents}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
