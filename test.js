function changeColor(id){
  let obj = document.getElementById(id);
  obj.style.backgroundColor = 'rgba(0,0,0,0.5)';  
}

function func1(id1, id2){
  // input要素を取得
  let input = document.getElementById(id1);
  
  // イベントリスナーでイベント「change」を登録
  input.addEventListener("change",function(){
    console.log(this.value);
    changeColor(id2);
  });
}

let array = [
  ["ta-No", "No-inputted"],
  ["ta-Syareki", "Syareki-inputted"],
  ["ta-Haikiryou", "Haikiryou-inputted"],
  ["ta-Katashiki", "Katashiki-inputted"],
  ["ta-Syodo", "Syodo-inputted"],
  ["ta-Syamei", "Syamei-inputted"],
  ["ta-Keijou", "Keijou-inputted"],
  ["ta-Grade", "Grade-inputted"],
  ["ta-Hyoukaten", "Hyoukaten-inputted"],
  ["ta-Naisou", "Naisou-inputted"],
  ["ta-Syaken", "Syaken-inputted"],
  ["ta-Soukou", "Soukou-inputted"],
  ["ta-Gensyoku", "Gensyoku-inputted"],
  ["ta-Irogae", "Irogae-inputted"],
  ["ta-ColorNo", "ColorNo-inputted"],
  ["ta-Nenryou", "Nenryou-inputted"],
  ["ta-Naisousyoku", "Naisousyoku-inputted"],
  ["ta-Nenshiki", "Nenshiki-inputted"],
  ["ta-Yunyuukubun", "Yunyuukubun-inputted"],
  ["ta-Handle", "Handle-inputted"],
  ["ta-Shift", "Shift-inputted"],
  ["ta-Reibou", "Reibou-inputted"],
  ["ta-Shinsyaseibitechou", "Shinsyaseibitechou-inputted"],
  ["ta-Meigihenkoukigen", "Meigihenkoukigen-inputted"],
  ["ta-Junseihin", "Junseihin-inputted"],
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

window.addEventListener('DOMContentLoaded', function(){

  array.forEach(function(value) {
    id1 = value[0];
    id2 = value[1];
    func1(id1, id2);
  })
});