"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
(new config_1.EnvConfig()).init().then(data => {
    console.log(data);
}).catch(err => {
    console.log("err");
});
