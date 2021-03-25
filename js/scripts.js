function handler(event) {
  let target = $(event.target);
  if (target.is("div.card-body")) {
    target.children().css("display", "show");
  };
};

// The toggle function for card flipping
// $(document).ready(function () {
//   $(".card-body").hover(function () {
//     $(this).click(function () {
//       let hover = $
//       $("p.term").toggle();
//       $("p.def").toggle();
//     });
//   });

  // $("button#yellow").click(function () {
  //   $("body").addClass("yellow-background");
  // });

  // $("button#red").click(function () {
  //   $("body").addClass("red-background");
  // });
// });