# AI Literacy Bootcamp · Complete Course Outline

> **Total Hours**: 8 sessions × 2 hours = 16 hours
> **Delivery Format**: In-person intensive training + online replays + hands-on practice library
> **Assessment Method**: One take-home deliverable per session + final project

---

## 🎬 Course Hook

"**30 years ago, people who couldn't use Office were left behind. 10 years ago, people who couldn't use smartphones were left behind. Today, people who can't use AI are being left behind.**

But this time, it's not jobs that are being eliminated—it's individuals. Because AI won't replace you, but **your colleague who can use AI will**.

This isn't fear-mongering. When your colleague completes in 30 minutes what takes you a full day, when your boss sees output not effort, you'll understand—**AI literacy is the most important universal skill in 2026**."

---

## 📚 Course Structure Overview

```
Phase 1: Cognition & Foundations (Sessions 0-1)
├─ Session 0: AI Cognitive Restructuring    → Build mental models
└─ Session 1: Prompt Engineering            → Master core methods

Phase 2: Scenario-based Applications (Sessions 2-4)
├─ Session 2: AI Writing Assistant          → Document/Copy Production
├─ Session 3: AI Data Analysis              → Analysis Without Coding
└─ Session 4: AI Product Design             → From Requirements to Prototype

Phase 3: Advanced & Ecosystem (Sessions 5-6)
├─ Session 5: AI Workflow Automation        → Make Repetitive Work Disappear
└─ Session 6: AI Tool Ecosystem             → Selection & Combination

Phase 4: Security & Governance (Session 7)
└─ Session 7: AI Collaboration & Security   → Responsible Usage
```

---

## Session 0: AI Cognitive Restructuring - From Tool to Collaborator

### Hook
A product manager spent 2 hours getting AI to write a PRD, and the AI gave her a "universal template." She posted on social media complaining: "Is this all AI can do?" In the comments, another product manager shared their conversation log for the same requirement—they finished in 15 minutes with AI and even added 3 features they hadn't thought of. **What's the difference?**

### Learning Objectives
- Break down 3 common misconceptions about AI
- Build the mental model that "AI is a collaborator, not a tool"
- Understand the essence of large language models: why they're sometimes brilliant, sometimes foolish

### Core Content (5 Sections)

**Section 1: Three Common Misconceptions (20 minutes)**
- Misconception 1: AI is omnipotent → Truth: Clear capability boundaries
- Misconception 2: AI is a search engine → Truth: It's a language predictor
- Misconception 3: AI can give perfect answers in one go → Truth: Iterative dialogue is the way

**Section 2: What Exactly Are Large Language Models (25 minutes) · Deep Leverage: Mechanism**
- Analogy: The world's most powerful "word continuation contestant"
- What are Tokens: AI doesn't see Chinese characters, it sees numbers
- Context Window: AI's "short-term memory"
- Training Data: Why AI has a "knowledge cutoff date"

**Section 3: AI Capability Boundaries (25 minutes) · Deep Leverage: Failure Modes**
- Strengths: Text generation, rewriting, summarization, translation, brainstorming
- Weaknesses: Real-time information, precise calculations, subjective judgments, confidential content
- **Hallucination Phenomenon**: AI fabricates content that looks plausible but is false
- Real Case: Lawyer fined by court for citing AI-fabricated case law

**Section 4: Domestic and International Product Landscape (20 minutes) · Deep Leverage: Decision Checklist**
- Domestic: iFlytek Spark, ERNIE Bot, Tongyi Qianwen, Doubao, Kimi, DeepSeek
- International: ChatGPT, Claude, Gemini
- Enterprise: Spark Enterprise Edition, Tongyi Qianwen Enterprise Edition
- **Selection Matrix**: Recommendations by scenario (Chinese/long documents/compliance/free)

**Section 5: Your First Quality Conversation (20 minutes) · Hands-on**
- Live Demo: From "write an email" to "specifically how to write it"
- Student Practice: Pick a real task, have 3+ rounds of dialogue with AI
- Sharing + Feedback

