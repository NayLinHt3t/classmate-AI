// Client-side AI service with simulated responses
// Note: Real client-side AI (Transformers.js) has compatibility issues with Next.js 15 + Turbopack
// Using enhanced simulated responses which work reliably and are perfect for Vercel deployment

let isInitialized = false;

export async function initializeAI() {
  if (isInitialized) return true;

  try {
    console.log("Initializing AI assistant...");
    // Simulate initialization time
    await new Promise((resolve) => setTimeout(resolve, 500));
    isInitialized = true;
    console.log("AI assistant ready!");
    return true;
  } catch (error) {
    console.error("Failed to initialize AI:", error);
    throw error;
  }
}

export async function generateAIResponse(message: string): Promise<string> {
  if (!isInitialized) {
    await initializeAI();
  }

  // Use enhanced simulated responses
  return getSimulatedResponse(message);
}

function getSimulatedResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  // Greetings
  if (lowerMessage.match(/^(hi|hello|hey|greetings)/)) {
    return "Hello! I'm Classmate AI, your educational assistant. I'm here to help you with any subject - math, science, writing, study tips, and more. What would you like to learn about today?";
  }

  // Math-specific topics
  if (lowerMessage.includes("quadratic")) {
    return "The quadratic formula is x = (-b ± √(b²-4ac)) / 2a. It's used to solve equations in the form ax² + bx + c = 0. For example, to solve x² - 5x + 6 = 0, you'd identify a=1, b=-5, c=6, then plug them into the formula to get x = 2 or x = 3.";
  }

  if (lowerMessage.includes("pythagorean")) {
    return "The Pythagorean theorem states that in a right triangle, a² + b² = c², where c is the hypotenuse (longest side). For example, if a triangle has sides of 3 and 4, the hypotenuse would be √(3² + 4²) = √25 = 5.";
  }

  if (lowerMessage.includes("fraction") || lowerMessage.includes("divide")) {
    return "When working with fractions: To add/subtract, find a common denominator. To multiply, multiply numerators and denominators. To divide, multiply by the reciprocal. For example: 1/2 ÷ 1/4 = 1/2 × 4/1 = 4/2 = 2.";
  }

  if (lowerMessage.includes("algebra") || lowerMessage.includes("solve for")) {
    return "To solve algebraic equations: 1) Simplify both sides, 2) Get variables on one side and constants on the other, 3) Use inverse operations to isolate the variable. For example: 2x + 5 = 11 → 2x = 6 → x = 3.";
  }

  // Science topics
  if (lowerMessage.includes("photosynthesis")) {
    return "Photosynthesis is how plants make food using sunlight. Plants take in CO₂ from air and H₂O from soil, then use light energy to create glucose (C₆H₁₂O₆) and release oxygen (O₂). The equation is: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. This happens in chloroplasts containing chlorophyll.";
  }

  if (lowerMessage.includes("cell") && lowerMessage.includes("differ")) {
    return "Plant and animal cells differ in key ways: Plant cells have cell walls, chloroplasts, and large vacuoles. Animal cells have centrioles and smaller vacuoles. Both have nuclei, mitochondria, cell membranes, and cytoplasm.";
  }

  if (lowerMessage.includes("gravity") || lowerMessage.includes("newton")) {
    return "Gravity is the force that attracts objects with mass toward each other. Newton's Law of Universal Gravitation states F = G(m₁m₂)/r². On Earth, gravity accelerates objects at 9.8 m/s². This is why objects fall and why planets orbit the sun.";
  }

  if (lowerMessage.includes("dna") || lowerMessage.includes("rna")) {
    return "DNA (deoxyribonucleic acid) stores genetic information with bases A, T, C, G in a double helix. RNA (ribonucleic acid) uses A, U, C, G in a single strand and helps make proteins. DNA is the blueprint; RNA is the messenger that reads it.";
  }

  // History topics
  if (lowerMessage.includes("world war")) {
    return "World War II (1939-1945) was caused by the Treaty of Versailles' harsh terms, rise of totalitarian regimes (Nazi Germany, Fascist Italy, Imperial Japan), economic depression, and failure of the League of Nations. It ended with Allied victory and led to the United Nations' formation.";
  }

  if (lowerMessage.includes("civil rights")) {
    return "The Civil Rights Movement (1954-1968) fought to end racial segregation and discrimination against African Americans. Key events included Brown v. Board of Education, Montgomery Bus Boycott, March on Washington, and the Civil Rights Act of 1964. Leaders like MLK Jr. advocated nonviolent resistance.";
  }

  // Writing topics
  if (lowerMessage.includes("thesis")) {
    return "A thesis statement is your essay's main argument in 1-2 sentences. It should be specific, debatable, and appear at the end of your introduction. For example: 'Social media negatively impacts teen mental health through increased anxiety, depression, and cyberbullying.'";
  }

  if (lowerMessage.includes("essay") || lowerMessage.includes("paragraph")) {
    return "Essay structure: 1) Introduction with hook and thesis, 2) Body paragraphs with topic sentences, evidence, and analysis (3-5 paragraphs), 3) Conclusion restating thesis and main points. Each paragraph should focus on one main idea supporting your thesis.";
  }

  if (
    lowerMessage.includes("grammar") ||
    lowerMessage.includes("punctuation")
  ) {
    return "Common grammar rules: Use commas to separate items in lists and after introductory phrases. Use semicolons to connect related independent clauses. Use apostrophes for possessives (John's book) and contractions (don't). Subject-verb agreement is crucial.";
  }

  // Study and learning
  if (lowerMessage.includes("study") || lowerMessage.includes("memorize")) {
    return "Effective study techniques: 1) Spaced repetition (review material over increasing intervals), 2) Active recall (test yourself), 3) Pomodoro Technique (25-min focused study, 5-min break), 4) Teach concepts to others, 5) Create mind maps and flashcards. Avoid cramming!";
  }

  if (lowerMessage.includes("exam") || lowerMessage.includes("test")) {
    return "Test preparation tips: Start studying 1-2 weeks early, practice with past papers, focus on weak areas, get enough sleep (8 hours before), eat a good breakfast, arrive early, read instructions carefully, manage time (skip hard questions, return later), and review answers.";
  }

  if (lowerMessage.includes("concentrate") || lowerMessage.includes("focus")) {
    return "To improve concentration: 1) Remove distractions (phone away, quiet space), 2) Use techniques like Pomodoro, 3) Take regular breaks, 4) Stay hydrated and eat healthy, 5) Exercise regularly, 6) Try background music (classical or lo-fi), 7) Set specific goals for each study session.";
  }

  // General subjects
  if (lowerMessage.includes("math") || lowerMessage.includes("calculate")) {
    return "I can help with math! Whether it's arithmetic, algebra, geometry, trigonometry, or calculus, I'm here to break down concepts step by step. What specific math topic or problem would you like help with?";
  }

  if (
    lowerMessage.includes("science") ||
    lowerMessage.includes("biology") ||
    lowerMessage.includes("chemistry") ||
    lowerMessage.includes("physics")
  ) {
    return "Science is fascinating! I can explain concepts in biology (cells, ecosystems, genetics), chemistry (atoms, reactions, periodic table), or physics (forces, energy, motion). What scientific concept would you like to understand better?";
  }

  if (lowerMessage.includes("history")) {
    return "History helps us understand the present! I can discuss ancient civilizations, world wars, civil rights movements, important events, and how they shaped our world. What historical period or event interests you?";
  }

  if (lowerMessage.includes("english") || lowerMessage.includes("literature")) {
    return "English and literature! I can help with reading comprehension, literary analysis, themes, symbolism, character development, and writing skills. What book or writing topic are you working on?";
  }

  // Teacher support
  if (lowerMessage.includes("grade") || lowerMessage.includes("assess")) {
    return "For effective assessment: Create clear rubrics with specific criteria (4-point scale works well). Use a mix of formative (quizzes, discussions) and summative (tests, projects) assessments. Provide timely, constructive feedback. Consider peer assessments and self-reflection activities.";
  }

  if (lowerMessage.includes("lesson plan") || lowerMessage.includes("teach")) {
    return "Lesson planning tips: 1) Start with clear learning objectives (students will be able to...), 2) Hook students with engaging opener, 3) Use 'I do, We do, You do' model, 4) Include varied activities for different learning styles, 5) Check for understanding throughout, 6) End with reflection/summary.";
  }

  // Homework and assignments
  if (
    lowerMessage.includes("homework") ||
    lowerMessage.includes("assignment")
  ) {
    return "For homework success: 1) Start early, don't procrastinate, 2) Break large assignments into smaller tasks, 3) Create a schedule working backward from due date, 4) Eliminate distractions, 5) Ask questions if confused, 6) Review work before submitting. What assignment are you working on?";
  }

  // Default intelligent response
  return `I understand you're asking about "${message}". As Classmate AI, I'm here to help with educational topics including math, science, history, writing, and study strategies. Could you provide more specific details about what you'd like to learn or which subject area this relates to? I'm ready to help break down complex concepts into understandable explanations!`;
}

