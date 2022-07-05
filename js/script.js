// ! ------------------------------------------------------
// ! Consegna Campo Minato CON le bombe
// ! ------------------------------------------------------

// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione:
// non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js / css / 
// con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe 
// non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati 
// (delle bombe) - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo 
// possibile di numeri consentiti(ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che 
// l’utente ha cliccato su una cella che non era una bomba.

// # MILESTONE 1 - CAMPO MINATO COMPLETO
// Prepariamo "qualcosa" per tenere il punteggio dell'utente.
// Quando l'utente clicca su una cella, incrementiamo il punteggio.
// Se riusciamo, facciamo anche in modo da non poter più cliccare la stessa cella.

// # MILESTONE 2 - CAMPO MINATO COMPLETO
// Facciamo in modo di generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di 
// caselle disponibili. Generiamoli e stampiamo in console per essere certi che siano corretti

// # MILESTONE 3 - CAMPO MINATO COMPLETO
// Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero 
// di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e 
// scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il 
// punteggio.

// # MILESTONE 4 - CAMPO MINATO COMPLETO
// Quando l'utente clicca su una cella, e questa non è una bomba, dobbiamo controllare se il punteggio 
// incrementato ha raggiunto il punteggio massimo perchè in quel caso la partita termina.Raccogliamo quindi 
// il messaggio è scriviamo un messaggio appropriato. (Ma come stabiliamo quale sia il punteggio massimo?)

// # MILESTONE 5 - CAMPO MINATO COMPLETO
// Quando la partita termina dobbiamo capire se è terminata perchè è stata cliccata una bomba o se perchè 
// l'utente ha raggiunto il punteggio massimo. Dobbiamo poi stampare in pagina il punteggio raggiunto ed il
// messaggio adeguato in caso di vittoria o sconfitta.

// #BONUS - CAMPO MINATO COMPLETO:

// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli 
// di difficoltà:
// - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// #SUPER BONUS
// Se avete finito tutti i bonus potete scrivere all'insegnante o ai tutor per ricevere delle sfide extra!





// ! -----------------------------------------------------------------------------------------------------
// ! CODICE GIA' SCRITTO PER L'ESERCIZIO PRECEDENTE
// ! -----------------------------------------------------------------------------------------------------


// $ -----------------------------------------------------------------------------------------------------
// $ AGGIUNGEREMO CIO' CHE RIGUARDA L'ESERCIZIO GIORNALIERO
// $ -----------------------------------------------------------------------------------------------------



// @ Bersagliamo il button play, la griglia e poi, servendoci dell'addEventListener determiniamo la 
// @ creazione della tabella

// # MILESTONE 1 - CAMPO MINATO COMPLETO - Creiamo una variabile che tiene traccia del punteggio dell'utente
let userPoints = 0;


const grid = document.getElementById('grid');
const button = document.getElementById('button')

// @ Creiamo le row functions che potranno essere in futuro riutilizzate

const createCell = () => {
    const element = document.createElement('div');
    element.classList.add('_cells');

    return element;
}

// @ Bersagliamo la select che ci consente di selezionare il livello da noi desiderato

const select = document.getElementById('select-level');

// @ Realizziamo 3 Row Functions che verranno chiamate in relazione al livello di difficoltà
// @ scelto

// # MILESTONE 3 - CAMPO MINATO COMPLETO - Creiamo una funzione in grado di generare 16 numeri casuali

/**
 * 
 * @param {Number} max 
 * @param {Number} min 
 */
const generateRandomNumber = (max, min = 1, isMaxIn = true) => {
    // * Vettore che conterrà i numeri casuali
    const randomNumbers = [];
    let isPresent = 0;

    if (isMaxIn) max++;

    for (let i = 0; i < 16; i++) {
        do {
            isPresent = Math.floor(Math.random() * (max - min)) + min;
        } while (randomNumbers.includes(isPresent))

        randomNumbers[i] = isPresent;
    }

    return randomNumbers;
}

// # MILESTONE 3 - CAMPO MINATO COMPLETO - Realizziamo una funzione in grado di determinare se l'utente ha scoperto una bomba

/**
 * 
 * @param {number} randomBomb 
 * @param {number} number 
 * @returns 
 */

let randomArray = [];

const isBomb = (element) => {
    let ctrl = false;
    for (let i = 0; i < randomArray.length; i++) if (randomArray[i] === parseInt(element.innerText)) ctrl = true;
    return ctrl;
}

// # Realizziamo la funzione in grado di valutare come la partita è terminata 

/**
 * 
 * @param {bool} userWin 
 * @param {bool} userLose 
 */