### Depth Guarantee
- ✅ Mechanism: Tokens, context, training data
- ✅ Failure Modes: Hallucination, knowledge cutoff date
- ✅ Decision Checklist: Domestic and international product selection matrix

### Take-home Deliverable
- "AI Tool Selection Comparison Chart" (PDF)
- "First Conversation Record Template"

### Hands-on Exercise
"Use AI to complete 1 task you hate most this week" (share next session)

---

## Session 1: Prompt Engineering - Making AI Understand You

### Hook
Asking "help me write a weekly report," some get 3 paragraphs of fluff, others get a report the boss forwards directly to the CEO. **Prompts are the interface between you and AI**—design the interface well, and AI can do its job properly.

### Learning Objectives
- Master the CRISPE prompt framework
- Design 10 reusable prompt templates for your role
- Learn multi-turn dialogue iteration and optimization

### Core Content (5 Sections)

**Section 1: Why the Same Question Gets Different Answers (15 minutes) · Deep Leverage: Mechanism**
- Model randomness: the impact of temperature parameter
- Importance of context: AI doesn't know your work background
- Power of role setting: one role setting changes output style

**Section 2: CRISPE Framework Systematic Analysis (30 minutes) · Deep Leverage: Implementation Details**

| Letter | Meaning | Example |
|--------|---------|---------|
| **C**apacity & Role | Role Definition | "You are a senior HR manager" |
| **I**nsight | Context Insight | "We are a 50-person startup" |
| **S**tatement | Core Instruction | "Help me write a JD for Operations Director" |
| **P**ersonality | Style & Tone | "Professional but attractive" |
| **E**xperiment | Iteration Experiment | "Give me 3 versions" |

- **Comparative Demo**: Output comparison without framework vs with framework
- **Universal Template**: CRISPE one-page reference card

**Section 3: Advanced Techniques (30 minutes) · Deep Leverage: Trade-offs**
- **Few-shot Learning**: Show AI a few examples, it will imitate
- **Chain of Thought**: Have AI think step-by-step
- **Role Playing**: Have AI stand in the perspective of user/boss/client
- **Negative Constraints**: Telling AI "what not to do" is more important than "what to do"
- **Trade-off**: Long prompts vs short prompts, precise vs flexible

**Section 4: Customizing Prompt Library by Role (25 minutes) · Hands-on**

Role Examples (live demo + student practice):

```
[Product Manager · Requirements Document]
You are a B2B product manager with 10 years of experience, familiar with SaaS product design.
Please generate a PRD outline for the following requirement: [requirement description]
Requirements:
1. Include background, target users, core scenarios, feature list, priorities
2. Present feature list in a table, mark P0/P1/P2
3. Identify 3 potential risks
```

```
[Operations · Official Account Copy]
You are a million-follower official account editor, skilled at writing practical articles in the education industry.
Topic: [topic]
Requirements:
1. Title must have conflict or numbers
2. Hook readers within the first 100 words
3. Body at least 1500 words, 3 subheadings
4. End with a call for interaction
Style: Warm, not cheesy, practical
```

(6 additional templates: Marketing, HR, Admin, Finance, Sales, Customer Service)

**Section 5: Iteration Optimization Methodology (20 minutes) · Deep Leverage: Failure Modes**
- Why the first output is often unsatisfactory
- **5 Optimization Commands**: "More specific", "Different angle", "Add examples", "More concise", "Change style"
- When to start a new conversation (context pollution)
- When to switch models (current model capability insufficient)

### Depth Guarantee
- ✅ Mechanism: How temperature and context window affect output
- ✅ Implementation Details: Complete CRISPE framework breakdown
- ✅ Trade-offs: Long vs short prompts, precise vs flexible
- ✅ Failure Modes: Context pollution, model capability boundaries

### Take-home Deliverable
- **"Role Prompt Template Library v1.0"** (8 roles × 5 high-frequency scenarios each = 40 templates)
- CRISPE one-page reference card

### Hands-on Exercise
Design 1 prompt for each of the 3 most common tasks in your role, use them in real work after class, show before/after next session.

---

