//检查cookie
var check_token_index = document.cookie.indexOf("_wefurry_admin_token_")
if(check_token == -1){
    //未获取到cookie，准备写入信息，直接跳转
    let http = new XMLHttpRequest()
    http.open("POST","../api/admin_setinfo.php")
    http.setRequestHeader("Content-Type","application/json;charset=UTF-8")
    let msgbody = {
        msg:"疑似非法请求，请重新登录"
    }
    http.send(JSON.stringify(msgbody))
    http.onreadystatechange=(e)=>{
        if(http.readyState == 4){
            window.location.replace("../login/")
        }
    }
}
else{
    //检索到cookie，获取cookie值，并跳转到其他业务逻辑
    let token = getCookie("_wefurry_admin_token_")
    let par = {
        fc:1,
        data:{
            t:token
        }
    }
    window.postMessage(JSON.stringify(par))
}

//获取指定名称的cookie的值
function getCookie(objName){
    let arrStr = document.cookie.split("; ");
    for (let i = 0; i < arrStr.length; i++) {
        let cookie = arrStr[i];
        let k_v = cookie.split("=")
        if(k_v[0] == objName){
            return k_v[1]
        }
        else{
            continue
        }
    } 
}