const path = require("path");
const execSync = require("child_process").execSync;
const { libPackages } = require('../config/libpackPaths')

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const cwd = process.cwd();
console.log(libPackages);
const config = require(`${libPackages}`)

if (config.packages.lengthl > 0) {
  config.packages.forEach(packageName => {
    process.chdir(path.resolve(__dirname, "../packages/" + packageName));
    exec("npm i");
  });
} else {
  console.error("! error not foud packages in libpacks config file");
}


process.chdir(cwd);
