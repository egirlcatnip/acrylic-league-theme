export function lobby_panel_css(element) {
    const root = element.shadowRoot;
    const statusCardRoot = root.querySelector("lol-parties-status-card").shadowRoot;
    const gameInviteRoot = root.querySelector("lol-parties-game-invites").shadowRoot;
    const gameSearchRoot = root.querySelector("lol-parties-game-search").shadowRoot;


    const rootStyle = document.createElement("style");
    rootStyle.textContent = `
        .parties-game-info-panel-bg-container > video {
            display: none !important;
        }
    `;
    root.appendChild(rootStyle);

    const statusCardStyle = document.createElement("style");
    statusCardStyle.textContent = `
        .parties-status-card {
            background: none !important;
            cursor: default !important;
        }
        .parties-status-card-bg-container > video {
            display: none !important;
        }
        .parties-status-card-body{
            padding: 10px 5px 10px 10px !important;
            margin-top: unset !important;
        }
        .parties-status-card-body > div {
            margin: 0 10px 0 0 !important;
        }
        .parties-status-mode-text{
            display:none !important;
        }

    `;

    statusCardRoot.appendChild(statusCardStyle);

    const gameInviteStyle = document.createElement("style");
    gameInviteStyle.textContent = `
        .parties-game-invite-heading-text{
            display: none !important;
        }
    `;
    gameInviteRoot.appendChild(gameInviteStyle);


    const gameSearchStyle = document.createElement("style");
    gameSearchStyle.textContent = `
    .parties-game-search-divider{
        display: none !important;
    }
    .parties-game-search-info{
        display: none !important;
    }
    .parties-status-search-body{
        padding: 10px 5px 10px 10px !important;
        margin-top: unset !important;
    }
    .parties-status-search-body {
        margin: 0 10px 0 0 !important;
    }
    .parties-status-search-body > div {
        margin: 0 10px 0 0 !important;
    }
    .parties-game-search-body-data{
        margin: 5px 0 0 0 !important;
    }
    .parties-game-search-cancel{
        background-color: #a09b8c !important;
    }
    `;
    gameSearchRoot.appendChild(gameSearchStyle);


    console.log("panel css applied");
}
