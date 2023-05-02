//this is just a config suggestion file
export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "DEV" | "QA" | "STG" | "UAT"
            BASEURL: string,
            HEAD: "true" | "false",
            BASEAPI: string,
            DEFAULT_TIMEOUT: number

        }
    }
}