import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'weathered',
    codename: 'PROJECT_01',
    name: 'Weathered',
    displayName: 'WEATHERED.APP',
    slug: 'weathered',
    year: '2025',
    buildTime: '3 weeks, give or take a nervous breakdown',
    stack: ['React', 'TypeScript', 'Node.js', 'OpenWeather API'],
    stackReasoning: {
      React: 'needed component reuse across six forecast views',
      TypeScript: 'tired of shipping "undefined is not a function" to production',
      'Node.js': 'proxy server to hide the API key from curious devtools users',
      'OpenWeather API': 'free tier, judged nobody for it',
    },
    demoUrl: 'https://weathered-app.vercel.app/',
    githubUrl: 'https://github.com/MilitaryCheese/weathered-app',
    thumbnail: '',
    logline: 'A weather app that judges your outfit choices before you even ask.',
    origin:
      'Started as a joke about how every portfolio has a weather app, then it accidentally became a real one.',
    approach:
      'Built the forecast engine first, then spent way more time than reasonable on the roast generator.',
    proudOf: [
      'the roast generator actually landed some good ones',
      'zero layout shift on slow 3G',
      'convinced a friend it was a paid app',
    ],
    thingsNotFixed: [
      'still says "mild" for anything between 40 and 90 degrees',
      'the roast generator has said some things I regret',
      'no dark mode, ironically, for an app about weather',
    ],
    challenges: ['rate limits on the free API tier taught me to love caching'],
    friendsFeedback: [
      'why does it know my outfit is bad',
      'this roasted me harder than my mother',
    ],
    oldBossWouldSay: "This is cute, but where's the ticket for it?",
    panicMoment: 'API key committed to a public repo for 40 minutes before anyone noticed.',
    panicLevel: 'high',
  },
  {
    id: 'driftly',
    codename: 'PROJECT_02',
    name: 'Studio Planner',
    displayName: 'PLANNER_STUDIO.APP',
    slug: 'studio_planner',
    year: '2025',
    buildTime: '6 weekends across 4 months',
    stack: ['React', 'TypeScript', 'Supabase', 'Framer Motion'],
    stackReasoning: {
      React: 'the drag-and-drop board needed real component state',
      TypeScript: 'saved me from three different off-by-one bugs',
      Supabase: 'wanted a real backend without writing a real backend',
      'Framer Motion': 'the card reorder animation is doing a lot of emotional labor',
    },
    demoUrl: 'https://studio-planner-pro.vercel.app/',
    githubUrl: 'https://github.com/MilitaryCheese/studio-planner-pro',
    thumbnail: '',
    logline: 'A kanban board for people who have opinions about kanban boards.',
    origin:
      'Every task app I tried was either too simple or trying to be Jira. This is neither, mostly.',
    approach: 'Prototyped the drag interaction in an afternoon, then spent a month making it feel right.',
    proudOf: [
      'drag reorder feels genuinely satisfying',
      'realtime sync across tabs just works',
      'nobody has asked "is this Trello" yet',
    ],
    thingsNotFixed: [
      'keyboard navigation is an afterthought',
      'mobile drag is a coin flip',
      'the empty state is just a sad little dash',
    ],
    challenges: ['realtime conflict resolution when two tabs edit the same card'],
    friendsFeedback: [
      'okay this actually feels nice to use',
      'why is the empty state so sad',
    ],
    oldBossWouldSay: 'Nice, now add SSO and make it enterprise-ready by Friday.',
    panicMoment: 'Realtime sync looped and duplicated a card 200 times before the tab crashed.',
    panicLevel: 'existential',
  },
]
