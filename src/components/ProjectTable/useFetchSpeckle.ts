import { useCallback, useEffect, useState } from 'react'
import ObjectLoader, { SpeckleObject } from '@speckle/objectloader'

interface useFetchSpeckleProps {
  variables: {
    projectId: string
    versionId: string
    options?: Partial<{
      enableCaching: boolean
      fullyTraverseArrays: boolean
      excludeProps: string[]
    }>
  }
  skip?: boolean
}

interface SpeckleCollection extends SpeckleObject {
  elements: SpeckleObject[]
}

export const useFetchSpeckle = ({ variables, skip }: useFetchSpeckleProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)
  const [data, setData] = useState<SpeckleCollection | undefined>()

  const fetchSpeckle = useCallback(() => {
    if (skip) return

    setLoading(true)
    setError(undefined)
    setData(undefined)
    const loader = new ObjectLoader({
      serverUrl: import.meta.env.VITE_SPECKLE_SERVER_URL,
      streamId: variables.projectId,
      objectId: variables.versionId,
      options: {
        enableCaching: true,
        fullyTraverseArrays: false,
        excludeProps: [
          '__closure',
          'displayValue',
          'displayMesh',
          'renderMaterial',
          '@Materials',
          '@Types',
          '@Sheets',
          '@Views',
          '@Project',
        ],
      },
    })

    const filterSpeckleObject = (speckleData: SpeckleCollection) => {
      const excludedElements = [
        'Load Cases',
        'Spaces',
        'HVAC Load Building Types',
        'HVAC Load Space Types',
        'Grids',
        'Pipe Segments',
        'Rvt Links',
        'Lines',
        'Areas',
        'Vertical Circulation',
        'Analytic Spaces',
        'Analytic Surfaces',
        'Lighting Fixtures',
        'Food Service Equipments',
        'Generic Model',
        'Model Groups',
      ]
      const filteredElements = speckleData?.elements?.filter(
        (element) => !excludedElements.includes(element.name as string),
      )
      setData({ ...speckleData, elements: filteredElements })
    }

    loader
      // @ts-expect-error getAndConstructObject is async
      .getAndConstructObject()
      // @ts-expect-error getAndConstructObject is async
      .then((speckleObject: SpeckleObject | SpeckleObject[]) => filterSpeckleObject(speckleObject))
      .catch((e: { message: string }) => setError(e.message))
      .finally(() => setLoading(false))
  }, [variables.projectId, variables.versionId, skip])

  useEffect(() => {
    fetchSpeckle()
  }, [fetchSpeckle])

  return { loading, error, data }
}
