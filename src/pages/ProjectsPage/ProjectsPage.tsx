import { useGetStreamsQuery } from '@queries'
import { Container, Grid } from '@mantine/core'
import { ErrorBoundary, ErrorMessage, Loading, ProjectCard } from '@components'

export const ProjectsPage = () => {
  const { loading, error, data } = useGetStreamsQuery()

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage error={error} />
      </Container>
    )
  }

  return (
    <Container>
      <Grid>
        {data?.activeUser?.projects?.items?.map((project, index) => (
          <Grid.Col span={4} key={index}>
            <ErrorBoundary>
              <ProjectCard
                // @ts-expect-error temporary implementation
                project={project}
              />
            </ErrorBoundary>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}
