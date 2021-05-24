function changeColor1(id){
  let obj = document.getElementById(id);
  obj.style.backgroundColor = 'rgba(0,0,0,0.5)';  //背景色を黒にする
}

function changeColor2(id){
  let obj = document.getElementById(id);
  obj.style.backgroundColor = 'rgba(255,0,0,0.5)';  //背景色を赤にする
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
  ["ta-No", "No-inputted"],
  ["ta-Syareki", "Syareki-inputted"],
  ["ta-Haikiryou", "Haikiryou-inputted"],
  ["ta-Katashiki", "Katashiki-inputted"],
  ["ta-Syodo", "Syodo-inputted"],
  ["ta-Syamei", "Syamei-inputted"],
  ["ta-Keijou", "Keijou-inputted"],
  ["ta-Grade", "Grade-inputted"],
  //["ta-Hyoukaten", "Hyoukaten-inputted"],
  //["ta-Naisou", "Naisou-inputted"],
  ["ta-Syaken", "Syaken-inputted"],
  ["ta-Soukou", "Soukou-inputted"],
  ["ta-Gensyoku", "Gensyoku-inputted"],
  ["ta-Irogae", "Irogae-inputted"],
  ["ta-ColorNo", "ColorNo-inputted"],
  ["ta-Nenryou", "Nenryou-inputted"],
  ["ta-Naisousyoku", "Naisousyoku-inputted"],
  ["ta-Nenshiki", "Nenshiki-inputted"],
  //["ta-Yunyuukubun", "Yunyuukubun-inputted"],
  //["ta-Handle", "Handle-inputted"],
  ["ta-Shift", "Shift-inputted"],
  ["ta-Reibou", "Reibou-inputted"],
  //["ta-Shinsyaseibitechou", "Shinsyaseibitechou-inputted"],
  ["ta-Meigihenkoukigen", "Meigihenkoukigen-inputted"],
  //["ta-Junseihin", "Junseihin-inputted"],
  ["ta-Sailspoint", "Sailspoint-inputted"],
  ["ta-Recycle", "Recycle-inputted"],
  ["ta-Jousyateiin", "Jousyateiin-inputted"],
  ["ta-Sekisairyou", "Sekisairyou-inputted"],
  ["ta-Cyuuijikou", "Cyuuijikou-inputted"],
  ["ta-TourokuNo", "TourokuNo-inputted"],
  ["ta-SyadaiNo", "SyadaiNo-inputted"],
  ["ta-SerialNo", "SerialNo-inputted"],
  ["ta-Nagasa", "Nagasa-inputted"],
  ["ta-Haba", "Haba-inputted"],
  ["ta-Takasa", "Takasa-inputted"],
  ["ta-Kibousyuppin", "Kibousyuppin-inputted"],
  ["ta-KaiinNo", "KaiinNo-inputted"],
  ["ta-Syuppintenmei", "Syuppintenmei-inputted"],
  ["ta-Kiboukakaku", "Kiboukakaku-inputted"],
  ["ta-Startkakaku", "Startkakaku-inputted"],
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

function onFocus(id1,id2) {
  obj = document.getElementById(id1);
  obj.addEventListener("focus", function () {
    changeColor2(id2);
  });
}

function onFocus2(id1, id2) {
  obj = document.getElementById(id1);
  obj.addEventListener("focus", function () {
    id = this.id;
    lab_id = "lab_" + id;
    lab_obj = document.getElementById(lab_id);
    lab_obj.style.outline = 'solid 2px rgba(0,0,0,1)';
    changeColor2(id2);
  });
}

function onFocus3(id1, id2, a) {
  obj = document.getElementById(id1);
  obj.addEventListener("focus", function () {
    id = this.id;
    lab_id = "lab_" + id;
    lab_obj = document.getElementById(lab_id);
    lab_obj.style.outline = 'solid 2px rgba(0,0,0,1)';
    flg = array2[a][2];
    changeColor2(id2);
    /*if (flg == 1) {
      changeColor1(id2);
    }
    else {
      changeColor2(id2);
    } */
  });
}

function onBlur(id1, id2) {
  obj = document.getElementById(id1)
  obj.addEventListener("blur", function () {
    id = this.id;
    obj2 = document.getElementById(id);
    lab_id = "lab_" + id;
    lab_obj = document.getElementById(lab_id);
    if (obj2.value !== "") {
      changeColor1(id2);
    }
    else {
      changeColor3(id2);
    }
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
  });
}


window.addEventListener('DOMContentLoaded', function(){
  array1.forEach(function(value) { 
    id1 = value[0];
    id2 = value[1];
    //func1(id1, id2);
    //func2(id1, id2);
    onFocus(id1, id2);
    onBlur(id1, id2);
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