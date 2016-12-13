var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Each student must add one song to the beginning and the end of the array.
songs.unshift("Original Gangster > by Ice-T on the album Original Gangster")
songs.push("Fucc the Devil > by Andrew Jackson Jihad on the album Knife Man")


// Loop over the array and remove any words or characters that obviously don't belong.
function removeBadChar() {
	for (var i = songs.length - 1; i >= 0; i--) {
	 	songs[i] = songs[i].split("@").join("");
	 	songs[i] = songs[i].split("*").join("");
	 	songs[i] = songs[i].split("!").join("");
	 	songs[i] = songs[i].split("(").join("");
// Students must find and replace the > character in each item with a - character.
		songs[i] = songs[i].split(">").join("-");
	}
}

removeBadChar();


// Must add each string to the DOM in index.html in the main content area.
// {Song name} by {Artist} on the album {Album}


// function to break down strings into song, artist, and album variables
function musicBreakdown() {
	for (var i = songs.length - 1; i >= 0; i--) {
		var songArray = songs[i].split(" - by ");
		song = songArray[0];
		var artistArray = songArray[1].split(" on the album ");
		artist = artistArray[0];
		var album = artistArray[1];
		var newSong = document.createElement('article');
		newSong.innerHTML = '<h1>' + song + '</h1><ul><li>' + artist + '</li><li>' + album + '</li><li></li></ul>';
		document.getElementById('songBody').appendChild(newSong);


	}
}


musicBreakdown();
