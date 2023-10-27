/* Acrylic League of legends client theme */
/* Adjusted by egirlcatnip from Sarah's acrylic theme */

/* Version: 1.5 */

/* credits: @aimslut(discord), @egirlcatnip(discord), @unproductive(discord) */

/* this source: https://github.com/PrincessAkira/league-launcher-theme/tree/main/Acrylical    */
/* Sarah's source: https://github.com/PrincessAkira/league-launcher-theme/tree/main/Acrylical */

/*
Install guide:
Create a folder (eg. "theme") inside the Pengu loader's plugin folder
Add the .js and .css file inside.
Your theme should be succesfully installed now! :3
*/

/*
Disclaimer: this theme is *local*, meaning it will not receive updates automatically.
You have to update this theme yourself, manually downloading a new release.
*/


/* javascript to do stuffs: */

/* apply the acrylic effect */
window.Effect.apply('unified', { color: "#000000DA" });


/* Import the local theme file */
import "./theme.css";

/* Import shadow-dom obeserver-fixer-thing */
import * as observer from './observer'
import * as shadow_dom from './shadow-dom'


/* Code to edit the lobby info panel, leftmost panel, top of friend list */
observer.subscribeToElementCreation('lol-parties-game-info-panel', (element) => {
    shadow_dom.lobby_panel_css(element)

})

/* Code to edit the lobby invite notification, leftmost panel, top of friend list */
observer.subscribeToElementCreation('lol-parties-game-invite', (element) => {
    shadow_dom.lobby_invite_css(element)

})
