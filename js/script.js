// Ciao ragazzi,
// esercizio di oggi: Our Team
// nome repo: js-our-team
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// E ricordiamoci che console.log() è nostro amico!
// Buon lavoro! :muscolo:

// 0 Creazione dell'array di oggetti con tutti i dati
//
// 1 Creare un ciclo che stampi su console oggetti, chiavi e valori di tutto l'array
//      PER ogni elemento dell'array
//          PER ogni chiave fare console.log di chiave e valore abbinati
//
// 2 Prelevare l'elemento nel DOM dove inserire il contenuto
//      PER ogni elemento dell'array
//          PER ogni chiave creare un nuovo elemento che contenga un testo con al suo interno chiave e valore abbinati
//
// bonus1 Sostuire all'inserimento della stringa con il file immagine il tag IMG con il percorso personalizzato con il valore della chiave foto
//
// bonus2 Creare una card statica di prova in html e css
//      Prendere spunto dalla card statrica in html per creare in JS gli elementi del DOM necessari


// Team data
const teamArray = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        picture: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        picture: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        picture: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        picture: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott",
        role: "Estrada",
        picture: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picture: "barbara-ramos-graphic-designer.jpg"
    }
]

// Output elements
const listElement = document.getElementById("teamList");
console.log(listElement);

// console.log("array", teamArray, teamArray.length)
readObjectArray(teamArray);


// FUNCTIONS

function readObjectArray (objectsArray) {
    // Per ogni indice dell'array dato esegui il ciclo di lettura chiave-valore di goni oggeto
    for (let i = 0; i < objectsArray.length; i++) {
        thisObject = objectsArray[i];
        // Per ogni oggetto mostra chiave-valore
        for (objectKey in thisObject) {
            console.log(objectKey, ":", thisObject[objectKey]);
            // Stringhe nel DOM
            if (!objectKey === "picture") {
                listElement.innerHTML += `<li>${objectKey}: ${thisObject[objectKey]}`;
            } else {
                listElement.innerHTML += `<li><img src="img/${thisObject[objectKey]}" alt="${thisObject[objectKey]}">`
            }
        }
        console.log("-----");
    }
}