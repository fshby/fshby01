
let bmusic=document.getElementById("bb");
let picture=document.getElementById("t1");
console.log(bb,typeof bmusic);
console.log(t1,typeof picture);
let i = true;
picture.onclick = function(){
    if(i){
        bmusic.play();
        picture.src="etet.gif";
        i = false;
    }else{
        bmusic.pause();
        i = true;
        picture.src="etet.png";
        

    }
    
};