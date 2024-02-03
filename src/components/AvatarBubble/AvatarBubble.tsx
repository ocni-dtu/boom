import { useAuth, useUser } from '@contexts'
import { Avatar, UnstyledButton } from '@mantine/core'
import { Loading } from '@components'


export const AvatarBubble = () => {
  const { token, login } = useAuth()
  const { user } = useUser()

  if (!token) {
    return <UnstyledButton onClick={login} style={{marginRight: 8}}>Login</UnstyledButton>
  }

  if (!user) {
    return <Loading />
  }

  return (
    <Avatar src={user.avatar} radius="xl" style={{marginRight: 8}} />
  )
}