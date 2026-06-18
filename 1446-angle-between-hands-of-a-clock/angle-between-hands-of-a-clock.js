var angleClock = function(hour, minutes) {

    let hourAngle = (hour % 12) * 30 + minutes * 0.5;

    let minuteAngle = minutes * 6;

    let angle = Math.abs(hourAngle - minuteAngle);

    return Math.min(angle, 360 - angle);
};