// Lecture summarization functions
export function generateLectureSummary(content: string): string {
  const sentences = content.split(/[.!?]+/).filter((s) => s.trim().length > 0);

  // Simple intelligent summarization
  // Extract first few sentences and key sentences with important keywords
  const importantKeywords = [
    "important",
    "key",
    "main",
    "critical",
    "essential",
    "fundamental",
    "primary",
    "significant",
    "conclude",
    "therefore",
    "thus",
    "result",
    "because",
    "since",
    "definition",
    "define",
    "means",
    "refers to",
  ];

  const keywordSentences = sentences.filter((sentence) =>
    importantKeywords.some((keyword) =>
      sentence.toLowerCase().includes(keyword)
    )
  );

  // Build summary from first sentence and keyword sentences
  const summaryParts = [
    sentences[0]?.trim() || "",
    ...keywordSentences.slice(0, 3).map((s) => s.trim()),
  ];

  let summary = summaryParts.filter((s) => s.length > 0).join(". ");

  // If summary is too short, add more context
  if (summary.split(/\s+/).length < 50 && sentences.length > 4) {
    summary +=
      ". " +
      sentences
        .slice(1, 5)
        .map((s) => s.trim())
        .join(". ");
  }

  // Clean up and add period if needed
  summary = summary.trim();
  if (!summary.endsWith(".")) {
    summary += ".";
  }

  return summary;
}

