/* Acrylic League of legends client theme */
/* Adjusted by egirlcatnip from Sarah's acrylic theme */

/* Version: 1.2 */

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
window.Effect.apply('unified', { color: '#000000DA' });


/* Import the local theme file */
import "./theme.css";

/* Import shadow-dom obeserver-fixer-thing */
import * as observer from './observer'


/* Code to edit the lobby info panel, invites, leftmost panel, top of friend list */
observer.subscribeToElementCreation('lol-parties-game-info-panel', (element) => {
    const panelRoot = element.shadowRoot;
    const statusCardRoot = panelRoot.querySelector("lol-parties-status-card").shadowRoot;
    const gameInviteRoot = panelRoot.querySelector("lol-parties-game-invites").shadowRoot;

    const statusCardStyle = document.createElement("style");
    statusCardStyle.textContent = `
        .parties-status-card {
            background: none !important;
            cursor: default !important;
        }
        .parties-status-card-bg-container > video {
            display: none !important;
        }
        .parties-sttus-card-body

        // .parties-status-card-header-text {
        //     display: none !important;
        // }
        // .parties-status-card-header-icon {
        //     display: none !important;
        // }
        parties-game-search-divider {
            display: none !important;
        }
        // .parties-status-card-body {
        //     padding: 10px 1px 10px 10px !important;
        // }
    `;

    statusCardRoot.appendChild(statusCardStyle);

    const gameInviteStyle = document.createElement("style");
    gameInviteStyle.textContent = `
        .parties-game-invite-heading-text{
            display: none;
        }
    `;
    gameInviteRoot.appendChild(gameInviteStyle);
})