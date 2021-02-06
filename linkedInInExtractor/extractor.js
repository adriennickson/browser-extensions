let ancien = { nom: '', mail: "/", url: document.URL, positionActuelle: '', employeurActuelle: '', dateDeSortie: '' , filiere: '' }
try {
    ancien.nom = document.getElementById('ember53').children.item(1).children.item(1).children.item(0).children.item(0).children.item(0).innerHTML
} catch (error) {}
try {
    ancien.positionActuelle = document.getElementById('experience-section').children.item(1).children.item(0).children.item(0).children.item(0).children.item(0).children.item(0).children.item(1).children.item(0).innerHTML
} catch (error) {}
try {
    ancien.employeurActuelle = document.getElementById('experience-section').children.item(1).children.item(0).children.item(0).children.item(0).children.item(0).children.item(0).children.item(1).children.item(2).innerHTML
} catch (error) {}
try {
    ancien.dateDeSortie = document.getElementById('education-section').children.item(1).children.item(0).children.item(0).children.item(0).children.item(0).children.item(1).children.item(1).children.item(1).children.item(1).innerHTML
} catch (error) {}
try {
    ancien.filiere = document.getElementById('education-section').children.item(1).children.item(0).children.item(0).children.item(0).children.item(0).children.item(1).children.item(0).children.item(2).children.item(1).innerHTML
} catch (error) {}

console.clear()
console.log(ancien.nom.split(/\s/g).join(" "))
console.log(ancien.mail)
console.log(ancien.url)
console.log(ancien.positionActuelle)
console.log(ancien.dateDeSortie)
console.log(ancien.employeurActuelle)
console.log(ancien.filiere)