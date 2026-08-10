export interface Project {
  id: string
  codename: string
  name: string
  displayName: string
  slug: string
  year: string
  buildTime: string
  stack: string[]
  stackReasoning: Record<string, string>
  demoUrl: string
  githubUrl: string
  thumbnail: string
  logline: string
  origin: string
  approach: string
  proudOf: string[]
  thingsNotFixed: string[]
  challenges: string[]
  friendsFeedback: string[]
  oldBossWouldSay: string
  panicMoment: string
  panicLevel: 'low' | 'moderate' | 'high' | 'existential'
}
