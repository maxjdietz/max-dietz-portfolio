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

    radio: {
        title: "Secret Society (KVCU Radio 1190)",
        category: "Audio Engineering / Broadcasting",
        skills: "Live Audio Engineering, Radio Broadcasting, Public Speaking, Music Curation",
        description: "I have a weekly radio show with KVCU Radio 1190 called Secret Society, which highlights underground, punk-adjacent music. I have hosted over 40+ episodes of Secret Society, and I'm currently live every Wednesday from 4-5PM MST, check it out!",
        process: "I run this show completely by myself, where I'm in charge of real-time audio systems, live mixing, talk commentary between music, and picking curated music playlists for each episode.",
        images: ["img/radio1.jpg", "img/radio2.jpg", "img/radio3.jpg", "img/radio4.jpg", "img/radio5.png", "img/radio6.png", "img/radio7.png", "img/radio8.png"]
    },
    suburbia: {
        title: "Welcome to Suburbia (Capstone Project)",
        category: "Game Development / Programming / Audio Design",
        skills: "Gameplay Programming, Procedral Content Generation, Audio Design",
        engine: "Created in: Godot Engine, Blender, Ableton Live",
        description: "Welcome to Suburbia! is a 2 player, co-op, online multiplayer psychological horror game about 2 young siblings that are stuck in an infinitely repeating suburban neighborhood. This game features many complex systems, including multiplayer syncronization, procedrally generated content, dynamic sound systems, and a surreal horror experience!",
        process: "<strong>(CREATED BY: AIDAN RODGERS, MICAH HIGGINS, NOAH WAGNER, MAX DIETZ)</strong> My role for Welcome to Suburbia was lead gameplay programmer and audio director. I was responsible for making the abstraction of an infinite neighborhood using my own displacement algorithm. I also implemented a quest system for progression, and the technical implementation for all puzzles found within the game. I also created, composed, mixed, and programmed all the sound within the game. We currently have a website for Welcome to Suburbia, which can be found at <b><a href=\"https://welcometosuburbia.com/\" target=\"_blank\">www.welcometosuburbia.com</a></b>, where all further documentation is. This game is currently still a work in progress, but was featured at the ATLAS EXPO showcase on the University of Colorado Boulder campus in April.",
        images: ["img/WTS1.png", "img/WTS2.gif", "img/WTS3.gif", "img/WTS4.png", "img/WTS5.png", "img/WTS6.png", "img/WTS7.png", "img/WTS8.png"]
    },
        harmonic: {
        title: "Harmonic Convergence",
        category: "Game Development / Programming / Audio Engineering",
        skills: "Gameplay Programming, Pixel Art and Animation, Recording and Mixing",
        engine: "Created in: Godot Engine, Aseprite, Ableton Live",
        description: "Harmonic Convergence is a technical exploration into synchronized audio-visuals within the Godot Engine. Talk to cool characters and set up a jam session!",
        process: "I created every aspect of this project. I did all pixel art and animations in Aseprite, used the Godot Engine to sync all technical functionality, gameplay mechanics, and dialogue manager, then also recorded, mixed, and mastered the soundtrack that plays throughout the game. Controls were mapped to an Xbox controller, and can be played on the web right now at <a href=\"https://mjdietz04.itch.io/harmonic-convergence\" target=\"_blank\">https://mjdietz04.itch.io/harmonic-convergence</a>.",
        images: ["img/hC1.jpg", "img/hC2.gif", "img/hC3.gif", "img/hC4.jpg", "img/hC5.gif", "img/hC6.jpg", "img/hC7.png", "img/hC8.gif"]
    },
    SES: {
        title: "S.E.S",
        category: "Game Development / Programming / AV Design",
        skills: "Gameplay Programming, Lighting and Sound Design, Level Design",
        engine: "Created in: Godot Engine, Crocotile, Ableton Live, FL Studio",
        description: "S.E.S is a 3D rogue-like game where you play as a ghost-exterminator. You must clear out each floor from ghost and ghost-bugs with your lazer gun, and survive.",
        process: "(CREATED BY: ADAM REYES, LOGAN BROWN, MAX DIETZ) S.E.S was our final project for Game Development. I created all gameplay elements, like player control, level progression, enemy AI, combat mechanics, and gameplay loop. I also added all diagetic sound effects. and Although currently a work in progress, you can play the demo here! <a href=\"https://mjdietz04.itch.io/ses\" target=\"_blank\">https://mjdietz04.itch.io/s-e-s</a>",
        images: ["img/SES1.png", "img/SES2.png", "img/SES3.png", "img/SES4.gif", "img/SES5.png", "img/SES6.png", "img/SES7.png", "img/SES8.png"]
    },
        Guy: {
        title: "Guy",
        category: "Game Development / Art / Functionality",
        skills: "Programming, Pixel Art",
        engine: "Created in: Godot Engine, Aseprite",
        description: "Guy is a small art/functionality project I'm working on! It's about a guy that goes around town and does odd jobs. Takes place in the Harmonic Convergence universe!",
        process: "An unfinished project that experimented on pixel art, original character design, and functionility testing. I experimented using tile sets and animation, and will be a unfinished WIP for a while. I will update the documentation and images as I work on it more!",
        images: ["img/g1.jpg", "img/g2.gif", "img/g3.png", "img/g4.gif", "img/g5.gif", "img/g6.jpg", "img/g7.jpg", "img/g8.jpg"]
    },
        Marlow: {
        title: "Marlow's Missions!",
        category: "Game Development",
        skills: "Choice-Based Narrative, Programming",
        engine: "Created in: Twine",
        description: "The first game I ever made (using Twine). A choose-your-own-adventure game with 5 different endings. Good luck!",
        process: "This is my first game ever made, fully using Twine! It was a fun experiment in choice-based narrative, and I learned a lot about how to use Twine's scripting language to make the game more dynamic. It's a pretty simple game, but I'm proud of it as my first project! You can play it here: <a href=\"https://mjdietz04.itch.io/marlows-missions\" target=\"_blank\">https://mjdietz04.itch.io/marlows-missions</a>",
        images: ["img/Marlow1.png", "img/Marlow2.png", "img/Marlow3.png", "img/Marlow4.png", "img/Marlow5.png", "img/Marlow6.png", "img/Marlow7.png", "img/Marlow8.png"]
        
    },
        Me: {
        title: "About Me! - Max Dietz",
        category: "Hello!",
        skills: "This is me!",
        engine: "Created in: Boulder, Colorado",
        description: "Hello! I'm Max Dietz, A recent college graduate obtaining my BS in Creative Technology and Design at CU Boulder with a minor in Computer Science, with further studies in Music Technology. I'm a creative engineer with a focus on audio engineering, game development and computer science. I enjoy all things game dev, whether it be game logic, programming unique and creative systems, creating soundscapes, sound design, music, cool characters, game design, and all in between! I also have a huge passion within audio engineering, whether it be recording and mixing my own music, creating unique digital synthesizers using various DAWs, and hands on experience within real-time performances!",
        process: "Outside of my work, I enjoy creating music, weight lifting, basketball, video games, working on programming projects, learning new skills, and spending time with my lovely girlfriend, Sena! I'm ambitious and very motivated, I love learning! I love meeting new people! my favorite game is dark souls 3",
        images: ["img/me1.jpg", "img/me2.jpg", "img/me3.jpg", "img/me4.jpg", "img/me5.jpg", "img/me6.jpg", "img/me7.jpg", "img/me8.jpg"]
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
            <br><br>
            <strong><span class="meta">${project.engine}</span></strong>
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