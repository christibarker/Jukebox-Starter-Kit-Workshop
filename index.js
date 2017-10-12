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

	stopSong() {
		this.audio.pause();
	}

	loadSong(loadSong) {
		this.audio.setAttribute('src', loadSong);
	}
}


var playlist = new JukeBox();

// addEventListeners added here

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

document.getElementById('stop').addEventListener('click', function(){
	playlist.stopSong();
})



document.getElementById('list').addEventListener('click', function(){
playlist.loadSong('audio/Happy.mp3');
playlist.loadSong('audio/Best_Day_of_My_Life.mp3');
playlist.loadSong('audio/Footloose.mp3');	
})


playlist.loadSong('audio/Happy.mp3');
playlist.loadSong('audio/Best_Day_of_My_Life.mp3');
playlist.loadSong('audio/Footloose.mp3');