## Session 2: AI Writing Assistant - Documents, Copy, Reports All-in-One

### Hook
An admin specialist writes 5 types of reports weekly: weekly reports, meeting minutes, notices, summaries, requests. Before using AI, she worked overtime until 8 PM; after using AI, she leaves at 4 PM. **She only learned one trick: break "writing" into "ideation + filling + polishing" three stages, let AI do filling and polishing.**

### Learning Objectives
- Master the three-stage workflow for AI-assisted writing
- Learn to use AI for long documents (summarization, extraction, translation)
- Be able to use AI to complete core writing tasks in your role

### Core Content (5 Sections)

**Section 1: Three Stages of Writing Workflow (20 minutes) · Deep Leverage: Implementation Details**
- Ideation (Human): Determine goals, audience, core points
- Filling (AI): Expand paragraphs, provide examples, generate data
- Polishing (Human + AI): Adjust tone, correct facts, finalize
- **Key Point**: Humans decide "what to say," AI handles "how to say it"

**Section 2: Short Text Scenarios (30 minutes) · Deep Leverage: Real Cases**

Hands-on practice for 5 scenarios:
1. **Work Email**: Apology letter to client (including compensation plan)
2. **Weekly Report**: From stream of consciousness to structured reporting
3. **Meeting Notice**: Cold notification → Warm invitation
4. **Community Announcement**: Event warm-up, rule explanation
5. **Presentation Outline**: Core points for a 5-slide annual review deck

Each scenario demonstrates: **Bad prompt → Poor result** vs **Good prompt → Good result**

**Section 3: Long Document Processing (25 minutes) · Deep Leverage: Mechanism + Failure Modes**
- **Context Window** limitations: Why you can't just throw a 100-page PDF at AI
- **Segmentation Strategy**: Three methods for splitting long documents
- **Claude/Kimi long context** advantages
- **Failure Mode**: Context too long causes AI to "forget" instructions from the beginning
- Hands-on: Upload a 30-page report, have AI generate a 5-page summary

**Section 4: Cross-format Conversion (25 minutes) · Deep Leverage: Real Cases**
- Interview recording → Transcript → Structured report
- Official account article → Xiaohongshu note → TikTok script
- English email → Chinese translation → Cultural localization
- PPT outline → Detailed script → Speech draft

**Section 5: AI Writing Pitfalls (20 minutes) · Deep Leverage: Failure Modes**
- **Factual Hallucination**: AI fabricates data, citations, cases
- **Avoidance Method**: Any specific numbers, citations, cases must be verified
- **Copyright Trap**: Ownership of AI-generated content (domestic legal precedents)
- **Homogenization Problem**: Many users using similar prompts → content collision
- **How to get AI to write "your style"**: Provide historical works as samples

### Depth Guarantee
- ✅ Mechanism: Context window, token calculation
- ✅ Implementation Details: Three-stage workflow
- ✅ Failure Modes: Hallucination, copyright, homogenization
- ✅ Real Cases: Before/after for each scenario

### Take-home Deliverable
- **"AI Writing Scenario Handbook"** (20 high-frequency scenario templates)
- **"AI Content Verification Checklist"** (6 must-check items)

### Hands-on Exercise
Use AI to complete a real work document this week, record time cost comparison.

---

## Session 3: AI Data Analysis - Insights Without Code

### Hook
"I'm not a data analyst, but my boss asked me to find patterns in 500 rows of Excel. Before, I only knew SUM, AVG, pivot tables. Now I just throw the spreadsheet at AI and get an analysis report in 3 minutes." — An e-commerce operations specialist

### Learning Objectives
- Learn to describe data analysis needs in natural language
- Master the AI + Excel/CSV collaboration model
- Be able to independently complete simple business data interpretation

### Core Content (5 Sections)

**Section 1: From "Skill Threshold" to "Description Ability" (15 minutes) · Deep Leverage: Trade-offs**
- Traditional data analysis threshold: SQL, Python, BI tools
- New AI analysis threshold: Can you **clearly describe analysis goals**
- **Trade-off**: Learning Python yourself vs using AI-assisted analysis (input/output ratio comparison)

