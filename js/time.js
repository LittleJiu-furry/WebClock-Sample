window.setInterval(()=>{
    var tim = new Date()
    let s = tim.getSeconds()
    let m = tim.getMinutes()
    let h = tim.getHours()
    if((h>20 && m>=30) || (h<5 && m<=30)){
        document.getElementById("fclock").style.backgroundColor = "rgba(0,0,0,.5)"
    }else if((h>17 && m>=20) && (h<20 && m<30)){
        document.getElementById("fclock").style.backgroundColor = "rgba(255,136,23,.73)"
    }else{
        document.getElementById("fclock").style.backgroundColor = "rgba(255,255,255,.6)"
    }
    document.getElementById("s").style.rotate =  s*6 +"deg"
    document.getElementById("m").style.rotate =  m*6 +"deg"
    document.getElementById("h").style.rotate =  h*30 +"deg"
    let MM = ((tim.getMonth() +1)<10? "0"+(tim.getMonth() +1) : (tim.getMonth() +1))
    let dd = ((tim.getDate() +1)<10? "0"+(tim.getDate() +1) : (tim.getDate() +1))
    let hh = ((h<10)? "0"+(h) : h)
    let mm = ((m<10)? "0"+(m) : m)
    let ss = ((s<10)? "0"+(s) : s)
    let timef = tim.getFullYear() + "-" + MM + "-" + dd + "&nbsp;&nbsp;&nbsp;&nbsp;" + hh + ":" + mm + ":" + ss
    document.getElementById("time").innerHTML = timef
},200)