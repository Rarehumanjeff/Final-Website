function strings()
{
    var String1= document.getElementById("firstString").value;
    var String2= document.getElementById("secondString").value;

    var str3=String1 + String2;
    document.getElementById("updates").innerHTML="Concatonated string = " + str3;

    var len=str3.length;
    document.getElementById("updates").innerHTML="Length of Cocatonanted string = " + len;

    var subS = str3.substring(1,3);
    document.getElementById("updates").innerHTML="substring of str3 (1,3> = " + subS;
    var lowerC = str3.toLowerCase();
    lowerC = lowerC.replace(/que/g, "asd");
    var repJH =str3.replace(/que/g,"asd");
    document.getElementById("updates").innerHTML="replace que with asd" + lowerC;

    var splitStr = String1.split("");
    var reverseStr = splitStr.reverse();
    var joinStr = reverseStr.join("");

    if (String1 == joinStr)
    {
        document.getElementById("updates").innerHTML="palindrome";
    }
    else
    {
        document.getElementById("updates").innerHTML="not a palindrome";
    }


}
