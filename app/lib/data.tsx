import { Phase } from "@/types/interfaces";

export const benefits = [
                  {
                    title: "Data Analysts",
                    desc: "Enhance analytical skills with advanced statistical methods and policy‑focused data interpretation.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Graduate Students",
                    desc: "Bridge academic research with practical policy applications using cutting‑edge data tools.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                      </svg>
                    ),
                  },
                  {
                    title: "Researchers",
                    desc: "Leverage interdisciplinary datasets to publish impactful policy research.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                        <circle cx="9" cy="7" r="3" />
                        <circle cx="17" cy="5" r="2" />
                        <path d="M3 21v-2a5 5 0 0 1 10 0v2" />
                        <path d="M17 9a3 3 0 0 1 3 3v2" />
                      </svg>
                    ),
                  },
                  {
                    title: "Social Entrepreneurs",
                    desc: "Develop data‑driven solutions for social impact and sustainable development.",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 8v4l3 3" />
                      </svg>
                    ),
                  },
                ]

 export const resources = [
    { name: "Curriculum Detail", href: "#" },
    { name: "Open Data Repository", href: "#" },
    { name: "Global SDG Benchmarks", href: "#" },
    { name: "Policy Briefs", href: "#" },
  ];

  export const explore = [
    { name: "About Us", href: "/about" },
    { name: "Faculty Spotlight", href: "#" },
    { name: "Fellowship Programs", href: "#" },
    { name: "Research Papers", href: "#" },
    ]

export  const phases: Phase[] = [
    {
      title: "Phase 1: Literature Foundations",
      description: "Establish the bedrock of academic research by mastering literature search, organization, and synthesis strategies.",
      steps: [
        {
          number: "01",
          title: "Understanding & Writing a Literature Review",
          focus: "Foundations, Types & Conducting Steps",
          details: "Learn the core methodologies of structured literature reviews, understand synthesis taxonomies, and formulate early-stage research parameters."
        },
        {
          number: "02",
          title: "Searching & Identifying Relevant Literature",
          focus: "Academic Databases & Search Strategies",
          details: "Master advanced search queries in Web of Science, Scopus, Google Scholar, and learn to filter, grade, and evaluate empirical studies."
        },
        {
          number: "03",
          title: "Organizing & Analyzing Literature",
          focus: "Synthesis Techniques & Software Integration",
          details: "Integrate citation management software (like Zotero/Mendeley) and design synthesis matrices to discover research gaps systematically."
        },
        {
          number: "04",
          title: "Writing the Literature Review",
          focus: "Structure, Clarity & Peer Review Methods",
          details: "Outline, draft, and structure your literature chapter. Ensure conceptual continuity, rigorous argumentation, and scholarly voice."
        },
        {
          number: "05",
          title: "Revising & Finalizing the Literature Review",
          focus: "Editing Techniques & Academic Integrity",
          details: "Refine referencing standards, perform plagiarism checks, implement stylistic edits, and polish citation formatting to absolute journal-ready quality."
        }
      ]
    },
    {
      title: "Phase 2: Qualitative Fieldwork",
      description: "Bridge the gap between desk research and field realities. Learn ethical data collection, interview designs, and community rapport.",
      steps: [
        {
          number: "06",
          title: "Entering the Field",
          focus: "Qualitative Ethics & Rapport Building",
          details: "Navigate complex field environments, design informed consent forms, secure institutional review approvals, and establish trust with local key stakeholders."
        },
        {
          number: "07",
          title: "Developing a Research Question",
          focus: "Identifying Gaps & Formulating Questions",
          details: "Translate field observations and early literature reviews into research questions that are both academically viable and socially relevant."
        },
        {
          number: "08",
          title: "Interview Methodologies",
          focus: "Structured, Semi-Structured & Design Logic",
          details: "Design comprehensive interview guides, learn elicitation techniques, manage bias, and conduct structured and semi-structured qualitative interviews."
        },
        {
          number: "09",
          title: "Pilot Studies & Instrument Refinement",
          focus: "Testing Questionnaires & Feedback Loops",
          details: "Conduct rapid-feedback pilot studies to test survey instrumentation, evaluate interviewer tone, and optimize response scales and language."
        },
        {
          number: "10",
          title: "Ethnographic Research Principles",
          focus: "Participant Observation & Field Notes",
          details: "Capture rich, descriptive data through systematic participant observation, maintain meticulous field diaries, and code sensorimotor environment details."
        }
      ]
    },
    {
      title: "Phase 3: Analytical Methods",
      description: "Synthesize collected qualitative and quantitative evidence using established frameworks and modern research methodologies.",
      steps: [
        {
          number: "11",
          title: "Report Submission & Feedback",
          focus: "Peer Review & Revision Strategies",
          details: "Assemble raw draft reports, implement double-blind peer feedback cycles, and restructure technical documents for clear stakeholder readability."
        },
        {
          number: "12",
          title: "Grounded Theory Application",
          focus: "Data Coding & Thematic Development",
          details: "Apply open, axial, and selective coding to field notes. Group transcript statements into central, integrated sociological themes and theories."
        },
        {
          number: "13",
          title: "Case Study Research Method",
          focus: "Design, Collection & Fieldwork Analysis",
          details: "Design holistic, multi-case study frameworks. Triangulate primary field evidence with government archives, policy drafts, and media reports."
        },
        {
          number: "14",
          title: "Discourse Analysis",
          focus: "Principles, Practices & Textual Analysis",
          details: "Examine institutional power structures, media framing, and ideological subtexts embedded in policy dialogues, official reports, and speeches."
        },
        {
          number: "15",
          title: "Narrative Analysis",
          focus: "Data Collection & Research Applications",
          details: "Deconstruct personal life histories, stakeholder testimonies, and narrative arcs to uncover cultural values and deep lived-experiences."
        }
      ]
    }
  ];