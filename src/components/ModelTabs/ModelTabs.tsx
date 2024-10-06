import { Divider, Grid, NavLink } from '@mantine/core'
import { useEffect, useMemo } from 'react'
import { useGetProjectQuery } from '@queries'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FetchBoundary } from '@components'

export const ModelTabs = () => {
  const { projectId, modelId } = useParams()
  const navigate = useNavigate()

  const { loading, data, error } = useGetProjectQuery({ variables: { projectId: projectId! }, skip: !projectId })
  const models = useMemo(() => {
    if (!data) return null
    return data.project.models.items
  }, [data])

  useEffect(() => {
    if (!modelId && models?.length) {
      navigate(`/table/${projectId}/${models[0].id}`)
    }
  }, [modelId, models, navigate, projectId])

  return (
    <FetchBoundary error={error} loading={loading}>
      <Grid>
        {models?.map((model) => (
          <Grid.Col span={{ base: 6, md: 2 }} key={model.id}>
            <NavLink
              label={model.name}
              component={Link}
              to={`/table/${projectId}/${model.id}`}
              active={modelId === model.id}
            />
          </Grid.Col>
        ))}
      </Grid>
      <Divider mb='md' mt='sm' />
    </FetchBoundary>
  )
}
