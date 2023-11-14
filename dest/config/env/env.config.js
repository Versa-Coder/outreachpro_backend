/**
 * This file is to manage .env file and all the ENV variables
 * */
import { config as configENV } from 'dotenv';
import { join } from 'path';
import { readFile } from 'fs';
import { pathUtil } from '../../utils';
import { ENV_ERR_KEY_NOT_FOUND, ENV_ERR_APP_CONFIG_NOT_FOUND } from '../../errors';

export class EnvConfig {
    baseDir;
    appConfigFile;
    constructor(baseDir = join(pathUtil(import.meta.url).__dirname, '../../../'), appConfigFile = join(baseDir, 'app.config.json')) {
        this.baseDir = baseDir;
        this.appConfigFile = appConfigFile;
    }
    init() {
        console.log("Hello..");
        return new Promise((resolve, reject) => {
            readFile(this.appConfigFile, 'utf-8', (err, data) => {
                try {
                    if (err) {
                        throw ENV_ERR_APP_CONFIG_NOT_FOUND;
                    }
                    let config = JSON.parse(data);
                    if (config.env && config.variables) {
                        configENV({ path: join(this.baseDir, `${this.baseDir}/.${config.env}.env`) });
                        config.variables.forEach((key) => {
                            if (typeof (process.env[key]) === undefined) {
                                throw ENV_ERR_KEY_NOT_FOUND(key);
                            }
                        });
                    }
                    else {
                        throw ENV_ERR_APP_CONFIG_NOT_FOUND;
                    }
                }
                catch (err) {
                    throw err;
                }
            });
        });
    }
}
