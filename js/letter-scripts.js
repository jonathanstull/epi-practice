$(document).ready(function() {
  $("#newContact").submit(function(event) {
    const date = $("input#date").val()
    const account = $("input#account").val()
    const newEmail = $("input#newEmail").val()
    const newPhone = $("input#newPhone").val()
    const newStreet = $("input#newStreet").val()
    const newCity = $("input#newCity").val()
    const newState = $("input#newState").val()
    const newZip = $("input#newZip").val()
    const signature = $("input#signature").val()

    $(".dateIn").text(date)
    $(".accountIn").text(account)
    $(".newEmailIn").text(newEmail)
    $(".newPhoneIn").text(newPhone)
    $(".newStreetIn").text(newStreet)
    $(".newCityIn").text(newCity)
    $(".newStateIn").text(newState)
    $(".newZipIn").text(newZip)
    $(".signatureIn").text(signature)

    $(".letter").show()

    event.preventDefault()
  })
})