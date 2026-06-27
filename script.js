const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttons = document.getElementById("buttons");

sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        // Stop all sounds
        sounds.forEach(s => {
            const audio = document.getElementById(s);
            audio.pause();
            audio.currentTime = 0;
        });

        document.getElementById(sound).play();
    });

    buttons.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.className = "btn stop";
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", () => {
    sounds.forEach(s => {
        const audio = document.getElementById(s);
        audio.pause();
        audio.currentTime = 0;
    });
});

buttons.appendChild(stopBtn);