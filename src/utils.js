function updateTimer(duration_s) {
    // console.log(
    //     `YT-Timer: Currently Playing!\nSpent ${Math.floor(duration_s / 60)} min(s) ${
    //         duration_s % 60
    //     } second(s) in the last 24 hours.`
    // );

    ytTimerDiv.innerText = `YT-Timer: ${Math.floor(duration_s / 60)}:${`${duration_s % 60}`.padStart(2, "0")} / ${Math.floor(
        LIMIT_s / 60
    )}:${`${LIMIT_s % 60}`.padStart(2, "0")}`;
}

function limitAlert(duration_s) {
    // console.log(
    //     `YT-Timer: Limited Exceeded!\nSpent ${Math.floor(duration_s / 60)} min(s) ${
    //         duration_s % 60
    //     } second(s) in the last 24 hours.`
    // );

    alert(
        `YT-Timer: Limited Exceeded!\nSpent ${Math.floor(duration_s / 60)} min(s) ${
            duration_s % 60
        } second(s) in the last 24 hours.`
    );
}
