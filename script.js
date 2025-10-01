// Basit profil sayfası - API ve müzik çalar özellikleri kaldırıldı

// DOM Elements
const profileImgEl = document.getElementById('profile-img');
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const muteBtn = document.getElementById('mute-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeSlider = document.getElementById('volume-slider');
const entryScreen = document.getElementById('entry-screen');
const backgroundContainer = document.getElementById('background-container');
const mainContainer = document.getElementById('main-container');

// Music player state
let isPlaying = false; // Start as not playing
let isMuted = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEntryScreen();
    initializeImageUploads();
    initializeSocialLinks();
    initializeMusicPlayer();
});

// Initialize entry screen
function initializeEntryScreen() {
    entryScreen.addEventListener('click', function() {
        // Fade out entry screen
        entryScreen.style.opacity = '0';
        
        // Show main content after fade out
        setTimeout(() => {
            entryScreen.style.display = 'none';
            backgroundContainer.style.display = 'block';
            mainContainer.style.display = 'block';
            
            // Start background video
            const video = backgroundContainer.querySelector('video');
            if (video) {
                video.play().catch(e => console.log('Video autoplay prevented:', e));
            }
        }, 500);
    });
}

// Initialize image uploads
function initializeImageUploads() {
    // Add click handler for profile image
    profileImgEl.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                profileImgEl.src = url;
            }
        };
        input.click();
    });
}

// Initialize social media links
function initializeSocialLinks() {
    // Social media links are now direct links in HTML
    // No additional JavaScript needed
}

// Initialize music player
function initializeMusicPlayer() {
    // Set initial volume
    audioPlayer.volume = 0.5;
    
    // Play/Pause button
    playPauseBtn.addEventListener('click', togglePlayPause);
    
    // Mute button
    muteBtn.addEventListener('click', toggleMute);
    
    // Volume slider
    volumeSlider.addEventListener('input', updateVolume);
    
    // Set initial button state (play icon)
    updatePlayButton();
}

// Toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
    } else {
        audioPlayer.play();
        isPlaying = true;
    }
    updatePlayButton();
}

// Update play button icon
function updatePlayButton() {
    if (isPlaying) {
        playIcon.className = 'fas fa-pause';
    } else {
        playIcon.className = 'fas fa-play';
    }
}

// Toggle mute
function toggleMute() {
    if (isMuted) {
        audioPlayer.muted = false;
        isMuted = false;
        volumeIcon.className = 'fas fa-volume-up';
    } else {
        audioPlayer.muted = true;
        isMuted = true;
        volumeIcon.className = 'fas fa-volume-mute';
    }
}

// Update volume
function updateVolume() {
    const volume = volumeSlider.value / 100;
    audioPlayer.volume = volume;
    
    // Update volume icon based on level
    if (volume === 0) {
        volumeIcon.className = 'fas fa-volume-mute';
    } else if (volume < 0.5) {
        volumeIcon.className = 'fas fa-volume-down';
    } else {
        volumeIcon.className = 'fas fa-volume-up';
    }
}



// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to profile image
    profileImgEl.addEventListener('mouseenter', () => {
        profileImgEl.style.transform = 'scale(1.05)';
        profileImgEl.style.transition = 'transform 0.3s ease';
    });
    
    profileImgEl.addEventListener('mouseleave', () => {
        profileImgEl.style.transform = 'scale(1)';
    });
    
    // Add click effect to social icons
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('click', () => {
            icon.style.transform = 'scale(0.95)';
            setTimeout(() => {
                icon.style.transform = 'scale(1)';
            }, 150);
        });
    });
});