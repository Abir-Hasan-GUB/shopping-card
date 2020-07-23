//disabled all text area.
var length = document.querySelectorAll(".input").length;
for(var i = 0; i<length; i++){
   document.querySelectorAll(".input")[i].disabled = true;
}


//add event listener in plus button (Incriment Number)
function incrimentNumber(pluseButtonID,iphoneCountValue){
    var count = 0;
var countButton = document.getElementById(pluseButtonID);
countButton.onclick = function(){
    count++;
    var ab = document.getElementById(iphoneCountValue).value = count;
    console.log(ab);
}
}

incrimentNumber("iphoneCountBtnPlus","iphoneCount"); // call for iphone
incrimentNumber("coverCountBtnPlus","coverCount"); // call for cover

//add event listener in plus button (Decrement Number)
function decrementNumber(minusButtonID,iphoneCountLessValue){
    var count = 0;
var countButton = document.getElementById(minusButtonID);
countButton.onclick = function(){
    count--;
    var ab = document.getElementById(iphoneCountLessValue).value = count;
    console.log(ab);
}
}
decrementNumber("iphoneCountBtnMinus","iphoneCount"); //call for Iphone
decrementNumber("coverCountBtnMinus","coverCount"); // call for cover