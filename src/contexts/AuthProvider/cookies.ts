interface SetCookieProps {
  name: string
  value: string
  domain?: string
}

export const setCookie = ({ name, value, domain = import.meta.env.VITE_APP_DOMAIN }: SetCookieProps) => {
  document.cookie = `${name}=${value}; domain=${domain}; Secure;`
}

export const getCookie = (name: string) => {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1]
}

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
}
