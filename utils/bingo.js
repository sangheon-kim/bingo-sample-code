module.exports = {
  MakeBingo2(byNum, max, isCenter) {
    // num = num by num Bingo
    // max = 최대 숫자

    let boardSize = byNum * byNum;
    let arr = new Array(boardSize); // 5 * 5 = 25

    let count = 0;
    // 번호 중복 방지 변수
    let mFlag = true;

    // 빙고 개수를 다 채울때까지 반복
    while (count < arr.length) {
      let number;

      number = parseInt(Math.random() * (max - 1)) + 1;
      // 중복 확인
      for (let i = 0; i < count; i++) if (arr[i] == number) mFlag = false;

      if (mFlag) {
        // console.log(parseInt(boardSize / 2));
        if (isCenter) {
          if (count === parseInt(boardSize / 2, 10)) {
            arr[count] = "bingo";
          } else {
            arr[count] = number;
          }
        } else {
          arr[count] = number;
        }

        count++;
      }
      mFlag = true;
    }

    let array = [];
    let matArr = [];

    let matCount = 0;
    // let matArr = [];
    while (matCount < boardSize) {
      if (matCount % byNum === byNum - 1) {
        matArr.push(arr[matCount]);

        array.push(matArr);
        matArr = [];
      } else {
        matArr.push(arr[matCount]);
      }

      matCount++;
    }

    return array;
  },

  bingo(obj) {
    console.log(obj);
  },

  lineBingo(arr, board) {
    console.log("arr", arr);
  },
};
