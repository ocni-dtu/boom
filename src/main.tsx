import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App, ErrorBoundary } from '@components'
import { AuthProvider, GraphQlProvider } from '@contexts'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
      <BrowserRouter>
        <GraphQlProvider
        >
          <App />
        </GraphQlProvider>
      </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
)