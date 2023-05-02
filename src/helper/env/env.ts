import * as dotenv from 'dotenv'

export const setEnv = () => {
    dotenv.config({
        override: true,
        path: `src/helper/env/.env.${process.env.ENV}`
    })
}