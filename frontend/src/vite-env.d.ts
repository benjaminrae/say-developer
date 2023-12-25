/// <reference types="vite/client" />

interface ImportMetaEnv {
  NODE_ENV: string;
  VITE_SAY_DEVELOPER_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
