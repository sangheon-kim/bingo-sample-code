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

    LineCount(data.board);
  });
});

function LineCount(arr) {
  let row = 0;
  let col = 0;
  let cross = 0;
}
// $(document).ready(function () {
//   $(".box").click(function () {
//     console.log($(this));
//     var id = $(this).attr("id");

//     console.log(id);
//   });
// });
