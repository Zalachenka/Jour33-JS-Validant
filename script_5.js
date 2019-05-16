const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

for (let i in books) {
  if (books[i].rented > 0)
  console.log("Tous les livres ont été empruntés au moins une fois !");
}

rentedCount = []
books.forEach(count => {
  rentedCount.push(count.rented);
    })

books.forEach(rent => {
  var maxRent = Math.max(...rentedCount)
  for (let i in books) {
  if (books[i].rented == maxRent)
    console.log(`Le livre ayant été le plus emprunté est "${books[i].title}".`);
      } 
    })

books.forEach(rent => {
  var minRent = Math.min(...rentedCount)
  for (let i in books) {
  if (books[i].rented == minRent)
    console.log(`Le livre ayant été le moins emprunté est "${books[i].title}".`);
      } 
    })

idNumber = []
books.forEach(num => {
  idNumber.push(num.id);
    })
var numId = idNumber.find(function(identification) {
  for (let i in books) {
    if (books[i].id === 873495)
      console.log(`Le livre portant l'id 873495 est "${books[i].title}.`)
  }
})
books.forEach(num => {
  idNumber.push(num.id);
    })

  for (let i in books) {
    if (books[i].id === 133712) {
         console.log(`Le livre ${books[i].title} a été supprimé de la liste.`)
      delete books[i]
    }  
  };
orderNames = []
console.log("Voici les livres triés par ordre alphabétique:")
books.forEach(name => {
  orderNames.push(name.title);
});
console.log(orderNames.sort())
