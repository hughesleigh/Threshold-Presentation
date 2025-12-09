
import { SlideData } from '../types';

export const slides: SlideData[] = [
  {
    id: '1',
    layout: 'title',
    title: 'Designing AI-Augmented Creative Workflows',
    subtitle: 'Intentional Checkpoints. Creative Integrity.',
    content: [
      'By Ashleigh Hughes',
      'DESN 374 | December 2025'
    ]
  },
  {
    id: '2',
    layout: 'standard',
    title: 'The Creative Professional\'s Dilemma',
    subtitle: 'The AI Paradox',
    bullets: [
      { text: 'AI accelerates creative work' },
      { text: 'Speed often introduces drift, clichés, or loss of nuance' },
      { text: 'Raises the question: Did I save time or lower my standards?' },
      { text: 'Creatives feel tension between efficiency and integrity' }
    ]
  },
  {
    id: '3',
    layout: 'standard',
    title: 'The Gap in Current Practice',
    subtitle: 'Industry Adoption Without Methodology',
    bullets: [
      { text: 'No shared workflow for using AI in creative work' },
      { text: 'Prompt engineering is inconsistent' },
      { text: 'Tool selection feels overwhelming' },
      { text: 'Outputs vary dramatically' },
      { text: 'Designers unintentionally offload strategy to AI' }
    ]
  },
  {
    id: '4',
    layout: 'center',
    title: 'Research Question',
    subtitle: 'Can We Have Both?',
    content: [
      'Can structured human checkpoints—"thresholds"—maintain creative integrity while capturing AI\'s efficiency gains?',
      'Goal: Develop a workflow where AI supports creativity rather than flattening it.'
    ]
  },
  {
    id: '5',
    layout: 'standard',
    title: 'The Deep Dive',
    subtitle: 'Assignment Context',
    bullets: [
      { title: 'Deep Research', text: 'AI capability boundaries, scholarly sources, agency workflow analysis' },
      { title: 'Deep Dive', text: 'Framework design, Pelvic Door case study, early prototype website' },
      { title: 'Integration', text: 'Research shaped the system; testing exposed gaps; iteration refined the framework' }
    ],
    visualType: 'none'
  },
  {
    id: '6',
    layout: 'standard',
    title: 'Theoretical Foundation',
    subtitle: 'Academic Grounding — 15+ Scholarly Sources',
    bullets: [
      { title: 'Jagged Frontier (Dell\'Acqua)', text: 'AI performs well only inside capability boundaries' },
      { title: 'Moral Crumple Zones (Elish)', text: 'Humans absorb blame when AI fails' },
      { title: 'Human-Centered AI (Shneiderman)', text: 'AI should amplify, not replace' },
      { text: 'Plus support from Bender, Boussioux, Skitka, and others' }
    ]
  },
  {
    id: '7',
    layout: 'standard',
    title: 'Cross-Discipline\nResearch Pattern',
    subtitle: 'The Universal 5-Stage \nCreative Cycle',
    content: ['Found across IDEO, Pentagram, \nWolff Olins, Landor:'],
    bullets: [
      { text: 'Strategy & Discovery' },
      { text: 'Conceptualization & Ideation' },
      { text: 'Development & Refinement' },
      { text: 'Presentation & Validation' },
      { text: 'Finalization & Implementation' }
    ],
    visualType: 'carousel',
    visualMeta: {
        images: [
            'https://i.ibb.co/4g4KL2Xs/Screenshot-2025-12-08-at-8-08-48-PM.png',
            'https://i.ibb.co/v6BrXKvc/Screenshot-2025-12-08-at-8-09-02-PM.png'
        ]
    }
  },
  {
    id: '8',
    layout: 'standard',
    title: 'The Threshold\nMethod Framework',
    subtitle: 'Five Stages, Five Thresholds',
    bullets: [
      { text: 'Strategic Foundation Gate' },
      { text: 'Conceptual Clarity Gate' },
      { text: 'Design Integrity Gate' },
      { text: 'Final Validation Gate' },
      { text: 'Implementation Readiness Gate' }
    ],
    visualType: 'split-image',
    visualMeta: {
      image: 'https://i.imgur.com/hnrvI3v.png'
    }
  },
  {
    id: '9',
    layout: 'standard',
    title: 'Brief Structure',
    subtitle: 'Modular Brief System',
    bullets: [
      { title: 'Section A', text: 'Universal strategy inputs' },
      { title: 'Section B', text: 'Deliverable-specific constraints' },
      { text: 'Clarifies intent before any AI-assisted execution' }
    ],
    visualType: 'carousel',
    visualMeta: {
        images: [
            'https://i.imgur.com/oMbHWTX.png',
            'https://i.imgur.com/SXOZkBV.png',
            'https://i.imgur.com/0Y10CwY.png'
        ]
    }
  },
  {
    id: '10',
    layout: 'standard',
    title: 'Testing Protocol',
    subtitle: 'Validation Methodology',
    bullets: [
      { title: 'Control Condition', text: 'Unstructured "lazy prompting"' },
      { title: 'Test Condition', text: 'Framework-guided workflow' },
      { title: 'Measured', text: 'Alignment, distinctiveness, quality, efficiency' }
    ],
    visualType: 'none'
  },
  {
    id: '11',
    layout: 'center',
    title: 'Case Study: The Pelvic Door',
    subtitle: 'Healthcare Logo Design',
    content: [
      'Nuanced challenge: clinically credible and emotionally warm',
      'Selected because this is a real client'
    ]
  },
  {
    id: '12',
    layout: 'split',
    title: 'Control Condition Results',
    subtitle: 'Lazy Prompting =\nFast but Misaligned',
    bullets: [
      { text: 'Generic clichés' },
      { text: 'Literal anatomy' },
      { text: 'Drift toward spa/wellness aesthetics' },
      { text: 'Low strategic alignment' }
    ],
    visualType: 'carousel',
    visualMeta: {
        images: [
            'https://i.imgur.com/Kuu6rxK.png',
            'https://i.imgur.com/2Mk1SeS.png',
            'https://i.imgur.com/lnAuNGA.png',
            'https://i.imgur.com/V1vZoGN.png',
            'https://i.imgur.com/q11ZbxH.png'
        ]
    }
  },
  {
    id: '13',
    layout: 'split',
    title: 'Framework-Guided Results',
    subtitle: 'Measurable Improvements',
    bullets: [
      { text: 'Clearer strategic alignment' },
      { text: 'Stronger differentiation' },
      { text: 'Fewer cliché patterns' },
      { text: 'Higher-quality refinements' },
      { text: 'More efficient revision cycles' }
    ],
    visualType: 'carousel',
    visualMeta: {
        images: [
            'https://i.imgur.com/GtvZAMs.png',
            'https://i.imgur.com/mDGzTMi.png'
        ]
    }
  },
  {
    id: '14',
    layout: 'standard',
    title: 'Process Documentation',
    subtitle: '65-Page Validation Lab Notebook',
    bullets: [
      { text: 'Documented prompts, friction points, misfires, reasoning' },
      { text: 'Revealed gaps and misalignments in early framework versions' }
    ],
    visualType: 'none'
  },
  {
    id: '15',
    layout: 'split',
    title: 'The Meta-Discovery',
    subtitle: 'When AI Misunderstood the Framework',
    bullets: [
      { text: 'AI-generated test notebook positioned AI as designer' },
      { text: 'Violated core principles' },
      { text: 'The mismatch wasn\'t visible until testing' },
      { text: 'Framework validated itself by catching this error' }
    ],
    visualType: 'carousel',
    visualMeta: {
        images: [
            'https://i.imgur.com/5FGW5TF.png',
            'https://i.imgur.com/8XwOw1R.png'
        ]
    }
  },
  {
    id: '16',
    layout: 'standard',
    title: 'The LLM Limitation',
    subtitle: 'Pattern-Maximizers, Not Pattern-Separators',
    bullets: [
      { text: 'AI excels at recognizing patterns' },
      { text: 'AI struggles to maintain ambiguity or differentiate strategic possibilities' },
      { title: 'Solution', text: 'Split Stage 1B → AI extracts data; humans interpret meaning' }
    ],
    visualType: 'none'
  },
  {
    id: '17',
    layout: 'split',
    title: 'Additional Findings',
    subtitle: 'Model Self-Preference Bias',
    bullets: [
      { text: 'Claude consistently ranked its own outputs highest' },
      { text: 'Confirms that evaluation and judgment must \nremain human-led' }
    ],
    visualType: 'split-image',
    visualMeta: { image: 'https://i.imgur.com/6lpKX48.png' }
  },
  {
    id: '18',
    layout: 'standard',
    title: 'Week 12 Pivot',
    subtitle: 'From Toolkit → Prototype Website',
    content: ['Instead of forcing a rushed toolkit, I built a demo site that:'],
    bullets: [
      { text: 'Visualizes the workflow' },
      { text: 'Explains each threshold' },
      { text: 'Shows how the system operates' },
      { text: 'Sets up future development for spring quarter' }
    ],
    visualType: 'none'
  },
  {
    id: '19',
    layout: 'split',
    title: 'Website Demo',
    subtitle: 'A visual explanation of the \nfive-threshold system and \nworkflow sequence',
    link: 'https://threshold-ai.vercel.app/',
    visualType: 'split-image',
    visualMeta: {
        image: 'https://i.ibb.co/Q3yk5dhX/Screenshot-2025-12-08-at-7-26-24-PM.png',
        link: 'https://threshold-ai.vercel.app/'
    }
  },
  {
    id: '20',
    layout: 'standard',
    title: 'Learning Objectives',
    subtitle: 'What I aimed to learn → What I demonstrated',
    bullets: [
      { title: 'Build a research-backed workflow', text: 'Validated through testing' },
      { title: 'Understand AI boundaries', text: 'Identified structural model limits' },
      { title: 'Turn process into a system', text: 'Prototype website + documentation' },
      { title: 'Strengthen creative decision-making', text: 'Thresholds improved clarity and integrity' }
    ],
    visualType: 'none'
  },
  {
    id: '21',
    layout: 'standard',
    title: 'Reflection: What Succeeded',
    bullets: [
      { text: 'Structured checkpoints improved outcomes' },
      { text: 'Validation clarified issues early' },
      { text: 'Framework is grounded, testable, and extensible' },
      { text: 'Prototype site makes the system tangible and teachable' }
    ],
    visualType: 'none'
  },
  {
    id: '22',
    layout: 'standard',
    title: 'Reflection: What Fell Short / Future Refinements',
    bullets: [
      { text: 'Prototype site needs full functionality' },
      { text: 'Want external designer testing' },
      { text: 'Future work: automated brief builder, integrated pattern extraction' }
    ],
    visualType: 'none'
  },
  {
    id: '23',
    layout: 'title',
    title: 'Thank you.',
    link: 'https://threshold-ai.vercel.app/'
  }
];
    
