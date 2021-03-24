$(document).ready(function() {
  $("#formOne").submit(function() {
    const person1Input = $("input#person1").val();
    const animalInput = $("input#animal").val();
    const roomInput = $("input#room").val();
    const bodyPartInput = $("input#body-part").val();
    const bodyPart2Input = $("input#body-part2").val();
    const verbInput = $("input#verb").val();

    $(".person1").text(person1Input);
    $(".animal").text(animalInput);
    $(".room").text(roomInput);
    $(".body-part").text(bodyPartInput);
    $(".body-part2").text(bodyPart2Input);
    $(".verb").text(verbInput);

    $("#story").show();

    event.preventDefault();
  });
});