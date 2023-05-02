import { BeforeAll, AfterAll, Before, After, Status, AfterStep } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "@playwright/test";
import { fixture } from "./fixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { setEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
const fs = require("fs-extra");

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    setEnv();
    browser = await invokeBrowser();
});

Before(async function ({ pickle }) {
    const scenario = `${pickle.name} - ${pickle.id}}`
    context = await browser.newContext({
        recordVideo: {
            dir: 'test-results/screen-record'
        }
    });
    const page = await context.newPage();
    fixture.page = page;
    fixture.logger = createLogger(options(scenario));
});

AfterStep(async function () { //workaround for weird issue of steps trying to execute almost the same time ie. typing credentials on same field
    await fixture.page.waitForTimeout(2000);
});

After(async function ({ pickle, result }) {
    let screenRecord: string;
    let screenshot: Buffer;

    if (result?.status == Status.FAILED) {
        screenRecord = await fixture.page.video().path();
        screenshot = await fixture.page.screenshot({ path: `./test-results/screenshot/${pickle.name}.png`})    
    }
    await fixture.page.close();
    await context.close();

    if (result?.status == Status.FAILED) {   
        this.attach(
            screenshot, "image/png"
        );
        this.attach(
            fs.readFileSync(screenRecord), "video/webm"
        )
    }     
});

AfterAll( async function () {
    await browser.close();
});