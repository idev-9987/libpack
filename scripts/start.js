const path = require("path");
const execSync = require("child_process").execSync;
const { libPath } = require('../config/libpackPaths')

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const cwd = process.cwd();

const config = require(`${libPath}`)

if (config.web) {

  process.chdir(path.resolve(__dirname, "../web/" + config.web));
  exec("npm start");
} else {
  console.error("! error not foud web in libpacks config file");
}


process.chdir(cwd);

