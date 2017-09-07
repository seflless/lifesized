#!/usr/bin/env node

// NOTE: OSX only for now

var execSync = require('child_process').execSync;

// Create an Electron app for each demo
createApp("demos/coins", "Coins");
createApp("demos/shaqs-hands", "ShaqsHands");
createApp("demos/ruler", "Ruler");

// Copy electron's dist/Electron.app as a starting point and then
// customize it
function createApp(demoFolder, appName){
    //execSync("rm -rf build/Electron.app");
    execSync("rm -rf build/" + appName + "-darwin-x64");
    execSync("rm -rf build/" + appName + ".app");

    execSync(`cd build && ../node_modules/.bin/electron-packager ../${demoFolder} ${appName}`);
    execSync(`mv build/${appName}-darwin-x64/${appName}.app build/`);
    execSync(`rm -rf build/${appName}-darwin-x64`);

    execSync(`mkdir -p build/${appName}.app/Contents/src`);
    execSync(`cp src/lifesized.js build/${appName}.app/Contents/src`);

    execSync(`mkdir -p build/${appName}.app/Contents/build/lifesized-cli/Build/Products/Debug`);
    execSync(`cp build/lifesized-cli/Build/Products/Debug/lifesized-cli build/${appName}.app/Contents/build/lifesized-cli/Build/Products/Debug/`);

}
