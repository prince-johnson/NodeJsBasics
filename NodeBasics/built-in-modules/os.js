// for interacting with Operationg System
const os = require("os"); // built in module, no installation needed
// no dot slash (./) needed since it is a build in
console.log("info about current user", os.userInfo());
console.log("system up time is", os.uptime());

console.log("total mem", os.totalmem());

const currentOS = {
    type: os.type(),
}
console.log(currentOS);