### Overview
An Electron module for displaying objects in physically accurate sizes on screens.

**I hope this module and its uses will convince browser makers to provide this as a native API as well as Electron to add it to it's core.**

### Installation

```bash
npm install --save lifesized
```

### Usage

```js
var lifesized = require('lifesized');

// Get the pixels per inch of the display the current render process' BrowserWindow
// is mostly overlayed on
var pixelsPerInch = lifesized.ppi();
```

See the [Demos](#demo) and their [source](https://github.com/francoislaberge/lifesized/tree/master/examples) for a working example.

### API

#### lifesized.ppi(display)
Get the Pixels Per Inch of a display.

  - **display** (optional*) - The Display who's PPI you want. If not provided it use the display the current BrowserWindow is most over.
  - Returns: (Number) The displays Pixels Per Inch.


#### lifesized.scale(objectRealSize, objectPixelSize, display)
Calculate how much you have to scale an object in an image to make it appear life sized on the screen.

  - **objectRealSize** (Number) Real size of an object in inches
  - **objectPixelSize** (Number) Size of the object in an image in pixels
  - **display** (optional*) The Display you want to show the object on. If not provided it use the display the current BrowserWindow is most over.
  - Returns: (Number) Scale factor to use to scale images (1.0 === 100%)

\* Some OSs display windows on multiple displays at once when a Window spans
more than one display, some do not. We use the best guest using Electron's ```screen.getDisplayMatching(rect)```

### Demos
[Demos currently are available](https://github.com/francoislaberge/lifesized/releases) for and only work on Macs.

To run the coins app that shows this off do the following:

 1. Get the code and npm install things

            git clone git@github.com:francoislaberge/lifesized.git
            cd lifesized
            npm Install

 2. Launch the coins demo

            npm run coins

 3. Get some coins and verify that they are the same size in real life as they are on screen.

<img src="https://raw.githubusercontent.com/francoislaberge/lifesized/master/demos/coins/screenshot.jpg" width="360">

 4. Run other demos via ```npm run shaqs-hands``` or ```npm run ruler```

### Limitations
  - Only accurate on OSX right now, falls back to a sane default of 72 pixels/inch (Pull Requests welcome, I will add Windows/Linux support as soon as I can)
  - Doesn't currently detect when a BrowserWindow's Display changes (This should be detectable, will add ASAP)

### Contributing
See the [Todos](https://github.com/francoislaberge/lifesized/blob/master/TODOS.md) for planned work if you want to chip in.
