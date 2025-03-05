import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Link, Outlet, useNavigate } from 'react-router'
import { ErrorBoundary } from '@/components/error-boundary'
import { ErrorFallback } from '@/components/error-fallback'

export default function RootLayout() {
  const navigate = useNavigate()

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center px-4 md:hidden">
          <Link to="/">Logo</Link>
          <div className="ml-auto">
            <SidebarTrigger />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              // Reset the state of your app here
              navigate('/')
            }}
            onError={(error, info) => {
              // Log the error to an error reporting service
              console.error('Error caught by ErrorBoundary:', error, info)
            }}
          >
            <Outlet />
          </ErrorBoundary>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
} 