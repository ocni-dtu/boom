import { useParams } from 'react-router-dom'
import { Button, Container, Group, Title } from '@mantine/core'
import { Loading, ProjectTable } from '@components'
import { BranchTabs } from '../../components/BranchTabs'
import { useGetStreamQuery } from '@queries'
import { useState } from 'react'


export const TablePage = () => {
  const { projectId } = useParams()
  const { loading: streamLoading, data: streamData } = useGetStreamQuery({
    variables: { projectId: projectId! },
    skip: !projectId,
  })
  const [selectedObjectId, setSelectedObjectId] = useState<string | null>(null)

  if (!projectId) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  return (
    <Container>
      <Group><Title>{streamData?.stream?.name}</Title><Button>Calculate GWP</Button></Group>
      {/*@ts-ignore*/}
      <BranchTabs branches={streamData?.stream?.branches?.items} setSelectedObjectId={setSelectedObjectId} />
      {projectId && selectedObjectId ?
        <iframe src={`https://speckle.xyz/embed?stream=${projectId}&commit=${selectedObjectId}&autoload=true&transparent=true`}
                width="900" height="400"
                frameBorder="0"></iframe> : null}
      <ProjectTable projectId={projectId} objectId={selectedObjectId} loading={streamLoading || !selectedObjectId} />
    </Container>
  )
}