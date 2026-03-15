function copyCode(){
    var copyText = document.getElementById("refcode");

    navigator.clipboard.writeText(copyText.value)
        .then(function(){
            alert("Referral Code Copied!");
        })
        .catch(function(){
            alert("Copy failed");
        });
}

function topFunction(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function subscribe(){

var email = document.getElementById("newsletterEmail").value;

if(email === ""){
alert("Please enter your email");
}
else{
alert("You have successfully subscribed!");
}

}
