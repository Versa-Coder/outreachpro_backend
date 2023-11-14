import { EnvConfig } from "./config";

(new EnvConfig()).init().then(data=>{
    console.log(data);
}).catch(err=>{
    console.log("err");
});

