
class Song {
    constructor(artist, name) {
        this.artist = artist
        this.name = name
    }
}

const song1 = new Song('Beatles', 'Hey Jude')

const song2 = new Song ('Aerosmith', 'Jaded')

class Playlist {
    constructor() {
        this.playlist = []
        this.current = 0;
    }

    add(song) {
        this.playlist.push(song)
    }
    
    play() {
        let currentSong = this.playlist[this.current]
        console.log(`${currentSong.name} started to play`)

    }
    next () {
        if(this.current+1 >= this.playlist.length){
            this.current = 0
        } else {
            ++this.current
        }

        this.play()
    }
    stop() {
        console.log(`${this.playlist[this.current].name} stoped`)
    }
}

const playlist = new Playlist;
playlist.add(song1);
playlist.add(song2);

playlist.play()
playlist.next()
playlist.next()
playlist.stop()