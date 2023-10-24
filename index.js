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
// observer.subscribeToElementCreation('lol-parties-game-info-panel', (element) => {
//     const panelRoot = element.shadowRoot;
//     const statusCardRoot = panelRoot.querySelector("lol-parties-status-card").shadowRoot;
//     const gameInviteRoot = panelRoot.querySelector("lol-parties-game-invites").shadowRoot;

//     const statusCardStyle = document.createElement("style");
//     statusCardStyle.textContent = `
//         .parties-status-card {
//             background: none !important;
//             cursor: default !important;
//         }
//         .parties-status-card-bg-container > video {
//             display: none !important;
//         }
//     `;

//     statusCardRoot.appendChild(statusCardStyle);

//     const gameInviteStyle = document.createElement("style");
//     gameInviteStyle.textContent = `
//         .parties-game-invite-heading-text{
//             display: none;
//         }
//     `;
//     gameInviteRoot.appendChild(gameInviteStyle);

// })


observer.subscribeToElementCreation('lol-parties-game-info-panel', (element) => {
    console.log("Element noted")
    const panelRoot = element.shadowRoot;
    const statusCardRoot = panelRoot.querySelector("lol-parties-status-card");
    const gameInviteRoot = panelRoot.querySelector("lol-parties-game-invites");

    const updateStyles = (shadowRoot) => {
        const statusCardStyle = document.createElement("style");
        statusCardStyle.textContent = `
            .parties-status-card {
                background: none !important;
                cursor: default !important;
            }
            .parties-status-card-bg-container > video {
                display: none !important;
            }
        `;

        shadowRoot.appendChild(statusCardStyle);

        const gameInviteStyle = document.createElement("style");
        gameInviteStyle.textContent = `
            .parties-game-invite-heading-text{
                display: none;
            }
        `;
        shadowRoot.appendChild(gameInviteStyle);
    };

    // Observe changes in Shadow DOMs
    observeShadowDOM(statusCardRoot, updateStyles);
    observeShadowDOM(gameInviteRoot, updateStyles);
});
