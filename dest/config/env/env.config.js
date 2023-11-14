"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfig = void 0;
/**
 * This file is to manage .env file and all the ENV variables
 * */
const dotenv_1 = require("dotenv");
const path_1 = require("path");
const fs_1 = require("fs");
const errors_1 = require("../../errors");
class EnvConfig {
    constructor(baseDir = (0, path_1.join)(__dirname, '../../../'), appConfigFile = (0, path_1.join)(baseDir, 'app.config.json')) {
        this.baseDir = baseDir;
        this.appConfigFile = appConfigFile;
    }
    init() {
        return new Promise((resolve, reject) => {
            (0, fs_1.readFile)(this.appConfigFile, 'utf-8', (err, data) => {
                try {
                    if (err) {
                        throw errors_1.ENV_ERR_APP_CONFIG_NOT_FOUND;
                    }
                    let config = JSON.parse(data);
                    console.log(config);
                    if (config.env && config.variables) {
                        let fileName = `.${config.env}.env`;
                        let envFile = `${this.baseDir}/${fileName}`;
                        (0, dotenv_1.config)({ path: (0, path_1.join)(this.baseDir, envFile) });
                        config.variables.forEach((key) => {
                            console.log(key, typeof (process.env[key]));
                            if (typeof (process.env[key]) === 'undefined') {
                                console.log("Err....");
                                throw (0, errors_1.ENV_ERR_KEY_NOT_FOUND)(key, fileName, envFile);
                            }
                        });
                    }
                    else {
                        throw errors_1.ENV_ERR_APP_CONFIG_NOT_FOUND;
                    }
                }
                catch (err) {
                    throw err;
                }
            });
        });
    }
}
exports.EnvConfig = EnvConfig;
