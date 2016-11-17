var myBoolean = false;
function expandMenu() {
    if (myBoolean == false){
        var myContent = document.getElementById("wrapContent");
        myContent.style.transitionDuration = "0.3s";
        myContent.style.width = "30%";
        myContent.style.height = "30%";
        myContent.style.top = "35%";
        myContent.style.left = "35%";
        document.getElementById("eye").src = "images/closed-eye-icon-v2.png";
        document.getElementById("button").style.backgroundColor = "#20202c";
        myBoolean = true;
    }else{
        var myContent = document.getElementById("wrapContent");
        myContent.style.transitionDuration = "initial";
        myContent.style.width = "0";
        myContent.style.height = "0";
        myContent.style.top = "50%";
        myContent.style.left = "50%";
        document.getElementById("eye").src = "images/eye-icon-v2.png";
        document.getElementById("button").style.backgroundColor = "#b30000";
        myBoolean = false;
    }
}