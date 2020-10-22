var images = document.getElementsByTagName("img");
for(var i=0; i<images.length; i++){
	var desc = document.createTextNode(images[i].getAttribute("alt"));
	var pNode = images[i].parentNode;
	if(pNode.nodeName != "P"){pNode = pNode.parentNode;}
	pNode.appendChild(desc);
	pNode.classList.add("centered");
	
}
