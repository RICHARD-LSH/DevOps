var month = parseInt(prompt("월을 입력해주세요."));
console.log(month + "월을 입력하셨습니다.");

daysInMonth(month);

function daysInMonth(month) {
  switch(month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      console.log(month + "월은 31일까지 있습니다.");
      break;
    case 2:
      console.log(month + "월은 28일까지 있습니다.");
      break;
    case 4: case 6: case 9: case 11:
      console.log(month + "월은 30일까지 있습니다.");
      break;
    default:
      console.log("해당 월은 존재하지 않습니다.");
      break;
  }
}
