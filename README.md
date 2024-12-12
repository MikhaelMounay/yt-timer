# YT-Timer

A simple browser extension that limits YouTube watch minutes in a 24-hour time span.

*Note: YT-Timer is based on the last 24 hours not a time-specific reset.*

### Setting your preferred Limit

You can navigate to `src/constants.js` and edit `LIMIT_s` and set it to the limit (allowed number of minutes per 24 hours) you want in seconds. 


### How to Add to Browser

> *Please note that this extension has been tested on Chromium-based Browsers only.*
> Also, it's not submitted to chrome web store yet. That's why you need to add it in Developer mode.

After downloading and extracting the extension files onto your computer,
1. Go to your browsers "Extensions" page.
2. Enable "Developer mode".
3. Click "Load unpacked"
4. Navigate to the folder you extracted the extension files to (the one containing `manifest.json`) and press "Select Folder".
5. Enjoy your increased productivity :)

Tip: If you change anything in the source code, you have to reload the extension either by pressing the Reload button in the Extensions page or by uninstalling and reinstalling the extension.
