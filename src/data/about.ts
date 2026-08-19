export interface TechStackGroup {
  category: string
  items: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  years: string
  highlights: string[]
}

export interface ContactLink {
  value: string
  href: string
}

export interface AboutInfo {
  name: string
  photo: string
  availability: string
  techStack: TechStackGroup[]
  experience: ExperienceEntry[]
  contact: ContactLink[]
}

export const about: AboutInfo = {
  name: 'Kesh Jayasinghe',
  photo: '../../../public/photo.png',
  availability:
    'Front-end and full stack engineering roles in Melbourne at product companies, agencies, and startups.',
  techStack: [
    { category: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'C#', 'Python', 'SQL'] },
    { category: 'Frameworks', items: ['React', 'Next.js', 'Vue.js', 'Nuxt', 'Angular'] },
    { category: 'Styling', items: ['Tailwind CSS', 'GSAP', 'Framer Motion', 'CSS custom properties'] },
    { category: 'Backend', items: ['Node.js', 'C#.NET', 'GraphQL', 'REST APIs', 'WebSockets'] },
    { category: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'] },
    { category: 'Infrastructure', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel', 'Git'] },
    { category: 'Tooling', items: ['Figma', 'Cursor', 'Claude Code', 'Turborepo', 'TanStack'] },
  ],
  experience: [
    {
      company: 'iTelaSoft',
      role: 'Full Stack Developer',
      years: '2020–2021',
      highlights: [
        'EFFI (Sydney SaaS) — CASL permission architecture across 6 user roles',
        'GraphQL + webhook integration',
        'DataDog SRE sprint',
        'CI/CD',
        'Vue.js',
        'Nuxt',
        'C#.NET',
      ],
    },
    {
      company: '9arch Designs',
      role: 'Senior Web Developer',
      years: '2022–2023',
      highlights: ['Custom Shopify Liquid themes', 'React architecture', 'brand-focused e-commerce clients'],
    },
    {
      company: 'Clymbr Edu',
      role: 'Front-End Instructor (Contract)',
      years: '2023–2024',
      highlights: ['React + Angular', '3 live cohorts', 'component architecture', 'code review'],
    },
    {
      company: 'Zone24x7',
      role: 'Trainee Engineer',
      years: '2018–2019',
      highlights: ['Dashboard UX', 'custom PDF export algorithm', 'REST API extensions', 'C#.NET', 'Node.js'],
    },
  ],
  contact: [
    { value: 'kesh.jayasinghe@gmail.com', href: 'mailto:kesh.jayasinghe@gmail.com' },
    { value: 'linkedin.com/in/keshanijayasinghe', href: 'https://linkedin.com/in/keshanijayasinghe' },
    { value: 'github.com/MilitaryCheese', href: 'https://github.com/MilitaryCheese' },
    { value: 'kesh-jayasinghe.xyz', href: 'https://kesh-jayasinghe.xyz' },
  ],
}
