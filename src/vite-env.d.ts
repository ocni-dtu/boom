/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SPECKLE_SERVER_URL: string
  readonly VITE_SPECKLE_APP_ID: string
  readonly VITE_SPECKLE_APP_SECRET: string
  readonly VITE_APP_DOMAIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
