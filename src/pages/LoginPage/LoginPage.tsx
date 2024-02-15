import { Button, Card, Container, Image, rem, Stack, Text, Title } from '@mantine/core'
import { useAuth } from '@contexts'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const LoginPage = () => {
  const { token, login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/projects')
    }
  }, [token, navigate])

  return (
    <Container>
      <Stack align='center'>
        <Title style={{ fontSize: rem(48) }}>BOOM 💥</Title>
        <Title order={2}>
          <Text component='span' inherit style={{ textDecoration: 'underline' }}>
            B
          </Text>
          ill{' '}
          <Text component='span' inherit style={{ textDecoration: 'underline' }}>
            O
          </Text>
          f{' '}
          <Text component='span' inherit style={{ textDecoration: 'underline' }}>
            O
          </Text>
          pen{' '}
          <Text component='span' inherit style={{ textDecoration: 'underline' }}>
            M
          </Text>
          aterials
        </Title>
      </Stack>
      <br />
      <Card shadow='sm' padding='lg' radius='md' withBorder>
        <Card.Section>
          <Image src='/boom-speckle.gif' height={500} alt='boom' />
        </Card.Section>

        <Text my='md'>
          Quantity take-offs is an intermediate step between your BIM model and analyses like LCA and cost calculations.
          Instead of doing your schedules in Revit, you can use boom to create quantity take-offs directly from Speckle.
        </Text>

        <Button mt='md' radius='md' variant='filled' onClick={login}>
          Login Now!
        </Button>
      </Card>
    </Container>
  )
}
