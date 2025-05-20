const addendo1 = document.querySelector("#addendo1");
const addendo2 = document.querySelector("#addendo2");
const uguale = document.querySelector("#uguale");
const risultato = document.querySelector("#risultato");

uguale.addEventListener("click", function() {
    let valore1 = parseFloat(addendo1.value);
    let valore2 = parseFloat(addendo2.value);
    if (!isNaN(valore1) && !isNaN(valore2)) {
        risultato.value = valore1 + valore2;
    } else {
        risultato.value = "Errore: inserisci numeri validi!";
    }
});
