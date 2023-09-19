const path = require("path");
const execSync = require("child_process").execSync;
const { libPackages } = require('../config/libpackPaths')

function exec(cmd) {
  execSync(cmd, { stdio: "inherit", env: process.env });
}

const cwd = process.cwd();

const config = require(`${libPackages}`)

if (config.packages) {
  config.packages.forEach(packageName => {
    process.chdir(path.resolve(__dirname, "../packages/" + packageName));
    exec("npm run test");
  });
} else {
  console.error("! error not foud packages in libpacks config file");
}


process.chdir(cwd);

