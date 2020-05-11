let click=0;

$(document).on('click', '.block', function(){
  let block=$(this).html();
  if (click <9 && block === "　"){
    if (click % 2 === 0){
      $(this).html("○")
    }else{
      $(this).html("×")
    }
    click++;
  }

  // let objs = {
  //   obj1 : $('.one'),
  //   obj2 : $('.two'),
  //   obj3 : $('.three'),
  //   obj4 : $('.four'),
  //   obj5 : $('.five'),
  //   obj6 : $('.six'),
  //   obj7 : $('.seven'),
  //   obj8 : $('.eight'),
  //   obj9 : $('.nine'),
  // };

  // $.each(objs, function(index, object){
  // let judge = object.html();
  // });
  
  // thタグを代入
  let obj1=$('.one');
  let obj2=$('.two');
  let obj3=$('.three');
  let obj4=$('.four');
  let obj5=$('.five');
  let obj6=$('.six');
  let obj7=$('.seven');
  let obj8=$('.eight');
  let obj9=$('.nine');

  // ○か×かの値を取得
  let jud1=obj1.html();
  let jud2=obj2.html();
  let jud3=obj3.html();
  let jud4=obj4.html();
  let jud5=obj5.html();
  let jud6=obj6.html();
  let jud7=obj7.html();
  let jud8=obj8.html();
  let jud9=obj9.html();

  // 横一列の判定
  let juds1=[jud1, jud2, jud3]; 
  let juds2=[jud4, jud5, jud6];
  let juds3=[jud7, jud8, jud9];
  // 縦一列の判定
  let juds4=[jud1, jud4, jud7];
  let juds5=[jud2, jud5, jud8];
  let juds6=[jud3, jud6, jud9];
  // 斜め一列の判定
  let juds7=[jud1, jud5, jud9];
  let juds8=[jud3, jud5, jud7];

  // 判定の配列
  let judges=[juds1, juds2, juds3, juds4, juds5, juds6, juds7, juds8]

  // // ○の配列
  // let maru1= "○";
  // let maru2= "○";
  // let maru3= "○";
  // let marus={maru1, maru2, maru3};
  // // ×の配列
  // let batsu1= "×";
  // let batsu2= "×";
  // let batsu3= "×";
  // let batsus={batsu1, batsu2, batsu3};
  // // 空の配列
  // let kara= "　";
  // let karas={kara, kara, kara};

  function maru_judge(judge, index, array){
    return (judge == "○")
  }

  function batsu_judge(judge, index, array){
    return (judge == "×")
  }

  $.each(judges, function(index, judge){
    if(judge.every(maru_judge)){
      alert("先攻の勝ち");
    }else if(judge.every(batsu_judge)){
      alert("後攻の勝ち");
    }
  });
 
});
