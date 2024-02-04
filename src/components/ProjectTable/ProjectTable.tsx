import { ActionIcon, Autocomplete, Table } from '@mantine/core'
import { useEffect, useMemo, useState } from 'react'
import { Loading } from '@components'
import ObjectLoader, { SpeckleObject } from '@speckle/objectloader'
import { SERVER_URL, useAuth } from '@contexts'
import { IconPlus } from '@tabler/icons-react'

interface ProjectTableProps {
  projectId: string
  objectId: string | null
  loading: boolean
}

export const ProjectTable = (props: ProjectTableProps) => {
  const { projectId, objectId, loading } = props
  const { token } = useAuth()
  const [objects, setObjects] = useState<SpeckleObject[]>([])
  const [headerOptions, setHeaderOptions] = useState<Set<string>>(new Set())
  const [headerValue, setHeaderValue] = useState('type')
  const [headerValue2, setHeaderValue2] = useState('category')
  const [selectedHeader, setSelectedHeader] = useState('type')
  const [selectedHeader2, setSelectedHeader2] = useState('category')

  useEffect(() => {
    // @ts-ignore
    const loadSpeckleObjects = async ({ token, projectId, objectId }) => {
      const loader = new ObjectLoader({
        serverUrl: SERVER_URL,
        token,
        streamId: projectId,
        objectId,
        options: { excludeProps: ['displayValue', 'displayMesh', 'renderMaterial'] },
      })
      const _objects = []
      const _headers = headerOptions
      for await (let obj of loader.getObjectIterator()) {
        // @ts-ignore
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

  const getRowValue = ({ row, headerValue }: { row: object, headerValue: string }) => {
    if (headerValue.includes('.')) {

    }
    const splittedHeader = headerValue.split('.')
    let data = row
    // @ts-ignore
    splittedHeader.forEach(header => data = data ? data[header] : null)
    return data
  }
  // @ts-ignore
  const [scrolled, setScrolled] = useState(false)

  const rows = useMemo(() => objects?.map((row, index) => (
    <Table.Tr key={index}>
      {/*@ts-ignore*/}
      <Table.Td>{row.id}</Table.Td>
      {/*@ts-ignore*/}
      <Table.Td>{getRowValue({ row, headerValue: selectedHeader })}</Table.Td>
      {/*@ts-ignore*/}
      <Table.Td span={2}>{getRowValue({ row, headerValue: selectedHeader2 })}</Table.Td>
    </Table.Tr>
  )) || [], [objects, selectedHeader, selectedHeader2])

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Table miw={800}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>
              <Autocomplete data={Array.from(headerOptions)} value={headerValue} onChange={setHeaderValue}
                            onOptionSubmit={setSelectedHeader} />
            </Table.Th>
            <Table.Th>
              <Autocomplete data={Array.from(headerOptions)} value={headerValue2} onChange={setHeaderValue2}
                            onOptionSubmit={setSelectedHeader2} />
            </Table.Th>
            <Table.Th>
              <ActionIcon variant="outline" color='black' radius='xl'>
                <IconPlus />
              </ActionIcon>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        {/*@ts-ignore*/}
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  )
}