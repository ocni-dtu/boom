import { ErrorBoundary, ModelTabs, ProjectTable, SpeckleViewer } from '@components'

export const TablePage = () => {
  return (
    <ErrorBoundary>
      <ModelTabs />
      <SpeckleViewer />
      <ProjectTable />
    </ErrorBoundary>
  )
}
