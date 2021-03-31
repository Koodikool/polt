var tellimuseVorm = document.querySelector('form')

tellimuseVorm.onsubmit = function(event) {
    event.preventDefault()
    var probleem = tellimuseVorm.description.value
    var aadress = tellimuseVorm.address.value
    var telefon = tellimuseVorm.phone.value
    console.log(probleem, aadress, telefon)
}
