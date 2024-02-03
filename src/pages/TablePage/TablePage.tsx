import { useParams } from 'react-router-dom'
import { Container } from '@mantine/core'
import { Loading, ProjectTable } from '@components'


export const TablePage = () => {
  const { projectId } = useParams()

  if (!projectId) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }
  return (
    <Container>
      <ProjectTable projectId={projectId} />
    </Container>
  )
}