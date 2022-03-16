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
  var plusZonePoint = 0;
  var plusCandidateTypePoint = 0;
  var totalScore = mathScore + literatureScore + englishScore + plusZonePoint + plusCandidateTypePoint;
  var passFailNoti ='<div>Thí sinh';
  switch (priorityZone) {
    case 0:
      plusZonePoint += 0;
      break;
    case "A":
      plusZonePoint += 2;
      break;
    case "B":
      plusZonePoint += 1;
      break;
    case "C":
      plusZonePoint += 0.5;
      break;
  }

  switch (priorityCandidate) {
    case 0:
      plusZonePoint += 0;
      break;
    case 1:
      plusCandidateTypePoint += 2.5;
      break;
    case 2:
      plusCandidateTypePoint += 1.5;
      break;
    case 3:
      plusCandidateTypePoint += 1;
      break;
  }

  if(totalScore >= standardScore && mathScore > 0 && literatureScore > 0 && englishScore > 0) {
    passFailNoti += ' đỗ!</div>';
  }
  else {
    passFailNoti += ' trượt!</div>';
  }
  passFailNoti += '<div>Tổng điểm của thí sinh là: ' + totalScore;
  passFailNoti += ' điểm.</div>';
  document.getElementById("scoreFooter").innerHTML = passFailNoti;
  
};

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

function electricityPriceCal_type1(electricityConsumed, priceType) {
    var result = electricityConsumed * priceType;
    return result;
}

function electricityPriceCal_type2(electricityConsumed, priceType) {
    var result = (electricityConsumed) * priceType;
    console.log(result)
    return result;
}

function electricityPriceCal_type3(electricityConsumed, priceType) {
    var result = (electricityConsumed) * priceType;
    return result;
}

function electricityPriceCal_type4(electricityConsumed, priceType) {
    var result = (electricityConsumed) * priceType;
    return result;
}

function electricityPriceCal_type5(electricityConsumed, priceType) {
    var result = (electricityConsumed) * priceType;
    return result;
}

function totalPriceCal(electricityConsumed, priceType1, priceType2, priceType3, priceType4, priceType5) {
    var result = 0;
    if(electricityConsumed <= 50) {
        result = electricityPriceCal_type1(electricityConsumed, priceType1);
        return result;
    }
    else if (electricityConsumed <= 100 ) {
        var totalPrice_type1 = electricityPriceCal_type1(50, priceType1);
        console.log(totalPrice_type1)
        var totalPrice_type2 = electricityPriceCal_type2(electricityConsumed, priceType2);
        console.log(totalPrice_type2)
        result = totalPrice_type1 + totalPrice_type2;
        console.log(result);
        return result;
    }
    else if (electricityConsumed <= 150 ) {
        var totalPrice_type1 = electricityPriceCal_type1(50, priceType1);
        console.log(totalPrice_type1)
        var totalPrice_type2 = electricityPriceCal_type2(50, priceType2);
        console.log(totalPrice_type2)
        var totalPrice_type3 = electricityPriceCal_type3(electricityConsumed, priceType3);
        console.log(totalPrice_type3)
        totalPrice = totalPrice_type1 + totalPrice_type2 + totalPrice_type3;
        console.log(result);
        return result;
    }
    else if (electricityConsumed <= 200 ) {
        var totalPrice_type1 = electricityPriceCal_type1(50, priceType1);
        var totalPrice_type2 = electricityPriceCal_type2(50, priceType2);
        var totalPrice_type3 = electricityPriceCal_type3(50, priceType3);
        var totalPrice_type4 = electricityPriceCal_type4(electricityConsumed, priceType4);
        result = totalPrice_type1 + totalPrice_type2 + totalPrice_type3 + totalPrice_type4;
        console.log(result);
        return result;
    }
    else if (electricityConsumed > 200 ) {
        var totalPrice_type1 = electricityPriceCal_type1(50, priceType1);
        var totalPrice_type2 = electricityPriceCal_type2(50, priceType2);
        var totalPrice_type3 = electricityPriceCal_type3(50, priceType3);
        var totalPrice_type4 = electricityPriceCal_type4(50, priceType4);
        var totalPrice_type5 = electricityPriceCal_type5(electricityConsumed, priceType5);
        result = totalPrice_type1 + totalPrice_type2 + totalPrice_type3 + totalPrice_type4 + totalPrice_type5;
        console.log(result);
        return result;
    }
    else {
        return electricityNoti ='<div>Sai cú pháp</div>';
    }
}

document.getElementById("electricityBtn").onclick = function () {
    var userName = document.getElementById("user").value;
    var electricityConsumed = document.getElementById("electricityAmount").value * 1;
    console.log(electricityConsumed);
    var priceType1 = 500;
    var priceType2 = 650;
    var priceType3 = 850;
    var priceType4 = 1100;
    var priceType5 = 1300;

    var totalPrice = totalPriceCal(electricityConsumed, priceType1, priceType2, priceType3, priceType4, priceType5);
    var electricityNoti ='<div>Tiền điện của ' + userName + ' là ' + totalPrice + ' đồng.<div>';

    document.getElementById('electricityFooter').innerHTML = electricityNoti
}

