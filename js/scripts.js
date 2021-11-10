//Business Logic

 function beepBoop(number) { 
  let beep = [];
  for (let i=0; i<=number; i++) {
  let stringNumber = (i.toString().split(""));
  if (stringNumber.includes("3")) {
    beep.push("Won't you be my neighbor");
  } else if (stringNumber.includes("2")) {
    beep.push("Boop!");
  } else if (stringNumber.includes("1")) {
    beep.push("Beep!");
  } else {
    beep.push(i);
  };
}
  return beep.join(", ");
} 

//UI Logic

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const number = $("#enterNumber").val()
    let result = beepBoop(number);
    $("#robogersOutput").html(result);
  });
});

    
