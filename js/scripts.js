$(document).ready(function() {
  $("div.card#termMeth").click(function() {
    $("p.front").toggle();
    $("p.back").toggle();
  });

  $("button#yellow").click(function() {
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").addClass("red-background");
  });
});