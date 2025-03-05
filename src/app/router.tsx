import { createBrowserRouter } from 'react-router'

// Layouts
import RootLayout from './layout'

// Pages
import HomePage from './routes/index'
import ScorecardPage from './routes/scorecard/index'
import ReposPage from './routes/repos/index'

// Error Boundary
import { RouterErrorBoundary } from '@/components/error-boundary'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RouterErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'scorecard',
        element: <ScorecardPage />
      },
      {
        path: 'repos',
        element: <ReposPage />
      }
    ]
  }
]) 