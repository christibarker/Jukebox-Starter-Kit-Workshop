// function openjukebox (URL, WindowName, Features) 
// { 
// window.open(URL, WindowName, Features);
// }


class JukeBox {
	constructor() {
		this.audio = document.getElementsByTagName('audio')[0];
	}

	playSong() {
		console.log(this)
		this.audio.play();
	}

	pause() {
		this.audio.pause();
	}
	
	stopSong() {
		this.audio.load();
	}

	loadSong(loadSong) {
		this.audio.setAttribute('src', loadSong;
	}
}

var playlist = new JukeBox();

// addEventListeners added here

playlist.loadSong('audio/Happy.mp3');
playlist.loadSong('audio/Best_Day_of_My_Life.mp3');
playlist.loadSong('audio/Footloose.mp3');

document.getElementById('play').addEventListener('click', function(){
	playlist.playSong();
		// if (play.paused) {
		// 	playSong.play();
		// 	// button.textContent = ' || ';
		// } else {
		// 	playSong.pause();
		// 	// button.textContent = '>';
		// }
});

document.getElementById('pause').addEventListener('click', function(){
	playlist.pause();
})

document.getElementById('stop').addEventListener('click', function(){
	playlist.stopSong();
})

// click on text and song plays

document.getElementById('fl').addEventListener('click', function (){
	playlist.playSong();
});

document.getElementById('bd').addEventListener('click', function (){
	playlist.playSong();
});

document.getElementById('hpy').addEventListener('click', function (){
	playlist.playSong();
});



