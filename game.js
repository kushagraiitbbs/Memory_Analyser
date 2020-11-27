var pat=[],uscolor=["red","blue","green","yellow"];
var gameseq=[],lvl=-1,idx=0;
var start=false;
$(document).on("keypress",function(){
    if(!start){
        start=true;
        getnumb();
    }
});
function getnumb(){
    $("h1").html("Level "+(++lvl));
    gameseq.push(uscolor[Math.floor(Math.random()*4)]);
    $("div#"+gameseq[lvl]).fadeIn(300).fadeOut(300).fadeIn(300);
    idx=0;
    pat.splice(0,pat.length);   
 }
 function gameOver(){
   playSound("wrong");
   $("body").addClass("game-over");
   setTimeout(() => {
    $("body").removeClass("game-over");
   },200);
   pat.splice(0,pat.length); gameseq.splice(0,gameseq.length);
   lvl=-1; idx=0;
   $("h1").html("Press Any Key to Start");
   start=false;
 }
 $(".btn").on("click",function(res){
     var preC =$(this).attr("id");
     pat.push(preC);
     $("div#"+preC).addClass("pressed");
     setTimeout(() => {
         $("div#"+preC).removeClass("pressed");
     }, 100);
     playSound(preC);
     idx++;
     if(idx>=gameseq.length){
         setTimeout(() => {
             getnumb();
         }, 200);
     }
     if(pat[idx-1]!==gameseq[idx-1]) gameOver();
 });
 function playSound(name){
     var audio=new Audio("sounds/"+name+".mp3");
     audio.play();
 }
/*$("#red").on("click",function(){
   var audio=new Audio("sounds/red.mp3");
   audio.play(); 
    pat.push("red");
    $("div#red").addClass("pressed");
    setTimeout(function(){
        $("div#red").removeClass("pressed");
    }, 100);
   if(pat[idx]!==gameseq[idx]){
     gameOver();
   }
   else idx++; 
});
$("#blue").on("click",function(){
    var audio=new Audio("sounds/blue.mp3");
   audio.play();
   $("div#blue").addClass("pressed");
    setTimeout(function(){
        $("div#blue").removeClass("pressed");
    }, 100);
    pat.push("blue");
    if(pat[idx]!==gameseq[idx]){
        gameOver();
      }
      else idx++; 
});
$("#green").on("click",function(){
    var audio=new Audio("sounds/green.mp3");
   audio.play();
   $("div#green").addClass("pressed");
    setTimeout(function(){
        $("div#green").removeClass("pressed");
    }, 100);
    pat.push("green");
    if(pat[idx]!==gameseq[idx]){
        gameOver();
      }
      else idx++; 
});
$("#yellow").on("click",function(){
    var audio=new Audio("sounds/yellow.mp3");
   audio.play();
   $("div#yellow").addClass("pressed");
    setTimeout(function(){
        $("div#yellow").removeClass("pressed");
    }, 100);
    pat.push("yellow");
    if(pat[idx]!==gameseq[idx]){
        gameOver();
      }
      else idx++; 
});*/