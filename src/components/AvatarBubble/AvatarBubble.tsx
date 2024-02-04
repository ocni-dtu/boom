import { useAuth, useUser } from '@contexts'
import { Avatar, UnstyledButton } from '@mantine/core'
import { Loading } from '@components'


export const AvatarBubble = () => {
  const { token, login } = useAuth()
  const { user } = useUser()

  if (!token) {
    return <UnstyledButton onClick={login} style={{ marginRight: 8 }}>Login</UnstyledButton>
  }

  if (!user) {
    return <Loading />
  }

  return (
    <Avatar radius="xl" color='black'
            style={{ marginRight: 8 }}>{`${user.name?.split(' ')[0][0]}${user.name?.split(' ')[1][0]}`}</Avatar>
  )
}