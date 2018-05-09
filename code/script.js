var flag = false;

// displays numerous inputs (numbers) on the screen
function displaynumber(n1) {
  calculator.display.value = calculator.display.value + n1;
}

// testing 0 input, when 0 comes after / buttons are disabled and message is given
function testZero(n2) {
  if (flag == true && n2 == 0) {
    var b = document.getElementsByClassName("btn");
    for (var i = 0; i < b.length; i++) {
      b[i].disabled = true;
      b[i].style.color = "black";
      document.getElementById("disp2").value = "Can not devide by 0! Click C";
    }
  } else {
    flag = false;
  }
}

// sets warning, division is in play, boolean used
function setWarning() {
  flag = true;
}

// clears both displays, resets boolean, enables buttons
function cl() {
  flag = false;
  document.getElementById("disp1").value = "";
  document.getElementById("disp2").value = "";
  var b = document.getElementsByClassName("btn");
  for (var i = 0; i < b.length; i++) {
    b[i].disabled = false;
    b[i].style.color = "white";
  }
}

function eq() {
  var e = calculator.display.value;
  var b = document.getElementsByClassName("btn");
  for (var i = 0; i < b.length; i++) {
    b[i].disabled = true;
    b[i].style.color = "black";
  }
  document.getElementById("disp2").value = "   Invalid entry!    Click C";
  if (e) {
    calculator.display.value = eval(e);
    var b = document.getElementsByClassName("btn");
    for (var i = 0; i < b.length; i++) {
      b[i].disabled = false;
      b[i].style.color = "white";
    }
    document.getElementById("disp2").value = "";
  }
}﻿