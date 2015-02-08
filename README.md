# Lifesized
Get the real size, dpi, user view distance, zoom, pixel ratios, and more of devices in browser.

This project is a work in progress. Currently it's no more than a placeholder of the npm module name,
this readme, and a [simple hacked demo](http://francoislaberge.com/lifesized/examples/coins/coins.html).

# Project Philosophy
The size of fonts, line spacing, margins, row widths, button dimensions, and more aspects of design
should be setting UI element sizes based the physical units of measurement and using more perceptual
models incorporating a user's distance from the screen. We'd like to use every trick in the book
to make a best guess at the real world DPIs of devices as well as guesses to other parts of the user
experience environment such as users viewing distance from the screen.

We hope this will provide more precise inputs for responsive designs. Examples
  - Clickable/tappable targets should be sized according to fits laws.
  - Font sizes and line spacing should be based on idealized legibility based on factors like
    resolution, the real world size of the projected text, how much a person's head will have to
    turn and eyes move to read your rows of text.
  - If you rendered images of objects so that the appear real world sized it may lead to better
    immersion.
  - More concrete examples to come.

# Installation

      npm install lifesized
