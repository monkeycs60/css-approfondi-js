function additionner(arr) {
  const minimumL = Math.min(...arr);
  const maximumL = Math.max(...arr);
  let tab = 0;
  for (let index = minimumL; index = maximumL; index++) {
    tab += index;
    
  }
  
  
  return tab;
  
}



console.log(additionner([2, 8]));


// 1+2+3+4 = 10

// ----------------- ÉNONCÉ -----------------

// Vous recevez un tableau de deux chiffres en entrée, additionnez tous les chiffres 
// qui se trouvent entre ces deux valeurs.

// ----------------- CONSEILS -----------------

// Boucle "for".
// Math.max
// Math.mix