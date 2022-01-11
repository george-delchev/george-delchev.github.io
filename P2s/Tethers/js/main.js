var setMechanicButton = document.getElementById('setMechanic');
var solveMechanicButton = document.getElementById('solveMechanic');

setMechanicButton.addEventListener('click', setMechanic);
solveMechanicButton.addEventListener('click', solveMechanic);

var pattern = 0;
var playerMarkers = [];

let playerInputs = document.querySelectorAll(".players");

function setMechanic() {
    //reset
    playerMarkers = [];
    let startingMarkers = ['purple-1', 'purple-2', 'purple-3', 'purple-4', 'blue-1', 'blue-2', 'blue-3', 'blue-4'];
    let elementsToHide = document.querySelectorAll(".pattern-" + pattern);
    elementsToHide.forEach((e) => e.classList.toggle("hideElement"));
    //get new pattern
    pattern = getRandomInt(1, 9);
    //set visible mechanics
    let elementsToShow = document.querySelectorAll(".pattern-" + pattern);
    elementsToShow.forEach((e) => e.classList.toggle("hideElement"));
    //set markers on players
    for (let index = 0; index < 8; index++) {
        let mark = getRandomInt(0, 8 - index);

        let playerSpan = document.getElementById('player-' + (index + 1) + '-marker');
        playerSpan.innerText = startingMarkers[mark];

        startingMarkers.splice(mark, 1);
    }
}
function solveMechanic(e) {
    var form = document.getElementById('form');
    e.preventDefault();
    checkForPattern();
}

