const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
<<<<<<< HEAD
const oauth = require('./local-outh').oauth;
const facebook = require('./local-outh').facebook;
=======
>>>>>>> 9ce022975e97fb4234b4785b04f4dffc1c00eb9f

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
<<<<<<< HEAD
  
  var info = new facebook("672910819561185", "8f7d4eb952e38804249f2063f63cdba6");
  var auth = new oauth();
  auth.login(info, mainWindow);
=======
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

>>>>>>> 9ce022975e97fb4234b4785b04f4dffc1c00eb9f
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
<<<<<<< HEAD
=======
  mainWindow.webContents.on('did-finish-load', () => {
    let code = `         
  function executefunctions(){
  const exec = require('child_process').exec;
  exec('npm run test')
    }`;
    mainWindow.webContents.executeJavaScript(code);
  })
>>>>>>> 9ce022975e97fb4234b4785b04f4dffc1c00eb9f
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
