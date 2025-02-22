










//DO NOT EDIT BELOW THIS LINE

//This function updates the HTML with whatever's in the playlist array
function displayPlaylist() {
    let playlistDiv = document.getElementById('playlist');
    
    playlistDiv.innerHTML = '';
    
    playlist.forEach((song, index) => {
        let songCard = document.createElement('div');
        songCard.className = 'song-card';
    
        songCard.innerHTML = `
            <div class="song-number">${index + 1}</div>
            <div class="song-info">
                <div class="song-title">${song.songTitle}</div>
                <div class="song-artist">${song.songArtist}</div>
            </div>
            <div class="duration">${song.songDuration}</div>
        `;
        
        playlistDiv.appendChild(songCard);
    });
}