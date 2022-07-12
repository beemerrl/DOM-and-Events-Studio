// Write your JavaScript code here.
// Remember to pay attention to page loading!
//left off trying to figure out how to move rocket img


window.addEventListener("load", function () {
    console.log("window is loaded");
    let currentStatus = document.getElementById("flightStatus");
    let background = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocketShip = document.getElementById("rocket");
    rocketShip.style.position = "relative";
    rocketShip.style.left = '0px';
    rocketShip.style.top = '0px';
    // //rocketShip.style.bottom = 0 + 'px';


    let launch = document.getElementById("takeoff");
    launch.addEventListener("click", function () {
        let ready = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (ready === true) {
            currentStatus.innerHTML = "Shuttle in flight";
            background.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    });

    let landed = document.getElementById("landing");
    landed.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    });

    let aborted = document.getElementById("missionAbort");
    aborted.addEventListener("click", function () {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response === true) {
            currentStatus.innerHTML = "Mission aborted.";
            background.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
        }
    });

    let upButton = document.getElementById("up");
    upButton.addEventListener("click", function () {
        rocketShip.style.top = parseInt(rocketShip.style.top) - 10 + 'px';
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    });

    let downButton = document.getElementById("down");
    downButton.addEventListener("click", function () {
        rocketShip.style.top = parseInt(rocketShip.style.top) + 10 + 'px';
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    });

    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", function () {
        rocketShip.style.left = parseInt(rocketShip.style.left) - 10 + 'px';
    });

    let rightButton = document.getElementById("right");
    rightButton.addEventListener("click", function () {
        rocketShip.style.left = parseInt(rocketShip.style.left) + 10 + 'px';
    });

});