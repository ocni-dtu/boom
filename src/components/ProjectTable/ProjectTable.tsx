import { Autocomplete, ScrollArea, Table, Title } from '@mantine/core'
import { useEffect, useMemo, useState } from 'react'
import { Loading } from '../Loading'
import { useGetStreamQuery } from '@queries'
import ObjectLoader, { SpeckleObject } from '@speckle/objectloader'
import { SERVER_URL, useAuth } from '@contexts'

interface ProjectTableProps {
  projectId: string
}

export const ProjectTable = (props: ProjectTableProps) => {
  const { projectId } = props
  const { token } = useAuth()
  const [objects, setObjects] = useState<SpeckleObject[]>([])
  const [ headerOptions, setHeaderOptions ] = useState<Set<string>>(new Set())
  const [ headerValue, setHeaderValue ] = useState('type')
  const [ headerValue2, setHeaderValue2 ] = useState('category')
  const [ selectedHeader, setSelectedHeader] = useState('type')
  const [ selectedHeader2, setSelectedHeader2] = useState('category')
  const { loading: streamLoading, data: streamData } = useGetStreamQuery({ variables: { projectId } })

  const objectId = streamData?.stream?.branches?.items[0].commits.items[0].referencedObject

  useEffect(() => {
    const loadSpeckleObjects = async ({ token, projectId, objectId }) => {
      const loader = new ObjectLoader({ serverUrl: SERVER_URL, token, streamId: projectId, objectId, options: { excludeProps: ['displayValue', 'displayMesh', 'renderMaterial']} })
      const _objects = []
      const _headers = headerOptions
      for await (let obj of loader.getObjectIterator()) {
        if (obj.speckle_type.startsWith('Objects.BuiltElements')) {
          // console.log('OBJ', obj)
          Object.keys(obj).forEach(key => _headers.add(key))
          if (obj.parameters) Object.keys(obj.parameters).forEach(key => _headers.add(`parameters.${key}`))
          _objects.push(obj)
        }
      }
      setHeaderOptions(_headers)
      setObjects(_objects)
    }
    if (objectId) {
      loadSpeckleObjects({ token, projectId, objectId })
    }

  }, [token, projectId, objectId])

  const getRowValue = ({row, headerValue}: {row: object, headerValue: string}) => {
    if (headerValue.includes('.')){

    }
    const splittedHeader = headerValue.split('.')
    let data = row
    splittedHeader.forEach(header => data = data? data[header]: null )
    return data
  }
  // @ts-ignore
  const [scrolled, setScrolled] = useState(false)

  const rows = useMemo(() => objects?.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.id}</Table.Td>
      <Table.Td>{getRowValue({ row, headerValue: selectedHeader})}</Table.Td>
      <Table.Td>{getRowValue({ row, headerValue: selectedHeader2})}</Table.Td>
    </Table.Tr>
  )) || [], [objects, selectedHeader, selectedHeader2])

  if (streamLoading) {
    return <Loading />
  }

  return (
    <>
      <Title>{streamData?.stream?.name}</Title>
      <ScrollArea h={'80vh'} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table miw={700}>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>
                <Autocomplete data={Array.from(headerOptions)} value={headerValue} onChange={setHeaderValue} onOptionSubmit={setSelectedHeader} />
              </Table.Th>
              <Table.Th>
                <Autocomplete data={Array.from(headerOptions)} value={headerValue2} onChange={setHeaderValue2} onOptionSubmit={setSelectedHeader2} />
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          {/*@ts-ignore*/}
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </>
  )
}