# libpack

libpack used for build multiple packages

## Installer

`npm i -D libpack`

or

`yarn add libpack --dev`

## Usage

setting `package.js` file

```
"scripts": {
    "build": "libpack build",
    "postinstall": "libpack postinstall",
    "test": "libpack test"
  }
```

create file `libpack.config.js` setting to

```
const libs = ["package-name", "package-name.1"];

module.exports = {
  "libs":libs,
  "web":"my-website"
};
```

create folder `libs` add package project

### example

folder libs

```
|_ libs
    |_ package-name
    |_ package-name.1
```

## Build

build all packages

`libpack build`

## Install

install packages all project

`libpack install`

## Test

test all packages

`libpack test`

## Start

start web

`libpack start`

## Create

create project

`libpack create <project-name>`

