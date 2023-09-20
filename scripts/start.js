const path = require("path");
const execSync = require("child_process").execSync;
const { libPackages } = require('../config/libpackPaths')
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const cwd = process.cwd();

const config = require(`${libPackages}`)

if (config.examples.lengthl > 0) {
  config.examples.forEach(packageName => {
    process.chdir(path.resolve(appDirectory, "examples/" + packageName));
    exec("npm start");
  });
} else {
  console.error("! error not foud examples in libpacks config file");
}

process.chdir(cwd);

