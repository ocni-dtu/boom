import { Group, Title, useMantineTheme } from '@mantine/core'

export const Header = () => {
  const theme = useMantineTheme()

  return (
    <header style={{ paddingLeft: 5, backgroundColor: theme.colors.light[1] }}>
      <Group justify='space-between'>
        <Title order={1}>BOOM</Title>
      </Group>
    </header>
  )
}
