
var change = 5;
var intervalidID =0;

function intervalstart()
{
    var image = document.getElementById("Rocketship");
document.getElementById("startbutton").disabled = true;
document.getElementById("stopbutton").disabled = false;
   
    intervalidID = setInterval(function()
    {
        image.style.bottom = change + "px";
        document.getElementById("XandY").innerHTML= " x = " + image.style.left + " y = " + image.style.bottom;

        change += 2;
    }, 10); 

}

function intervalstop()
{
    clearInterval(intervalidID);
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("startbutton").disabled = false;
}