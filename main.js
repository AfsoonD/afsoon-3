function changecolor(){
    document.getElementById("A").style.color="yellow";
}


function flipimage(){
    document.getElementById("img2").src="download%20(4).jpg"
 
}



var img4=[
    "download%20(4).jpg",
    "download%20(5).jpg",
    "download%20(6).jpg",
    "images.jpg"
    ];

var i=0;


function changeimg(){
    document.getElementById("img3").src=img4[i];
    i++;
    
}


