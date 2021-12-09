
function login(){
    var usn = document.getElementById("usn").value;
    var pwd = document.getElementById("pwd").value;
    if(usn == "yangyi" && pwd == "123456"){
        window.location.href="./main.html";
    }else{
        alert("请不要乱上别人网页哦！");
    }
}