import { Group, Title, UnstyledButton, useMantineTheme } from '@mantine/core'
import { AvatarBubble } from '@components'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const theme = useMantineTheme()
  const navigate = useNavigate()

  return (
    <header style={{ paddingLeft: 5, backgroundColor: theme.colors.yellow[3] }}>
      <Group justify="space-between">
        <UnstyledButton onClick={() => navigate('/')}><Title order={1}>boom</Title></UnstyledButton>
        <AvatarBubble />
      </Group>
    </header>
  )
}
