import { createConfig } from '@nx/angular-rspack';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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