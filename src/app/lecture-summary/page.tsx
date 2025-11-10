"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DocumentTextIcon,
  CloudArrowUpIcon,
  SparklesIcon,
  ArrowDownTrayIcon,
  AcademicCapIcon,
  ClockIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { generateFullSummary } from "@/lib/ai-service";
import { LectureSummary } from "@/types";
import { formatDateTime } from "@/lib/utils";

const sampleSummaries: LectureSummary[] = [
  {
    id: "1",
    title: "Introduction to Quantum Mechanics",
    originalContent: `Lecture Notes: Introduction to Quantum Mechanics
Date: October 1, 2024
Professor: Dr. Sarah Wilson

1. INTRODUCTION
Quantum mechanics represents one of the most revolutionary developments in physics, fundamentally changing our understanding of nature at the atomic and subatomic scales. Unlike classical mechanics, which describes the motion of macroscopic objects, quantum mechanics deals with the behavior of particles at the smallest scales.

2. WAVE-PARTICLE DUALITY
One of the core principles of quantum mechanics is wave-particle duality. This concept, first proposed by Louis de Broglie in 1924, suggests that all matter exhibits both wave-like and particle-like properties. Light, for example, can behave as both electromagnetic waves and as discrete packets of energy called photons.

The double-slit experiment demonstrates this duality beautifully. When electrons are fired at a screen with two slits, they create an interference pattern characteristic of waves. However, when we try to observe which slit the electron passes through, the interference pattern disappears, and the electrons behave like particles.

3. THE UNCERTAINTY PRINCIPLE
Werner Heisenberg's uncertainty principle is another fundamental concept in quantum mechanics. It states that there is a fundamental limit to the precision with which certain pairs of physical properties can be known simultaneously. The most famous example is the position-momentum uncertainty principle:

Δx · Δp ≥ ℏ/2

This means we cannot know both the exact position and exact momentum of a particle at the same time. This is not due to measurement limitations but is a fundamental property of nature.

4. QUANTUM STATES AND SUPERPOSITION
In quantum mechanics, particles exist in quantum states described by wave functions. Before measurement, a particle can exist in a superposition of multiple states simultaneously. This is famously illustrated by Schrödinger's cat thought experiment.

The act of measurement causes the wave function to "collapse" to one definite state. This measurement problem remains one of the most debated topics in quantum mechanics.

5. APPLICATIONS AND IMPLICATIONS
Quantum mechanics has led to numerous technological applications:
- Semiconductors and computer chips
- Lasers and LED technology
- MRI machines in medicine
- Quantum computing (emerging field)

Understanding these principles is crucial for modern physics and technology development.

CONCLUSION
Quantum mechanics challenges our classical intuition about reality but provides an incredibly accurate description of nature at small scales. As we continue to explore this field, new applications and deeper understanding continue to emerge.`,
    summary:
      "This comprehensive lecture covered the fundamental principles of quantum mechanics, introducing students to wave-particle duality, the Heisenberg uncertainty principle, and quantum superposition. The lecture explored how quantum mechanics differs from classical physics and discussed its practical applications in modern technology, from semiconductors to quantum computing. Students learned about key experiments like the double-slit experiment and thought experiments like Schrödinger's cat that illustrate quantum phenomena.",
    keyPoints: [
      "Wave-particle duality: All matter exhibits both wave-like and particle-like properties, as demonstrated by the double-slit experiment",
      "Heisenberg uncertainty principle: There's a fundamental limit to simultaneously knowing certain pairs of properties like position and momentum (Δx · Δp ≥ ℏ/2)",
      "Quantum superposition: Particles exist in multiple states simultaneously until measured, when the wave function collapses to a definite state",
      "Observation affects quantum systems: The act of measurement fundamentally changes the system being observed",
      "Practical applications: Quantum mechanics enables technologies like semiconductors, lasers, MRI machines, and emerging quantum computers",
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
    originalContent: `Lecture Notes: Cell Division and Mitosis
Date: September 28, 2024
Professor: Prof. Carlos Martinez

INTRODUCTION TO CELL DIVISION
Cell division is a fundamental process by which a parent cell divides into two or more daughter cells. This process is essential for growth, development, and tissue repair in multicellular organisms. There are two main types of cell division: mitosis and meiosis. Today we focus on mitosis.

THE CELL CYCLE
Before understanding mitosis, we must understand the cell cycle. The cell cycle consists of:

1. Interphase (90% of the cycle):
   - G1 Phase (Gap 1): Cell grows and performs normal functions
   - S Phase (Synthesis): DNA replication occurs, chromosomes duplicate
   - G2 Phase (Gap 2): Cell prepares for division, organelles duplicate

2. M Phase (Mitosis): Cell division occurs

PHASES OF MITOSIS

1. PROPHASE
- Chromatin condenses into visible chromosomes
- Each chromosome consists of two sister chromatids joined at the centromere
- Nuclear envelope begins to break down
- Centrioles move to opposite poles of the cell
- Spindle fibers begin to form

2. METAPHASE
- Chromosomes align at the cell's equator (metaphase plate)
- Spindle fibers attach to kinetochores on each chromosome
- This is the most critical checkpoint - cells ensure all chromosomes are properly attached before proceeding

3. ANAPHASE
- Sister chromatids separate and move to opposite poles
- Spindle fibers shorten, pulling chromatids apart
- Cell elongates
- This is the shortest phase of mitosis

4. TELOPHASE
- Chromosomes decondense back into chromatin
- Nuclear envelopes reform around each set of chromosomes
- Spindle apparatus disassembles
- Cleavage furrow begins to form

5. CYTOKINESIS (often considered part of telophase)
- Cytoplasm divides
- In animal cells: cleavage furrow deepens until cell splits
- In plant cells: cell plate forms between daughter cells
- Results in two genetically identical daughter cells

CELL CYCLE CHECKPOINTS
The cell has several checkpoints to ensure proper division:

1. G1 Checkpoint: Checks cell size, nutrients, growth signals, DNA damage
2. G2 Checkpoint: Verifies DNA replication completion and checks for damage
3. M Checkpoint (Spindle checkpoint): Ensures all chromosomes are attached to spindle

If errors are detected, the cycle can pause or trigger apoptosis (programmed cell death).

IMPORTANCE OF MITOSIS
- Growth: Allows organisms to grow from a single cell
- Tissue repair: Replaces damaged or dead cells
- Asexual reproduction: Some organisms reproduce through mitosis
- Maintains genetic consistency: Daughter cells are genetically identical to parent

CLINICAL RELEVANCE
- Cancer results from uncontrolled cell division
- Many cancer treatments target rapidly dividing cells
- Understanding mitosis is crucial for regenerative medicine

SUMMARY
Mitosis is a precisely regulated process ensuring accurate distribution of genetic material to daughter cells. Its importance cannot be overstated for life as we know it.`,
    summary:
      "This detailed lecture explained the process of cell division through mitosis, covering all five phases: prophase, metaphase, anaphase, telophase, and cytokinesis. Students learned about the cell cycle stages (G1, S, G2, and M phases), the importance of cell cycle checkpoints, and how cells ensure accurate chromosome distribution. The lecture emphasized mitosis's crucial role in growth, tissue repair, and maintaining genetic consistency, while also discussing its clinical relevance in understanding cancer and developing treatments.",
    keyPoints: [
      "Mitosis consists of five distinct phases: prophase (chromosome condensation), metaphase (chromosome alignment), anaphase (chromatid separation), telophase (nuclear envelope reformation), and cytokinesis (cytoplasm division)",
      "Cell cycle checkpoints (G1, G2, and M checkpoints) ensure proper cell division and prevent errors that could lead to cancer",
      "Chromosome alignment at the metaphase plate is crucial for proper division - spindle fibers must attach correctly to kinetochores before the cell proceeds",
      "Mitosis produces two genetically identical daughter cells, maintaining the same chromosome number as the parent cell",
      "Mitosis enables growth, tissue repair, and asexual reproduction, while its dysregulation leads to diseases like cancer",
      "The entire cell cycle takes 24 hours on average, with interphase occupying 90% of the time and mitosis only 10%",
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
  const [lectureContent, setLectureContent] = useState("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [selectedSummary, setSelectedSummary] = useState<LectureSummary | null>(
    null
  );
  const [showDetailModal, setShowDetailModal] = useState(false);

  const handleViewDetails = (summary: LectureSummary) => {
    setSelectedSummary(summary);
    setShowDetailModal(true);
  };

  const handleDownloadPDF = (summary: LectureSummary) => {
    // Create detailed formatted content
    const pdfContent = `
╔═══════════════════════════════════════════════════════════════════════════╗
║                           CLASSMATE AI                                    ║
║                        LECTURE SUMMARY REPORT                             ║
╚═══════════════════════════════════════════════════════════════════════════╝

LECTURE INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Title:              ${summary.title}
Subject:            ${summary.subject}
Date Created:       ${new Date(summary.createdAt).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}
Time:               ${new Date(summary.createdAt).toLocaleTimeString("en-US")}
Summary ID:         ${summary.id}
Teacher ID:         ${summary.teacherId}


AI-GENERATED SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${summary.summary}


KEY LEARNING POINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${summary.keyPoints
  .map(
    (point, i) => `
${i + 1}. ${point}
`
  )
  .join("\n")}

COMPLETE LECTURE CONTENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${summary.originalContent}


═══════════════════════════════════════════════════════════════════════════

Document Statistics:
- Total Key Points: ${summary.keyPoints.length}
- Content Length: ${summary.originalContent.length} characters
- Summary Length: ${summary.summary.length} characters
- Compression Ratio: ${(
      (summary.summary.length / summary.originalContent.length) *
      100
    ).toFixed(1)}%

═══════════════════════════════════════════════════════════════════════════

Generated by Classmate AI - Your AI Teaching Assistant
Platform: https://classmate-ai.com
Generated on: ${new Date().toLocaleString("en-US")}

This summary was automatically generated using advanced AI technology.
For questions or feedback, contact your institution administrator.

═══════════════════════════════════════════════════════════════════════════
    `.trim();

    // Create blob and download
    const blob = new Blob([pdfContent], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const fileName = `${summary.title
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase()}_${summary.subject
      .replace(/[^a-z0-9]/gi, "_")
      .toLowerCase()}_summary_${new Date().getTime()}.txt`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Show success message (you could add a toast notification here)
    console.log(`Downloaded: ${fileName}`);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setLectureContent(text);
        setUploadedFile(file);
      };
      reader.readAsText(file);
    } else if (file) {
      setUploadedFile(file);
      // For non-text files, we'll use a placeholder
      setLectureContent(
        `[Content from ${file.name} - file processing not implemented in this demo]`
      );
    }
  };

  const handleGenerateSummary = async () => {
    if ((!uploadedFile && !lectureContent) || !title || !subject) return;

    setIsUploading(true);

    try {
      // Get the content to summarize
      let contentToSummarize = lectureContent;

      // If no content but has file, use a message
      if (!contentToSummarize && uploadedFile) {
        contentToSummarize = `This is lecture content from the file: ${uploadedFile.name}. In a production environment, this would extract text from PDF, DOCX, or transcribe audio/video files.`;
      }

      // Generate AI summary
      const { summary, keyPoints } = await generateFullSummary(
        contentToSummarize
      );

      const newSummary: LectureSummary = {
        id: Date.now().toString(),
        title,
        originalContent: contentToSummarize,
        summary,
        keyPoints,
        teacherId: "current-teacher",
        institutionId: "current-inst",
        subject,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      setSummaries((prev) => [newSummary, ...prev]);
      setUploadedFile(null);
      setLectureContent("");
      setTitle("");
      setSubject("");
    } catch (error) {
      console.error("Error generating summary:", error);
      // Fallback to simple summary
      const newSummary: LectureSummary = {
        id: Date.now().toString(),
        title,
        originalContent: lectureContent || `Content from ${uploadedFile?.name}`,
        summary: `AI-generated summary of ${title}: This lecture covers key concepts and provides comprehensive understanding of the subject matter.`,
        keyPoints: [
          "Main concept explained with examples",
          "Important principles covered",
          "Key theories and practical applications",
        ],
        teacherId: "current-teacher",
        institutionId: "current-inst",
        subject,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setSummaries((prev) => [newSummary, ...prev]);
      setUploadedFile(null);
      setLectureContent("");
      setTitle("");
      setSubject("");
    } finally {
      setIsUploading(false);
    }
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
                Upload Lecture Content (TXT files)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".txt"
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
                        TXT files supported
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Paste Lecture Content
              </label>
              <textarea
                value={lectureContent}
                onChange={(e) => setLectureContent(e.target.value)}
                placeholder="Paste your lecture content here..."
                className="w-full h-40 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
              <p className="mt-2 text-xs text-gray-500">
                Paste lecture notes, transcripts, or any educational content to
                generate an AI summary
              </p>
            </div>

            <Button
              onClick={handleGenerateSummary}
              disabled={
                (!uploadedFile && !lectureContent) ||
                !title ||
                !subject ||
                isUploading
              }
              className="w-full"
            >
              {isUploading ? (
                <>
                  <SparklesIcon className="h-4 w-4 mr-2 animate-spin" />
                  Generating AI Summary...
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
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleViewDetails(summary)}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadPDF(summary)}
                    >
                      <ArrowDownTrayIcon className="h-4 w-4 mr-1" />
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

        {/* Detail Modal */}
        {showDetailModal && selectedSummary && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              {/* Background overlay */}
              <div
                className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                onClick={() => setShowDetailModal(false)}
              ></div>

              {/* Modal panel */}
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedSummary.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <AcademicCapIcon className="h-4 w-4" />
                          {selectedSummary.subject}
                        </span>
                        <span className="flex items-center gap-1">
                          <ClockIcon className="h-4 w-4" />
                          {formatDateTime(selectedSummary.createdAt)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowDetailModal(false)}
                      className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Document Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">
                          {selectedSummary.keyPoints.length}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">Key Points</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">
                          {selectedSummary.originalContent.length}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Chars (Original)
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-600">
                          {selectedSummary.summary.length}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Chars (Summary)
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-orange-600">
                          {(
                            (selectedSummary.summary.length /
                              selectedSummary.originalContent.length) *
                            100
                          ).toFixed(1)}
                          %
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          Compression
                        </p>
                      </div>
                    </div>

                    {/* Summary Section */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <SparklesIcon className="h-5 w-5 text-blue-500" />
                        AI-Generated Summary
                      </h4>
                      <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        {selectedSummary.summary}
                      </p>
                    </div>

                    {/* Key Points Section */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <DocumentTextIcon className="h-5 w-5 text-green-500" />
                        Key Learning Points ({selectedSummary.keyPoints.length})
                      </h4>
                      <ul className="space-y-3">
                        {selectedSummary.keyPoints.map((point, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border-l-4 border-blue-400 hover:shadow-md transition-shadow"
                          >
                            <span className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                              {index + 1}
                            </span>
                            <span className="text-gray-700 flex-1 pt-1">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metadata Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Document ID
                        </p>
                        <p className="text-sm text-gray-900 font-mono">
                          {selectedSummary.id}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Teacher ID
                        </p>
                        <p className="text-sm text-gray-900 font-mono">
                          {selectedSummary.teacherId}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Created On
                        </p>
                        <p className="text-sm text-gray-900">
                          {new Date(selectedSummary.createdAt).toLocaleString(
                            "en-US",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Last Updated
                        </p>
                        <p className="text-sm text-gray-900">
                          {new Date(selectedSummary.updatedAt).toLocaleString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Original Content Section */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <DocumentTextIcon className="h-5 w-5 text-purple-500" />
                          Complete Lecture Content
                        </span>
                        <span className="text-sm text-gray-500 font-normal">
                          {selectedSummary.originalContent.split(" ").length}{" "}
                          words
                        </span>
                      </h4>
                      <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto border border-gray-200">
                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed text-sm">
                          {selectedSummary.originalContent}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 text-center italic">
                        Scroll to view complete content
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse gap-3">
                  <Button onClick={() => handleDownloadPDF(selectedSummary)}>
                    <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                    Download as PDF
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowDetailModal(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
