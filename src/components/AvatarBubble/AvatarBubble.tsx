import { useAuth, useUser } from '@contexts'
import { Avatar, HoverCard, UnstyledButton } from '@mantine/core'
import { FetchBoundary } from '@components'

export const AvatarBubble = () => {
  const { token, login, logOut } = useAuth()
  const { user } = useUser()

  if (!token) {
    return (
      <UnstyledButton onClick={login} style={{ marginRight: 8 }}>
        Login
      </UnstyledButton>
    )
  }

  return (
    <FetchBoundary error={undefined} loading={!user}>
      <HoverCard>
        <HoverCard.Target>
          <Avatar radius='xl' color='black' style={{ marginRight: 8 }}>
            {createAnagram(user?.name)}
          </Avatar>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <UnstyledButton onClick={() => logOut()}>Log Out</UnstyledButton>
        </HoverCard.Dropdown>
      </HoverCard>
    </FetchBoundary>
  )
}

const createAnagram = (name: string | undefined) => `${name?.split(' ')[0][0]}${name?.split(' ')[1][0]}`
