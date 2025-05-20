const display = document.querySelector("#display");
const numeri = document.querySelectorAll(".numero");
const operazioni = document.querySelectorAll(".operazione");
const uguale = document.querySelector("#uguale");
const clear = document.querySelector("#clear");

let operazioneCorrente = "";

numeri.forEach(pulsante => {
    pulsante.addEventListener("click", () => {
        display.value += pulsante.textContent;
    });
});

operazioni.forEach(pulsante => {
    pulsante.addEventListener("click", () => {
        display.value += " " + pulsante.textContent + " ";
    });
});

uguale.addEventListener("click", () => {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Errore!";
    }
});

clear.addEventListener("click", () => {
    display.value = "";
});