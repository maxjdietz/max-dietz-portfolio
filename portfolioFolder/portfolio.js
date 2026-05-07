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
        category: "Game Dev / Audio Programming",
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
    }
};

function openModal(id) {
    const project = projectData[id];
    const body = document.getElementById('modalBody');

    body.innerHTML = `
        <div class="doc-text">
            <span class="meta">${project.category}</span>
            <h2>${project.title}</h2>
        </div>

        <div class="doc-grid">
            <div class="doc-gallery">
                <img src="${project.images[0]}" class="large">
                <img src="${project.images[1]}">
                <img src="${project.images[2]}">
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