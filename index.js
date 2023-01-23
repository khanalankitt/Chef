function displayHiddenItem(){
    var myDiv=document.querySelector(".extend");
    if(myDiv.style.display=="flex"){
        myDiv.style.display="none";
        document.querySelector(".button-aboutme-inner-left1").innerHTML="Show More";

    }else{
        myDiv.style.display="flex";
        document.querySelector(".button-aboutme-inner-left1").innerHTML="Show Less";
    }
    
}