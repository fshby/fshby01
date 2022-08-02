
/**
 * 全屏悬浮
 */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
/**
 * 登录表单
 */
// 获取模型
var modal = document.getElementById('id01');

// 鼠标点击模型外区域关闭登录框
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/**
 * 注册表单
 */
// 获取模型
var moda2 = document.getElementById('id02');

// 鼠标点击模型外区域关闭登录框
window.onclick = function(event) {
    if (event.target == moda2) {
        moda2.style.display = "none";
    }
}
// set cn = Server.CreateObject("ADODB.Connection")
// fileP
// let pass = document.getElementById("pass");
// console.log("pass",typeof gethub);
// if(pass.inputMode ==1234){
//     window.location.href="index01.html"

// }