function checkForPattern() {
    let errors = 0;
    switch (pattern) {
        case 1:
            {
                playerInputs.forEach(function (e) {
                    let marker = document.getElementById(e.id + '-marker');
                    var lowerValue = e.value.toLowerCase();
                    console.log('pattern: ' + pattern + '; player: ' + e.id + "; value: " + lowerValue);
                    switch (marker.innerText) {
                        case 'purple-1':
                            if (lowerValue != '4')
                                errors++;
                            break;
                        case 'purple-2':
                            if (lowerValue != '1')
                                errors++;
                            break;
                        case 'purple-3':
                            if (lowerValue != '3')
                                errors++;
                            break;
                        case 'purple-4':
                            if (lowerValue != '2')
                                errors++;
                            break;
                        case 'blue-1':
                            if (lowerValue != 'd1')
                                errors++;
                            break;
                        case 'blue-2':
                            if (lowerValue != 'b1')
                                errors++;
                            break;
                        case 'blue-3':
                            if (lowerValue != 'd2')
                                errors++;
                            break;
                        case 'blue-4':
                            if (lowerValue != 'b2')
                                errors++;
                            break;
                        default:
                            break;
                    }
                });
            }
            break;
        case 2:
            {
                playerInputs.forEach(function (e) {
                    let marker = document.getElementById(e.id + '-marker');
                    var lowerValue = e.value.toLowerCase();
                    console.log('pattern: ' + pattern + '; player: ' + e.id + "; value: " + lowerValue);
                    switch (marker.innerText) {
                        case 'purple-1':
                            if (lowerValue != '1')
                                errors++;
                            break;
                        case 'purple-2':
                            if (lowerValue != '4')
                                errors++;
                            break;
                        case 'purple-3':
                            if (lowerValue != '2')
                                errors++;
                            break;
                        case 'purple-4':
                            if (lowerValue != '3')
                                errors++;
                            break;
                        case 'blue-1':
                            if (lowerValue != 'b1')
                                errors++;
                            break;
                        case 'blue-2':
                            if (lowerValue != 'd1')
                                errors++;
                            break;
                        case 'blue-3':
                            if (lowerValue != 'b2')
                                errors++;
                            break;
                        case 'blue-4':
                            if (lowerValue != 'd2')
                                errors++;
                            break;
                        default:
                            break;
                    }
                });
            }
            break;
        case 3:
            {
                playerInputs.forEach(function (e) {
                    let marker = document.getElementById(e.id + '-marker');
                    var lowerValue = e.value.toLowerCase();
                    console.log('pattern: ' + pattern + '; player: ' + e.id + "; value: " + lowerValue);
                    switch (marker.innerText) {
                        case 'purple-1':
                            if (lowerValue != '1')
                                errors++;
                            break;
                        case 'purple-2':
                            if (lowerValue != '2')
                                errors++;
                            break;
                        case 'purple-3':
                            if (lowerValue != '4')
                                errors++;
                            break;
                        case 'purple-4':
                            if (lowerValue != '3')
                                errors++;
                            break;
                        case 'blue-1':
                            if (lowerValue != 'a1')
                                errors++;
                            break;
                        case 'blue-2':
                            if (lowerValue != 'c1')
                                errors++;
                            break;
                        case 'blue-3':
                            if (lowerValue != 'a2')
                                errors++;
                            break;
                        case 'blue-4':
                            if (lowerValue != 'c2')
                                errors++;
                            break;
                        default:
                            break;
                    }
                });
            }
            break;
        case 4:
            {
                playerInputs.forEach(function (e) {
                    let marker = document.getElementById(e.id + '-marker');
                    var lowerValue = e.value.toLowerCase();
                    console.log('pattern: ' + pattern + '; player: ' + e.id + "; value: " + lowerValue);
                    switch (marker.innerText) {
                        case 'purple-1':
                            if (lowerValue != '2')
                                errors++;
                            break;
                        case 'purple-2':
                            if (lowerValue != '1')
                                errors++;
                            break;
                        case 'purple-3':
                            if (lowerValue != '3')
                                errors++;
                            break;
                        case 'purple-4':
                            if (lowerValue != '4')
                                errors++;
                            break;
                        case 'blue-1':
                            if (lowerValue != 'c1')
                                errors++;
                            break;
                        case 'blue-2':
                            if (lowerValue != 'a1')
                                errors++;
                            break;
                        case 'blue-3':
                            if (lowerValue != 'c2')
                                errors++;
                            break;
                        case 'blue-4':
                            if (lowerValue != 'a2')
                                errors++;
                            break;
                        default:
                            break;
                    }
                });
            }
            break;
        case 5:
            {
                playerInputs.forEach(function (e) {
                    let marker = document.getElementById(e.id + '-marker');
                    var lowerValue = e.value.toLowerCase();
                    console.log('pattern: ' + pattern + '; player: ' + e.id + "; value: " + lowerValue);
                    switch (marker.innerText) {
                        case 'purple-1':
                            if (lowerValue != '2')
                                errors++;
                            break;
                        case 'purple-2':
                            if (lowerValue != '3')
                                errors++;
                            break;
                        case 'purple-3':
                            if (lowerValue != '1')
                                errors++;
                            break;
                        case 'purple-4':
                            if (lowerValue != '4')
                                errors++;
                            break;
                        case 'blue-1':
                            if (lowerValue != 'b1')
                                errors++;
                            break;
                        case 'blue-2':
                            if (lowerValue != 'd1')
                                errors++;
                            break;
                        case 'blue-3':
                            if (lowerValue != 'b2')
                                errors++;
                            break;
                        case 'blue-4':
                            if (lowerValue != 'd2')
                                errors++;
                            break;
                        default:
                            break;
                    }
                });
            }
            break;
        case 6:
            {
                playerInputs.forEach(function (e) {
                    let marker = document.getElementById(e.id + '-marker');
                    var lowerValue = e.value.toLowerCase();
                    console.log('pattern: ' + pattern + '; player: ' + e.id + "; value: " + lowerValue);
                    switch (marker.innerText) {
                        case 'purple-1':
                            if (lowerValue != '3')
                                errors++;
                            break;
                        case 'purple-2':
                            if (lowerValue != '2')
                                errors++;
                            break;
                        case 'purple-3':
                            if (lowerValue != '4')
                                errors++;
                            break;
                        case 'purple-4':
                            if (lowerValue != '1')
                                errors++;
                            break;
                        case 'blue-1':
                            if (lowerValue != 'd1')
                                errors++;
                            break;
                        case 'blue-2':
                            if (lowerValue != 'b1')
                                errors++;
                            break;
                        case 'blue-3':
                            if (lowerValue != 'd2')
                                errors++;
                            break;
                        case 'blue-4':
                            if (lowerValue != 'b2')
                                errors++;
                            break;
                        default:
                            break;
                    }
                });
            }
            break;
        case 7:
            {
                playerInputs.forEach(function (e) {
                    let marker = document.getElementById(e.id + '-marker');
                    var lowerValue = e.value.toLowerCase();
                    console.log('pattern: ' + pattern + '; player: ' + e.id + "; value: " + lowerValue);
                    switch (marker.innerText) {
                        case 'purple-1':
                            if (lowerValue != '3')
                                errors++;
                            break;
                        case 'purple-2':
                            if (lowerValue != '4')
                                errors++;
                            break;
                        case 'purple-3':
                            if (lowerValue != '2')
                                errors++;
                            break;
                        case 'purple-4':
                            if (lowerValue != '1')
                                errors++;
                            break;
                        case 'blue-1':
                            if (lowerValue != 'c1')
                                errors++;
                            break;
                        case 'blue-2':
                            if (lowerValue != 'a1')
                                errors++;
                            break;
                        case 'blue-3':
                            if (lowerValue != 'c2')
                                errors++;
                            break;
                        case 'blue-4':
                            if (lowerValue != 'a2')
                                errors++;
                            break;
                        default:
                            break;
                    }
                });
            }
            break;
        case 8:
            {
                playerInputs.forEach(function (e) {
                    let marker = document.getElementById(e.id + '-marker');
                    var lowerValue = e.value.toLowerCase();
                    console.log('pattern: ' + pattern + '; player: ' + e.id + "; value: " + lowerValue);
                    switch (marker.innerText) {
                        case 'purple-1':
                            if (lowerValue != '4')
                                errors++;
                            break;
                        case 'purple-2':
                            if (lowerValue != '3')
                                errors++;
                            break;
                        case 'purple-3':
                            if (lowerValue != '1')
                                errors++;
                            break;
                        case 'purple-4':
                            if (lowerValue != '2')
                                errors++;
                            break;
                        case 'blue-1':
                            if (lowerValue != 'a1')
                                errors++;
                            break;
                        case 'blue-2':
                            if (lowerValue != 'c1')
                                errors++;
                            break;
                        case 'blue-3':
                            if (lowerValue != 'a2')
                                errors++;
                            break;
                        case 'blue-4':
                            if (lowerValue != 'c2')
                                errors++;
                            break;
                        default:
                            break;
                    }
                });
            }
            break;
        default:
            break;
    }
    if (errors > 0) {
    alert("WRONG! TRY AGAIN! Errors: "+errors);
    }
    else {
        alert("SUCCESS!")
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
