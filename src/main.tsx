import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App, ErrorBoundary } from '@components'
import { AuthProvider, GraphQlProvider, UserProvider } from '@contexts'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <BrowserRouter>
          <GraphQlProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </GraphQlProvider>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>,
)
