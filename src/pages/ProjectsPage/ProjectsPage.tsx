import { useGetStreamsQuery } from '@queries'
import { Grid, useMatches } from '@mantine/core'
import { ErrorBoundary, FetchBoundary, ProjectCard } from '@components'

export const ProjectsPage = () => {
  const { loading, error, data } = useGetStreamsQuery()

  const gridSpan = useMatches({ base: 12, sm: 6, md: 4, xl: 3 })
  return (
    <FetchBoundary error={error} loading={loading}>
      <Grid>
        {data?.activeUser?.projects?.items?.map((project, index) => (
          <Grid.Col span={gridSpan} key={index}>
            <ErrorBoundary>
              <ProjectCard project={project} />
            </ErrorBoundary>
          </Grid.Col>
        ))}
      </Grid>
    </FetchBoundary>
  )
}
