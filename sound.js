var audioContext = null;
var oscillatorNode = null;
var stopTime = 0;

function beep (frequency, durationSec, ramp=false)
{
    if (oscillatorNode == null) {
        audioContext = new (window.AudioContext || window.webkitAudioContext) ();
        stopTime = audioContext.currentTime;

        oscillatorNode = audioContext.createOscillator();
        oscillatorNode.type = "sine";
        oscillatorNode.connect (audioContext.destination);
        if (ramp) {
            oscillatorNode.frequency.setValueAtTime (frequency, stopTime);
        }
        oscillatorNode.start ();
        oscillatorNode.onended = function() {
            oscillatorNode = null;
            audioContext = null;
        }
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
  beep (250, 0.5);
  beep (1000, 0.2);
  beep (550, 0.5);
  beep (50, 2, true);
  beep (5000, 2, true);
  beep (50, 0, true);
}
