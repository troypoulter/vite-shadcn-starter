import { useNavigate, useRouteError, isRouteErrorResponse } from 'react-router'
import { ErrorBoundary } from 'react-error-boundary'
import { Button } from '@/components/ui/button'

// React Router error component
export function RouterErrorBoundary() {
  const error = useRouteError()
  const navigate = useNavigate()
  
  let errorMessage = 'An unexpected error occurred'
  
  if (isRouteErrorResponse(error)) {
    errorMessage = `${error.status} ${error.statusText}: ${error.data}`
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  }
  
  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center gap-4 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Oops! Something went wrong</h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {errorMessage}
        </p>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => window.location.reload()}>Refresh Page</Button>
        <Button variant="outline" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </div>
    </div>
  )
}

export { ErrorBoundary }
export default ErrorBoundary 