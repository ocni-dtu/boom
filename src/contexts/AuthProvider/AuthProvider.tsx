import { createContext, ReactNode, useState } from 'react'
import { deleteCookie, getCookie, setCookie } from './cookies.ts'

const TOKEN = `${import.meta.env.VITE_APP_NAME}.AuthToken`
const REFRESH_TOKEN = `${import.meta.env.VITE_APP_NAME}.RefreshToken`
const CHALLENGE = `${import.meta.env.VITE_APP_NAME}.Challenge`

interface AuthContextInterface {
  token: string | undefined
  refreshToken: string | undefined
  login: () => void
  exchangeAccessCode(accessCode: string): Promise<void>
  logOut: () => void
}

export const AuthContext = createContext({} as AuthContextInterface)

type AuthProviderProps = {
  children: ReactNode
}

// Create an auth provider
export const AuthProvider = ({ children }: AuthProviderProps) => {
  // Get the token and refreshToken from localStorage
  const [token, setToken] = useState(getCookie(TOKEN))
  const [refreshToken, setRefreshToken] = useState(getCookie(REFRESH_TOKEN))

  // Create a login function that redirects to the Speckle server authentication page
  const login = () => {
    // Generate random challenge
    const challenge = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    // Save challenge in localStorage
    localStorage.setItem(CHALLENGE, challenge)
    // Send user to auth page
    window.location =
      `${import.meta.env.VITE_SPECKLE_SERVER_URL}/authn/verify/${import.meta.env.VITE_SPECKLE_APP_ID}/${challenge}` as unknown as Location
  }

  // Create a logOut function that removes the token and refreshToken from localStorage
  const logOut = () => {
    deleteCookie(TOKEN)
    deleteCookie(REFRESH_TOKEN)
    setToken(undefined)
    setRefreshToken(undefined)
  }

  // Create an exchangeAccessCode function that exchanges the provided access code with a token/refreshToken pair, and saves them to local storage.
  const exchangeAccessCode = async (accessCode: string) => {
    const res = await fetch(`${import.meta.env.VITE_SPECKLE_SERVER_URL}/auth/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accessCode: accessCode,
        appId: import.meta.env.VITE_SPECKLE_APP_ID,
        appSecret: import.meta.env.VITE_SPECKLE_APP_SECRET,
        challenge: localStorage.getItem(CHALLENGE),
      }),
    })
    const data = await res.json()

    if (data.token) {
      // If retrieving the token was successful, remove challenge and set the new token and refresh token
      localStorage.removeItem(CHALLENGE)
      setCookie({ name: TOKEN, value: data.token })
      setCookie({ name: REFRESH_TOKEN, value: data.refreshToken })
      setToken(data.token)
      setRefreshToken(data.refreshToken)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        refreshToken,
        login,
        exchangeAccessCode,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
