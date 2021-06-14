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
  ["ta-Syaken1", "Syaken-inputted", "ta-Syaken-flame"],
  ["ta-Syaken2", "Syaken-inputted", "ta-Syaken-flame"],
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

let array4 = [
  ["ta-No", "ta-Syareki"],
  ["ta-Syareki", "ta-Haikiryou"],
  ["ta-Haikiryou", "ta-Katashiki"],
  ["ta-Katashiki", "ta-Syodo1"],
  ["ta-Syodo1", "ta-Syodo2"],
  ["ta-Syodo2", "ta-Syamei"],
  ["ta-Syamei", "ta-Keijou"],
  ["ta-Keijou", "ta-Grade"],
  ["ta-Grade", "ck_2WD"],
  ["ck_2WD", "ck_4WD"],
  ["ck_4WD", "ta-Syaken1"],
  ["ta-Syaken1", "ta-Syaken2"],
  ["ta-Syaken2", "ta-Soukou"],
  ["ta-Soukou", "ta-Sotoiro1"],
  ["ta-Sotoiro1", "ta-Sotoiro2"],
  ["ta-Sotoiro2", "ta-ColorNo"],
  ["ta-ColorNo", "ta-Nenryou"],
  ["ta-Nenryou", "ta-Naisousyoku"],
  ["ta-Naisousyoku", "ta-Nenshiki"],
  ["ta-Nenshiki", "ck_Dealer"],
  ["ck_Dealer", "ck_Heikou"],
  ["ck_Heikou", "ck_Hidari"],
  ["ck_Hidari", "ck_Migi"],
  ["ck_Migi", "ta-Shift"],
  ["ta-Shift", "ta-Reibou"],
  ["ta-Reibou", "ck_Ari"],
  ["ck_Ari", "ck_Nashi"],
  ["ck_Nashi", "ta-Meigihenkoukigen1"],  
  ["ta-Meigihenkoukigen1", "ta-Meigihenkoukigen2"],
  ["ta-Meigihenkoukigen2", "ck_SR"],
  ["ck_SR", "ck_JunAW"],
  ["ck_JunAW", "ck_PS"],
  ["ck_PS", "ck_PW"],
  ["ck_PW", "ck_Kawa"],
  ["ck_Kawa", "ck_TV"],
  ["ck_TV", "ck_Navi"],
  ["ck_Navi", "ck_AirB"],
  ["ck_AirB", "ta-Sailspoint"],
  //["ta-Sailspoint", "ta-Recycle"],
  ["ta-Recycle", "ta-Jousyateiin"],
  ["ta-Jousyateiin", "ta-Sekisairyou"],
  ["ta-Sekisairyou", "ta-Cyuuijikou"],
  //["ta-Cyuuijikou", "ta-TourokuNo1"],
  ["ta-TourokuNo1", "ta-TourokuNo2"],
  ["ta-TourokuNo2", "ta-TourokuNo3"],
  ["ta-TourokuNo3", "ta-TourokuNo4"],
  ["ta-TourokuNo4", "ta-SyadaiNo"],
  ["ta-SyadaiNo", "ta-SerialNo"],
  ["ta-SerialNo", "ta-Nidainaisun1"],
  ["ta-Nidainaisun1", "ta-Nidainaisun2"],
  ["ta-Nidainaisun2", "ta-Nidainaisun3"],
  ["ta-Nidainaisun3", "ta-Syakensyoujou1"],
  ["ta-Syakensyoujou1", "ta-Syakensyoujou2"],
  ["ta-Syakensyoujou2", "ta-Syakensyoujou3"],
  ["ta-Syakensyoujou3", "ta-KaiinNo1"],
  ["ta-KaiinNo1", "ta-KaiinNo2"],
  ["ta-KaiinNo2", "ta-Syuppintenmei"],
  ["ta-Syuppintenmei", "ta-Tantousya"],
  ["ta-Tantousya", "ta-Renrakusaki"],
  ["ta-Renrakusaki", "ta-Kiboukakaku"],
  ["ta-Kiboukakaku", "ta-Startkakaku"],
  ["ta-Startkakaku", "ta-No"],
]


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
          changeColor1(id2);
        }
        else {
          changeColor3(id2);
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

function keyDown0(id1, id2) {
  obj = document.getElementById(id1);
  obj.addEventListener("keydown", function () {
    if (event.keyCode == 13) {
      console.log();
      obj2 = document.getElementById(id2);
      event.returnValue = false;
      obj2.focus();
    }
    else {
      console.log("bb");
    }
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
    checked2(id1, id2, id_pair);
    onFocus2(id1, id2);
    onBlur2(id1, id2);
  })

  array3.forEach(function(value, index) {
    a = index;
    id1 = value[0];
    id2 = value[1];
    checked3(id1, id2, a);
    onFocus3(id1, id2, a);
    onBlur3(id1, id2, a);
  })

  array4.forEach(function(value) {
    id1 = value[0];
    id2 = value[1];
    keyDown0(id1, id2);
  })

});



	

/*
						
currentFNo = 0;
function nextForm()
{
	if (event.keyCode == 13)
	{
		obj = 
		currentFNo %= document.form1.elements.length;
		document.form1[currentFNo].focus();
	}
}
window.document.onkeydown = nextForm;*/
/*
function focus_test(id2) {
  if (event.keyCode == 13) {
    document.getElementById(id2).focus();
    console.log("aaaa");
  } 
  else {
    console.log("bbbbb");
  }
}
window.document.onkeydown = focus_test("ta-Syareki");*/

/*document.addEventListener("keydown",function (e) { 
  console.log(e.keyCode);
  e.preventDefault();
  e.keyCode = 9;
  console.log(e.keyCode);
  document.getElementById("ta-Syareki").dispatchEvent(new KeyboardEvent("keydown",
  {
      keyCode: 9
  }
  ));
});*/

