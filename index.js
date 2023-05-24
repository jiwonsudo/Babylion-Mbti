let num = 1;

let selectedType = '';

let eiTypeScore = 0;
let snTypeScore = 0;
let tfTypeScore = 0;
let jpTypeScore = 0;

function start() {
  $("#main").hide();
  $("#qna").show();
  next();
}

function next() {
  console.log(num);
  $(".progress-bar").attr("style", "width: calc(100 / 12 * " + num + "%)");
  $("#title").html(question[num]["title"]);
  $("#type").val(question[num]["type"]);
  $("#A").html(question[num]["A"]);
  $("#B").html(question[num]["B"]);
  num++;
}

//URL 복사 기능 - 구글링
function shareURL() {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  const url = window.document.location.href;
  dummy.value = url;
  navigator.clipboard.writeText(dummy.value)
  .then(() => {
    alert("복사가 완료되었습니다");
  })
  .catch((err) => {
    console.log("err:", err);
  });
  document.body.removeChild(dummy);
}

$("#A").click(function() {

  if (num === 13) {
    $("#qna").hide();
    $("#result").show();
  
    let mbti = "";
    eiTypeScore < 2 ? (mbti += "I") : (mbti += "E");
    snTypeScore < 2 ? (mbti += "N") : (mbti += "S");
    tfTypeScore < 2 ? (mbti += "F") : (mbti += "T");
    jpTypeScore < 2 ? (mbti += "P") : (mbti += "J");
  
    console.log(mbti);
  
    $(".subtitle").html(result[mbti]["subtitle"]);
    $(".explain").html(result[mbti]["explain"]);
    $("#result_img").attr("src", result[mbti]["img"]);
  } else { //버튼 클릭시 점수 계산

    selectedType = question[num]['type'];

    if (selectedType === 'EI') { eiTypeScore++; }
    else if (selectedType === 'SN') { snTypeScore++; }
    else if (selectedType === 'TF') { tfTypeScore++; }
    else if (selectedType === 'JP') { jpTypeScore++; }

    next(); 
  }
});

$("#B").click(function() {
  if (num === 13) {
    $("#qna").hide();
    $("#result").show();
  
    let mbti = "";
    eiTypeScore < 2 ? (mbti += "I") : (mbti += "E");
    snTypeScore < 2 ? (mbti += "N") : (mbti += "S");
    tfTypeScore < 2 ? (mbti += "F") : (mbti += "T");
    jpTypeScore < 2 ? (mbti += "P") : (mbti += "J");
  
    console.log(mbti);
  
    $(".subtitle").html(result[mbti]["subtitle"]);
    $(".explain").html(result[mbti]["explain"]);
    $("#result_img").attr("src", result[mbti]["img"]);
  } else { //버튼 클릭시 점수 계산
    next(); 
  }
});