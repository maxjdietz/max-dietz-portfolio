// window.onscroll = function() {
//     const nav = document.getElementById("main-nav");
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         nav.style.backgroundColor = "#ff6b6b"; // Turns coral when scrolling
//         nav.style.transform = "scale(0.95)";    // Shrinks slightly
//     } else {
//         nav.style.backgroundColor = "white";    // Back to normal
//         nav.style.transform = "scale(1)";
//     }
// };
// Add this to your existing window click listener
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        closeModal();
    }
}
const projectData = {
    harmonic: {
        title: "Harmonic Convergence",
        category: "Game Dev / AV Programming / ",
        description: "A deep technical exploration into synchronized audio-visuals within the Godot Engine. The project focused on 'Beat Mapping'—where game environment elements react in real-time to specific frequency bands of the soundtrack.",
        process: "The challenge was minimizing latency between the audio server and the GPU. I implemented a custom bus system to analyze peak decibel levels and translate them into shader uniforms.",
        images: ["img/hC1.jpg", "img/hC2.jpg", "img/hC3.jpg"]
    },
    radio: {
        title: "Secret Society Radio",
        category: "Audio Engineering / Broadcasting",
        description: "Managing a live broadcast environment at KVCU Radio 1190. This involved live mixing, signal chain management, and post-production for archive streaming.",
        process: "The workflow required balancing real-time vocal compression with high-dynamic range post-hardcore tracks. I developed a standardized EQ preset for guest interviews to ensure vocal clarity over heavy instrumentation.",
        images: ["img/radio1.jpg", "img/radio2.jpg", "img/radio3.jpg"]
    },
    suburbia: {
        title: "Welcome to Suburbia",
        category: "Game Development / Programming / Audio Design",
        skills: "Gameplay Programming, Procedral Content Generation, Audio Design",
        engine: "Created in: Godot Engine, Blender, Ableton Live",
        description: "Welcome to Suburbia! is a 2 player, co-op, online multiplayer psychological horror game about 2 young siblings that are stuck in an infinetly repeating suburban neighborhood. This game features many complex systems, including multiplayer syncronization, procedrally generated content, dynamic sound systems, and a surreal horror experience!",
        process: "My role for Welcome to Suburbia was lead gameplay programmer and audio director. I was responsible for making the abstraction of an infinite neighborhood using my own displacement algorithm. I also implemented a quest system for progression, and the technical implementation for all puzzles found within the game. I also created, composed, mixed, and programmed all the sound within the game. We currently have a website for Welcome to Suburbia, which can be found at <b><a href=\"https://welcometosuburbia.com/\" target=\"_blank\">www.welcometosuburbia.com</a></b>, where all further documentation is. This game is currently still a work in progress, but was featured at the ATLAS EXPO showcase on the University of Colorado Boulder campus in April.",
        images: ["img/WTS1.png", "img/WTS2.png", "img/WTS3.png", "img/WTS4.png", "img/WTS5.png", "img/WTS6.png", "img/WTS7.png", "img/WTS8.png"]
    },
        harmonic: {
        title: "Harmonic Convergence",
        category: "Game Development / Programming / Audio Engineering",
        skills: "Gameplay Programming, Pixel Art and Animation, Recording and Mixing",
        engine: "Created in: Godot Engine, Aseprite, Ableton Live",
        description: "Harmonic Convergence is a technical exploration into synchronized audio-visuals within the Godot Engine. Talk to cool characters and set up a jam session!",
        process: "I created every aspect of this project. I did all pixel art and animations in Aseprite, used the Godot Engine to sync all technical functionality, gameplay mechanics, and dialogue manager, then also recorded, mixed, and mastered the soundtrack that plays throughout the game. Controls were mapped to an Xbox controller, and can be played on the web right now at <a href=\"https://mjdietz04.itch.io/harmonic-convergence\" target=\"_blank\">https://mjdietz04.itch.io/harmonic-convergence</a>.",
        images: ["img/hC1.jpg", "img/hC2.jpg", "img/hC3.jpg", "img/hC4.jpg", "img/hC5.png", "img/hC6.png", "img/hC7.png", "img/hC8.png"]
    }
};

function openModal(id) {
    const project = projectData[id];
    const body = document.getElementById('modalBody');

    body.innerHTML = `
        <div class="doc-text">
            <strong><span class="meta">${project.category}</span></strong>
            <br><br>
            <strong><span>${project.skills}</span></strong>
            <strong><h2>${project.title}</h2></strong>
        </div>
  

        <div class="doc-grid">
            <div class="doc-gallery">
                <img src="${project.images[0]}" class="large">
                <img src="${project.images[1]}">
                <img src="${project.images[2]}">
                <img src="${project.images[3]}">
                <img src="${project.images[4]}">
                <img src="${project.images[5]}">
                <img src="${project.images[6]}">
                <img src="${project.images[7]}">
            </div>
            
            <div class="doc-text">
                <h3>Project Overview</h3>
                <p>${project.description}</p>
                
                <h3>Technical Process</h3>
                <p>${project.process}</p>
    
            </div>
        </div>
    `;

    document.getElementById('projectModal').classList.add('modal-active');
    document.body.style.overflow = 'hidden'; // Stop the background from scrolling
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('modal-active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling

    
}