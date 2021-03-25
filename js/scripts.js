$(document).ready(function () {
  $("div.card").click(function () {
    $("p.term").toggle();
    $("p.def").toggle();
  });

  // $("button#yellow").click(function () {
  //   $("body").addClass("yellow-background");
  // });

  // $("button#red").click(function () {
  //   $("body").addClass("red-background");
  // });
});