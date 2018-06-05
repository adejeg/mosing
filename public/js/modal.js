var myModal = document.getElementById('mySongModal');
var closeBtn = document.getElementById("closeModal");
// var playMp3 = document.getElementById("playMp3");
// var playMp4 = document.getElementById("playMp4");
// var downloadMp3 = document.getElementById("downloadMp3");
// var downloadMp4 = document.getElementById("downloadMp4");


// var modal = document.getElementById('mySongModal');

// var btn = document.getElementById("playMp3");

// var span = document.getElementById("closeModal");

// btn.onclick = function() {
//     modal.style.display = "block";
// }

playMp3.onclick = function(){
	myModal.style.display = "block";
	console.log("play Mp3");
}
downloadMp3.onclick = function(){
	myModal.style.display = "block";
	console.log("download Mp3");
}
playMp4.onclick = function(){
	myModal.style.display = "block";
	console.log("play Mp4");
}
downloadMp4.onclick = function(){
	myModal.style.display = "block";
	console.log("download Mp4");

}
closeBtn.onclick = function() {
    myModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == myModal) {
        myModal.style.display = "none";
    }
}
