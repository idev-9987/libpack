const path = require("path");
const execSync = require("child_process").execSync;
const { libPackages } = require('../config/libpackPaths')

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const cwd = process.cwd();

const config = require(`${libPackages}`)

if (config.libs) {
  config.libs.forEach(packageName => {
    process.chdir(path.resolve(__dirname, "../libs/" + packageName));
    exec("npm run build");
  });
} else {
  console.error("! error not foud libs in libpacks config file");
}


process.chdir(cwd);

