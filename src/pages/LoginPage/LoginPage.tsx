import { Button, Container, Group, TextInput, Title } from '@mantine/core'
import { useAuth } from '@contexts'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const LoginPage = () => {
  const { token } = useAuth()
  const navigate = useNavigate()
  const [value, setValue] = useState<string | null>('')

  useEffect(() => {
    if (token) {
      navigate('/projects')
    }
  }, [token])


  return (
    <Container>
      <Title>BOOM - Bill Of Open Materials</Title>
      <br />
      {/*@ts-ignore*/}
      <Group><TextInput placeholder="Auth code from Speckle" value={value} onChange={(e) => setValue(e.target.value)} /><Button
        onClick={() => navigate(`/auth?${value}`)}>Go</Button></Group>
    </Container>
  )
}