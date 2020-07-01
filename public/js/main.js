var io = io.connect();

io.on("makeBingo", (data) => {
  let finalIndex = 1;
  data.board.map((item, index) => {
    index !== 0 ? (finalIndex = index * data.count) : (finalIndex = 0);
    item.map((item2, idx) => {
      // let pairIndex = finalIndex + idx + 1
      if (idx % data.count === data.count - 1) {
        $(".board").append(
          `<span class="box" id=${index + "#" + idx}>${item2}</span>`
        );
        $(".board").append("<br />");
      } else {
        $(".board").append(
          `<span class="box" id=${index + "#" + idx}>${item2}</span>`
        );
      }
    });
  });
  $("span.box").click(function () {
    var id = $(this).attr("id");
    const row = id.split("#")[0];
    const col = id.split("#")[1];
    data.board[row][col] = 0;

    $(this)[0].style.backgroundColor = "Gray";
    $(this).text("bingo");

    LineCount(data.board, data.count);
  });
});

function LineCount(arr, count) {
  let row = 0;
  let col = 0;
  let cross = 0;

  for (let i = 0; i < arr.length; i++) {
    let check = false;

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 0) {
        check = true;
        console.log(arr[i][j]);
      } else {
        check = false;
        break;
      }
    }

    if (check) row++;
  }

  for (let i = 0; i < arr[0].length; i++) {
    var check = false;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[j][i] == 0) {
        console.log(arr[j][i]);
        check = true;
      } else {
        check = false;
        break;
      }
    }

    if (check) col++;
  }

  let right = 0;
  let left = 0;

  for (let i = 0; i < arr[0].length; i++) {
    if (arr[i][i] == 0) right++; // 오른대각
    if (arr[arr.length - i - 1][i] == 0) left++; // 왼대각
    if (right == count || left == count) cross++;
  }

  if (right == count && left == count) cross++;
  console.log(right);
  console.log(left);

  $("h1").text(`빙고개수 ${cross + row + col}`);
}
