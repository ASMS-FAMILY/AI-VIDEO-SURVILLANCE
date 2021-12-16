video="";
status1="";

function preLoad()
{
    video=createVideo('video.mp4');
    video.hide();

}
function setup()
{
    canvas=createCanvas(500,400);
    canvas.center();

}

function draw()
{
    image(video,0,0,500,400);
    if(staus1 !="" );
    {
       objectDetector.detect(video,gotResult);
    }
}
function gotResult()
    {
    if(error)
    {
        console.log(error);
    }
        console.log(results);
        objects=results;
        
        for(i=0;i<objects.length;i++)
        
        document.getElementById("status1").innerHTML="staus: OBJECT DETECTED";
        document.getElementById("number_of_objects").innerHTML="number of objects detected:" +objects.length

        fill('#FFF300');
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("brown");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);



    }


function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML=+"status:detecting objects";
}
function modelLoaded()
{
    console.log("modelLoaded");
    status1="true";
    video.loop();
    video.speed(1);
    video.volume(0);
    
}

