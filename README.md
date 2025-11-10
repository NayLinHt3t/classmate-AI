# Classmate AI - AI Teaching Assistant Platform

A comprehensive EdTech B2B solution that addresses teacher workload and student support challenges through AI-powered features.

## 🚀 Features

### Core Functionality

- **AI Chatbot**: 24/7 student Q&A assistance with intelligent responses powered by **FREE Hugging Face AI**
- **Lecture Summary**: Automated summarization of educational content from various formats
- **Smart Reminders**: Intelligent scheduling system for assignments, exams, and deadlines
- **B2B Dashboard**: Comprehensive management for schools and universities

### Platform Capabilities

- Real-time chat with AI assistance using Mistral-7B model (FREE!)
- File upload and processing (PDF, DOCX, TXT, MP3, MP4)
- Student and teacher management
- Performance analytics and insights
- Responsive design for all devices
- Automatic fallback to simulated responses if API key not configured

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **AI Integration**: Hugging Face Inference API (Mistral-7B-Instruct-v0.2) - FREE!
- **UI Components**: Custom components with Headless UI
- **Icons**: Heroicons
- **Development**: ESLint, TypeScript strict mode

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── chatbot/           # AI chatbot interface
│   ├── lecture-summary/   # Lecture summarization
│   ├── reminders/         # Smart reminder system
│   ├── students/          # Student management
│   ├── teachers/          # Teacher management
│   └── page.tsx           # Dashboard homepage
├── components/            # Reusable React components
│   ├── ui/                # UI component library
│   └── layout.tsx         # Main application layout
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
└── globals.css            # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- (Optional) Hugging Face API key for real AI responses - **100% FREE!**

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd miniproject
```

2. Install dependencies:

```bash
npm install
```

3. **(Optional) Configure FREE AI Integration:**

   The app works perfectly without this step using smart simulated responses, but real AI is even better!

   a. Go to [Hugging Face](https://huggingface.co/settings/tokens) and create a FREE account

   b. Generate a new API token (it's free, no credit card required!)

   c. Copy `.env.local.example` to `.env.local`:

   ```bash
   cp .env.local.example .env.local
   ```

   d. Edit `.env.local` and add your API key:

   ```
   HUGGINGFACE_API_KEY=hf_your_actual_api_key_here
   ```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### 🤖 AI Integration Details

**Using Hugging Face (FREE!):**

- Model: Mistral-7B-Instruct-v0.2 (powerful open-source LLM)
- Cost: $0 - Completely free tier available
- Setup time: 2 minutes
- Benefits: Real AI understanding, contextual responses, natural conversation

**Without API Key (Fallback Mode):**

- Smart keyword-based responses
- Educational topic recognition (math, science, writing, study tips)
- Teacher-focused assistance (grading, lesson plans)
- Still fully functional for demo and testing

The system automatically detects if an API key is present and seamlessly switches between real AI and simulated responses. No code changes needed!

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🎯 Key Features Breakdown

### AI Chatbot

- Natural language processing for student queries
- Context-aware responses
- Session management
- Real-time messaging interface

### Lecture Summary

- Multi-format file support
- AI-powered content analysis
- Key points extraction
- Downloadable summaries

### Smart Reminders

- Priority-based scheduling
- Multiple reminder types (assignments, exams, meetings)
- Overdue tracking
- Completion status management

### Management Dashboard

- Student performance tracking
- Teacher activity monitoring
- Platform usage analytics
- Department-wise insights

## 🎨 UI/UX Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern Interface**: Clean, intuitive design with Tailwind CSS
- **Accessibility**: WCAG compliant components
- **Dark Mode Ready**: Prepared for theme switching
- **Interactive Elements**: Smooth animations and transitions

## 🔒 Security & Best Practices

- TypeScript for type safety
- Input validation and sanitization
- Error handling and logging
- Secure API endpoints
- File upload validation

## 📊 Business Model - EdTech B2B

### Target Market

- K-12 Schools
- Universities and Colleges
- Educational Institutions
- Private Tutoring Centers

### Value Proposition

- **Reduce Teacher Workload**: Automated content summarization and student support
- **Improve Student Success**: 24/7 AI assistance and smart scheduling
- **Scalable Solution**: Handle hundreds of students per institution
- **Data-Driven Insights**: Performance analytics and usage metrics

### Subscription Tiers

- **Basic**: Core features for small schools
- **Premium**: Advanced analytics and integrations
- **Enterprise**: Custom solutions for large institutions

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Docker

```dockerfile
# Dockerfile included for containerized deployment
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and inquiries:

- Email: support@classmate.ai
- Documentation: [docs.classmate.ai](docs.classmate.ai)
- Issues: GitHub Issues tab

---

Built with ❤️ for educators and students worldwide.
