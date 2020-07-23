
//disabled all text area.
var length = document.querySelectorAll(".input").length;
for (var i = 0; i < length; i++) {
    document.querySelectorAll(".input")[i].disabled = true;
}

//add event listener in plus button (Incriment Number)
function incrimentNumber(pluseButtonID, iphoneCountValue) {
    var count = 0;
    var countButton = document.getElementById(pluseButtonID);//find button
    countButton.onclick = function () {//add onclick listener with btn
        count++;
        document.getElementById(iphoneCountValue).value = count; //replace value
    }
}

incrimentNumber("iphoneCountBtnPlus", "iphoneCount"); // call for iphone
incrimentNumber("coverCountBtnPlus", "coverCount"); // call for cover

//add event listener in plus button (Decrement Number)
function decrementNumber(minusButtonID, iphoneCountLessValue) {
    var count = 0;//get value from input block

    var countButton = document.getElementById(minusButtonID); //find button
    countButton.onclick = function () { //add onclick listener with btn
        count--;
        document.getElementById(iphoneCountLessValue).value = count;
    }
}
decrementNumber("iphoneCountBtnMinus", "iphoneCount"); //call for Iphone
decrementNumber("coverCountBtnMinus", "coverCount"); // call for cover
