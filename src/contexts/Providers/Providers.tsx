import { AuthProvider, GraphQlProvider, UserProvider } from '@contexts'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => (
  <AuthProvider>
    <GraphQlProvider>
      <UserProvider>{children}</UserProvider>
    </GraphQlProvider>
  </AuthProvider>
)
