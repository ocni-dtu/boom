import { Group, Title, UnstyledButton } from '@mantine/core'
import { AvatarBubble } from '@components'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Group justify='space-between' pl='md'>
      <UnstyledButton component={Link} to={'/'}>
        <Title order={1}>boom</Title>
      </UnstyledButton>
      <AvatarBubble />
    </Group>
  )
}
