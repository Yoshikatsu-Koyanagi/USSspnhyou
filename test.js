function changeColor1(id){
  let obj = document.getElementById(id);
  obj.style.backgroundColor = 'rgba(0,0,0,0.5)';  //背景色を黒にする
}

function changeColor2(id){
  let obj = document.getElementById(id);
  console.log(id);
  obj.style.backgroundColor = 'rgba(255,50,0,0.4)';  //背景色を赤にする
}

function changeColor3(id){
  let obj = document.getElementById(id);
  obj.style.backgroundColor = 'rgba(0,0,0,0)';  //背景色を無色にする
}
/*
function func1(id1, id2){
  // input要素を取得
  let input = document.getElementById(id1);
  
  // イベントリスナーでイベント「change」を登録
  input.addEventListener("change",function(){
    console.log(this.value);
    changeColor1(id2);
  });
}

function func2(id1, id2){
  // input要素を取得
  let input = document.getElementById(id1);
  
  // イベントリスナーでイベント「input」を登録
  input.addEventListener("input",function(){
    changeColor2(id2);
  });
}

function on_Focus(id1, id2) {
  obj = document.getElementById(id1)
  obj.onfocus = function () {
    changeColor2(id2);
    console.log("on_Focus");
    //this.style.zIndex = 100;
    //this.style.border = 'solid 2px rgba(0,0,0,1)'; 
  }
}

function out_Focus(id1, id2) {
  console.log("out_Focus");
  obj = document.getElementById(id1)
  obj.onblur = function () {
    changeColor3(id2);
  }
}*/



let array1 = [
  ["ta-No", "No-inputted", "ta-No-flame"],
  ["ta-Syareki", "Syareki-inputted", "ta-Syareki-flame"],
  ["ta-Haikiryou", "Haikiryou-inputted", "ta-Haikiryou-flame"],
  ["ta-Katashiki", "Katashiki-inputted", "ta-Katashiki-flame"],
  ["ta-Syodo", "Syodo-inputted", "ta-Syodo-flame"],
  ["ta-Syamei", "Syamei-inputted", "ta-Syamei-flame"],
  ["ta-Keijou", "Keijou-inputted", "ta-Keijou-flame"],
  ["ta-Grade", "Grade-inputted", "ta-Grade-flame"],
  //["ta-Hyoukaten", "Hyoukaten-inputted"],
  //["ta-Naisou", "Naisou-inputted"],
  ["ta-Syaken", "Syaken-inputted", "ta-Syaken-flame"],
  ["ta-Soukou", "Soukou-inputted", "ta-Soukou-flame"],
  ["ta-Sotoiro", "Sotoiro-inputted", "ta-Sotoiro-flame"],
  //["ta-Gensyoku", "Gensyoku-inputted"],
  //["ta-Irogae", "Irogae-inputted"],
  ["ta-ColorNo", "ColorNo-inputted", "ta-ColorNo-flame"],
  ["ta-Nenryou", "Nenryou-inputted", "ta-Nenryou-flame"],
  ["ta-Naisousyoku", "Naisousyoku-inputted", "ta-Naisousyoku-flame"],
  ["ta-Nenshiki", "Nenshiki-inputted", "ta-Nenshiki-flame"],
  //["ta-Yunyuukubun", "Yunyuukubun-inputted"],
  //["ta-Handle", "Handle-inputted"],
  ["ta-Shift", "Shift-inputted", "ta-Shift-flame"],
  ["ta-Reibou", "Reibou-inputted", "ta-Reibou-flame"],
  //["ta-Shinsyaseibitechou", "Shinsyaseibitechou-inputted"],
  ["ta-Meigihenkoukigen", "Meigihenkoukigen-inputted", "ta-Meigihenkoukigen-flame"],
  //["ta-Junseihin", "Junseihin-inputted"],
  ["ta-Sailspoint", "Sailspoint-inputted", "ta-Sailspoint-flame"],
  ["ta-Recycle", "Recycle-inputted", "ta-Recycle-flame"],
  ["ta-Jousyateiin", "Jousyateiin-inputted", "ta-Jousyateiin-flame"],
  ["ta-Sekisairyou", "Sekisairyou-inputted", "ta-Sekisairyou-flame"],
  ["ta-Cyuuijikou", "Cyuuijikou-inputted", "ta-Cyuuijikou-flame"],
  ["ta-TourokuNo1", "TourokuNo1-inputted", "ta-TourokuNo-flame"],
  ["ta-TourokuNo2", "TourokuNo2-inputted", "ta-TourokuNo-flame"],
  ["ta-TourokuNo3", "TourokuNo3-inputted", "ta-TourokuNo-flame"],
  ["ta-TourokuNo4", "TourokuNo4-inputted", "ta-TourokuNo-flame"],
  ["ta-SyadaiNo", "SyadaiNo-inputted", "ta-SyadaiNo-flame"],
  ["ta-SerialNo", "SerialNo-inputted", "ta-SerialNo-flame"],
  ["ta-Nidainaisun1", "Nidainaisun1-inputted", "ta-Nidainaisun-flame"],
  ["ta-Nidainaisun2", "Nidainaisun2-inputted", "ta-Nidainaisun-flame"],
  ["ta-Nidainaisun3", "Nidainaisun3-inputted", "ta-Nidainaisun-flame"],
  ["ta-Syakensyoujou1", "Syakensyoujou1-inputted", "ta-Syakensyoujou-flame"],
  ["ta-Syakensyoujou2", "Syakensyoujou2-inputted", "ta-Syakensyoujou-flame"],
  ["ta-Syakensyoujou3", "Syakensyoujou3-inputted", "ta-Syakensyoujou-flame"],
  //["ta-Nagasa", "Nagasa-inputted"],
  //["ta-Haba", "Haba-inputted"],
  //["ta-Takasa", "Takasa-inputted"],
  ["ta-Kibousyuppin", "Kibousyuppin-inputted", "ta-Kibousyuppin-flame"],
  ["ta-KaiinNo", "KaiinNo-inputted", "ta-KaiinNo-flame"],
  ["ta-Syuppintenmei", "Syuppintenmei-inputted", "ta-Syuppintenmei-flame"],
  ["ta-Tantousya", "Tantousya-inputted", "ta-Tantousya-flame"],
  ["ta-Renrakusaki", "Renrakusaki-inputted", "ta-Renrakusaki-flame"],
  ["ta-Kiboukakaku", "Kiboukakaku-inputted", "ta-Kiboukakaku-flame"],
  ["ta-Startkakaku", "Startkakaku-inputted", "ta-Startkakaku-flame"],
];


