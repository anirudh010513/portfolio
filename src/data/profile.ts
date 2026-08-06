export const profile = {
  name: 'Anirudh Baradwaj',
  headline:
    'Computer Science Engineering Student · Full Stack Developer · AI & Machine Learning Enthusiast',
  location: 'Delhi, India',
  email: 'anirudhbaradwaj2005@gmail.com',
  phone: '+91 7827835733',
  phoneHref: '+917827835733',
  github: 'https://github.com/anirudh010513',
  githubHandle: 'anirudh010513',
  siteUrl: 'https://anirudh010513.github.io/portfolio/',
  about: [
    'A 22-year-old Computer Science Engineering student from Vellore Institute of Technology (VIT-AP Campus) with a strong interest in artificial intelligence, full-stack development, and building scalable software systems. Passionate about transforming ideas into impactful real-world applications through clean engineering practices, modern technologies, and continuous learning. Eager to take on challenging projects that strengthen technical expertise while delivering innovative and meaningful solutions.',
  ],
} as const

export interface EducationItem {
  title: string
  school: string
  badge: string
}

export const education: EducationItem[] = [
  {
    title: 'Bachelor of Technology in Computer Science Engineering',
    school: 'Vellore Institute of Technology – AP',
    badge: 'Expected CGPA: 7.2',
  },
  {
    title: 'Senior Secondary Education (Class XII)',
    school: 'Vishwa Bharati Public School',
    badge: '74%',
  },
  {
    title: 'Secondary Education (Class X)',
    school: 'Vishwa Bharati Public School',
    badge: '69%',
  },
]

export interface ExperienceItem {
  role: string
  company: string
  period: string
  points: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Enterprise Developer Intern',
    company: 'Reliance Jio Infocomm',
    period: 'January 2025 – May 2025',
    points: [
      'Developed and maintained internal enterprise applications.',
      'Collaborated with cross-functional development teams.',
      'Worked with APIs, databases, authentication, and backend systems.',
      'Followed software engineering best practices throughout the development lifecycle.',
    ],
  },
  {
    role: 'IT Services Intern',
    company: 'MECON LTD., Ranchi',
    period: 'December 2024 – January 2025',
    points: [
      'Observed enterprise workflows and organizational software processes.',
      'Collaborated with technical teams to understand enterprise IT operations.',
    ],
  },
]

export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    title: 'Backend',
    skills: ['FastAPI', 'REST APIs', 'JWT Authentication', 'SQLAlchemy'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQL'],
  },
  {
    title: 'AI / Machine Learning',
    skills: ['TensorFlow', 'Keras', 'MobileNetV2', 'Face Recognition', 'Machine Learning'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Soft Skills',
    skills: ['Leadership', 'Teamwork', 'Communication', 'Critical Thinking', 'Time Management'],
  },
  {
    title: 'Languages',
    skills: ['English', 'Hindi', 'Tamil', 'Malayalam'],
  },
]

export interface Project {
  name: string
  tagline: string
  featured?: boolean
  year?: string
  stack: string[]
  description: string
  features?: string[]
}

export const projects: Project[] = [
  {
    name: 'DocBook',
    tagline: 'Healthcare Management Platform',
    featured: true,
    year: '2026',
    stack: ['Angular', 'FastAPI', 'SQLAlchemy', 'JWT', 'Face Recognition'],
    description:
      'Built a complete healthcare management platform supporting patients, doctors, hospitals, and administrators — designed with a secure, enterprise-grade architecture.',
    features: [
      'Multi-role authentication',
      'JWT authentication',
      'Role-Based Access Control (RBAC)',
      'REST APIs',
      'Analytics dashboard',
      'Browser-based Face ID login',
      'Enterprise architecture',
      'SQLAlchemy ORM',
      'Secure backend',
    ],
  },
  {
    name: 'Plant Leaf Disease Detection',
    tagline: 'Deep Learning · Computer Vision',
    stack: ['TensorFlow', 'Keras', 'MobileNetV2'],
    description:
      'Developed and fine-tuned a MobileNetV2 CNN that detects plant leaf diseases with approximately 95% accuracy on the PlantVillage dataset, using transfer learning and data augmentation to improve generalization.',
  },
  {
    name: 'SilentZone',
    tagline: 'Smart Noise Detection System',
    stack: ['Sound Sensors', 'Microcontrollers'],
    description:
      'Developed a smart noise detection system using sound sensors and microcontrollers to monitor ambient noise and trigger alerts — designed for libraries and hospitals.',
  },
  {
    name: 'Automatic Irrigation System',
    tagline: 'IoT · Embedded Systems',
    stack: ['Arduino', 'Soil Moisture Sensors'],
    description:
      'Built an Arduino-based automated irrigation system using soil moisture sensors that automatically waters plants based on real-time moisture levels.',
  },
]

export interface Certification {
  name: string
  domain: string
}

export const certifications: Certification[] = [
  { name: 'AWS Solution Architect', domain: 'Cloud Computing' },
  { name: 'Oracle OCI Generative AI', domain: 'Generative AI' },
]
