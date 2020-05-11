let click=0;

$(document).on('click', '.block', function(){
  if (click <9){
  if (click % 2 === 0){
    $(this).html("○")
  }else{
    $(this).html("×")
  }
  click++;
  }

  let obj = $(this);
  let judge = obj.html();
  // let counter = judge.length;

  $(judge).change(function(){
    // if (counter === 1){
      console.log("yes");
    // }
  
  });
});



