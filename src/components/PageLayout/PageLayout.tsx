import { AppShell, Container, rem, useMantineTheme, useMatches } from '@mantine/core'
import { ErrorBoundary, Header } from '@components'
import { Outlet } from 'react-router-dom'

export const PageLayout = () => {
  const theme = useMantineTheme()

  const headerHeight = 50
  return (
    <AppShell header={{ height: headerHeight }} padding='xl' withBorder={true}>
      <AppShell.Header bg={theme.primaryColor}>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
      </AppShell.Header>
      <AppShell.Main pt={`calc(${rem(headerHeight)} + var(--mantine-spacing-xl))`} bg={theme.other.backgroundColor}>
        <ErrorBoundary>
          <Container size={useMatches({ base: '100%', md: 'lg', xl: 'xl' })}>
            <Outlet />
          </Container>
        </ErrorBoundary>
      </AppShell.Main>
    </AppShell>
  )
}
