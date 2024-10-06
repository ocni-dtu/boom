import { AspectRatio } from '@mantine/core'
import { useParams } from 'react-router-dom'

export const SpeckleViewer = () => {
  const { projectId, modelId } = useParams()
  const width = '100%'

  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        title='Speckle'
        src={`${import.meta.env.VITE_SPECKLE_SERVER_URL}/projects/${projectId}/models/${modelId}#embed=%7B%22isEnabled%22%3Atrue%2C%22isTransparent%22%3Atrue%7D`}
        width={width}
        frameBorder='1'
      ></iframe>
    </AspectRatio>
  )
}
