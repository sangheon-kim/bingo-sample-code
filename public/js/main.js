var io = io.connect();

io.on("makeBingo", (data) => {
  let finalIndex = 1;
  data.board.map((item, index) => {
    index !== 0 ? (finalIndex = index * data.count) : (finalIndex = 0);
    item.map((item2, idx) => {
      if (idx % data.count === data.count - 1) {
        $(".board").append(
          `<span class="box" id=${finalIndex + idx + 1}>${item2}</span>`
        );
        $(".board").append("<br />");
      } else {
        $(".board").append(
          `<span class="box" id=${finalIndex + idx + 1}>${item2}</span>`
        );
      }
    });
  });
  $("span.box").click(function () {
    var id = $(this).attr("id");

    console.log(id);
  });
});

// $(document).ready(function () {
//   $(".box").click(function () {
//     console.log($(this));
//     var id = $(this).attr("id");

//     console.log(id);
//   });
// });
