//Business Logic

let beep = [];
function beepBoop(userInput) {
for (i=0; i<=userInput; i++) {
  let stringNumber = (i.toString().split(""))
  if (stringNumber.includes("3")) {
    beep.push("Won't you be my neighbor");
  } else if (stringNumber.includes("2")) {
    beep.push("Boop!");
  } else if (stringNumber.includes("1")) {
    beep.push("Beep!");
  } else {
    beep.push(i);
  }
}
  return beep;
}



//UI Logic

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const userInput = $("#enterNumber").val();
    let result = beep;
    $("#robogersOutput").text(result);
  });
});
    