**Section 2: Available Tools Overview (20 minutes) · Deep Leverage: Decision Checklist**

| Tool | Features | Use Cases | Data Sensitivity |
|------|----------|-----------|------------------|
| ChatGPT Code Interpreter | Can upload, can chart | Complex analysis | Low (not for sensitive) |
| Claude Artifacts | Can generate interactive reports | Visualization | Low |
| iFlytek Spark | Chinese-friendly, domestic compliance | Daily analysis | Medium |
| Doubao/Kimi | Free, easy to start | Quick exploration | Medium |
| Excel Copilot | Analyze in-place | Office ecosystem | High (local) |
| WPS AI | Domestic alternative | Domestic enterprises | High |

**Section 3: Three Types of Analysis Tasks (40 minutes) · Deep Leverage: Real Cases**

**Task 1: Descriptive Analysis (What the data says)**
- Scenario: Operations looking at sales data
- Prompt: `Here's the last 3 months of sales data, help me summarize 5 key findings`
- Hands-on: Upload data, read AI report, ask follow-up questions

**Task 2: Diagnostic Analysis (Why it's this way)**
- Scenario: Marketing analyzing conversion rate drop
- Prompt: `This month's conversion rate dropped from 3.2% to 2.1%, here's user behavior data and channel data, help me find possible causes`
- Hands-on: Hypothesis → Verification → Elimination dialogue flow

**Task 3: Predictive Analysis (What will happen in the future)**
- Scenario: HR predicting turnover risk
- Prompt: `Based on past 2 years of departed employee characteristic data, help me build high-risk employee identification dimensions`
- Hands-on: Be careful of **AI prediction confidence** issues

**Section 4: Visualization Generation (25 minutes) · Deep Leverage: Implementation Details**
- Have AI generate chart code (HTML + ECharts)
- Have AI directly generate images (Claude Artifacts, ChatGPT)
- Use AI to generate Excel formulas and pivot table configurations
- A picture is worth a thousand words: **Decision tree for which chart fits which data**

**Section 5: Data Analysis Safety Red Lines (20 minutes) · Deep Leverage: Failure Modes**
- **Data that absolutely cannot be uploaded**: User ID numbers, phone numbers, enterprise raw financial data, unpublished strategic information
- **Can be uploaded after desensitization**: Name → User A, Department → Department 1, Amount → Scale proportionally
- **Local AI Alternatives**: Ollama + local models (enterprise sensitive scenarios)
- **Error Case**: An employee fed client list to public AI, got called in by compliance

### Depth Guarantee
- ✅ Trade-offs: Learning Python vs using AI input/output
- ✅ Decision Checklist: 6 data analysis tools selection
- ✅ Real Cases: Full process for three types of analysis tasks
- ✅ Failure Modes: Data safety red lines

### Take-home Deliverable
- **"Data Analysis Prompts 3-Piece Set"** (Descriptive/Diagnostic/Predictive)
- **"Data Desensitization Operation Guide"**

### Hands-on Exercise
Bring a real dataset from your role (desensitized), use AI to generate an analysis report.

---

## Session 4: AI Product Design - Full Process from Requirements to Prototype

### Hook
A founder had an app idea, no technical background. Using AI: 1 day to finish PRD, 2 days to generate prototype, 3 days to make a clickable demo for investors. **Not because AI did the work for them, but AI lowered the barrier from "having an idea to making something" to a height everyone can cross.**

### Learning Objectives
- Use AI to mine and structure user requirements
- Use AI to generate product prototypes (text description → visualization)
- Master the "requirements → design → validation" end-to-end workflow

### Core Content (5 Sections)

**Section 1: User Requirement Mining (25 minutes) · Deep Leverage: Implementation Details**
- **User Interview Preprocessing**: AI helps you design interview outline
- **Interview Record Structuring**: Recording to transcript → AI extracts pain points
- **User Story Generation**: `As a... I want... so that...` template
- **Jobs-to-be-Done Framework** AI application

**Section 2: Requirements Document Generation (25 minutes) · Deep Leverage: Real Cases**
- **From one sentence to complete PRD** dialogue flow
- PRD structured template (background, goals, scenarios, features, acceptance criteria)
- **Priority Ranking**: AI-assisted RICE scoring
- Live Demo: Produce an 8-page PRD draft in 15 minutes

**Section 3: Prototype Generation (30 minutes) · Deep Leverage: Real Cases**

Current mainstream approaches:
- **v0.dev** (Vercel): Text → React page
- **Bolt.new**: Text → Runnable full-stack application
- **Lovable**: Text → Complete product demo
- **Claude Artifacts**: Lightweight prototype
- **Jimeng / ERNIE**: Generate design draft images

Comparative demo: Same requirement "Recruitment Management System" output comparison across 4 tools.

**Section 4: Requirements Validation and Iteration (20 minutes) · Deep Leverage: Trade-offs**
- Use AI to play different roles (user/customer/competitor) to review the solution
- **Stress Testing**: Have AI find holes, identify solution flaws
- **A/B Solution Comparison**: Have AI evaluate from multiple dimensions
- **Trade-off**: AI validation vs real user validation (which scenario fits which)

**Section 5: Delivery and Collaboration (20 minutes) · Deep Leverage: Decision Checklist**
- To development team: PRD + prototype + acceptance criteria
- To designer: AI-generated wireframes (not final draft)
- To boss: One-sentence elevator pitch + demo video
- **Decision Checklist**: When to draw yourself, when to let AI handle it

### Depth Guarantee
- ✅ Implementation Details: Full user requirement mining process
- ✅ Real Cases: PRD generation, prototype generation live demo
- ✅ Trade-offs: AI validation vs real user validation
- ✅ Decision Checklist: Deliverable layering strategy

### Take-home Deliverable
- **"Requirements to Prototype Full Process Template"**
- **"Prototype Tool Comparison Chart"** (v0, Bolt, Lovable, Claude)

### Hands-on Exercise
Pick 1 real pain point in your department, use AI to complete the full process: Requirements → PRD → Prototype.

---

## Session 5: AI Workflow Automation - Make Repetitive Work Disappear

### Hook
The marketing department has a weekly routine: aggregate data from 5 channels → make PPT → send to boss. An intern used Coze to build a workflow, now every Monday at 9 AM, the PPT automatically appears in the boss's inbox. **They're not a programmer, they just know how to drag and drop.**

### Learning Objectives
- Understand what "workflow" is, what scenarios are worth automating
- Be able to use no-code platforms to build simple automated workflows
- Master the "human + AI + automation" collaboration model

### Core Content (5 Sections)

**Section 1: What is AI Workflow (20 minutes) · Deep Leverage: Mechanism**
- From single tasks to process automation
- **Three Elements**: Trigger (when) + Processing (what) + Output (where)
- **ROI Formula**: Automation investment < Weekly time saved × Hourly rate × 52 weeks

**Section 2: No-Code Platform Ecosystem (25 minutes) · Deep Leverage: Decision Checklist**

| Platform | Owner | Features | Target Users |
|----------|-------|----------|--------------|
| **Coze** | ByteDance | Easiest in China, complete ecosystem | First choice for beginners |
| **Dify** | Open Source | Can be privately deployed | Enterprise internal |
| **n8n** | Open Source | Flexible, can connect APIs | Some technical background |
| **Zapier** | International | Largest ecosystem, expensive | International business |
| **Feishu Multi-dimensional Table + AI** | Feishu | Data-driven scenarios | Feishu users |
| **DingTalk AI Assistant** | DingTalk | DingTalk ecosystem | DingTalk users |

**Section 3: 5 Classic Scenarios Step-by-Step (40 minutes) · Deep Leverage: Real Cases**

**Scenario 1: Automatic Weekly Report** (Fits all roles)
- Trigger: Every Friday 17:00
- Processing: Pull from data source → AI summarize → Generate PPT/document
- Output: Email/Feishu/DingTalk

**Scenario 2: Competitor Monitoring** (Marketing/Product)
- Trigger: Every day 9:00 AM
- Processing: Crawl competitor websites/social media → AI extract key changes
- Output: WeCom group

**Scenario 3: Customer Service FAQ Bot** (CS/Sales)
- Trigger: User question
- Processing: Search knowledge base → AI generate reply → Human review
- Output: Direct reply

**Scenario 4: Recruitment Resume Screening** (HR)
- Trigger: Resume received
- Processing: AI extract key info → Score against JD
- Output: Screening report to HR

**Scenario 5: Content Distribution Matrix** (Operations/Marketing)
- Trigger: Publish one main article
- Processing: AI rewrite into N platform versions
- Output: Official account/Xiaohongshu/TikTok/Video account

**Section 4: Hands-on Building (25 minutes) · Practice**
- Live Demo: Use Coze to build "Scenario 1 Automatic Weekly Report"
- Student Follow-along: Each person builds a simple workflow for their role

**Section 5: Workflow Limitations and Risks (10 minutes) · Deep Leverage: Failure Modes**
- **Scenarios not suitable for automation**: Require subjective judgment, emotional communication, creative decisions
- **Human-in-the-loop**: Keep human review at key checkpoints
- **Failure Handling**: What to do when process errors (monitoring + alerts)
- **Maintenance Cost**: Ongoing investment for platform updates, API changes

### Depth Guarantee
- ✅ Mechanism: Workflow three elements, ROI formula
- ✅ Decision Checklist: 6 no-code platforms comparison
- ✅ Real Cases: Complete build for 5 classic scenarios
- ✅ Failure Modes: Scenarios not suitable for automation

### Take-home Deliverable
- **"5 Major Workflow Templates"** (Can be directly copied to Coze)
- Each person gets 1 built and running workflow

### Hands-on Exercise
Transform 1 weekly repetitive task into an automated workflow this week.

---

## Session 6: AI Tool Ecosystem - Choose Right, Work Smarter

### Hook
"My boss wanted me to make a video ad, no footage no video skills. I used 4 AI tools in sequence: ERNIE wrote script → Jimeng generated images → Kling made animation → CapCut AI edited. From idea to finished video in 2 hours, my boss thought I outsourced to a professional team."

### Learning Objectives
- Build a comprehensive understanding of AI tools
- Master tool selection methodology
- Learn tool combination usage (AI Stack building)

### Core Content (5 Sections)

**Section 1: Four Categories of AI Tools Overview (30 minutes) · Deep Leverage: Decision Checklist**

**Text**: ChatGPT, Claude, iFlytek Spark, ERNIE Bot, Doubao, Kimi, DeepSeek
**Image**: Midjourney, Jimeng, Tongyi Wanxiang, DALL-E, Stable Diffusion
**Video**: Sora, Kling, Jimeng AI Video, Pika, Runway
**Audio**: ElevenLabs, iFlytek Voice, Suno (Music)

For each category: **What it can do + What it can't + Typical pricing + Domestic availability**

**Section 2: Office Scenario AI Products (25 minutes) · Deep Leverage: Implementation Details**
- **Microsoft Copilot**: Office suite
- **WPS AI**: Domestic alternative, Kingsoft ecosystem
- **Feishu AI**: Collaboration + AI deep integration
- **DingTalk AI Assistant**: DingTalk ecosystem
- **Notion AI**: Knowledge management
- **Comparison Dimensions**: Feature coverage, pricing, data compliance, ecosystem fit

**Section 3: Three Questions for Selection (20 minutes) · Deep Leverage: Decision Checklist**

**Three-Question Method**:
1. **What problem am I solving?** (Task type: generation/analysis/transformation/search)
2. **How sensitive is the data?** (Public AI vs enterprise private deployment)
3. **What's the budget and ecosystem?** (Free/paid, standalone/integrated into existing tools)

**Selection Matrix** (fill in live):

| Task | Data Sensitivity | Budget | Recommended Tool |
|------|------------------|--------|------------------|
| Write email | Low | 0 | Doubao/Kimi |
| Analyze finance | High | Paid | Spark Enterprise |
| Design poster | Medium | Paid | Jimeng |

**Section 4: AI Stack Combination Application (25 minutes) · Deep Leverage: Real Cases**

**Case 1: One-Person Marketing Team**
- Inspiration (ChatGPT) → Copy (ERNIE) → Image (Jimeng) → Video (Kling) → Edit (CapCut) → Distribute (Coze workflow)

**Case 2: One-Person Product Manager**
- User interview (Feishu Minutes to text) → Requirement organization (Claude) → PRD (Spark) → Prototype (v0.dev) → Review PPT (Gamma)

**Case 3: One-Person HR**
- JD writing (ERNIE) → Resume screening (Coze workflow) → Interview question bank (Claude) → Background check questions (Spark)

**Section 5: Tool Iteration Tracking (20 minutes) · Deep Leverage: Trade-offs**
- AI tools change every 6 months: **How not to be held hostage by new tools**
- Follow principle: **Scenarios stay constant, tools can change**
- Learning resources: **QbitAI, Jiqizhixin, AI Technology Review, Hugging Face**
- **Trade-off**: Chasing new vs stable usage (selection strategy)

### Depth Guarantee
- ✅ Decision Checklist: Four tool categories + Office scenarios + Three-question method
- ✅ Implementation Details: Various office AI products comparison
- ✅ Real Cases: 3 AI Stack combinations
- ✅ Trade-offs: Chasing new vs stable

### Take-home Deliverable
- **"AI Tool Overview Map"** (one page)
- **"AI Tool Selection Three-Question Checklist"**
- **"AI Stack Blueprints for 3 Roles"**

### Hands-on Exercise
Design an AI Stack for your role (3-5 tool combination).

---

## Session 7: AI Collaboration & Security - Using AI Responsibly

### Hook
In 2024, a lawyer used ChatGPT to write a legal complaint, citing 6 cases. The judge checked—all were fabricated. Lawyer fined $5000 + disciplinary action. **AI won't harm you, but your wrong decisions using it will.**

### Learning Objectives
- Identify risk points in AI output (hallucination, bias, copyright)
- Master data security boundaries and alternatives
- Build personal/team AI usage guidelines

### Core Content (6 Sections)

**Section 1: AI Hallucination - The Most Common Pitfall (25 minutes) · Deep Leverage: Mechanism + Failure Modes**
- **Why hallucination happens**: Language models predict, they don't retrieve
- **High-risk scenarios**: Citations, data, names, dates, legal provisions, medical advice
- **Identification method**: Three-question approach
  - Is this fact or inference?
  - Is there a clear source?
  - The more specific the details, the more alert you should be
- **Reduce hallucination**: Give context, ask AI to note uncertainty, use web-connected version
- **Real Cases**: Lawyer fine case, academic paper retraction case

**Section 2: Data Security Red Lines (25 minutes) · Deep Leverage: Failure Modes**

**Information that absolutely cannot be input to public AI**:
- User personal information (ID number, phone, address)
- Enterprise raw financial data, unpublished strategy
- Trade secrets, client lists
- Internal code, architecture diagrams
- Contract originals, legal documents

**Desensitization Strategies**:
- **Replacement**: Real name → User A
- **Generalization**: Specific amount → Order of magnitude
- **Slicing**: Long document → Non-sensitive fragments
- **Local Alternative**: Enterprise private AI, Ollama + local models

**Compliance Requirements**:
- "Interim Measures for the Administration of Generative AI Services"
- "Personal Information Protection Law"
- Your enterprise's AI usage policy

**Section 3: Copyright & Compliance (20 minutes) · Deep Leverage: Decision Checklist**
- Ownership of AI-generated content (Beijing Internet Court typical case)
- **Pre-commercial use checklist**:
  - Does tool TOS allow commercial use
  - Does it need to be labeled "AI generated"
  - Does it involve others' materials
- **Domestic compliance requirements**: Labeling obligations for deep synthesis content

**Section 4: AI Bias & Fairness (15 minutes) · Deep Leverage: Failure Modes**
- AI bias comes from training data
- **High-risk scenarios**: Recruitment screening, credit assessment, performance evaluation
- **Mitigation strategies**: Human review, diverse prompts, regular calibration

**Section 5: Personal/Team AI Guidelines (20 minutes) · Hands-on**

**Personal AI Usage Manual Template**:
1. What I will use AI for (list)
2. What I absolutely won't use AI for (list)
3. My 3 questions before uploading data
4. My checklist for external output

**Team AI Guidelines Template**:
1. Team recommended tool list
2. Allowed/prohibited usage scenarios
3. Data processing procedures
4. Exception reporting mechanism

Live Activity: **Create your "Personal AI Usage Manual"**

**Section 6: Toward "AI-Native" Work Style (15 minutes) · Deep Leverage: Trade-offs**
- From "occasionally using AI" to "defaulting to AI"
- **Capability Compound Interest**: Continuous learning, continuous optimization
- **Avoid over-reliance**: Preserve core capabilities (thinking, judgment, communication)
- **Trade-off**: Efficiency vs independent thinking (Does AI make you smarter or lazier)
- Closing message: **AI is the lever, you are the fulcrum. If the fulcrum is unstable, the longer the lever, the harder you fall.**

### Depth Guarantee
- ✅ Mechanism: Why hallucination happens
- ✅ Failure Modes: Hallucination, data leakage, copyright risk, bias
- ✅ Decision Checklist: Compliance check list
- ✅ Trade-offs: Efficiency vs independent thinking

### Take-home Deliverable
- **"Personal AI Usage Manual"** (student self-completed)
- **"Team AI Guidelines Template"**
- **"AI Output Verification 6-Question Checklist"**

### Hands-on Exercise
Draft a 1-page personal AI usage manual, share in team next month.

---

## 🏆 Final Project

### Project Requirements
Choose 1 real work scenario from your role, deliver a complete **"AI-Enhanced Work Solution"**:

1. **Pain Point Description** (1 page): How it's done now, time cost, frustrations
2. **AI Solution Design** (2 pages): Which tools, how to combine, prompt templates
3. **Actual Results** (1 page): Time comparison, output quality comparison, improvement space
4. **Scaling Recommendations** (1 page): Barriers and responses for team rollout

### Evaluation Criteria
- Scenario authenticity: Is it a real pain point at work, not made up
- Solution feasibility: Others can directly reuse it
- Measurable results: Have specific time/quality data
- Safety compliance: Data processing follows guidelines

### Outstanding Works
- Internal knowledge base inclusion
- Next training cohort case study
- Cross-department sharing

---

## 📋 Course Time Allocation (Overview)

| Session | Lecture | Hands-on | Q&A | Total |
|---------|---------|----------|-----|-------|
| Session 0 | 60 min | 40 min | 20 min | 120 min |
| Session 1 | 55 min | 50 min | 15 min | 120 min |
| Session 2 | 65 min | 40 min | 15 min | 120 min |
| Session 3 | 60 min | 45 min | 15 min | 120 min |
| Session 4 | 70 min | 35 min | 15 min | 120 min |
| Session 5 | 55 min | 50 min | 15 min | 120 min |
| Session 6 | 70 min | 35 min | 15 min | 120 min |
| Session 7 | 80 min | 25 min | 15 min | 120 min |

---

## 🎯 Teaching Principles

1. **Scenario-led**: Each session opens with a real case (failure or success)
2. **Comparison-driven**: Always have "bad vs good" comparison demonstrations
3. **Role-adapted**: How the same capability lands in different roles
4. **Hands-on focus**: Lecture ≤ 60%, rest is practice, discussion, sharing
5. **Take-home value**: Each session must have 1-2 directly usable templates/checklists
6. **Iterative updates**: Update content quarterly based on new tools, new policies

---

## 📅 Recommended Scheduling

**Intensive** (1 week): Monday to Friday, 2-3 sessions per day
**Spread** (8 weeks): 1 session per week, 2 hours each
**Hybrid** (Recommended): Friday afternoon in-person + weekday online replay + hands-on check-ins
