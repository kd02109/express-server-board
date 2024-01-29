declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: string;
    readonly PORT: '8080';
    readonly COOKIE_SECRET: string;
    readonly DB_USERNAME: string;
    readonly DB_PASSWD: string;
    readonly DB_DBNAME: string;
    readonly DB_HOST: string;
  }
}
