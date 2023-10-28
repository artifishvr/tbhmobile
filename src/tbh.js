import confetti from 'canvas-confetti';
import audioURL from './yippee.mp3'

function yippee() {
    for (let i = 0; i < 50; i++) {
        confetti({
            particleCount: 10,
            spread: 50,            
            startVelocity: 100,
            decay: 0.8,
            origin: { y: 1.2 },
        });
        confetti({
            particleCount: 10,
            spread: 50,
            angle: 60,
            startVelocity: 100,
            decay: 0.8,
            origin: { y: 0.7, x: 0 }
        });
        confetti({
            particleCount: 10,
            spread: 50,            
            angle: 120,
            startVelocity: 100,
            decay: 0.8,
            origin: { y: 0.7, x: 1 }
        });
    }

    let audio = document.createElement('audio');
    audio.src = audioURL
    document.body.appendChild(audio);
    audio.play();

    audio.onended = function () {
        this.parentNode.removeChild(this);
    }
}

export default yippee;