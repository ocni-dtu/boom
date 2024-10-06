import { createContext, ReactNode, useMemo } from 'react'
import { useGetUserQuery, User } from '@queries'

interface UserContextProps {
  user: User | null
}

export const UserContext = createContext({ user: null } as UserContextProps)

type UserProviderProps = {
  children: ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const { loading, error, data } = useGetUserQuery()

  const user = useMemo(() => {
    if (loading) return null
    if (error) return null
    if (!data || !data.activeUser) return null
    return data.activeUser as User
  }, [loading, error, data])

  return (
    <UserContext.Provider
      value={{
        user: user,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
