const form = document.querySelector('form')
form.addEventListener("submit", convertYentoUSD)

function convertYentoUSD(event) {
    event.preventDefault()
    const Yen = Number(event.target.Yen.value)
    const USD = (Yen * 0.0072)

    document.querySelector('h2').innerText = " ¥ " + Yen + " Yen is equal to " + USD.toFixed() + " USD "
    
}
