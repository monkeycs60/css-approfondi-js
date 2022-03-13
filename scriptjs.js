

     const valeurs = [1, 2, 3,4,5,6,7,8,9];
     function filtre(arr, fonctionne) {
          const filtred = [];
          for (const elements of arr) {
               if(fonctionne(elements)) {
                    filtred.push(elements);
                    
               }
          }
          
     }
     const filtredvalue = filtre(valeurs, plus => plus > 3);
console.log(filtredvalue);