export function extractKeyPoints(content: string): string[] {
  const sentences = content.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  const keyPoints: string[] = [];

  // Keywords that often indicate important points
  const indicatorKeywords = [
    "important",
    "key",
    "main",
    "first",
    "second",
    "third",
    "primary",
    "essential",
    "fundamental",
    "remember",
    "note that",
    "it is crucial",
    "must understand",
    "definition",
    "principle",
    "law",
    "theory",
    "concept",
  ];

  // Find sentences with indicator keywords
  const candidateSentences = sentences.filter((sentence) =>
    indicatorKeywords.some((keyword) =>
      sentence.toLowerCase().includes(keyword)
    )
  );

  // Also look for numbered/bulleted points
  const numberedPoints = sentences.filter(
    (sentence) =>
      /^\s*[\d\-•*]/.test(sentence) ||
      /^(first|second|third|finally|lastly|additionally)/i.test(sentence.trim())
  );

  // Combine and deduplicate
  const allCandidates = [...candidateSentences, ...numberedPoints];
  const seen = new Set<string>();

  for (const sentence of allCandidates) {
    const cleaned = sentence.trim().replace(/^\s*[\d\-•*]+\.?\s*/, "");
    if (cleaned.length > 20 && cleaned.length < 300 && !seen.has(cleaned)) {
      keyPoints.push(cleaned);
      seen.add(cleaned);
      if (keyPoints.length >= 8) break;
    }
  }

  // If we don't have enough key points, extract from different parts of the content
  if (keyPoints.length < 3) {
    const segmentSize = Math.floor(sentences.length / 4);
    for (let i = 0; i < 4 && keyPoints.length < 5; i++) {
      const segment = sentences.slice(i * segmentSize, (i + 1) * segmentSize);
      const longestSentence = segment.reduce((a, b) =>
        a.length > b.length ? a : b
      );
      if (longestSentence && !seen.has(longestSentence.trim())) {
        keyPoints.push(longestSentence.trim());
        seen.add(longestSentence.trim());
      }
    }
  }

  return keyPoints.slice(0, 6);
}

export async function generateFullSummary(content: string): Promise<{
  summary: string;
  keyPoints: string[];
}> {
  await initializeAI();

  const summary = generateLectureSummary(content);
  const keyPoints = extractKeyPoints(content);

  return { summary, keyPoints };
}