let flg_2WD = 0;
let flg_4WD = 0;
let flg_Dealer = 0;
let flg_Heikou = 0;
let flg_Hidari = 0;
let flg_Migi = 0;
let flg_Ari = 0;
let flg_Nashi = 0;
let flg_SR = 0;
let flg_JunAW = 0;
let flg_PS = 0;
let flg_PW = 0;
let flg_Kawa = 0;
let flg_TV = 0;
let flg_Navi = 0;
let flg_AirB = 0;


let array2 = [
  ["ck_2WD", "twoWD-inputted", "fourWD-inputted"],
  ["ck_4WD", "fourWD-inputted", "twoWD-inputted"],
  ["ck_Dealer", "Dealer-inputted", "Heikou-inputted"],
  ["ck_Heikou", "Heikou-inputted", "Dealer-inputted"],
  ["ck_Hidari", "Hidari-inputted", "Migi-inputted"],
  ["ck_Migi", "Migi-inputted", "Hidari-inputted"],
  ["ck_Ari", "Ari-inputted", "Nashi-inputted"],
  ["ck_Nashi", "Nashi-inputted", "Ari-inputted"],
];

let array3 = [
  ["ck_SR", "SR-inputted", flg_SR],
  ["ck_JunAW", "JunAW-inputted", flg_JunAW],
  ["ck_PS", "PS-inputted", flg_PS],
  ["ck_PW", "PW-inputted", flg_PW],
  ["ck_Kawa", "Kawa-inputted", flg_Kawa],
  ["ck_TV", "TV-inputted", flg_TV],
  ["ck_Navi", "Navi-inputted", flg_Navi],
  ["ck_AirB", "AirB-inputted", flg_AirB],
];


function checked(id1, id2) {
  console.log("check");
  obj = document.getElementById(id1);
  obj.addEventListener("change",function(){
    if (this.checked === true) {
      changeColor1(id2);
    }
    else {
      changeColor3(id2);
    }
  }); 
}

function checked2(id1, id2, id_pair) {
  obj = document.getElementById(id1);
  obj.addEventListener("change",function(){
    console.log(a);
    id = this.id;
    lab_id = "lab_" + id;
    lab_obj = document.getElementById(lab_id);
    lab_obj.style.backgroundColor = 'rgba(0,0,0,0)';
    if (this.checked === true) {
      changeColor1(id2);
      changeColor3(id_pair);
      console.log(id_pair);
    }    
  }); 
}

function checked3(id1, id2, a) {
  obj = document.getElementById(id1);
  obj.addEventListener("change",function(){
    id = this.id;
    lab_id = "lab_" + id;
    lab_obj = document.getElementById(lab_id);
    lab_obj.style.backgroundColor = 'rgba(0,0,0,0)';
    flg = array2[a][2];
    if (this.checked === true) {
      changeColor1(id2);
      flg = 1;
    }
    else {
      changeColor3(id2);
      flg = 0;
    }
    array2[a][2] = flg;
  }); 
}





