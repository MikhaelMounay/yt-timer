let IS_PLAYING = true;
let LIMIT_EXCEEDED = false;

const separatorNode = document.createElement("div");
separatorNode.innerText = "|";
separatorNode.classList.add("ytp-time-display", "ytp-time-duration");

const ytTimerDiv = document.createElement("div");
ytTimerDiv.classList.add("ytp-time-display", "ytp-time-duration");
updateTimer(0);

let lastUrl = location.href;
new MutationObserver(function () {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        initialize();
    }
}).observe(document, { subtree: true, childList: true });

initialize();

function initialize() {
    const video = document.getElementsByTagName("video")[0];
    const leftControlsDiv = document.getElementsByClassName("ytp-left-controls")[0];

    if (location.href.includes("youtube.com/watch")) {
        leftControlsDiv.appendChild(separatorNode);
        leftControlsDiv.appendChild(ytTimerDiv);
    }

    if (video) {
        video.onplaying = function () {
            if (LIMIT_EXCEEDED) {
                video.pause();
                IS_PLAYING = false;
                limitAlert(LIMIT_s);
            } else {
                IS_PLAYING = true;
            }
        };

        video.onpause = function () {
            IS_PLAYING = false;
        };
    }
}

setInterval(function () {
    if (location.href.includes("youtube.com/watch") && IS_PLAYING) {
        chrome.storage.local.get(["moments"], function (items) {
            if (items.moments === undefined) {
                chrome.storage.local.set({ moments: [`${Date.now()}`] });
            } else {
                const filteredMoments = items.moments.filter(function (timestamp_ms) {
                    return Date.now() - timestamp_ms < 24 * 60 * 60 * 1000;
                });

                const spentTime_s = filteredMoments.length;
                updateTimer(spentTime_s);
                LIMIT_EXCEEDED = spentTime_s >= LIMIT_s;

                chrome.storage.local.set({
                    moments: [...filteredMoments, `${Date.now()}`],
                });
            }
        });

        if (LIMIT_EXCEEDED) {
            video.pause();
            limitAlert(LIMIT_s);
        }
    }
}, REFRESH_RATE_ms);
