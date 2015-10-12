### Overview
An Electron module for displaying objects in physically accurate sizes on screens.

**I hope this module and it's uses will convince browser makers to provide this as a native API as well as Electron to add it to it's core.**

### Installation

```bash
npm install --save lifesized
```

### Usage

```js
var lifesized = require('lifesized');

// Get the pixels per inch of the display the current render processes BrowserWindow
// is mostly overlayed on
var pixelsPerInch = lifesized.ppi();
```

See the [Demo](#demo) and its [source](https://github.com/francoislaberge/lifesized/tree/master/examples/coins) for a working example.

### API

#### lifesized.ppi(screen)

  - **display** (optional) - The Display who's PPI you want. If not provided it use the display the current browser.

    **NOTE**: Some OSs display windows on multiple displays at once when a Window spans
  more than one display, some do not. We use the best guest using Electron's

### Demo
To run the demo app that shows this off do the following:

 1. Get the code and npm install things

            git clone git@github.com:francoislaberge/lifesized.git
            cd lifesized
            npm Install

 2. Launch the demo

            npm test

 3. Get some coins and verify that they are the same size in real life as they are on screen.

<img src="examples/coins/screenshot.jpg" width="360">


### Limitations
  - Only accurate on OSX right now, falls back to a sane default of 72 pixels/inch (Pull Requests welcome, I will add Windows/Linux support as soon as I can)
  - Doesn't currently detect when a BrowserWindow's Display changes (This should be detectable, will add ASAP)

### Contributing
See the [Todos](https://github.com/francoislaberge/lifesized/blob/master/TODOS.md) for planned work if you want to chip in.
