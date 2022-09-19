
let bmusic=document.getElementById("bb");
let picture=document.getElementById("t1");
let xingxing1=document.getElementById("x1");
console.log(bb,typeof bmusic);
console.log(t1,typeof picture);
let i = true;
picture.onclick = function(){
    if(i){
        bmusic.play();
        picture.style.animationPlayState="running";
        xingxing1.style.animationPlayState="running";
       
        picture.src="etet.gif";
        i = false;
    }else{
        bmusic.pause();
        i = true;
        picture.src="etet.png";
        picture.style.animationPlayState="paused"
        

    }
    
};