var myBoolean = false;
function expandMenu() {
    if (myBoolean == false){
        var myContent = document.getElementById("wrapContent");
        document.getElementById("eye").src = "closed-eye-icon-v2.png";
        //document.getElementById("button").style.backgroundColor = "#20202c";
        document.getElementById("button").style.background = "none";
        myContent.style.transitionDuration = "0.3s";
        myContent.style.width = "30%";
        myContent.style.height = "30%";
        myContent.style.top = "35%";
        myContent.style.left = "35%";
        myBoolean = true;
    }else{
        var myContent = document.getElementById("wrapContent");
        document.getElementById("eye").src = "eye-icon-v2.png";
        document.getElementById("button").style.backgroundColor = "#b30000";
        myContent.style.transitionDuration = "initial";
        myContent.style.width = "0";
        myContent.style.height = "0";
        myContent.style.top = "50%";
        myContent.style.left = "50%";
        myBoolean = false;
    }
}