function checkForm(id) {
  let str = document.getElementById(id).value;
  str2 = str.match(/[0-9]+/g);
  document.getElementById(id).value = str2;
}

function onFocus(id1, id2, id3) {
  id1_ = "." + id1
  obj = document.querySelectorAll(id1_);
  
  obj.forEach(function(target) {
    target.addEventListener("focus", function () {
      /*id = this.className;
      console.log(this.className);
      id_flame = id + "-flame";
      console.log(id);
      console.log(id2);*/
      obj_flame = document.getElementById(id3);
      obj_flame.style.outline = 'solid 3px rgba(0,0,0,1)';
      obj_flame.style.backgroundColor = 'rgba(255,50,0,0.3)';
      console.log(id2);
      changeColor2(id2);
    })
  });
}

function onFocus2(id1, id2) {
  obj = document.getElementById(id1);
  obj.addEventListener("focus", function () {
    id = this.id;
    obj2 = document.getElementById(id);
    lab_id = "lab_" + id;
    lab_obj = document.getElementById(lab_id);
    lab_obj.style.outline = 'solid 3px rgba(0,0,0,1)';
    changeColor2(id2);
    if (obj2.checked === true) {
    }
    else {
      lab_obj.style.backgroundColor = 'rgba(255,50,0,0.3)';
    }
  });
}

function onFocus3(id1, id2, a) {
  obj = document.getElementById(id1);
  obj.addEventListener("focus", function () {
    id = this.id;
    lab_id = "lab_" + id;
    lab_obj = document.getElementById(lab_id);
    lab_obj.style.outline = 'solid 3px rgba(0,0,0,1)';
    flg = array2[a][2];
    changeColor2(id2);
    if (flg == 1) {
    }
    else {
      lab_obj.style.backgroundColor = 'rgba(255,50,0,0.3)';
    } 
  });
}

function onBlur(id1, id2, id3) {
  id1_ = "." + id1;
  obj = document.querySelectorAll(id1_);
  
  obj.forEach(function(target) {
    target.addEventListener("blur", function () {
      id = this.className;
      /*id_flame = id + "-flame";*/
      obj_flame = document.getElementById(id3);
      obj_flame.style.outline = 'none';
      obj_flame.style.backgroundColor = 'rgba(0,0,0,0)';
      obj2 = document.querySelectorAll(id);
        if (this.value !== "") {
          console.log(this.value);
          changeColor1(id2);
        }
        else {
          changeColor3(id2);
          console.log(this.value);
        }    
    })
  });
}

function onBlur2(id1, id2) {
  obj = document.getElementById(id1)
  obj.addEventListener("blur", function () {
    id = this.id;
    obj2 = document.getElementById(id);
    lab_id = "lab_" + id;
    lab_obj = document.getElementById(lab_id);
    if (obj2.checked === true) {
      changeColor1(id2);
    }
    else {
      changeColor3(id2);
    }
    lab_obj.style.outline = 'solid 1px rgba(0,0,0,0.5)';
    lab_obj.style.backgroundColor = 'rgba(0,0,0,0)';

  });
}

function onBlur3(id1, id2, a) {
  obj = document.getElementById(id1)
  obj.addEventListener("blur", function () {
    id = this.id;
    lab_id = "lab_" + id;
    lab_obj = document.getElementById(lab_id);
    flg = array2[a][2];
    if (flg === 1) {
      changeColor1(id2);
    }
    else {
      changeColor3(id2);
    }
    lab_obj.style.outline = 'solid 1px rgba(0,0,0,0.5)';
    lab_obj.style.backgroundColor = 'rgba(0,0,0,0)';
  });
}


window.addEventListener('DOMContentLoaded', function(){
  array1.forEach(function(value) { 
    id1 = value[0];
    id2 = value[1];
    id3 = value[2];
    //func1(id1, id2);
    //func2(id1, id2);
    onFocus(id1, id2, id3);
    onBlur(id1, id2, id3);
  })

  array2.forEach(function(value) { 
    id1 = value[0];
    id2 = value[1];
    id_pair = value[2];
    obj = document.getElementById(id1);
    checked2(id1, id2, id_pair);
    onFocus2(id1, id2);
    onBlur2(id1, id2);
  })

  array3.forEach(function(value, index) {
    a = index;
    id1 = value[0];
    id2 = value[1];
    obj = document.getElementById(id1);
    checked3(id1, id2, a);
    onFocus3(id1, id2, a);
    onBlur3(id1, id2, a);
  })
});



/*

function keydown(e){
  if(e.keyCode === 13){
    var obj = document.activeElement;
    obj.nextElementSibling.focus();
  }
}
 
window.onkeydown = keydown;*/