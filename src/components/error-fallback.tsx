import { FallbackProps } from 'react-error-boundary'
import { useNavigate } from 'react-router'
import { Button } from '@/components/ui/button'

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const navigate = useNavigate()
  
  const handleReset = () => {
    resetErrorBoundary()
  }

  const handleGoHome = () => {
    navigate('/')
    resetErrorBoundary()
  }

  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center gap-4 text-center">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Something went wrong</h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          {error.message || 'An unexpected error occurred'}
        </p>
      </div>
      <div className="flex gap-2">
        <Button onClick={handleReset}>Try Again</Button>
        <Button variant="outline" onClick={handleGoHome}>
          Go to Home
        </Button>
      </div>
    </div>
  )
} 