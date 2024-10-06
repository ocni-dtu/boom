import { ReactNode, useMemo } from 'react'

import { ApolloClient, ApolloProvider, createHttpLink, from, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { useAuth } from '@contexts'
import { RestLink } from 'apollo-link-rest'

type GraphQlProviderProps = {
  children: ReactNode
}

export const GraphQlProvider = ({ children }: GraphQlProviderProps) => {
  const { token } = useAuth()

  const speckleServerLink = createHttpLink({
    uri: `${import.meta.env.VITE_SPECKLE_SERVER_URL}/graphql`,
  })

  const authLink = useMemo(
    () =>
      setContext((_, { headers }) => {
        // get the authentication token from local storage if it exists
        // return the headers to the context so httpLink can read them
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
          },
        }
      }),
    [token],
  )
  const restLink = useMemo(
    () =>
      new RestLink({
        uri: import.meta.env.VITE_SPECKLE_SERVER_URL,
        headers: {
          authorization: token ? `Bearer ${token}` : '',
        },
        responseTransformer: async (response: Response) => {
          if (response.headers.get('content-type')?.includes('application/json')) {
            return await response.json()
          } else if (response.headers.get('content-type')?.includes('image/png')) {
            const preview = window.URL.createObjectURL(await response.blob())
            return { url: preview, id: response.url.split('/').pop() }
          } else {
            return await response.text()
          }
        },
      }),
    [token],
  )

  const client = useMemo(
    () =>
      new ApolloClient({
        link: from([restLink, authLink, speckleServerLink]),
        cache: new InMemoryCache({}),
      }),
    [authLink, speckleServerLink, restLink],
  )

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
