$(document).ready(function() {
  $('form#groceryList').submit(function(event) {
    event.preventDefault();
    //Add item from input to array
    const item1=$("#item1").val();
    const item2=$("#item2").val();
    const item3=$("#item3").val();
    const item4=$("#item4").val();
    const item5=$("#item5").val();
    const item6=$("#item6").val();
    
    let array = [item1,item2,item3,item4,item5,item6];
    array.sort();
    array.forEach(function(item) {
      $("#outputlist").append("<li>" + item + "</li>");
    });
  
    

    
  });
});