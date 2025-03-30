function checkCreds()
{
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var fullName = firstName + " " + lastName;
    var badgeNum = document.getElementById("badgeID").value;
    var ZCode = document.getElementById("ZC").value;
    var passW = document.getElementById("PW").value;



    if (fullName.length >=20)
    {
        document.getElementById("loginStatus").innerHTML = "Must be less Than 20 Characters";    
    } 
  
    else if ((badgeNum<100)  ||  (badgeNum>999))
    {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number";
    }
 
    else if (ZCode.length !=5)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid Zipcode";
    }

    else if (passW != "The90sRock")
    {
        document.getElementById("loginStatus").innerHTML = "Invalid Password";

    }
  
    else
    {
        document.getElementById("loginStatus").innerHTML = "Accepted You Are";
        alert("Enter At Your Own Risk");
        location.replace("90s Webpage.html");
    }
}