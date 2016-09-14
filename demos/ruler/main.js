var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var Menu = electron.Menu;

var template = [
    {
        label: 'Electron',
        submenu: [
            {
                label: 'Quit',
                accelerator: 'Command+Q',
                click: function () {
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'Command+R',
                click: function () {
                    if (mainWindow) {
                        mainWindow.reloadIgnoringCache();
                    }
                }
            },
            {
                label: 'Toggle DevTools',
                accelerator: 'Alt+Command+I',
                click: function () {
                    BrowserWindow.getFocusedWindow().toggleDevTools();
                }
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {label: 'Undo', accelerator: 'Command+Z', selector: 'undo:'},
            {label: 'Redo', accelerator: 'Command+Shift+Z', selector: 'redo:'},
            {type: 'separator'},
            {label: 'Cut', accelerator: 'Command+X', selector: 'cut:'},
            {label: 'Copy', accelerator: 'Command+C', selector: 'copy:'},
            {label: 'Paste', accelerator: 'Command+V', selector: 'paste:'},
            {label: 'Select All', accelerator: 'Command+A', selector: 'selectAll:'},
        ]
    }
];

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create some basic menus
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

  // Create the browser window.
  mainWindow = new BrowserWindow({
      fullscreen: true
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  //mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
