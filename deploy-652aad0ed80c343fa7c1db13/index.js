var burger = document.getElementById("burger");
var navigation = document.getElementById("navigation");

navigation.classList.toggle("dropdown");

burger.addEventListener("click",function(){
    navigation.classList.toggle("dropdown");
    document.body.style.overflow = 'hidden';
})

var enquire = document.getElementById("enquire");
var close = document.getElementById("close");

enquire.style.display="none";

setTimeout(() => {
    enquire.style.display="flex";
}, 2000);

close.addEventListener("click",()=>{
    enquire.style.display="none";
})

function sendwhatsapp(){
    var phone = "+917889488145";
    var people = document.getElementById("people").value;
    var arrdate = document.getElementById("arrdate").value;
    var depdate = document.getElementById("depdate").value;
    var destination = document.getElementById("destination").value;

    var url = "https://wa.me/"+phone+"?text="
    +"*No of people:* "+people+"%0a"
    +"*Arrival Date:* "+arrdate+"%0a"
    +"*Departure Date:* "+depdate+"%0a"
    +"*Destination:* "+destination+"%0a%0a"
    window.open(url,'_blank').focus();
    enquire.style.display="none";    
}

