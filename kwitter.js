function  login(){
    user_name=document.getElementById("join_user").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}