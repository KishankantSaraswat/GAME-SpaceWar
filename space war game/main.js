const player = document.getElementById("player");
const game = document.getElementById("game");
const alien = document.getElementById("alien");

var result=document.getElementById("result");
const score = document.getElementById("score");
var counter = 0;



window.addEventListener("keydown", function(e){
    if(e.keyCode=="39"){
        var playerleft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if(playerleft < 260){
            player.style.left = (playerleft + 130) + "px"
        }
    }

    if(e.keyCode=="37"){
        var playerleft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if(playerleft > 0){
            player.style.left = (playerleft - 130) + "px"
        }
    }

    
})

window.addEventListener("keydown", function(e){
    if(e.keyCode=="32"){
        var canon = document.createElement("div");
        var img = document.createElement("img");
        img.src = "bullet.png";
        img.classList.add("bulletImg");
        canon.classList.add("bullet");
        canon.style.left = player.style.left;
        canon.appendChild(img);
        game.appendChild(canon)
    }
    setInterval(function collision(){
        var cannonleft = parseInt(window.getComputedStyle(canon).getPropertyValue("left"));
        var cannontop = parseInt(window.getComputedStyle(canon).getPropertyValue("top"));
        var alienleft = parseInt(window.getComputedStyle(alien).getPropertyValue("left"));
        var alientop = parseInt(window.getComputedStyle(alien).getPropertyValue("top"));

        if(((cannontop-alientop)<100)&& (alientop<cannontop)
        &&(alienleft===cannonleft)){
            canon.style.display = 'none';
            alien.style.display = 'none';
        }
    },10)



    setTimeout(function(){canon.remove()},1000)
})

function alienMove(){
    alien.style.display = 'block';
    var random = ((Math.floor(Math.random() * 3)) * 130);
    alien.style.left = random + "px";
    alien.classList.add("alienMove");
    counter++;
}

setInterval(alienMove,1000);

function gameover(){
    var alientop=parseInt(window.getComputedStyle(alien).getPropertyValue("top"));
    if(alientop>460){
        result.style.display='block';
        game.style.display='none';
        score.innerHTML=`score:${counter}`;
        counter=0;
    }
}

setInterval(gameover, 10);