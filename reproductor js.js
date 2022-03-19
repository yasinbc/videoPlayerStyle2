function play(){
	var url = document.getElementById("url").value;
	var video = document.getElementById("video");
	var src = document.createAttribute("src");
	src.value = url;
	video.setAttributeNode(src);
}