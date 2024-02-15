import { ReactNode, useMemo } from 'react'

import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { SERVER_URL, useAuth } from '@contexts'

export const GraphQlProvider = (children: ReactNode) => {
  const { token } = useAuth()

  const speckleServerLink = createHttpLink({
    uri: `${SERVER_URL}/graphql`,
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

  const client = useMemo(
    () =>
      new ApolloClient({
        link: authLink.concat(speckleServerLink),
        cache: new InMemoryCache(),
      }),
    [authLink, speckleServerLink],
  )

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
