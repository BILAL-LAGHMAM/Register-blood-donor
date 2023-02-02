function time(){
    var date = new date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var time = h + ":" + ":" + s;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
}
setInterval(time,1000);