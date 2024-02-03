import { ScrollArea, Table, Title } from '@mantine/core'
import { useState } from 'react'
import { Loading } from '../Loading'
import { ErrorMessage } from '../ErrorMessage'

interface ProjectTableProps {
  projectId: string
}

export const ProjectTable = (props: ProjectTableProps) => {
  const { projectId } = props
  // const { loading, error, data } = useGetProjectData({ variables: { projectId }})
  const loading = null
  const error = null

  // @ts-ignore
  const data = null

  // @ts-ignore
  const [scrolled, setScrolled] = useState(false)

  // @ts-ignore
  const rows = []
  // const rows = useMemo(() => data?.map((row) => (
  //   <Table.Tr key={row.name}>
  //     <Table.Td>{row.name}</Table.Td>
  //     <Table.Td>{row.email}</Table.Td>
  //     <Table.Td>{row.company}</Table.Td>
  //   </Table.Tr>
  // )) || [], [data])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage error={error}/>
  }


  return (
    <>
      <Title>{projectId}</Title>
      <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table miw={700}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Type</Table.Th>
            </Table.Tr>
          </Table.Thead>
          {/*@ts-ignore*/}
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </>
  )
}