// EXERCICE 8 : Les fonctions 🔥




// // 1. Écrire une fonction pure qui sert à multiplier deux nombres ensemble.

// function multiplyByTwo(a, b) {
//      return a*b;
//      console.log(a*b);
     
// }

// console.log(multiplyByTwo(2,8));





// 2. Écrire une fonction d'ordre supérieur, qui prend une fonction callback en paramètre et un tableau rempli de nombres.
//   Cette fonction retournera un nouveau tableau, qui contient toutes les valeurs auxquelles on a ajouté 1



function AddOne(newtableauNombres, PlusUn) {
     const tableauNombres = [];
for (let index = 0; index < array.length; index++) {
         tableauNombres.push(PlusUn(newtableauNombres[index]));
        
     }
     
     return tableauNombres;
     
}

const PlusUn = nb => nb + 1;
   
   const NouveauTruc =  AddOne([1,2,3,4,5,11], PlusUn);
  

