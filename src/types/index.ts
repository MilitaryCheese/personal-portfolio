export interface Project {
  id: string
  codename: string
  name: string
  displayName: string
  slug: string
  year: string
  status: 'live' | 'in development' | 'archived'
  roleType: 'Front-end heavy' | 'Full stack' | 'Design + Dev'
  stack: string[]
  stackReasoning: Record<string, string>
  keyPatterns: string[]
  architectureNote: string
  demoUrl: string
  githubUrl: string
  thumbnail: string
  logline: string
  origin: string
  approach: string
  proudOf: string[]
  ifIRebuiltThis: string[]
  challenges: string[]
  whatPeopleSaid: string[]
}