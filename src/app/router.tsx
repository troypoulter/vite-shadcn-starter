import { createBrowserRouter } from 'react-router'

// Layouts
import RootLayout from './layout'

// Pages
import HomePage from './routes/index'
import ScorecardPage from './routes/scorecard/index'
import ReposPage from './routes/repos/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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