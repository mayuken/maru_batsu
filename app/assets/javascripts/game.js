let click=0;

$(document).on('click', '.block', function(){
  let block=$(this).html();
  if (click <9 && block === "　　　　　<br>　　　　　<br>　　　　　<br>"){
    if (click % 2 === 0){
      $(this).addClass("maru").html("○");
      $('.instruct').html("次は後攻だよ！×の場所を選んでね！");
    }else{
      $(this).addClass("batsu").html("×");
      $('.instruct').html("次は先攻だよ！○の場所を選んでね！");
    }
    click++;
  }
  
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

  function maru_judge(judge, index, array){
    return (judge == "○")
  }

  function batsu_judge(judge, index, array){
    return (judge == "×")
  }

  let num=0;

  $.each(judges, function(index, judge){
    if(judge.every(maru_judge) && num < 1){
      $('main').append('<div class="zone"><div class="kekka"><h3>先攻の勝ち！</h3><img src="assets/pose_win_girl.png" art="勝ち！"></div></div>');
      $('.zone').fadeIn('slow');
      return num++;
    }else if(judge.every(batsu_judge) && num < 1){
      $('main').append('<div class="zone"><div class="kekka"><h3>後攻の勝ち！</h3><img src="assets/pose_win_boy.png" art="勝ち！"></div></div>');
      $('.zone').fadeIn('slow');
      return num++;
    }
  });
 
});
