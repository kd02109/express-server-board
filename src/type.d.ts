declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: string;
    readonly PORT: '8080';
    readonly COOKIE_SECRET: string;
  }
}
