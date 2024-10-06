import { MantineProvider } from '@mantine/core'
import { AppRouter, theme } from '@components'
import '@fontsource/outfit'
import '@mantine/core/styles.css'
import 'mantine-react-table/styles.css'

export const App = () => (
  <MantineProvider theme={theme}>
    <AppRouter />
  </MantineProvider>
)
