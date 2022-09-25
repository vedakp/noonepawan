var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var stopTime = audioContext.currentTime;
var oscillatorNode = audioContext.createOscillator();
oscillatorNode.type = "sine";
oscillatorNode.connect(audioContext.destination);
oscillatorNode.start (); //Play beep!!!!!

function beep(frequency,durationSec,ramp=false){
    if (ramp) {
        oscillatorNode.frequency.linearRampToValueAtTime (frequency, stopTime); // value in hertz
    } else {
        oscillatorNode.frequency.setValueAtTime (frequency, stopTime);  // value in hertz
    }
    stopTime += durationSec;
    oscillatorNode.stop (stopTime);
}

function playSound(){
    beep (250, 0.5);
    beep (1000, 0.2);
    beep (550, 0.5);
    beep (50, 2, true);
    beep (5000, 2, true);
    beep (50, 0, true);
}
