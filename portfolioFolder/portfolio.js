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
        engine: "KVCU Radio 1190",
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

        Comps: {
        title: "Original Compositions",
        category: "Audio Engineering, Music Production",
        skills: "Recording, Mixing, Mastering, Composition, Sound Design",
        engine: "Ableton Live, Logic Pro",
        description: "I do tons of work in Ableton, especially as a Sound Design teacher! I use lots of varying techniques, including programming my own synthesizers, recording and playing my own instruments, and mixing all of it together!",
        process: "Typically, when I'm creating a new track, I listen to a lot of inspiration. Creating video game music involves lots of audio-visual elements, so learning how to envoke a strong emotion through sound that cohesively connects visuals is incredibly important to my work. I love to experiment with new or past programmed synths, recorded instruments, and sound design techniques to create a full sounding track. I have a lot of fun creating music, and I have a lot of tracks that I'm proud of! You can listen to some of my work here: <a href=\"https://soundcloud.com/max-dietz\" target=\"_blank\">https://soundcloud.com/max-dietz</a>",
        images: ["img/MT5.jpg", "img/SC2.jpg", "img/SC3.jpg", "img/SC4.jpg", "img/MT1.jpg", "img/MT2.jpg", "img/MT3.jpg", "img/MT4.jpg"]
        
    },

        Peggy: {
        title: "Peggy and Henry!",
        skills: "Sound Design / Recording / Mixing /Video Editing",
        engine: "Adobe Premiere Pro, Adobe Photoshop, Ableton Live",
        description: "A Cartoon-ish video where I used editing techniques, sound design, and animation to create this cool Audio Visual project! All sound (background song + voice lines) come from my bass guitar, and that's it!",
        process: "I had lots of fun making this project! I recorded all the audio using my bass guitar, and then mixed and edited it together in Ableton. I then used Adobe Premiere Pro to edit the video together, and Adobe Photoshop to create the animation frames. It was a fun experiment in using sound design and editing techniques to create a cohesive audio-visual experience!",
        images: ["img/P1.png", "img/P2.jpg", "img/P3.jpg", "img/P4.jpg", "img/P5.png", "img/P2.jpg", "img/P7.png", "img/P8.jpg"]
        
    },
        DarkSouls: {
        title: "Dark Souls 3 Re-Scored",
        skills: "Sound Design / SFX Creation / Mixing /Video Editing",
        engine: "Ableton Live, Audacity, Adobe Premiere Pro",
        description: "Re-scoring a boss battle in my favorite video game, Dark Souls 3! I replaced all diagetic and non-diagetic sound with my own sound-effects and soundtrack!",
        process: "A midterm for a class that I ended up teaching for the last nearly 2 years! We had to take a clip of any video game, strip all the audio, then add all the diagetic and non-diegetic sound back in using our own techniques and mixing! I chose to re-score my favorite game, Dark Souls 3. This project taught me so much about sound design, as this was my first ever sound-related challenge I put on myself. ",
        images: ["img/DS1.jpg", "img/DS2.jpg", "img/DS3.jpg", "img/DS4.jpg", "img/DS5.png", "img/DS6.png", "img/DS7.png", "img/DS8.png"]
        
    },
        MT: {
        title: "Music Technology Certificate",
        skills: "Audio Visual / Recording Engineering / Mixing / Composing / Sound Design",
        engine: "Ableton Live, Audacity, Logic Pro, Pro Tools",
        description: "I obtained my Cerificate in Music Technology at the University of Colorado Boulder, where I took a variety of classes that taught me skills in audio engineering, music production, sound design, and more!",
        process: "I took a variety of classes for this certificate, including: Intro to Music Technology, Preparing for Soundcheck, Recording Techniques, Composing at the Computer, and SuperCollider! Many music projects you come across on my website were made in these classes!",
        images: ["img/MT1.jpg", "img/MT2.jpg", "img/MT3.jpg", "img/MT4.jpg", "img/MT5.jpg", "img/SC2.jpg", "img/SC3.jpg", "img/SC4.jpg"]
        
    },

        Lego: {
        title: "Lego Instructions Modeling",
        skills: "3D Modeling, Grpahic Design",
        engine: "SketchUp, Adobe Illustrator",
        description: "This school project had us create a set of lego instructions from random lego pieces. We had to model each piece in SketchUp, take angled photos to mirror the lego instruction syle, then graphcially represent the instructions in Adobe Illustrator. Lots of fun had with this project!",
        process: "I took measurements for a variety of lego pieces, and modeled them relative to the measurements in SketchUp. I took angled screenshots using SketchUp, inported them in Illustrator, and used similar Lego font and graphic design techniques to replicate the instructions.",
        images: ["img/Lego1.png", "img/Lego2.png", "img/Lego3.png", "img/Lego4.png", "img/Lego5.png", "img/Lego6.png", "img/Lego7.png", "img/Lego8.png"]
        
    },

        Graphic: {
        title: "Graphic Designs",
        skills: "Graphic Design",
        engine: "Adobe Illustrator, Adobe Photoshop, Adobe InDesign",
        description: "My school Graphic Design class had us do a variety of projects that taught us the fundamentals of typography, layout, workflow, and arttistic design.",
        process: "Graphic Design is a great skills for creating good looking documentation, and allows me to appreciate design at it's simplest. My workflow in Illustrator is seamless. Graphic design is not my passion.",
        images: ["img/Graphic1.png", "img/Graphic2.png", "img/Graphic3.png", "img/Graphic4.png", "img/Graphic5.png", "img/Graphic6.png", "img/Graphic7.png", "img/Graphic8.png"]
        
    },

        Two: {
        title: "2x2 Modeling + Constructing Project",
        skills: "3D Modeling / Graphic Design / Wood Working / Fabrication",
        engine: "SketchUp, BTU Woodshop",
        description: "Me and a school friend were tasked to sketch, measure, model, and construct a piece of furniture using only 2x2 wood pieces. ",
        process: "We ended up going with a end table design, which used proper measurements, screwing techniques, and a good design. We modeled the piece in SketchUp, then used the model to cut and construct the piece in the BTU woodshop. The piece of furniture held both me and my friend (>325 lbs). ",
        images: ["img/Furn1.png", "img/Furn2.png", "img/Furn3.png", "img/Furn4.png", "img/Furn5.png", "img/Furn6.png", "img/Furn7.png", "img/Furn8.png"]
        
    },

        Guitar: {
        title: "Instrument Holding Rack",
        skills: "3D Modeling / Wood Working / Fabrication",
        engine: "SketchUp, BTU Woodshop, my fathers garage",
        description: "My 3D Modeling class had me model and construct something that held/used an instrument. I ended up creating a 5-instrument electric guitar holding rack, which I still use to this day!",
        process: "I modeled the rack in SketchUp, then used the model to cut and construct the piece in my fathers garage. It holds 5 electric guitars and basses comfortably.",
        images: ["img/Form1.png", "img/Form2.png", "img/Form3.png", "img/Form4.png", "img/Form5.png", "img/Form6.png", "img/Form7.png", "img/Form8.png"]
        
    },

        IDC: {
        title: "Handshake Strength Tester",
        skills: "C++ / Arduino / Electronics / 3D Printing / Fabrication",
        engine: "OnShape, Arduino IDE, PrusaSlicer",
        description: "My Physical Computing final was a handshake strength tester. It features pressure sensors that measures strength, connected to LED's that light up based off of a strength threshold. I also 3D printed a cool case for it!",
        process: "I designed the circuit use in a system from a tutorial on Youtube that used pressure sensors in a completely different way, and slowly evolved the device that combined with a glove. I used OnShape to model the case, PrusaSlicer to slice it, and an Arduino Uno to program the system.",
        images: ["img/IDC1.png", "img/IDC2.png", "img/IDC3.png", "img/IDC4.png", "img/IDC5.png", "img/IDC6.png", "img/IDC7.png", "img/IDC8.png"]
        
    },

        Port: {
        title: "My Portfolioio Website! (WIP)",
        skills: "Web Development, UI/UX, Graphic Design",
        engine: "HTML, CSS, JavaScript",
        description: "My portfolio website was made from scratch. Always a WIP :)",
        process: " I use HTML for all text, CSS for style, and Javascript for interactivity/functionality",
        images: ["img/Graphic1.png", "img/Graphic2.png", "img/Graphic3.png", "img/Graphic4.png", "img/Graphic5.png", "img/Graphic6.png", "img/Graphic7.png", "img/Graphic8.png"]
        
    },

        Phone: {
        title: "Annoying Phone Input",
        skills: "Web Development, UI/UX",
        engine: "HTML, CSS, JavaScript",
        description: "A janky and annoying way to input your phone number, try it out!",
        process: "I used HTML for the text, CSS for the style, and JavaScript to make it as annoying as possible to input your phone number. I got a C+ on this project, and will probably never update it. blah blah blah",
        images: ["img/Graphic1.png", "img/Graphic2.png", "img/Graphic3.png", "img/Graphic4.png", "img/Graphic5.png", "img/Graphic6.png", "img/Graphic7.png", "img/Graphic8.png"]
        
    },

        Galactic: {
        title: "Galactic Concert Display",
        skills: "Web Development, UI/UX",
        engine: "HTML, CSS",
        description: "Galactic concert display featuring simple CSS techniques.",
        process: "HTML for text, CSS for style. I looooove Web Dev guys.",
        images: ["img/Graphic1.png", "img/Graphic2.png", "img/Graphic3.png", "img/Graphic4.png", "img/Graphic5.png", "img/Graphic6.png", "img/Graphic7.png", "img/Graphic8.png"]
        
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
            <strong><span>${project.skills}</span></strong>
            <br><br>
            <strong><span class="meta">Made In: ${project.engine}</span></strong>
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