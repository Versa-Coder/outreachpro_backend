/**
 * This file is to manage .env file and all the ENV variables
 * */
import { config as configENV } from 'dotenv';
import {join} from 'path';
import {readFile} from 'fs';

import { pathUtil } from '../../utils';
import {ENV_ERR_KEY_NOT_FOUND, ENV_ERR_APP_CONFIG_NOT_FOUND} from '../../errors';

export class EnvConfig {
  constructor(
    private baseDir= join(pathUtil(import.meta.url).__dirname, '../../../'),
    private appConfigFile= join(baseDir, 'app.config.json')
  ){}

  public init() {
    return new Promise((resolve, reject)=>{
      readFile(this.appConfigFile, 'utf-8',  (err, data)=>{
        try{
        if(err){
          throw ENV_ERR_APP_CONFIG_NOT_FOUND;
        }

        let config= JSON.parse(data) as {env: string, variables: string[]};
        if(config.env as string && config.variables as string []){
          configENV({path: join(this.baseDir, `${this.baseDir}/.${config.env}.env`)});
          config.variables.forEach((key)=>{
            if(typeof(process.env[key])===undefined){
              throw ENV_ERR_KEY_NOT_FOUND(key);
            }
          })
        }
        else{
          throw ENV_ERR_APP_CONFIG_NOT_FOUND;
        }

      }catch(err){
        throw err;
      }


      })
    });
  }
}
