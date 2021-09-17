declare module "apollo-link-prismic" {
  export function PrismicLink(args: { uri: string; accessToken?: string }): any;
}

declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME: string;
    NEXT_PUBLIC_PRISMIC_MASTER_TOKEN: string;
    NODE_ENV: "development" | "production";
  }
}
