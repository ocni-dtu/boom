import { useGetStreamsQuery } from '@queries'
import { Container, Grid } from '@mantine/core'
import { ErrorMessage, Loading, ProjectCard } from '@components'

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
    return (<Container>
      <ErrorMessage error={error} />
    </Container>)
  }


  return (
    <Grid>
      {data?.activeUser?.projects.items?.map((project, index) => (
        <Grid.Col span={3} key={index}>
          <ProjectCard
            // @ts-ignore
            project={project}
          />
        </Grid.Col>
      ))}
    </Grid>
  )
}