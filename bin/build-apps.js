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
    execSync("rm -rf build/Electron.app");
    execSync("rm -rf build/" + appName + ".app");
    execSync("cp -r node_modules/electron/dist/Electron.app build");
    // execSync("mkdir -p build/Electron.app/Contents/Resources/app");
    // execSync("mv build/Electron.app/Contents/Resources/app/package.json build/Electron.app/Contents/Resources/app/");
    // execSync("rm -rf build/Electron.app/Contents/Resources/default_app");
    // execSync("cp -r " + demoFolder + "/ build/Electron.app/Contents/Resources/app");
    // execSync("cp -r src build/Electron.app/Contents");
    // execSync("cp -r bin build/Electron.app/Contents");
    // execSync("mv build/Electron.app build/" + appName + ".app");
}
