import { Link } from 'react-router'

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      <p className="text-muted-foreground">
        This is a starter template using React 19, Tailwind v4, Shadcn, and React Router v7 in library mode.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Scorecard</h2>
          <p className="mb-4">View your performance scorecard and metrics.</p>
          <Link 
            to="/scorecard" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            View Scorecard
          </Link>
        </div>
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Repositories</h2>
          <p className="mb-4">Browse and manage your repositories.</p>
          <Link 
            to="/repos" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            View Repos
          </Link>
        </div>
      </div>
    </div>
  )
} 