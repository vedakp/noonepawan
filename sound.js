var oscillatorNodeStarted = false;

function beep(frequency,durationSec,ramp=false){
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var stopTime = audioContext.currentTime;
    var oscillatorNode = audioContext.createOscillator();
    oscillatorNode.type = "sine";
    oscillatorNode.connect(audioContext.destination);
    if(!oscillatorNodeStarted){
        oscillatorNode.start (); //Play beep!!!!!
        oscillatorNodeStarted = true;
    }
    
    if (ramp) {
        oscillatorNode.frequency.linearRampToValueAtTime (frequency, stopTime); // value in hertz
    } else {
        oscillatorNode.frequency.setValueAtTime (frequency, stopTime);  // value in hertz
    }
    stopTime += durationSec;
    oscillatorNode.stop (stopTime);
}

function playSound(){
    console.log("playsound");
    beep (250, 0.5);
    beep (1000, 0.2);
    beep (550, 0.5);
    beep (50, 2, true);
    beep (5000, 2, true);
    beep (50, 0, true);
}
