import { Button, Card, Group, Image, Text } from '@mantine/core'
import { Project } from '@queries'
import { Link } from 'react-router-dom'
import { Loading } from '../Loading'
import { useAuth } from '@contexts'
import { useState } from 'react'

interface StreamCardProps {
  project?: Pick<Project, 'id' | 'name' | 'description' | 'models'> | null
}

export const ProjectCard = (props: StreamCardProps) => {
  // @ts-ignore
  const { token } = useAuth()
  const { project } = props
  // @ts-ignore
  const [imageData, setImageData] = useState<string | null>(null)

  const previewUrl = project?.models.items[0].previewUrl

  // useEffect(() => {
  //   if (previewUrl) {
  //     fetch(previewUrl, { headers: { authorization: `Bearer ${token}` } })
  //       .then(res => res.text())
  //       .then(d => setImageData(d))
  //   }
  // }, [previewUrl])

  if (!project) {
    return <Loading />
  }

  // console.log("Image", imageData)

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={previewUrl}
          height={160}
          alt={project.name}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{project.name}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {project.description}
      </Text>

      <Button mt="md" radius="md" variant='outline'>
        <Link to={`/table/${project.id}`}>
          Open Table View
        </Link>
      </Button>
    </Card>
  )
}