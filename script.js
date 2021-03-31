var tellimuseVorm = document.querySelector('form')
var nimekirjaKoht = document.querySelector('ul')

tellimuseVorm.onsubmit = function(event) {
    event.preventDefault()
    var probleem = tellimuseVorm.description.value
    var aadress = tellimuseVorm.address.value
    var telefon = tellimuseVorm.phone.value

    var rida = document.createElement('li')
    rida.innerHTML = probleem + ' / ' + aadress + ' / ' + telefon

    nimekirjaKoht.appendChild(rida)
}
