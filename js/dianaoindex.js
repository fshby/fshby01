
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
// function myFunction() {
//     // 声明变量
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');
   
//     // 循环遍历所有列表项，并隐藏那些与搜索查询不匹配的项
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }
let myInput=document.getElementById("myInput");
let i = true;
myInput.onclick = function(){
        if(i){
            window.location.href="https://www.baidu.com/";
            i = false;
        }
    }
  // 页面加载时显示时间
let date = document.getElementById('date');
date.innerHTML = new date();

/*
function onclick(){
    let shuRuKuang = document.getElementById('shuRuKuang');
    if{
        

    }
}
*/