const gameOver = (userWin = false) => {
    if (userWin === true) {
        alert('HAI VINTOOOOOOO!!!!!');
    } else {
        //Cancelliamo la griglia
        setTimeout(() => {
            alert('HAI PERSO! Il tuo punteggio è stato: ' + userPoints);
            grid.innerHTML = '';
        }, 1000);
    }
}


// # Realizziamo le funzioni in grado di generare la griglia 10X10 9X9 e 7X7

const battleCamp10 = () => {
    for (let i = 1; i <= 100; i++) {
        const element = createCell();
        element.classList.add('_cells-100'); // * Aggiunta per realizzare il bonus
        element.innerText = i;
        element.dataset.number = i;

        element.addEventListener('click', (event) => {
            if (element.classList.contains('_clicked')) return;
            else {
                // # MILESTONE 1 - CAMPO MINATO COMPLETO - Incrementiamo il punteggio dell'utente A PRESCINDERE
                // userPoints++;
                console.log('Punteggio attuale dell\'utente: ' + userPoints);

                event.target.classList.toggle('_clicked');
                console.log("Il numero contenuto nella cella è: " + event.target.dataset.number);

                // # MILESTONE 3 - CAMPO MINATO COMPLETO
                // * Richiamiamo la funzione in grado di determinare se l'utente ha scoperto una bomba, precedentemente
                // * definita

                if (isBomb(element) === true) {
                    element.classList.add('loser-cell');
                    setTimeout(gameOver(false), 3000);
                } else {
                    userPoints++;
                    if (userPoints === 84) gameOver(true);
                    else console.log('continua.. Il tuo punteggio è: ' + userPoints);
                }
            }
        })

        grid.appendChild(element);
    }
}

const battleCamp9 = () => {
    for (let i = 1; i <= 81; i++) {
        const element = createCell();
        element.classList.add('_cells-90'); // * Aggiunta per realizzare il bonus
        element.innerText = i;
        element.dataset.number = i;

        element.addEventListener('click', (event) => {
            if (element.classList.contains('_clicked')) return;
            else {
                // # MILESTONE 1 - CAMPO MINATO COMPLETO - Incrementiamo il punteggio dell'utente A PRESCINDERE
                // userPoints++;
                console.log('Punteggio attuale dell\'utente: ' + userPoints);

                event.target.classList.toggle('_clicked');
                console.log("Il numero contenuto nella cella è: " + event.target.dataset.number);

                // # MILESTONE 3 - CAMPO MINATO COMPLETO
                // * Richiamiamo la funzione in grado di determinare se l'utente ha scoperto una bomba, precedentemente
                // * definita

                if (isBomb(element) === true) {
                    element.classList.add('loser-cell');
                }
                else {
                    userPoints++;
                    if (userPoints === 65) gameOver(true);
                    else console.log('continua.. Il tuo punteggio è: ' + userPoints);
                }

                if (isBomb(element) === true) gameOver(false);
            }
        })

        grid.appendChild(element);
    }
}

const battleCamp7 = () => {
    for (let i = 1; i <= 49; i++) {
        const element = createCell();
        element.classList.add('_cells-70'); // * Aggiunta per realizzare il bonus
        element.innerText = i;
        element.dataset.number = i;

        element.addEventListener('click', (event) => {
            if (element.classList.contains('_clicked')) return;
            else {
                // # MILESTONE 1 - CAMPO MINATO COMPLETO - Incrementiamo il punteggio dell'utente A PRESCINDERE
                // userPoints++;
                console.log('Punteggio attuale dell\'utente: ' + userPoints);

                event.target.classList.toggle('_clicked');
                console.log("Il numero contenuto nella cella è: " + event.target.dataset.number);

                // # MILESTONE 3 - CAMPO MINATO COMPLETO
                // * Richiamiamo la funzione in grado di determinare se l'utente ha scoperto una bomba, precedentemente
                // * definita

                if (isBomb(element) === true) {
                    element.classList.add('loser-cell');
                    gameOver(false);
                }
                else {
                    userPoints++;
                    if (userPoints === 33) gameOver(true);
                    else console.log('continua.. Il tuo punteggio è: ' + userPoints);
                }
            }
        })

        grid.appendChild(element);
    }
}

button.addEventListener('click', (event) => {

    grid.innerHTML = '';
    userPoints = 0;

    switch (select.value) {
        case '49':
            battleCamp7();
            break;

        case '81':
            battleCamp9();
            break;

        case '100':
            battleCamp10();
            break;

        default:
            console.log('Scegli uno dei 3 livelli di difficoltà!');
    }

    // # MILESTONE 2 - CAMPO MINATO COMPLETO - Generiamo il vettore di numeri casuali richiamando la funzione
    randomArray = generateRandomNumber(1, parseInt(select.value), true);
    console.log(randomArray);
})

