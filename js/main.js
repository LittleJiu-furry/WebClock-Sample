//监听事件
window.addEventListener("message",(e)=>{
    let j = JSON.parse(e.data)
    if(j.fc == 1){
        //初始置入token
        check_token_login(j.data.t)
    }
})

function subCheck(){

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

function check_token_login(token_login){
    let http = new XMLHttpRequest()
    http.open("POST","../api/checkcookie.php")
    http.setRequestHeader("Content-Type","application/json;charset=UTF-8")
}