import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";

const options: LaunchOptions = {
    headless: !true
}

export const invokeBrowser = () => {
    const browser = process.env.BROWSER;
    switch (browser) {
        case 'chrome':
            return chromium.launch(options)
        case 'firefox':
            return firefox.launch(options)
        case 'webkit':
            return webkit.launch(options)            
        default:
            throw new Error("Set browser manager properly")
    }
}