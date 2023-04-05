import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["graphql-client"]?: typeof import("nuxt-graphql-client").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["meilisearch"]?: typeof import("nuxt-meilisearch").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["directus"]?: typeof import("nuxt-directus").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["nuxt-config-schema"]?: typeof import("nuxt-config-schema").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["nuxt-graphql-client", NuxtConfig["graphql-client"]] | ["@nuxt/content", NuxtConfig["content"]] | ["nuxt-meilisearch", NuxtConfig["meilisearch"]] | ["nuxt-directus", NuxtConfig["directus"]] | ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module", NuxtConfig["devtools"]] | ["nuxt-config-schema", NuxtConfig["nuxt-config-schema"]] | ["@nuxt/telemetry", NuxtConfig["telemetry"]])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   "graphql-client": {
      clients: any,
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<string>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: boolean,

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<any>,
      },

      documentDriven: boolean,

      experimental: {
         clientDB: boolean,

         stripQueryParameters: boolean,
      },
   },

   serverMeilisearchClient: {
      hostUrl: string,

      searchApiKey: string,

      adminApiKey: string,

      serverSideUsage: boolean,

      instantSearch: {
         theme: string,
      },

      clientOptions: {
         placeholderSearch: boolean,

         paginationTotalHits: number,

         finitePagination: boolean,

         primaryKey: any,

         keepZeroFacets: boolean,
      },
   },
  }
  interface PublicRuntimeConfig {
   GQL_HOST: string,

   "graphql-client": {
      clients: {
         default: {
            token: {
               type: string,

               name: string,
            },

            proxyCookies: boolean,

            tokenStorage: {
               mode: string,

               cookieOptions: {
                  maxAge: number,

                  secure: boolean,
               },

               name: string,
            },

            preferGETQueries: boolean,

            host: string,
         },
      },

      watch: boolean,

      autoImport: boolean,

      functionPrefix: string,

      documentPaths: Array<string>,

      preferGETQueries: boolean,
   },

   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: any,

      experimental: {
         stripQueryParameters: boolean,

         clientDB: boolean,
      },

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<any>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: boolean,

      wsUrl: string,

      documentDriven: boolean,

      host: string,

      trailingSlash: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },

   meilisearchClient: {
      hostUrl: string,

      searchApiKey: string,

      serverSideUsage: boolean,

      instantSearch: {
         theme: string,
      },

      clientOptions: {
         placeholderSearch: boolean,

         paginationTotalHits: number,

         finitePagination: boolean,

         primaryKey: any,

         keepZeroFacets: boolean,
      },
   },

   directus: {
      url: string,

      autoFetch: boolean,

      fetchUserParams: any,

      token: any,
   },
  }
}