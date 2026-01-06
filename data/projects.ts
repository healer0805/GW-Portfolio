export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  url: string
}

export const projects: Project[] = [
  {
    id: 'cyfox',
    title: 'Cyfox',
    description: 'Design / Development / Responsive',
    image: '/img/projects/Cyfox.png',
    tags: ['Design', 'Development', 'Responsive'],
    url: 'https://www.cyfox.com/',
  },
  {
    id: 'levity',
    title: 'Levity',
    description: 'Design / Development / Responsive',
    image: '/img/projects/levity.png',
    tags: ['Design', 'Development', 'Responsive'],
    url: 'https://levity.ai/',
  },
  {
    id: 'tability',
    title: 'Tability',
    description: 'Design / Development / Responsive',
    image: '/img/projects/tability.png',
    tags: ['Design', 'Development', 'Responsive'],
    url: 'https://www.tability.io/',
  },
  {
    id: 'typedream',
    title: 'TypeDream',
    description: 'Design / Development / Responsive',
    image: '/img/projects/typedream.png',
    tags: ['Design', 'Development', 'Responsive'],
    url: 'https://typedream.com/',
  },
]
