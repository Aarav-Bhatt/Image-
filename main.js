Webcam.set({
    width:350,
    height:300,
    dest_width:300,
    dest_height:250,
    image_format:'png',
    png_quality:90 // 0-100
    
}) 

Camera =document.getElementById("b")

Webcam.attach('#b');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("c").innerHTML = '<img id="vpa" src="'+data_uri+'">';
    });
}