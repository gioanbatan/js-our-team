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
        picrture: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        picrture: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott",
        role: "Estrada",
        picrture: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        picrture: "barbara-ramos-graphic-designer.jpg"
    }
]

console.log("array", teamArray, teamArray.length)
