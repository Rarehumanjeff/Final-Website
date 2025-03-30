function play()
{
    xmenSound = new sound("X Men Opening Theme (High Quality).mp4");
    xmenSound.play();
    document.getElementById("startbutton").disabled = true; // this turns off ther start button
    document.getElementById("stopbutton").disabled = false; // this turns on the stop button
  
}



function stop()
{
    window.location.reload();
}


function sound(src)
    {// add play function
        this.sound = document.createElement("audio") ;//create audio
        this.sound.src = src;//define src
        this.play = function() {//music function
            this.sound.play();//play sound
        }
    }

