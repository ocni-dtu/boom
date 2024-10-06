import { Box, Button, Card, Group, HoverCard, Text, UnstyledButton } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { FetchBoundary } from '../FetchBoundary'
import { gql, useQuery } from '@apollo/client'
import { GetNullable, GetStreamsQuery } from '@queries'
import { IconDots } from '@tabler/icons-react'

type GetStreamsQueryProject = GetNullable<GetStreamsQuery['activeUser'], 'projects'>['items'][number]

interface ProjectCardProps {
  project: GetStreamsQueryProject
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props
  const navigate = useNavigate()
  const previewUrl = project?.versions?.items?.[0]?.previewUrl.replace(import.meta.env.VITE_SPECKLE_SERVER_URL, '')

  const GET_PREVIEW = gql`
    query getStreamPreview($path: String!) {
      preview(path: $path) @rest(type: Preview, path: $path, endpoint: "speckle") {
        id
        url
      }
    }
  `
  const { loading, data, error } = useQuery(GET_PREVIEW, { variables: { path: previewUrl }, skip: !previewUrl })

  return (
    <FetchBoundary error={error} loading={loading}>
      <Card shadow='sm' padding='lg' radius='md' withBorder>
        <Card.Section>
          {data ? <img src={data.preview.url} height={200} alt={project.name} /> : <Box style={{ height: 200 }} />}
        </Card.Section>

        <Group justify='space-between' mt='md' mb='xs'>
          <Text fw={500}>{project.name}</Text>
          <HoverCard shadow='md'>
            <HoverCard.Target>
              <IconDots />
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <UnstyledButton
                component='a'
                href={`${import.meta.env.VITE_SPECKLE_SERVER_URL}/projects/${project.id}`}
                target='_blank'
              >
                View on Speckle
              </UnstyledButton>
            </HoverCard.Dropdown>
          </HoverCard>
        </Group>

        <Text size='sm' c='dimmed'>
          {project.description}
        </Text>

        <Button mt='md' radius='md' variant='filled' onClick={() => navigate(`/table/${project.id}`)}>
          Open Table View
        </Button>
      </Card>
    </FetchBoundary>
  )
}
