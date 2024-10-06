import { ApolloError } from '@apollo/client'
import { ReactNode } from 'react'
import { Loading, ErrorMessage, ErrorBoundary } from '@components'

interface FetchBoundaryProps {
  loading?: boolean
  error: ApolloError | undefined
  children: ReactNode
}

export const FetchBoundary = <P extends FetchBoundaryProps>(props: P & FetchBoundaryProps) => {
  const { loading, error, children } = props

  if (loading) {
    return <Loading data-testid='loading' />
  }

  if (error) {
    return <ErrorMessage error={error} data-testid='error-message' />
  }

  return (
    <ErrorBoundary data-testid='error-boundary' {...(props as P)}>
      {children}
    </ErrorBoundary>
  )
}
