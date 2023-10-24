/* Acrylic League of legends client theme */
/* Adjusted by egirlcatnip from Sarah's acrylic theme */

/* Version: 1.3 */

/* credits: @aimslut(discord), @egirlcatnip(discord), @unproductive(discord) */

/* this source: https://github.com/PrincessAkira/league-launcher-theme/tree/main/Acrylical    */
/* Sarah's source: https://github.com/PrincessAkira/league-launcher-theme/tree/main/Acrylical */

/* Code for the shadow-dom obeserver-fixer-thing */

let tagCreationCallbacks = []
let tagDeletionCallbacks = []
let classCreationCallbacks = []
let classDeletionCallbacks = []

export function subscribeToElementCreation(target, callback) {
    if (target[0] === '.') {
        target = target.slice(1)
        classCreationCallbacks.push({ target, callback })
    } else {
        tagCreationCallbacks.push({ target, callback })
    }
}

export function subscribeToElementDeletion(target, callback) {
    if (target[0] === '.') {
        target = target.slice(1)
        classDeletionCallbacks.push({ target, callback })
    } else {
        tagDeletionCallbacks.push({ target, callback })
    }
}

const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        for (let node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                let tagLowered = node.tagName.toLowerCase()
                for (let obj of tagCreationCallbacks) {
                    if (tagLowered.indexOf(obj.target) != -1) {
                        obj.callback(node)
                    }
                }

                var classList = node.classList
                if (classList) {
                    for (let nodeClass of classList) {
                        let classLowered = nodeClass.toLowerCase()
                        for (let obj of classCreationCallbacks) {
                            if (classLowered.indexOf(obj.target) != -1) {
                                obj.callback(node)
                            }
                        }
                    }
                }
            }
        }

        for (let node of mutation.removedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                let tagLowered = node.tagName.toLowerCase()
                for (let obj of tagDeletionCallbacks) {
                    if (tagLowered.indexOf(obj.target) != -1) {
                        obj.callback(node)
                    }
                }

                var classList = node.classList
                if (classList) {
                    for (let nodeClass of classList) {
                        let classLowered = nodeClass.toLowerCase()
                        for (let obj of classDeletionCallbacks) {
                            if (classLowered.indexOf(obj.target) != -1) {
                                obj.callback(node)
                            }
                        }
                    }
                }
            }
        }
    }
})
observer.observe(document, { attributes: false, childList: true, subtree: true })