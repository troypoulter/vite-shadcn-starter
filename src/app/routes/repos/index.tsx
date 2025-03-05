import { useState } from 'react'
import { Link } from 'react-router'

type Repository = {
  id: number
  name: string
  description: string
  stars: number
  forks: number
  language: string
}

export default function ReposPage() {
  const [repos] = useState<Repository[]>([
    {
      id: 1,
      name: 'react-router',
      description: 'Declarative routing for React',
      stars: 48500,
      forks: 9800,
      language: 'TypeScript'
    },
    {
      id: 2,
      name: 'tailwindcss',
      description: 'A utility-first CSS framework for rapid UI development',
      stars: 72300,
      forks: 3700,
      language: 'CSS'
    },
    {
      id: 3,
      name: 'shadcn-ui',
      description: 'Beautifully designed components built with Radix UI and Tailwind CSS',
      stars: 35700,
      forks: 2100,
      language: 'TypeScript'
    },
    {
      id: 4,
      name: 'vite',
      description: 'Next generation frontend tooling',
      stars: 58900,
      forks: 4500,
      language: 'JavaScript'
    },
    {
      id: 5,
      name: 'react',
      description: 'A JavaScript library for building user interfaces',
      stars: 210000,
      forks: 44000,
      language: 'JavaScript'
    }
  ])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Repositories</h1>
      <p className="text-muted-foreground">
        Browse and manage your repositories.
      </p>
      
      <div className="rounded-lg border shadow-sm">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Your Repositories</h2>
        </div>
        <div className="divide-y">
          {repos.map((repo) => (
            <div key={repo.id} className="p-4 hover:bg-muted/50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium">{repo.name}</h3>
                  <p className="text-sm text-muted-foreground">{repo.description}</p>
                  <div className="mt-2 flex items-center space-x-4 text-sm">
                    <span className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-yellow-400 mr-1"></span>
                      {repo.language}
                    </span>
                    <span>⭐ {repo.stars.toLocaleString()}</span>
                    <span>🍴 {repo.forks.toLocaleString()}</span>
                  </div>
                </div>
                <Link 
                  to={`/repos/${repo.id}`} 
                  className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 