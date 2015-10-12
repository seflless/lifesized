/**
 * lifesized: Get the physical size of displays and their ppi
 */

var screen = require('screen'),
    remote = require('remote'),
    execSync = require('child_process').execSync,
    path = require('path'),
    os = require('os');

var lifesized = {

    /**
     * Get the pixels per inch of a screen
     *
     * @param [screen] (Electron Screen Instance) If not provided the display
              this process' BrowserWindow' is over will be used
     */
    ppi: function(screen){
        screen = screen || getBrowserWindowDisplay();
        return getPPI(screen);
    }
};

/**
 * Get the display that the window is mostly over
 */
function getBrowserWindowDisplay(){
    return screen.getDisplayMatching(remote.getCurrentWindow().getBounds());
}

/**
 * Get a screens PPI
 */
function getPPI(screen){
    // If on a mac use our native binary to do the work, otherwise fall back
    // to a default
    if(os.platform() === "darwin"){
        return  parseFloat(
                    execSync(
                        path.resolve(__dirname, "../bin/lifesized-cli") + " " + screen.id
                    )
                );
    } else {
        return 72.0;
    }
}

module.exports = lifesized;
