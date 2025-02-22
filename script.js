let playlist = []

function addSong() {
    let title = document.getElementById("songTitle").value;
    let artist = document.getElementById("artist").value;
    let duration = document.getElementById("duration").value;
    let song = {
        songTitle: title,
        songArtist: artist,
        songDuration: duration,
    }
    playlist.push(song);

    title = document.getElementById("songTitle").value,
    artist = document.getElementById("artist").value,
    duration = document.getElementById("duration").value

    displayPlaylist()
    document.getElementById('songTitle').value = '';
    document.getElementById('artist').value = '';
    document.getElementById('duration').value = '';
}






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