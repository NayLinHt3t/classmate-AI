"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DocumentTextIcon,
  CloudArrowUpIcon,
  SparklesIcon,
  ClockIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { LectureSummary } from "@/types";
import { formatDateTime } from "@/lib/utils";

const sampleSummaries: LectureSummary[] = [
  {
    id: "1",
    title: "Introduction to Quantum Mechanics",
    originalContent: "Full lecture transcript...",
    summary:
      "This lecture covered the fundamental principles of quantum mechanics, including wave-particle duality, the uncertainty principle, and quantum states.",
    keyPoints: [
      "Wave-particle duality explains light and matter behavior",
      "Heisenberg uncertainty principle limits precision",
      "Quantum states exist in superposition",
      "Observation affects quantum systems",
    ],
    teacherId: "teacher-1",
    institutionId: "inst-1",
    subject: "Physics",
    createdAt: new Date("2024-10-01"),
    updatedAt: new Date("2024-10-01"),
  },
  {
    id: "2",
    title: "Cell Division and Mitosis",
    originalContent: "Full lecture transcript...",
    summary:
      "Detailed explanation of cell division processes, focusing on mitosis phases and their importance in growth and repair.",
    keyPoints: [
      "Mitosis consists of prophase, metaphase, anaphase, telophase",
      "Chromosome alignment is crucial for proper division",
      "Cell cycle checkpoints prevent errors",
      "Mitosis enables growth and tissue repair",
    ],
    teacherId: "teacher-2",
    institutionId: "inst-1",
    subject: "Biology",
    createdAt: new Date("2024-09-28"),
    updatedAt: new Date("2024-09-28"),
  },
];

export default function LectureSummaryPage() {
  const [summaries, setSummaries] = useState<LectureSummary[]>(sampleSummaries);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleGenerateSummary = async () => {
    if (!uploadedFile || !title || !subject) return;

    setIsUploading(true);

    // Simulate API call
    setTimeout(() => {
      const newSummary: LectureSummary = {
        id: Date.now().toString(),
        title,
        originalContent: `Content from ${uploadedFile.name}`,
        summary: `AI-generated summary of ${title}: This lecture covers key concepts and provides comprehensive understanding of the subject matter. The content has been analyzed and condensed into essential points for easy review and study.`,
        keyPoints: [
          "Main concept 1 explained with examples",
          "Important principle 2 with practical applications",
          "Key theory 3 and its implications",
          "Summary of practical exercises and takeaways",
        ],
        teacherId: "current-teacher",
        institutionId: "current-inst",
        subject,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      setSummaries((prev) => [newSummary, ...prev]);
      setUploadedFile(null);
      setTitle("");
      setSubject("");
      setIsUploading(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Lecture Summary</h1>
          <p className="mt-2 text-gray-600">
            Upload lecture content and get AI-powered summaries instantly
          </p>
        </div>

        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CloudArrowUpIcon className="h-5 w-5 text-green-500" />
              Create New Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lecture Title
                </label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter lecture title..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g., Physics, Biology, Mathematics..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Lecture Content
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.docx,.txt,.mp3,.mp4"
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  {uploadedFile ? (
                    <div className="space-y-2">
                      <DocumentTextIcon className="h-8 w-8 text-green-500 mx-auto" />
                      <p className="text-sm text-gray-600">
                        {uploadedFile.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        Click to change file
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <CloudArrowUpIcon className="h-8 w-8 text-gray-400 mx-auto" />
                      <p className="text-sm text-gray-600">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-400">
                        PDF, DOCX, TXT, MP3, MP4 files supported
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <Button
              onClick={handleGenerateSummary}
              disabled={!uploadedFile || !title || !subject || isUploading}
              className="w-full"
            >
              {isUploading ? (
                <>
                  <SparklesIcon className="h-4 w-4 mr-2 animate-spin" />
                  Generating Summary...
                </>
              ) : (
                <>
                  <SparklesIcon className="h-4 w-4 mr-2" />
                  Generate AI Summary
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Summaries List */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Recent Summaries
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {summaries.map((summary) => (
              <Card
                key={summary.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{summary.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <AcademicCapIcon className="h-4 w-4" />
                          {summary.subject}
                        </span>
                        <span className="flex items-center gap-1">
                          <ClockIcon className="h-4 w-4" />
                          {formatDateTime(summary.createdAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Summary</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {summary.summary}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Key Points
                    </h4>
                    <ul className="space-y-1">
                      {summary.keyPoints.map((point, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <DocumentTextIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {summaries.length}
                  </p>
                  <p className="text-sm text-gray-600">Total Summaries</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <SparklesIcon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">95%</p>
                  <p className="text-sm text-gray-600">Accuracy Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <ClockIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">2.5min</p>
                  <p className="text-sm text-gray-600">Avg Processing</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
