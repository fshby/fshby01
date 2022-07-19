let xingqiu01 = document.getElementById ("xingqiu01");
let xingxing = document.getElementById ("xingxing");
let xingxing05 = document.getElementById ("xingxing05");
let xingqiu02 = document.getElementById ("xingqiu02");
let xingqiu04 = document.getElementById ("xingqiu04");
let xingqiu03 = document.getElementById ("xingqiu03");
let dog = document.getElementById ("dog");
let gethub = document.getElementById ("t2");
let csdn = document.getElementById ("t3");
let runoob = document.getElementById ("t4");
let how2j = document.getElementById ("t5");
let w1 = document.getElementById ("w1");
let w2 = document.getElementById ("w2");
let w3 = document.getElementById ("w3");
let w4 = document.getElementById ("w4");
console.log("dog",typeof dog);
console.log("t2",typeof gethub);
console.log("t3",typeof csdn);
console.log("t4",typeof runoob);
console.log("t5",typeof how2j);
let j = true;
let w=true;
gethub.onclick = function(){
    if(j){
        window.location.href=w1;  
    }
}
csdn.onclick = function(){
    if(j){
        window.location.href=w2;  
    }
}
runoob.onclick = function(){
    if(j){
        window.location.href=w3;  
    }
}
how2j.onclick = function(){
    if(j){
        window.location.href=w4;  
    }
}
dog.onclick = function(){
    if(w){
        window.location.href="index01.html";  
    }
}
xingqiu01.onclick = function(){
    if(w){
        window.location.href="sublime.html";  
    }
}
xingxing.onclick = function(){
    if(w){
        window.location.href="hexi.html";  
    }
}
xingxing05.onclick = function(){
    if(w){
        window.location.href="vscode.html";  
    }
}
xingqiu02.onclick = function(){
    if(w){
        window.location.href="java.html";  
    }
}
xingqiu04.onclick = function(){
    if(w){
        window.location.href="js.html";  
    }
}
xingqiu03.onclick = function(){
    if(w){
        window.location.href="jianli.html";  
    }
}
