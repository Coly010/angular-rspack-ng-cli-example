import { createConfig } from '@nx/angular-rspack';

export default createConfig({
    options: {
        root: __dirname,
        outputPath: "./dist/acme",
        index: "./src/index.html",
        browser: "./src/main.ts",
        polyfills: [
          "zone.js"
        ],
        tsConfig: "./tsconfig.app.json",
        assets: [
          {
            "glob": "**/*",
            "input": "public"
          }
        ],
        styles: [
          "./src/styles.css"
        ],
        scripts: []
    }
}, {
    development: {
        options: {
            optimization: false,
            extractLicenses: false,
            sourceMap: true
        }
    },
    production: {
        options: {
            budgets: [
                {
                  type: "initial",
                  maximumWarning: "500kB",
                  maximumError: "1MB"
                },
                {
                  type: "anyComponentStyle",
                  maximumWarning: "4kB",
                  maximumError: "8kB"
                }
            ],
            outputHashing: "all"
        }
    }
})