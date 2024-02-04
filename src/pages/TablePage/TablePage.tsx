import { useParams } from 'react-router-dom'
import { Container, Title } from '@mantine/core'
import { Loading, ProjectTable } from '@components'
import { BranchTabs } from '../../components/BranchTabs'
import { useGetStreamQuery } from '@queries'
import { useState } from 'react'


export const TablePage = () => {
  const { projectId } = useParams()
  const { loading: streamLoading, data: streamData } = useGetStreamQuery({ variables: { projectId: projectId! }, skip: !projectId })
  const [ selectedObjectId, setSelectedObjectId ] = useState<string | null>(null)

  if (!projectId) {
    return (
      <Container>
        <Loading />
      </Container>
    )
  }

  return (
    <Container>
      <Title>{streamData?.stream?.name}</Title>
      {/*@ts-ignore*/}
      <BranchTabs branches={streamData?.stream?.branches?.items} setSelectedObjectId={setSelectedObjectId} />
      <ProjectTable projectId={projectId} objectId={selectedObjectId} loading={streamLoading || !selectedObjectId}/>
    </Container>
  )
}