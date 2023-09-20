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

if (config.packages.lengthl > 0) {
  config.packages.forEach(packageName => {
    process.chdir(path.resolve(appDirectory, "packages/" + packageName));
    exec("npm run build");
  });
} else {
  console.error("! error not foud packages in libpacks config file");
}


process.chdir(cwd);

