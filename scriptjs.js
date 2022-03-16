function plusGrandNb(arr) {
   const finalTab = [];
   for (let index = 0; index < arr.length; index++) {
    arr[index].sort((b, a) => a-b);
   
       
    }
      
    for (let numero = 0; numero < arr.length; numero++) {
       finalTab.push(arr[numero][0])
       
      
      
      
   }
   
   return finalTab
   
  
}



console.log(plusGrandNb([
   [1, 5, 8, 3],
   [15, 47, 88, 26],
   [32, 35, 37, 39],
   [3000, 1001, 857, 1]
 ]));




// let tabounet = [
//    [1, 5, 8, 3],
//    [15, 47, 88, 26],
//    [32, 35, 37, 39],
//    [3000, 1001, 857, 1]
//  ];
 

//  console.log(tabounet[1].sort());



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends un tableau composé de plusieurs tableaux en 
// argument et qui retourne un seul tableau qui contient la valeur maximale de 
// chaque tableaux.

// ----------------- CONSEILS -----------------

// Une boucle "for" permet d'itérer dans un tableau.
// Vous n'êtes pas limité à une boucle "for", vous pouvez en utiliser plusieurs...

// la méhode [].push(), pour pousser un élément dans un tableau;
// Testez :
// var arrTest = [0,10];
// arrTest.push(80);
// console.log(arrTest);
