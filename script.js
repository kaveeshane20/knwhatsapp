
//------------> LOG IN PAGE signup transfer <-----------//

function signup() {

    var sila = document.getElementById("sila").innerHTML;


    window.location = "signup.html";


}


//------------> SIGN UP PAGE Index transfer <-----------//

function login() {
     
    var log = document.getElementById("log").innerHTML;


    window.location = "index.html";

}



//----------> Show password <----------- //

function myFunction() {

    var x = document.getElementById("pass");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }
    else{
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    }

}






