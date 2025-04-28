// Speed Limit = 70 -> Ok
// SpeedLimit + 5 -> 1 point
// Use Math.floor()
// 12 points -> suspended

function checkSpeed(speed) {
    let speedLimit = 70;
    let kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) {
        console.log('License Suspended');
    } else {
        console.log(points);
    }
}

checkSpeed(129);