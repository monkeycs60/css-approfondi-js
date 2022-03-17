function memeLettres(arr) {
   let arr0str = arr[0].toString().toLowerCase();
   let arr1str = arr[1].toString().toLowerCase();
   let arr0dest = arr0str.split("");
   let arr1dest = arr1str.split("");
  
  let tab = [];
  for (let j = 0; j < arr0dest.length; j++) {
   tab.push(arr0dest.indexOf(arr1dest[j]));
  }
  let tabMot = [];
  for (let j = 0; j < tab.length; j++) {
     if (tab[j] > -1) {
       tabMot.push(tab[j])
      }
     
  }
  console.log(tabMot);
  if (tabMot.length === arr1dest.length ) {
   return true; 
  }
  else {
     return false;
  }
}




 
 
 
 console.log(memeLettres(["concaupiscednce", "sendas"]));


 // ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau qui contient deux chaines en parametre.
// On doit vérifier si la premiere chaine contient au moins une fois toutes les
// lettres de la seconde, si oui on retourne true, si non on retour false.

// ----------------- CONSEILS -----------------

// Boucle "for".
// toLowerCase();
// indexOf();