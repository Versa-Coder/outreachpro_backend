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
    private baseDir= join(__dirname, '../../../'),
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
        console.log(config);

        
        if(config.env as string && config.variables as string []){
          let fileName= `.${config.env}.env`;
          let envFile= `${this.baseDir}/${fileName}`;
          configENV({path: join(this.baseDir, envFile)});
          config.variables.forEach((key)=>{
            console.log(key, typeof(process.env[key]));
            if(typeof(process.env[key])==='undefined'){
              console.log("Err....");
              throw ENV_ERR_KEY_NOT_FOUND(key, fileName, envFile);
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
