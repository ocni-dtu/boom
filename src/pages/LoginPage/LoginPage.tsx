import { Container } from '@mantine/core'
import { useAuth } from '@contexts'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const LoginPage = () => {
  const { token } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/projects')
    }
  }, [token])


  return (
    <Container>
      HELLO FROM LOGIN
    </Container>
  )
}