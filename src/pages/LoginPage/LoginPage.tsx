import { Container } from '@mantine/core'
import { useAuth } from '@contexts'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const { token } = useAuth()
  const navigate = useNavigate()

  if (token) {
    navigate('/projects')
  }
  return (
    <Container>
      HELLO FROM LOGIN
    </Container>
  )
}