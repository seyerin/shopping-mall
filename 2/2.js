
for(let a = 0; a < 6; a++){
  //star += "*" + "\n";
  let star = ""
  for(let b = 0; b < a; b++){
    star += "*";
  }
console.log(star);
}
//----------------------------------------삼각형
for(let c = 5; c >= 0; c--){
  let star2 ="";
  for(let d = 0; d < c; d++){
    star2 += "*";
  }
  console.log(star2);
}
//-----------------------------------------역삼각형
for(let e = 0; e*2-1 < 6; e++){
  let star3 = "";
  for(let f = 0; f < 6-e; f++){
    star3 += " ";
  }
  for(let f = 0; f< e*2-1; f++){
  star3 += "*";
  }
  console.log(star3);
}
for(let e = 3; e > 0; e--){
  //---------e=5로 했다 3으로 바꿈 5로 했을 때는 한칸 밀렸었는데 3으로 바꾸니까 안밀림;;;
  let star3 = "";
  star3 += "";
  for(let f = 0; f <= 6-e; f++){
    star3 += " ";
  }
  for(let f = 0; f < e*2-3; f++){
    //-------------원래 e*2-5 였음-----------------------------------
    star3 += "*";
  }
  console.log(star3);
}
//------------------마름모-------- 됐는데 왜 된지 모름------------------

for(let g = 3; g > 0; g--){
  let star4 ="";
  for(let h = 0; h < 6-g; h++){
    star4 += " ";
  }
  for(let h = 0; h <g*2-1; h++){
    star4 += "*";
  }
  console.log(star4);
}
for(let g = 2; g*2-1 < 6; g++){
  //g=1 에소 g=2로 바꾸니까 별 1개 있는 줄 사라짐 왜?
  let star4 = "";
  for(let h = 0; h < 6-g; h++){
    star4 += " ";
  }
  for(let h = 0; h < g*2-1; h++){
    star4 += "*";
  }
  console.log(star4);
}
//------------------------------------------------------------------모래시계

for(let i = 0; i*2-1 < 6; i++){
  let star5 = "";
  for(let j = 0; j <6-i; j++){
    star5 += " ";
  }
  for(let j = 0; j < i*2-1; j++){
    star5 += "*";
  }
  console.log(star5);
}
for(let i = 1; i*2-1 <6; i++){
  let star5 = "";
  for(let j = 0; j <6-i; j++){
    star5 += " ";
  }
  for(let j = 0; j < i*2-1; j++){
    star5 += "*";
  }
  console.log(star5);
}