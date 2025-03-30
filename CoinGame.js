function FlipCoin()
{
    var image1 = Math.ceil(Math.random() *2);

var headsimage = "CoinFlipperHeads.png";
var tailsimage = "CoinFlipperTails.png";

if (image1 == 1)
{
    document.getElementById("image1img").src = headsimage
}
else if (image1 == 2)
{
    document.getElementById("image1img").src = tailsimage
}
if (image1 == 1)
{
    document.getElementById("finalresult").innerHTML = "HEADS!";
}
else if (image1 == 2)
{
    document.getElementById("finalresult").innerHTML = "TAILS!";
}
}

