import { Outlet, Link } from 'react-router'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-4">
        <header className="mb-8">
          <nav className="flex items-center space-x-4">
            <Link to="/" className="text-lg font-medium hover:underline">Home</Link>
            <Link to="/scorecard" className="text-lg font-medium hover:underline">Scorecard</Link>
            <Link to="/repos" className="text-lg font-medium hover:underline">Repos</Link>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
        <footer className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vite + React + Shadcn
        </footer>
      </div>
    </div>
  )
} 