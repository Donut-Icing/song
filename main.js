song1 = "";
song2 = "";

song1_status = "";
song2_status = "";

function preload()
{
	song1 = loadSound("music.mp3");
	song2 = loadSound("music2.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();
}

function draw() {
	image(video, 0, 0, 600, 500);
	fill("#FF0000");
	stroke("#FF0000");
	}

function play()
{
	song.play();
	song.setVolume(1);
}







