/*
input:
    - điểm chuẩn hội đồng
    - điểm 3 môn thi
    - điểm ưu tiên khu vực
    - điểm ưu tiên cho đối tượng dự thi
process:
    - sử dụng câu lệnh if kiểm tra nếu thí sinh thuộc khu vực ưu tiên
    - sử dụng câu lệnh if kiểm tra nếu thí sinh thuộc đối tượng ưu tiên
    - *1 để chuyển đổi kiểu dữ liệu
    - tính tổng điểm của thí sinh + điểm ưu tiên (nếu có)
    - Sử dụng lệnh if + toán tử so sánh để xuất ra kết quả đỗ / trượt
    - viết câu thông báo điểm + thông báo đỗ / trượt
output:
    - Đỗ/ trượt
    - Tổng điểm thi
*/

document.getElementById("scoreCheck").onclick = function () {
  var standardScore = document.getElementById("standardScore").value * 1;
  var mathScore = document.getElementById("mathScore").value * 1;
  var literatureScore = document.getElementById("literatureScore").value * 1;
  var englishScore = document.getElementById("englishScore").value * 1;
  var priorityZone = document.getElementById("priorityZone").value;
  var priorityCandidate = document.getElementById("priorityCandidate").value;
  var passFailNoti ='';
  if (typeof standardScore === "number" 
  && typeof mathScore === "number" 
  && typeof literatureScore === "number"
  && typeof englishScore === "number"
  && mathScore <= 10 && mathScore >= 0
  && literatureScore <= 10 && literatureScore >= 0
  && englishScore <= 10 && englishScore >= 0) {
    var plusZonePoint = prioZoneChecker(priorityZone);
    var plusCandidatePoint = prioCandidateChecker(priorityCandidate);
    var totalScore = mathScore + literatureScore + englishScore + plusZonePoint + plusCandidatePoint;
    var passFailresult = passFailChecker(totalScore, standardScore, mathScore, literatureScore, englishScore);
    passFailNoti += "<div>Thí sinh ";
    passFailNoti += passFailresult;
    passFailNoti += '</div>';
    passFailNoti += "<div>Tổng điểm của thí sinh là: ";
    passFailNoti += totalScore;
    passFailNoti += " điểm.</div>";
  }
  else {
    passFailNoti += '<div>Sai cú pháp</div>'
  }
  document.getElementById("scoreFooter").innerHTML = passFailNoti;
};

function prioZoneChecker(zone) {
  var plusPoint = 0;
  switch (zone) {
    case 0:
      plusPoint += 0;
      break;
    case "A":
      plusPoint += 2;
      break;
    case "B":
      plusPoint += 1;
      break;
    case "C":
      plusPoint += 0.5;
      break;
  }
  return plusPoint;
}

function prioCandidateChecker(candidateType) {
  var plusPoint = 0;
  switch (candidateType) {
    case 0:
      plusPoint += 0;
      break;
    case 1:
      plusPoint += 2.5;
      break;
    case 2:
      plusPoint += 1.5;
      break;
    case 3:
      plusPoint += 1;
      break;
  }
  return plusPoint;
}

function passFailChecker(totalScore, standardScore, mathScore, literatureScore, englishScore) {
  var result = '';
  if (totalScore >= standardScore 
    && mathScore > 0 
    && literatureScore > 0 
    && englishScore > 0) {
    result += "đỗ!";
  } 
  else if(totalScore < standardScore 
    || mathScore === 0 
    ||literatureScore === 0 
    || englishScore === 0){
    result += "trượt!";
  }
  return result;
}

/*Bài 2: Tính tiền điện
Input: 
    - lượng điện tiêu thụ
Process: 
    - Sử dụng else if để kiểm tra lượng điện tiêu thụ nằm trong khoảng nào
    - Với mỗi khoảng tương ứng, gọi hàm tính tiền điện
    - Tạo hàm tính tiền điện với 5 mốc tiền
    - 
Output:
    - tiền điện phải trả
 */
document.getElementById("electricityBtn").onclick = function () {
  var userName = document.getElementById("user").value;
  var electricityConsumed = document.getElementById("electricityAmount").value * 1;
  var price_1 = 500;
  var price_2 = 650;
  var price_3 = 850;
  var price_4 = 1100;
  var price_5 = 1300;
  var electricityNoti = '';
  if (typeof electricityConsumed === 'number' && electricityConsumed > 0) {
    var result = totalPriceCal(electricityConsumed, price_1, price_2, price_3, price_4, price_5);
    electricityNoti = "<div>Tiền điện của " + userName + " là " + result + " đồng.<div>";
    document.getElementById("electricityFooter").innerHTML = electricityNoti;
  }
  else {
    electricityNoti += '<div>Sai cú pháp</div>';
    document.getElementById("electricityFooter").innerHTML = electricityNoti;
  }

};

function totalPriceCal(electrAmount, price_1, price_2, price_3, price_4, price_5) {
  var result = 0;
  if (electrAmount <= 50) {
    result = priceCal_1(electrAmount, price_1);
    return result;
  } 
  else if (electrAmount <= 100) {
    var totalPrice_1 = priceCal_1(50, price_1);
    console.log(totalPrice_1);
    var totalPrice_2 = priceCal_2(electrAmount, price_2);
    result = totalPrice_1 + totalPrice_2;
    return result;
  } 
  else if (electrAmount <= 150) {
    var totalPrice_1 = priceCal_1(50, price_1);
    var totalPrice_2 = priceCal_2(100, price_2);
    var totalPrice_3 = priceCal_3(electrAmount,price_3);
    result = totalPrice_1 + totalPrice_2 + totalPrice_3;
    return result;
  } 
  else if (electrAmount <= 200) {
    var totalPrice_1 = priceCal_1(50, price_1);
    var totalPrice_2 = priceCal_2(100, price_2);
    var totalPrice_3 = priceCal_3(150, price_3);
    var totalPrice_4 = priceCal_4(electrAmount, price_4);
    result = totalPrice_1 + totalPrice_2 + totalPrice_3 + totalPrice_4;
    return result;
  } 
  else {
    var totalPrice_1 = priceCal_1(50, price_1);
    var totalPrice_2 = priceCal_2(100, price_2);
    var totalPrice_3 = priceCal_3(150, price_3);
    var totalPrice_4 = priceCal_4(200, price_4);
    var totalPrice_5 = priceCal_5(electrAmount, price_5);
    result = totalPrice_1 + totalPrice_2 + totalPrice_3 + totalPrice_4 + totalPrice_5;
    return result;
  } 
}

function priceCal_1(electrAmount, price) {
  var result = electrAmount * price;
  return result;
}

function priceCal_2(electrAmount, price) {
  var result = (electrAmount - 50) * price;
  return result;
}

function priceCal_3(electrAmount, price) {
  var result = (electrAmount - 100) * price;
  return result;
}

function priceCal_4(electrAmount, price) {
  var result = (electrAmount - 150) * price;
  return result;
}

function priceCal_5(electrAmount, price) {
  var result = (electrAmount - 200) * price;
  return result;
}


